import React, { Component } from "react";
import { connect } from "react-redux";

// COMPONENTS
import ErrorPage from "./ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      message: null,
      details: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, details) {
    this.setState({ message: error.message, details });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { error, message, details } = this.state;
    const { messageProps, detailsProps } = this.props;

    const messageFinal = message || messageProps;
    const detailsFinal = details || detailsProps;
    const testFinal = error || messageFinal;

    if (testFinal) {
      return (
        <ErrorPage
          title="Something went wrong"
          errorMessage={messageFinal}
          details={detailsFinal}
        />
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  const { message, details } = state.error;

  return {
    messageProps: message,
    detailsProps: details,
  };
};

export default connect(mapStateToProps)(ErrorBoundary);
