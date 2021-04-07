import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui primary button"
        >
          Approve
        </button>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return " Sahi Me DELETE krdu ??";
    }
    return `Sahi Me DELETE krdu ${this.props.stream.title} ??`;
  }
  render() {
    return (
      <Modal
        path={() => history.push("/")}
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
