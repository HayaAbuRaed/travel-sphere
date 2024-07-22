import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import selectUser from "src/features/user/selectors";
import { useAppSelector } from "src/store/hooks";

// temporary component to test redux setup
const Home = () => {
  const { givenName, familyName } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      showErrorSnackbar({
        message: "This is an error message This is an error message.",
      })
    );
  };

  return (
    <>
      <h1>
        Hello {givenName} {familyName}
      </h1>
      <button onClick={handleClick}>show</button>
    </>
  );
};

export default Home;
