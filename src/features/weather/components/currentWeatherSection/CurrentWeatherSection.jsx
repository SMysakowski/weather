import Grid from "@mui/material/Grid";

import CurrentWeatherTile from "../currentWeatherTile/CurrentWeatherTile";

import { Skeleton } from "./CurrentWeatherSection.styles";

const NUMBER_OF_TILES = 8;

export default function CurrentWeatherSection({ daily, isLoading }) {
  if (isLoading) {
    return (
      <Grid container spacing={1}>
        {new Array(NUMBER_OF_TILES).fill(null).map((_, index) => (
          <Grid key={index} item>
            <Skeleton key={index} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      {daily.map((day) => (
        <Grid key={day.dt} item>
          <CurrentWeatherTile day={day} />
        </Grid>
      ))}
    </Grid>
  );
}
