import Typography from "@mui/material/Typography";

import LogoutButton from "../features/auth/components/LogoutButton";
import ShowUserProfile from "../features/auth/components/ShowUserProfile";

const Dashboard = () => {
  // const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Typography variant="h1">Dashboard</Typography>
      <ShowUserProfile />
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
