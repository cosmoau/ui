import { Loader } from "@googlemaps/js-api-loader";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { IPlaces } from "../../types";

import { PlacesStyled } from "./Places.styles";

export function Places(props: IPlaces): JSX.Element {
  const { placeholder, country = "au", restrict, apiKey, onAutocomplete, ...rest } = props;
  const ref = useRef<HTMLInputElement | null>(null) as React.MutableRefObject<HTMLInputElement>;
  const [data, setData] = useState<{
    address: string;
    city: string;
    restrictedAddress: string;
    state: string;
  } | null>(null);

  const handleAutocomplete = useCallback(() => {
    if (!ref || !ref.current || !apiKey) return;

    const loader = new Loader({
      apiKey: apiKey || "",
      libraries: ["places"],
      version: "weekly",
    });

    loader
      .load()
      .then((google) => {
        const autocomplete = new google.maps.places.Autocomplete(ref.current, {
          componentRestrictions: { country },
          fields: ["address_components", "formatted_address", "geometry", "name"],
          types: ["address"],
        });

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();

          if (place.geometry) {
            const init = {
              address: place?.formatted_address || "",
              city:
                place?.address_components?.find((component) => component.types.includes("locality"))
                  ?.long_name || "",
              restrictedAddress: place?.formatted_address?.replace(/^[0-9]+ /, "") || "",
              state:
                place?.address_components?.find((component) =>
                  component.types.includes("administrative_area_level_1")
                )?.short_name || "",
            };

            if (onAutocomplete) {
              onAutocomplete(init);
            }

            setData(init);
          }
        });
      })
      .catch((error) => {
        toast(error.message || "Error loading Google Maps for autocomplete, please refresh.");
      });
  }, [data, onAutocomplete, ref]);

  useEffect(() => {
    handleAutocomplete();
  }, [handleAutocomplete]);

  return (
    <PlacesStyled
      key={data?.address}
      mustRef={ref}
      name="address"
      placeholder={placeholder || "Enter your address"}
      resetFunction={(): void => {
        setData(null);
      }}
      submitValid={(): boolean => !!data?.address}
      type="text"
      value={restrict ? data?.restrictedAddress : data?.address}
      {...rest}
    />
  );
}
