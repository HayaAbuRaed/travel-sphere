import { FC } from "react";
import { selectIsUserAdmin } from "src/features/user";
import { useAppSelector } from "src/store/hooks";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const Home: FC = () => {
  const isAdmin = useAppSelector(selectIsUserAdmin);

  return isAdmin ? <AdminHome /> : <UserHome />;
};

export default Home;
