import { UserRole } from "../shared/constants";
import { ErrorResponse } from "../shared/dtos";

const userdata = [
  {
    username: "username",
    password: "password",
    role: UserRole.STUDENT,
  },
  {
    username: "admin",
    password: "adminpassword",
    role: UserRole.ADMIN,
  },
];

export default function authService() {
  const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userdata.find((u) => u.username === username);

        if (!user) {
          reject(new ErrorResponse(403, "Wrong Username or Password"));
        }

        if (user.password !== password) {
          reject(new ErrorResponse(403, "Wrong Username or Password"));
        }

        const { pass, ...result } = user;

        resolve(result);
      }, 1000);
    });
  };

  const logout = async (username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userdata.find((u) => u.username === username);

        if (!user) {
          reject(new ErrorResponse(403, "Unknown Username"));
        }

        resolve(true);
      }, 1000);
    });
  };

  return { login, logout };
}
