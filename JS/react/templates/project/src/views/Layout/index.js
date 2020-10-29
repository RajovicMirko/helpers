import React from "react";

function Layout(props) {
  const { children } = props;

  return (
    <div id="layout" className="page">
      {children}
    </div>
  );
}

export default Layout;
