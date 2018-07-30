import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// common components
import Message from "../../../components/Message";
import Heading from "../../../components/Heading";
import Spinner from "../../../components/Spinner";
// custom components
import SearchInputs from "./components/SearchInputs";
// actions
import { startSearchStorages } from "../../../actions/storage";

class StorageSearch extends Component {
  state = {
    selection: "storage",
    searchText: "",
    searchTextErr: null
  };

  // lifecycles ----------------------------
  componentWillUnmount() {}

  // api calls -----------------------------
  onSearch = () => {
    const { selection, searchText } = this.state;
    const { startSearchStorages, history } = this.props;

    if (searchText === "") {
      const error = "Please fill in the item label";
      this.setState({ searchTextErr: error });
      return;
    }
    startSearchStorages(selection, `${selection}Label`, searchText, history);
  };

  // events -------------------------------
  onSelect = ({ target: { value } }) => {
    this.setState({ selection: value });
  };

  onInput = ({ target: { value } }) => {
    this.setState({ searchText: value, searchTextErr: null });
  };

  render() {
    const searchOptions = {
      Storage: "storage",
      Rack: "rack",
      Shelf: "shelf",
      ShelfSpot: "shelfSpot",
      Box: "box"
    };

    return (
      <div className="container">
        <Message />
        <Heading title="Search Storage" />
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 mx-auto">
            <SearchInputs
              searchOptions={searchOptions}
              selection={this.state.selection}
              searchText={this.state.searchText}
              searchTextErr={this.state.searchTextErr}
              onSelect={this.onSelect}
              onInput={this.onInput}
              onSearch={this.onSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ storage, ui }) => ({
  loading: ui.loading,
  search: storage.search
});

export default connect(
  mapStateToProps,
  { startSearchStorages }
)(withRouter(StorageSearch));
