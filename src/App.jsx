import Typography from "@mui/material/Typography";
import ThemeProvider from "./shared/contexts/themeProvider";
import ApiProvider from "./shared/contexts/apiProvider";

import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";

const Router = () => {
  const { data } = useQuery(["cokolwiek"], async () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
      res.json()
    )
  );

  console.log(data);

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
