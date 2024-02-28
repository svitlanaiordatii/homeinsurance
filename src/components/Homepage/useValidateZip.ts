import { useState } from "react";

const useValidateZip = () => {
  // const isType = <Type>(thing: any): thing is Type => true;
  const [loadingZip, setLoadingZip] = useState(false);
  const [validateZipError, setValidateZipError] = useState("");
  const validateZip = async (zip: string) => {
    type Data = {
      query: object;
      results: {
        [key: string]: { city: string; state: string; state_code: string }[];
      };
    };
    const API_URL = "/api/zipdecode";
    const params = new URLSearchParams();
    params.set("codes", zip);
    params.set("country", "us");
    setLoadingZip(true);
    try {
      let response = null;
      if (import.meta.env.PROD) {
        response = await fetch(`${API_URL}?${params.toString()}`);
      } else {
        response = await fetch(`${API_URL}?${params.toString()}`, {
          headers: {
            apikey: import.meta.env.VITE_ZIPDECODE_DEV_APIKEY,
            Accept: "application/json",
          },
        });
      }
      const data = (await response.json()) as Data;
      setLoadingZip(false);
      if (
        data &&
        data.results &&
        data.results[zip] &&
        data.results[zip][0] &&
        data.results[zip][0]["city"]
      ) {
        return data.results[zip][0];
      } else {
        setValidateZipError("Please enter a valid US zip code");
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setValidateZipError(error.message);
      } else setValidateZipError(String(error));
      setLoadingZip(false);
      return;
    }
  };
  return { validateZip, loadingZip, validateZipError };
};

export default useValidateZip;
