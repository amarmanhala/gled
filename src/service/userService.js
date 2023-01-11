//This service is responsible for user registeration or edit the user.
import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiUrl + "/users";

export const register = (user) => {
  console.log(user);
  axios.post(apiEndpoint, {
    email: user.email,
    name: user.name,
    password: user.password
  })
}