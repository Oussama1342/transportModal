import React, { Component } from "react";
import Modal from './Modal.js';

class Dashboardm extends Component {
  // ...
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

export default Dashboardm