import { useQuery } from "@tanstack/react-query";
import apiCall from "../../../shared/services/apiCall";

async function getCurrentWeather({ lat, lon, units = "metric", lang = "pl" }) {
  const { data } = await apiCall({
    url: "/data/3.0/onecall",
    method: "GET",
    params: {
      lat,
      lon,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      units,
      lang,
    },
  });
  return data;
}

export default function useCurrentWeather({ lat, lon, units, lang } = {}) {
  return useQuery(
    ["current_weather", lat, lon, units, lang],
    () =>
      getCurrentWeather({
        lang,
        lon,
        units,
        lat,
      }),
    {
      enabled: !!lat && !!lon,
    }
  );
}
