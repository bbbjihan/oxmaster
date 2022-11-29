import React from "react";
import { authService } from "../myBase";

const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
    }
    return (
    <>
        <img src={authService.currentUser.photoURL}/><br/>
        이름: {authService.currentUser.displayName}<br/>
        EMAIL: {authService.currentUser.email}<br/><br/>
        <button onClick={onLogOutClick}>
            로그아웃
        </button>
    </>
    );
};

export default Profile;