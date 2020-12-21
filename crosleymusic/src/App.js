import Nav from './components/Nav'
import Main from './components/Main'
import React, { Component, useEffect, useState } from 'react';
import './Login.css';
import Login from './Login';
import fire from './Fire';
import firestore from './Fire';
import "./App.scss";
const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [docid, setDocid] = useState('');

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }
  const handleLogin = async () => {
    document.getElementById("titulo").innerHTML = "Iniciar Sesion";
    clearErrors();
    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
        alert(err)
      }).then(() => {
      })
  }
  const handleSignup = async () => {
    document.getElementById("titulo").innerHTML = "Crear Cuenta";
    clearErrors();
    await fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        await fire.firestore().collection("users").add({
          id: result.user.uid,
          email,
          password,
          URL: "https://moorestown-mall.com/noimage.gif",
          description: "",
          imgname: "",
          isonline: false,
          tarjetas: [],
          isverify: false,
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
    //setUID(fire.auth().currentUser.uid);
  }
  const handleLogout = () => {
    fire.auth().signOut()
  }
  const authListener = async () => {
    await fire.auth().onAuthStateChanged((user) => {
        if (user) {
            clearInputs();
            setUser(user);
          }
        })

           /* fire.firestore().collection('users').where("id", "==", user.uid).get().then(DocumentSnapshot => {
                DocumentSnapshot.docs.forEach(doc => {
                    if (doc.exists) {
                        doc.data().tarjetas.forEach(tar => {
                            if (tar != null) {
                                const name = tar.name;
                                const number = tar.number;
                                const expiry = tar.expiry;
                                const cvc = tar.cvc;
                                const obj = {
                                    'name': name,
                                    'expiry': expiry,
                                    'number': number,
                                    'cvc': cvc
                                }
                                tarjetasdb.push(obj);
                            }
                        });
                        setCards(tarjetasdb);
                        setDocid(doc.id);
                    } else {
                        alert('no existeeee');
                    }
                })
            });
        } else {
            setUser("");
            // localStorage.removeItem('user');
        }
    })*/
  }
  useEffect(() => {
    authListener();
  }, [])
  return (
    <div>
      {user ? (
        <>
          <div className="outerWrap">
            <div className="App">
              <Nav />
              <Main />
            </div>
            <div className="musicControls">
              Crosley Music Copyright ©2020
        <br />
        Jasser Ramos - Elias Giron <br /> Luis Enriquez
      </div>
          </div>
        </>
      ) : (
          <>
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </>
        )}


    </div>
  );
}
export default App;