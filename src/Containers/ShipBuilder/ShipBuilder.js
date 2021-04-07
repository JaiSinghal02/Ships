import React, { Component } from "react";
import ShipCards from "../../Components/ShipCards/ShipCards";
import { connect } from "react-redux";

class ShipBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ShipCards shipsData={this.props.shipsData} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shipsData: state.ships
  };
};

export default connect(mapStateToProps)(ShipBuilder);
