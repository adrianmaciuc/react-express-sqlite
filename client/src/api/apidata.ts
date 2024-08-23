import axios from "axios";

export const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get("/api");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
