import Typography from "@mui/material/Typography";
import ThemeProvider from "./shared/contexts/themeProvider";

import Button from "@mui/material/Button";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button>Click me</Button>
        <Typography variant="h1">Hello World</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
