import axios from "axios";

const url = "http://localhost:9090/api/v1.0/provincia/";

export const findAllProvincias = async (state) => {
  const resp = await axios.get(url);
  state(resp.data.result);
};

export const findProvincia = async (id, state) => {
  const resp = await axios.get(url + `${id}`);
  state(resp.data.result);
};

export const createProvincia = async (data) => {
  await axios.post(url, data);
};

export const updateProvincia = async (data) => {
  await axios.put(url, data);
};
