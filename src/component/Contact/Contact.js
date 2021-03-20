import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Contact.css';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

function Contact() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      };
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch( error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info', res.user);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    e.preventDefault();
  }

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }
  return (
    <div className="App mt-5">
  
    <div className="form-container container border border-success p-5">
      <h4 className="mb-4">{newUser ? "Create an account" : "Login"}</h4>
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input type="submit" className="btn btn-secondary mb-3" value={newUser ? 'Create an account' : 'Login'}/>
      </form>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
    </div>
      <br/>
        <button onClick={handleSignIn}><FontAwesomeIcon icon={faGoogle}/> Sign In using Google</button>
      <br/>
      <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
    </div>
  );
}

export default Contact;