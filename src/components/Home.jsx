import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
           <h2>This is home {user && <span>{user.DisplayUsername}</span>}</h2> 
        </div>
    );
};

export default Home;