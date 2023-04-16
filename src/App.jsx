import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ThemeProvider from "./shared/contexts/themeProvider";
import ApiProvider from "./shared/contexts/apiProvider";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    navigate("/", {
      state: { from: location },
    });
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ApiProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ApiProvider>
    </Auth0Provider>
  );
}

export default App;
