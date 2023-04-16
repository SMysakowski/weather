import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../features/auth/components/LoginButton";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  if (isAuthenticated) {
    navigate("/app", {
      state: { from: location },
    });
  }

  return (
    <div>
      <Typography variant="h1">Hello Weather App TEST</Typography>
      <LoginButton />
    </div>
  );
};

export default Landing;
