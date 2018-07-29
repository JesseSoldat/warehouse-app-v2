import axios from "axios";

// helpers
import checkForMsg from "./helpers/checkForMsg";
import axiosResponseErrorHandling from "./helpers/axiosResponseErrorHandling";
import storageApiUrl from "./helpers/storageApiUrl";
// actions
import { loading } from "./ui";
// types
export const STORAGE_FETCH_ALL = "STORAGE_FETCH_ALL";
export const STORAGE_FETCH_ONE = "STORAGE_FETCH_ONE";

// GET Storages ---------------------------
export const getStorages = (storages = []) => ({
  type: STORAGE_FETCH_ALL,
  storages
});

export const startGetStorages = () => async dispatch => {
  dispatch(loading(true));
  try {
    const res = await axios.get("/api/storages");

    const { msg, payload, options } = res.data;

    dispatch(getStorages(payload));

    checkForMsg(msg, dispatch, options);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "get", "storages");
  }
};

// GET Storage ---------------------------
export const getStorage = (storage = null, storageType = "") => ({
  type: STORAGE_FETCH_ONE,
  storage,
  storageType
});

export const startGetStorage = (id = "", storageType) => async dispatch => {
  dispatch(loading(true));

  const apiUrl = `${storageApiUrl(storageType)}/${id}`;

  try {
    const res = await axios.get(apiUrl);

    const { msg, payload, options } = res.data;

    dispatch(getStorage(payload, storageType));

    checkForMsg(msg, dispatch, options);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "get", `${storageType}`);
  }
};

// New Storage -------------------------------------
export const startCreateStorage = (
  storage,
  type,
  id,
  history
) => async dispatch => {
  console.log("type", type);
  console.log("id", id);

  const apiUrl = `${storageApiUrl(type)}/${id}`;

  console.log(apiUrl);

  try {
    const res = await axios.post(apiUrl, storage);

    const { msg, payload, options } = res.data;

    checkForMsg(msg, dispatch, options);

    let newItemId = "";

    history.push(`/storages/${newItemId}?type=${type}`);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "post", "storages");
  }
};

// Edit Storage -------------------------------------
export const startEditStorage = (
  obj,
  type,
  id = "",
  history
) => async dispatch => {
  const apiUrl = `${storageApiUrl(type)}/${id}`;
  console.log(apiUrl);

  try {
    const res = await axios.patch(apiUrl, obj);

    const { msg, options } = res.data;

    checkForMsg(msg, dispatch, options);

    history.push(`/storages/${id}?type=${type}`);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "patch", `${type}`);
  }
};
