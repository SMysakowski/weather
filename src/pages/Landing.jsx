import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage } from "react-intl";

import Layout from "../features/landing/components/Layout";

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
    <Layout>
      <div>
        <Typography variant="h2" component="h1">
          <FormattedMessage
            id="landing.title"
            defaultMessage={
              "Welcome to our perfect page. We are the best weather app!!!"
            }
          />
        </Typography>
      </div>
    </Layout>
  );
};

export default Landing;
