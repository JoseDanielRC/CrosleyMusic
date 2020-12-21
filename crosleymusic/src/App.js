import Nav from "./components/Nav";
import Main from "./components/Main";
import React, { Component, useEffect, useState } from "react";
import "./Login.css";
import Login from "./Login";
import fire from "./Fire";
import firestore from "./Fire";
import "./App.scss";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import Migrations from "./contracts/Migrations.json";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [docid, setDocid] = useState("");
  let web3 = null;
  let accounts = null;
  let contract = null;
  let [albumAdresses, setAlbumAdresses] = useState([]);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
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
        alert(err);
      })
      .then(() => {});
  };
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
      });
    //setUID(fire.auth().currentUser.uid);
  };
  const handleLogout = () => {
    fire.auth().signOut();
    window.location.reload();
  };
  const authListener = async () => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }
    });
  };
  const addAlbumAddresses = async (addressAdd) => {
    albumAdresses.push(addressAdd);
  };
  const web3blockchain = async () => {
    try {
      // Get network provider and web3 mainInstance.
      const _web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await _web3.eth.getAccounts();
      const address = "0x6fD277F97437458540EC2031ae5E82f4b0f2E8ad";
      // Get the contract mainInstance.
      //const networkId = 5777;
      //const web32 = new Web3("https://localhost:5777");
      const networkId = await _web3.eth.net.getId();
      alert(networkId);
      const deployedNetwork = Migrations.networks[networkId];
      const mainInstance = new _web3.eth.Contract(
        Migrations.abi,
        address
        /*""*/
      );
      mainInstance.address = address;
      console.log(mainInstance);
      alert(JSON.stringify(accounts));
      mainInstance.methods
        .setData(
          "YHLQMDLG",
          "Bad Bunny",
          "https://images.genius.com/aa1c8b77f382d4d32ad97002ab823680.1000x1000x1.png"
        )
        .send({ from: accounts[0] });

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      console.log(mainInstance.data);
      // this.setState({ web3, accounts, contract: mainInstance }, this.initiate);
    } catch (error) {
      // Catch any errors for any of the above operations.
      /*alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );*/
      alert(error);
    }
  };
  useEffect(() => {
    authListener();
    web3blockchain();
  }, []);
  return (
    <div>
      {user ? (
        <>
          <div className="outerWrap">
            <div className="App">
              <Nav handleLogout={handleLogout} />
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
};
export default App;
