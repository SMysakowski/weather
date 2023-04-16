import { rest } from "msw";

import currentWeather from "./fixtures/currentWeather.json";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/3.0/onecall",
    (req, res, ctx) => {
      return res(ctx.json(currentWeather));
    }
  ),
];
