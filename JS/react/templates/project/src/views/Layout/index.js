import React from "react";

// COMPONENTS
import ErrorBoundary from "./ErrorBoundary";

function Layout(props) {
  const { children } = props;

  return (
    <div id="layout" className="page page-header-footer">
      <header className="bg-primary text-white px-4 py-2">
        <h1 className="m-0">Banner</h1>
      </header>

      <ErrorBoundary>{children}</ErrorBoundary>

      <footer className="bg-primary text-white text-center p-3 flex flex-center">
        <h6 className="m-0 mx-4">Test footer</h6>
        <h6 className="m-0 mx-4">Test footer</h6>
        <h6 className="m-0 mx-4">Test footer</h6>
        <h6 className="m-0 mx-4">Test footer</h6>
      </footer>
    </div>
  );
}

export default Layout;
