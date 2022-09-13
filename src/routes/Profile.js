import React from "react";
import { authService } from "../myBase";

const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
    }
    return (
    <>
        <button onClick={onLogOutClick}>
            로그아웃
        </button>
    </>
    );
};

export default Profile;