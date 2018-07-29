export default {
  storage: [
    {
      placeholder: "* Storage Label",
      name: "storageLabel",
      required: true
    },
    {
      placeholder: "* Storage Description",
      name: "description",
      required: true
    },
    {
      placeholder: "Racks",
      name: "racks",
      showOnlyOnEdit: true,
      type: "array"
    }
  ],
  rack: [
    {
      placeholder: "* Rack Label",
      name: "rackLabel",
      required: true
    },
    {
      placeholder: "Storage",
      name: "storage",
      showOnlyOnEdit: true,
      type: "id"
    },
    {
      placeholder: "Shelves",
      name: "shelves",
      showOnlyOnEdit: true,
      type: "array"
    }
  ],
  shelf: [
    {
      placeholder: "* Shelf Label",
      name: "shelfLabel",
      required: true
    },
    {
      placeholder: "Rack",
      name: "rack",
      showOnlyOnEdit: true,
      type: "id"
    },
    {
      placeholder: "Spots",
      name: "spots",
      showOnlyOnEdit: true,
      type: "array"
    }
  ],
  spot: [
    {
      placeholder: "* Shelf Spot Label",
      name: "spotLabel",
      required: true
    },
    {
      placeholder: "Shelf",
      name: "shelf",
      showOnlyOnEdit: true,
      type: "id"
    },
    {
      placeholder: "Stored Items",
      name: "storedItems",
      showOnlyOnEdit: true,
      type: "array"
    }
  ],
  box: [
    {
      placeholder: "* Box Label",
      name: "boxLabel",
      required: true
    },
    {
      placeholder: "Shelf Spot",
      name: "shelfSpot",
      showOnlyOnEdit: true,
      type: "id"
    },
    {
      placeholder: "Stored Items",
      name: "storedItems",
      showOnlyOnEdit: true,
      type: "array"
    }
  ]
};
