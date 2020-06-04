import React from "react";
import firebase from "firebase/app";
import style from 'styled-components';

const SignInBubble = style.div `
  border: 2px solid grey;
  border-radius: 9px;
  padding: 3px;
  padding-left: 7%;
  padding-bottom: 3%;
  background-color: #909f86a7;
`;

function Signin(){  

  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event){
    event.preventDefault()
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      console.log("WHOOOA WE KNOW YOU")
    }).catch(function(error){
      console.log(error.message);
    })
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Bish bye!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
    <SignInBubble>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button className="button" type='submit'>Sign up</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button className="button" type='submit'>Sign in</button>
      </form>
      <h1>Sign Out</h1>
  <button className="button" onClick={doSignOut}>Sign out</button>
    </SignInBubble>
    </React.Fragment>
  );
}

export default Signin