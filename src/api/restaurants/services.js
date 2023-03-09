import axios from "@utils/axios-instance";
import urls from "./urls";

const restaurantsApi = {
  getRestaurants: async (params, config) => {
    const url = urls.getRestaurants();
    return await axios.get(
      url,
      { params: { page_size: 10, lat: 35.754, long: 51.328, ...params } },
      config
    );
  },
};

export default restaurantsApi;
