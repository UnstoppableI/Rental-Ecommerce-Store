import React from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup, SignOut, } from "firebase/auth";
import {toast} from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../redux/bazarSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.bazar.userInfo)

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            dispatch(
                addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                })
            );
            setTimeout(() => {
                navigate("/");
            }, 1500);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Signed Out Successfully");
            dispatch(removeUser());
        });
    };

    return(
        <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white" >
        <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray">
        Welcome to eBazaar
        </h2>
        <p className="mt-2 text-sm text-gray-600">
        Sign in to your account
        </p>
        </div>
        {!userInfo ? (
        <div className="mt-8 space-y-6">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.411 2.8"></path>
                </svg>
                Sign in with Google
            </button>
            </div>
        ) : (
            <button onClick={handleSignOut} className="w-full flex justify-center py-2 px-4 border-0">
                Sign Out of eBazaar
            </button>
        )}
        </div>
        </div>

        );
};
export default Login;
        
