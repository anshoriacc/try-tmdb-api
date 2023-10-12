import useAuthStore from "../store/client/useAuth";

const USERNAME = import.meta.env.VITE_USERNAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

export type LoginData = {
  username: string;
  password: string;
};

const loginAction = ({ username, password }: LoginData) => {
  const { login } = useAuthStore.getState();

  if (username !== USERNAME || password !== PASSWORD) {
    return false;
  }

  login();
  return true;
};

export default loginAction;
