import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/solveq">문제 풀러 가기</Link>
                </li>
                <li>
                    <Link to="/addq">문제 출제</Link>
                </li>
                <li>
                    <Link to="/profile">myProfile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;