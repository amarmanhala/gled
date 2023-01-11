//This service is responsible for login or logout user.
import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiUrl + "/auth";

export const login = async (email, password) =>
  await axios
    .post(apiEndpoint, { email: email, password: password })
    .then((res) => res.data);
