import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")({
  display: "flex",
  height: "100vh",
});

export const SidebarContainer = styled("div")(({ theme }) => ({
  minWidth: 300,
  padding: theme.spacing(3),
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const RightPanel = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
}));
