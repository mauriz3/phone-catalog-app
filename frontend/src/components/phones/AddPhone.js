import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPhone } from "./PhonesActions";
import { isEmpty } from "../../utils/Utils";

class AddPhone extends Component {
  componentDidMount() {
    this.onMount();
  }
  onMount = () => {
    const phone = {
      browser: 'browser',
      os: 'os',
      is_new: isEmpty(localStorage.getItem("recurrent"))
    };
    this.props.addVisit(phone);
    localStorage.setItem("recurrent", true);
  };

  render() {
    return (
      <div>
        <h2 id="welcome-message">
          <span>w</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </h2>
      </div>
    );
  }
}

AddPhone.propTypes = {
  addPhone: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addPhone })(withRouter(AddPhone));