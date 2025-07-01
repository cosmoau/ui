/// <reference types="@types/google.maps" />
import { Loader } from "@googlemaps/js-api-loader";
import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import { toast } from "react-hot-toast";

import { Input } from "../../index";
import { IPlaces } from "../../types";
import { PlacesStyled } from "./styles";

export default function Places({
  apiKey,
  country = "au",
  css,
  handleAutocomplete,
  name,
  placeholder,
  restrict,
  ...rest
}: IPlaces): JSX.Element {
  const ref = useRef<HTMLInputElement | null>(null);
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
          place?.address_components?.find((component: google.maps.GeocoderAddressComponent) =>
            component.types.includes("locality"),
          )?.long_name || "",
        restrictedAddress: place?.formatted_address?.replace(/^[0-9]+ /, "") || "",
        state:
          place?.address_components?.find((component: google.maps.GeocoderAddressComponent) =>
            component.types.includes("administrative_area_level_1"),
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

    const loadGoogleMaps = async (): Promise<void> => {
      try {
        const { Autocomplete } = (await loader.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;

        if (!ref.current) return;

        autocompleteRef.current = new Autocomplete(ref.current, {
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
      } catch (error: unknown) {
        const errorMessage =
          (error as Error).message || "Error loading Google Maps for autocomplete, please refresh.";

        toast(errorMessage);
        throw error;
      }
    };

    loadGoogleMaps();

    return (): void => {
      if (ref.current) {
        ref.current.removeEventListener("focus", movePacContainer);
      }
    };
  }, [apiKey, country, movePacContainer, handleAutocomplete, ref]);

  return (
    <PlacesStyled css={css}>
      <Input
        key={data?.address || undefined}
        mustRef={ref}
        name="places-address"
        placeholder={placeholder || "Enter your address"}
        resetFunction={(): void => {
          setData(null);
        }}
        submitValid={(): boolean =>
          data?.address !== "" && data?.address !== undefined ? true : false
        }
        type="text"
        value={restrict ? data?.restrictedAddress : data?.address}
        {...rest}
      />
    </PlacesStyled>
  );
}
