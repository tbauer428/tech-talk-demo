import React from "react";
import { connect } from "react-redux";
import firebaseConfig from "../FirebaseConfig";
import * as firebase from "firebase/app";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  createNewUser = () => {};

  loginUser = () => {};

  updateState = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div className="Login">
        <div className="LoginCard">
          <h1>Login</h1>

          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={event => this.updateState(event)}
          />

          <input
            type="text"
            id="password"
            placeholder="Password"
            onChange={event => this.updateState(event)}
          />

          <div onClick={signInWithGoogle}>Login</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  mapStateToProps,
  mapDispatchToProps
})(Login);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
