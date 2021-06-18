import axios from "axios";

const POST = "POST";

const config = {
  recipeUrl: "https://api.buildable.dev/trigger",
  recipeEnv: process.env.NODE_ENV === "development" ? "test" : "live",
  version: "v2"
};

const { recipeUrl, recipeEnv, version } = config;

const api = async ({ payload, url, headers = {} }) => {
  const { data } = await axios({
    method: POST,
    url,
    headers,
    data: payload
  });

  return data;
};

const dispatchRecipe = ({ triggerId, payload = {}, options = {} }) =>
  api({
    ...options,
    url: `${recipeUrl}/${version}/${recipeEnv}-${triggerId}`,
    payload
  });

export default dispatchRecipe;