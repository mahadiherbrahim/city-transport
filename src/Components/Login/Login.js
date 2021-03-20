import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Header from '../Header/Header';
import { useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    
    const location = useLocation();
    const history = useHistory();
    
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState(true);

    const [user, setUser] = useState({
        name: '',
        email:'',
        password: '',
        error: ''
    })

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setLoggedInUser(user)
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleValidation = (e) => {
        let userValid;
        if (e.target.name === "email") {
            userValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === "password") {
            const validPasswordLength = e.target.value.length > 6
            const validPasswordChar = /\d{1}/.test(e.target.value)
            userValid = validPasswordLength && validPasswordChar
            setNewPassword(e.target.value)
        }
        if (e.target.name === "confirmPassword") {
            const validPasswordLength = e.target.value.length > 6
            const validPasswordChar = /\d{1}/.test(e.target.value)
            setConfirmPassword(e.target.value)
            userValid = validPasswordLength && validPasswordChar
        }
        if(e.target.name === "name"){
            userValid = /^[a-zA-Z\s]*$/.test(e.target.value)
        }
        if (newPassword === confirmPassword) {
            if (userValid) {
                const newUserInfo = { ...user }
                newUserInfo[e.target.name] = e.target.value
                setUser(newUserInfo)
            }
        }
    }

    const handleRegistration = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = {...user}
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateProfileInfo(user.name)
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    console.log(user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = res.user
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    console.log(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
        e.preventDefault()
    }
    const updateProfileInfo = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function (res) {
            console.log('UserName Update');
        }).catch(function (error) {
            console.log(error,'UserName Not Update');
        });
    }


    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 ">
                    <form action="#" className="form-style" onSubmit={handleRegistration} >
                        <h3>{newUser ? 'Sign Up' : 'Sign In'}</h3>
                        {
                            newUser &&
                            <div className="mb-3">
                                <input type="text" className="form-control" onBlur={handleValidation}  name="name" placeholder="Your Name" />
                            </div>
                        }
                        <div className="mb-3">
                            <input type="email" required className="form-control" name="email" onBlur={handleValidation} placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" required className="form-control" name="password" onBlur={handleValidation} placeholder="Your Password" />
                        </div>
                        {
                            newUser &&
                            <div className="mb-3">
                                <input type="password" required className="form-control" name="confirmPassword" onBlur={handleValidation} placeholder="Confirm Password" />
                            </div>
                        }
                        <button type="submit" className="btn btn-primary btn-block">{newUser ? 'Sign Up' : 'Sign In'}</button>
                        <p className="text-center">Already Have A Account ?
                            <input type="checkbox" name="newUser" id="newUser" onChange={() => setNewUser(!newUser)} />
                            <label htmlFor="newUser">Login</label>
                        </p>
                    </form>
                    <br />
                    <button onClick={handleGoogleSign} className="btn btn-danger btn-block">Google Sign In</button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Login;