import React, { Component } from "react";

// COMPONENTS
import ErrorPage from "./ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      details: null,
      children: props.children,
    };
  }

  static getDerivedStateFromError(error) {
    return { message: error.message };
  }

  componentDidCatch(error, details) {
    this.setState({ message: error.message, details });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { message, details, children } = this.state;

    if (message) {
      return (
        <ErrorPage
          title="Something went wrong"
          errorMessage={message}
          details={details}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
