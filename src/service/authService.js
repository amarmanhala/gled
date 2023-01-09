//This service is responsible for login or logout user.
import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiUrl + "/auth";

export function login(email, password) {
  axios
    .post(apiEndpoint, {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log("This is response" + response);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}
