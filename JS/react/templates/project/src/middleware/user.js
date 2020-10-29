import axios from "../utils/axios";
import { getApiUrl } from "../utils/api";

export default (() => {
  const get = async (id, query) => {
    const url = getApiUrl(`/user/${id}`, query);
    return await axios("get", url);
  };

  return {
    get,
  };
})();
