import { useState } from "react";
import { useDispatch } from "react-redux";
import authMiddleware from "../../../redux/middlewares/authMiddleware";

export default function useLogin() {
  const inputs = [
    {
      title: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter Username",
    },
    {
      title: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
    },
  ];

  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    const { username, password } = e.target;

    if (!username.value || !password.value) {
      const error = { username: {}, password: {} };
      if (!username.value) {
        error.username = "Username is required";
      }
      if (!password.value) {
        error.password = "Password is required";
      }

      return setFormError(error);
    }

    dispatch(authMiddleware.login(username.value, password.value)).then((res) => {
        window.alert(`Hello, ${res.username}`);
    });
  }

  return { inputs, formError, handleSubmit };
}
