import React from "react";

// custom components
import StorageTable from "./StorageTable";
import RackTable from "./RackTable";
import ShelfTable from "./ShelfTable";

const TableContainer = ({ storage = null, storageType = null }) => {
  if (!storage || !storageType) return null;

  let content;

  switch (storageType) {
    case "storage":
      content = <StorageTable storage={storage} storageType={storageType} />;
      break;

    case "rack":
      content = <RackTable storage={storage} storageType={storageType} />;
      break;

    case "shelf":
      content = <ShelfTable storage={storage} storageType={storageType} />;
      break;

    default:
      content = null;
      break;
  }

  return (
    <div className="col-12 d-flex justify-content-around flex-wrap mt-4">
      {content}
    </div>
  );
};

export default TableContainer;
