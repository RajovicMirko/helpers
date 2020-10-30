import React from "react";

// COMPONENTS
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { children } = props;

  return (
    <div id="layout" className="page page-header-footer">
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Layout;
