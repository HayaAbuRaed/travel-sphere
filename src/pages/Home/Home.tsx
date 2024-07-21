import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";

// temporary component to test redux setup
const Home = () => {
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
      <h1>Home</h1>
      <button onClick={handleClick}>show</button>
    </>
  );
};

export default Home;
