import axios from "axios";

export const getAllNotes = () => {
  return (
    axios

      //This different end-points can be used to fetch data for the application
      // - http://localhost:3001/notes : JSON server which watch the local notes.JSON file locally.
      // - https://restcountries.com/v3.1/all : RESTful API to get countries mock data.
      // - https://jsonplaceholder.typicode.com/posts: REST API mock data.

      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response", response);
        const { data } = response;
        return data;
      })
  );
};
