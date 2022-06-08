import axios from "axios";
const KEY = "84675830-e8d8-405d-8178-7c18573117b8";

export const getData = async () => {
  try {
    return await axios.get(
      `https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${KEY}`
    );
  } catch (error) {
    console.log(error);
  }
};
