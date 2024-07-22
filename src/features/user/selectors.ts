import { RootState } from "src/store";

const selectUser = (state: RootState) => state.user;

export default selectUser;
