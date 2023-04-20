import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Header = () => {

    const {user , logOut} = useContext(AuthContext)

    const handleLogout = () => {
          logOut()
          .then(() => {})
          .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                }
                {
                    user? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogout} className='btn btn-xs'>SignOut</button>
                    </> : <Link to='/login'>SignIn</Link>
                }
            </div> 
        </div>
    );
};

export default Header;