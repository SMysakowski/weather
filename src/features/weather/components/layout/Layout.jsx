import Typography from "@mui/material/Typography";

import ShowProfile from "../showUserProfile/ShowUserProfile";
import Sidebar from "../sidebar/Sidebar";

import {
  ContentContainer,
  Header,
  RootContainer,
  SidebarContainer,
  RightPanel,
} from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <RootContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <RightPanel>
        <Header>
          <div>
            <Typography>Today</Typography>
            <Typography>Week</Typography>
          </div>
          <ShowProfile />
        </Header>
        <ContentContainer>{children}</ContentContainer>
      </RightPanel>
    </RootContainer>
  );
}
