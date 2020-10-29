import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./ErrorPage.scss";

// ACTIONS
import { clearError } from "../../../store/actions/error";

function ErrorPage(props) {
  const {
    history,
    clearError,
    title,
    errorMessage = null,
    details = null,
  } = props;

  useEffect(() => {
    history.push("/error");
  }, []);

  const handleClick = () => {
    history.push("/");
    clearError();
  };

  return (
    <div className="page page-center p-3">
      <div className="card w-50">
        <div className="card-header bg-primary text-white flex flex-justify-between flex-align-center">
          <h4>{title}</h4>
        </div>
        <div className="card-body text-center py-3">
          <i className="fas fa-exclamation-triangle text-danger mb-3"></i>
          <h5 className="card-subtitle text-danger text-center mb-2">
            {errorMessage}
          </h5>
          <button className="btn btn-primary" onClick={handleClick}>
            Go back
          </button>

          {details && details.componentStack && (
            <div className="text-left">
              <details style={{ whiteSpace: "pre-wrap" }}>
                {details.componentStack}
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearError()),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ErrorPage));
