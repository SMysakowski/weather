import { rest } from "msw";

import currentWeather from "./fixtures/currentWeather.json";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/3.0/onecall?lat=52.2297&lon=21.022&appid=073f67e0e0b2fc55c3b57b36ae5215fe&units=metric&lang=pl",
    (req, res, ctx) => {
      return res(ctx.json(currentWeather));
    }
  ),
];
