import Typography from "@mui/material/Typography";

import { WeatherPaper } from "./CurrentWeatherTile.styles";

export default function CurrentWeatherTile({ day }) {
  return (
    <WeatherPaper>
      <Typography>Monday</Typography>
      <Typography>
        {day.temp.day}°C <Typography>({day.temp.day}°C)</Typography>
      </Typography>
    </WeatherPaper>
  );
}
