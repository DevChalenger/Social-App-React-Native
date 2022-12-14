import { pending, rejected, resolved } from "../reducers/user";
import { selectUser } from "../selector";

export const createUser = (formValue) => {
  return async (dispatch, getState) => {
    const status = selectUser(getState()).status;
    if (status === "pending") {
      return;
    }
    dispatch(pending());
    try {
      dispatch(resolved(formValue));
    } catch (error) {
      dispatch(rejected());
    }
  };
};
