import Typography from "@mui/material/Typography";
import ThemeProvider from "./shared/contexts/themeProvider";
import ApiProvider from "./shared/contexts/apiProvider";

import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";

const Router = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Typography variant="h1">Hello World</Typography>
    </div>
  );
};

function App() {
  return (
    <ApiProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
