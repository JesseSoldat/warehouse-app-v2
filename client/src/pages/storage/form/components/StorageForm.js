import React, { Component } from "react";

// custom components
import FieldList from "./FieldList";
// utils
import capitalizeFirstLetter from "../../../../utils/stringManipulation/capitalizeFirstLetter";

class StorageForm extends Component {
  state = {
    storageLabel: "",
    storageLabelErr: "",
    description: "",
    rackLabel: "",
    rackLabelErr: "",
    shelfLabel: "",
    shelfLabelErr: "",
    spotLabel: "",
    spotLabelErr: "",
    boxLabel: "",
    boxLabelErr: ""
  };

  // lifecycle ---------------------------------
  componentDidMount() {
    const { formType, storageType } = this.props;
  }

  // cb --------------------------------------
  onSubmit = e => {
    e.preventDefault();
    const { storageType, handleSubmit } = this.props;

    const isValid = true;

    if (isValid) {
    }
  };

  // events ---------------------------------------
  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { formType, storageType } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <FieldList
          state={this.state}
          storageType={storageType}
          formType={formType}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value={capitalizeFirstLetter(formType)}
          className="btn btn-info btn-block mt-4"
        />
      </form>
    );
  }
}

export default StorageForm;
