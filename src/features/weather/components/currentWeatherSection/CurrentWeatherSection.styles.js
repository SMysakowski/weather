import { styled } from "@mui/material/styles";
import MuiSkeleton from "@mui/material/Skeleton";

export const Skeleton = styled(MuiSkeleton)(({ theme }) => ({
  height: 128,
  flex: 1,
  minWidth: 128,
}));
