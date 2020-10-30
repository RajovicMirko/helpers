import React, { Component } from "react";
import { connect } from "react-redux";

// REDUX ACTIONS
import { editUser } from "../../store/actions/user";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: props.user.firstName,
        lastName: props.user.lastName,
      },
    };
  }

  handleChange = (event) => {
    const state = this.state;
    const target = event.target;
    state.user[target.id] = target.value;
    this.setState({ ...state });

    this.props.editUser(state.user);
  };

  render() {
    const { user } = this.props;

    return (
      <main className="flex flex-column flex-center py-2">
        <h4>This is project template with basic setup:</h4>
        <ul>
          <li>Folder structure</li>
          <li>Bootstrap CDN</li>
          <li>Bootstrap scss color variables</li>
          <li>scss positioning</li>
          <li>Redux</li>
          <li>Redux-thunk</li>
          <li>Utils</li>
          <li>API middleware</li>
        </ul>

        <ul>
          <li>Folder structure</li>
          <li>Bootstrap CDN</li>
          <li>Bootstrap scss color variables</li>
          <li>scss positioning</li>
          <li>Redux</li>
          <li>Redux-thunk</li>
          <li>Utils</li>
          <li>API middleware</li>
        </ul>

        <ul>
          <li>Folder structure</li>
          <li>Bootstrap CDN</li>
          <li>Bootstrap scss color variables</li>
          <li>scss positioning</li>
          <li>Redux</li>
          <li>Redux-thunk</li>
          <li>Utils</li>
          <li>API middleware</li>
        </ul>

        <h4>State usage sample</h4>
        <p>User: {`${user.firstName} ${user.lastName}`}</p>
        <form className="w-50 px-4 py-2 bg-primary text-center">
          <span className="h5 text-white">User form</span>
          <input
            className="form-control form-control-sm my-2"
            id="firstName"
            placeholder="First name"
            value={user.firstName}
            onChange={this.handleChange}
          />

          <input
            className="form-control form-control-sm my-2"
            id="lastName"
            placeholder="Last name"
            value={user.lastName}
            onChange={this.handleChange}
          />
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (data) => dispatch(editUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
