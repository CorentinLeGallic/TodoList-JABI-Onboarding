import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const DisconnectButton = ({ className="", id="" }) => {

    // Retrieve the logOut function from the Authentification Context
    const { logOut } = useContext(AuthContext);

    // Handle click on the disconnection button
    const handleDisconnection = () => {
        console.log("User is logging out !");
        logOut();
    }

    return (
        <button className={'disconnect-button ' + className} id={id} onClick={handleDisconnection}>Se déconnecter</button>
    )
}

export default DisconnectButton;