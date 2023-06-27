import { Loader } from "@googlemaps/js-api-loader";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { Input } from "../../index";
import { IPlaces } from "../../types";

import { PlacesStyled } from "./styles";

export default function Places({
  placeholder,
  country = "au",
  restrict,
  apiKey,
  handleAutocomplete,
  css,
  ...rest
}: IPlaces): JSX.Element {
  const ref = useRef<HTMLInputElement | null>(null) as React.MutableRefObject<HTMLInputElement>;
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [data, setData] = useState<{
    address: string;
    city: string;
    restrictedAddress: string;
    state: string;
  } | null>(null);

  const movePacContainer = useCallback((): void => {
    const pacContainers = document.querySelectorAll(".pac-container");

    pacContainers.forEach((pacContainer) => {
      if (pacContainer && pacContainer.parentNode !== ref.current?.parentNode) {
        ref.current?.parentNode?.appendChild(pacContainer);
      }
    });
  }, [ref?.current?.value]);

  const handlePlaceChange = (place: google.maps.places.PlaceResult): void => {
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

      setData(init);

      if (handleAutocomplete) {
        handleAutocomplete(init);
      }
    }
  };

  useEffect(() => {
    if (!ref || !ref.current || !apiKey) return;

    const loader = new Loader({
      apiKey: apiKey || "",
      libraries: ["places"],
      version: "weekly",
    });

    const loadGoogleMaps = async (): Promise<typeof google> => {
      try {
        const google = await loader.load();

        autocompleteRef.current = new google.maps.places.Autocomplete(ref.current, {
          componentRestrictions: { country },
          fields: ["address_components", "formatted_address", "geometry", "name"],
          types: ["address"],
        });

        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();

          if (place) {
            handlePlaceChange(place);
          }
        });

        if (ref.current) {
          ref.current.addEventListener("focus", movePacContainer);
        }

        return google;
      } catch (error: unknown) {
        const errorMessage =
          (error as Error).message || "Error loading Google Maps for autocomplete, please refresh.";

        toast(errorMessage);
        throw error;
      }
    };

    loadGoogleMaps();

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("focus", movePacContainer);
      }
    };
  }, [apiKey, country, movePacContainer, handleAutocomplete, ref]);

  return (
    <PlacesStyled css={css}>
      <Input
        key={data?.address || undefined}
        ref={ref}
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
    </PlacesStyled>
  );
}
