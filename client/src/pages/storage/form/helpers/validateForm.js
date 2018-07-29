import storageFieldData from "./storageFieldData";

const validateForm = (storageType, formType, state) => {
  let isValid = true;
  const errsObj = {};

  let storage = storageFieldData[storageType];
  if (formType === "create") {
    storage = storage.filter(obj => obj.err !== null && !obj.showOnlyOnEdit);
  } else {
    storage = storage.filter(obj => obj.err !== null);
  }

  // console.log(storage);

  storage.forEach(obj => {
    const value = state[obj.name];
    if (value === "") {
      isValid = false;
      errsObj[obj.err] = obj.msg;
    }
  });

  console.log(errsObj);

  return { isValid, errsObj };
};

export default validateForm;
