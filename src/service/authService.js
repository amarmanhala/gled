//This service is responsible for login or logout user.
import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiUrl + "/auth";

// export const login = (body) => axios.post(apiEndpoint, body).then(res=> res.data)
export const login = async (body) => await axios.post(apiEndpoint, body)
// export async function login(email, password) {
//   console.log("CALLED>>>>>>>>")
//   return axios
//     .post(apiEndpoint, {
//       email: email,
//       password: password,
//     })
//     .then(function (response) {
//       console.log("This is response" + response);
//     })
    // .catch(error => {
    //   console.log("Error: ", error);
    //   return error;
    // });
// }
