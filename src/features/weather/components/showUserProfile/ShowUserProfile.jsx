import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Avatar>N/A</Avatar>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <Avatar src={user.picture} alt={user.name} />
    </div>
  );
};

export default Profile;
