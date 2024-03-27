import './Navbar.css'
import { useUserProfile } from '../layouts/BaseLayout';


export default function Navbar() {
    const userProfile = useUserProfile();
    console.log('userProfile', userProfile);
    return (
        <div className="topnav">
            
            
            {/* <a href="/Todo">ToDos</a> */}
            <a href="/profile">Contact</a>
            <a href="/about">Orders</a>
            <a href="/news">Products</a>
            <a href="/home">Home</a>
            <div className='active'>
            {userProfile ? (
              <a href='/profile'>{userProfile.username}</a>
            ) : (
              <a href='/'>Login</a>
            )}
            </div>
            
            
        
        </div>
    )
}