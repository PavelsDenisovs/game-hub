import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2cb36e894d534cb79f0bfcf95699b100",
  },
});
