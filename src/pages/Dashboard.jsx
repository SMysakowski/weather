import CurrentWeatherSection from "../features/weather/components/currentWeatherSection/CurrentWeatherSection";
import Layout from "../features/weather/components/layout/Layout";

import useCurrentWeather from "../features/weather/hooks/useCurrentWeather";

const Dashboard = () => {
  const { data, isLoading } = useCurrentWeather({
    lat: 52.2297,
    lon: 21.022,
  });

  return (
    <Layout>
      <CurrentWeatherSection daily={data?.daily} isLoading={isLoading} />
    </Layout>
  );
};

export default Dashboard;
