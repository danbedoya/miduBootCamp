import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      console.log(response);
      const { data } = response;
      return data;
    });
};
