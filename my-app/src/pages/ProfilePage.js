import React from "react";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/home');
    }

    return (
        <div class="button" onClick={() => handleClick()}>go home</div>
    )
}

export default ProfilePage;