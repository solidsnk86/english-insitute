"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationProviderProps {
  ip: string;
  city: {
    name: string;
    postalCode: string;
  };
  country: {
    name: string;
    emojiFlag: string;
    timezone: string;
  };
  sysInfo?: {
    language: string;
    system: string;
    webBrowser: {
      browser: string;
      version: string;
    };
  };
}

export const LocationContext = createContext<LocationProviderProps | null>(
  null,
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationProviderProps>();

  const getLocation = useCallback(async () => {
    try {
      const response = await fetch(
        "https://solid-geolocation.vercel.app/location",
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setLocation(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const values = {
    ip: location ? location.ip : "N/A",
    city: location ? location.city : { name: "N/A", postalCode: "N/A" },
    country: location
      ? location.country
      : { name: "N/A", emojiFlag: "N/A", timezone: "N/A" },
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("Debe ser usada denttro del provider");
  return ctx;
};
