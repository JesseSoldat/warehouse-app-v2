import React, { Component } from "react";

// custom components
import FieldList from "./FieldList";
// helpers
import validateForm from "../helpers/validateForm";
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
    const { storageType, formType, handleSubmit } = this.props;

    const { isValid, errsObj, form } = validateForm(
      storageType,
      formType,
      this.state
    );

    if (!isValid) {
      this.setState({ ...errsObj });
      return;
    }

    handleSubmit(form);
  };

  // events ---------------------------------------
  onChange = e => {
    const { name, value } = e.target;
    const err = `${name}Err`;
    this.setState({ [name]: value, [err]: null });
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
