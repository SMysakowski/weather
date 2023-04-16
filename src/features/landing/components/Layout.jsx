import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled(Box)({
  flexGrow: 1,
});

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>{children}</Container>
    </>
  );
}
