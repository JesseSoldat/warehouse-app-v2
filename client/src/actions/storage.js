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
export const STORAGE_DELETE_ONE = "STORAGE_DELETE_ONE";

// Search Storages -------------------------
export const startSearchStorages = (
  storageType,
  searchBy,
  searchText,
  history
) => async dispatch => {
  try {
    const apiUrl = `/api/storages/search/${storageType}/${searchBy}/${searchText}`;

    const res = await axios.get(apiUrl);

    const { msg, payload } = res.data;

    console.log(payload);

    checkForMsg(msg, dispatch);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "query", `${storageType}`);
  }
};

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
  const apiUrl = `${storageApiUrl(type)}/${id}`;

  try {
    const res = await axios.post(apiUrl, storage);

    const { msg, payload, options } = res.data;

    checkForMsg(msg, dispatch, options);

    let newItemId = "";

    switch (type) {
      case "storage":
      case "box":
        newItemId = payload._id;
        break;

      case "rack":
      case "shelf":
      case "shelfSpot":
        newItemId = payload[type]._id;
        break;

      default:
        break;
    }

    console.log("create payload", payload);

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

  try {
    const res = await axios.patch(apiUrl, obj);

    const { msg, options } = res.data;

    checkForMsg(msg, dispatch, options);

    history.push(`/storages/${id}?type=${type}`);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "patch", `${type}`);
  }
};

// Delete Storage ----------------------------------
export const deleteStorage = () => ({
  type: STORAGE_DELETE_ONE
});

export const startDeleteStorage = (type, id, history) => async dispatch => {
  try {
    const apiUrl = `${storageApiUrl(type)}/${id}`;
    console.log(apiUrl);

    const res = await axios.delete(apiUrl);

    const { msg, options } = res.data;

    dispatch(deleteStorage());

    checkForMsg(msg, dispatch, options);

    history.push(`/storages`);
  } catch (err) {
    axiosResponseErrorHandling(err, dispatch, "delete", `${type}`);
  }
};
