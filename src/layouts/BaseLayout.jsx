import Proptypes from "prop-types"
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/footer"
import { createContext, useState, useEffect, useContext } from "react"
import axios from "axios"

const UserProfileContext = createContext();



export default function Layout() {

    const [userProfile, setUserProfile] = useState(null);
    const getUserProfile = async () => {
      try {
        const token = window.localStorage.getItem('token');
        const response = await axios.get(
          'https://bubble-tea-cafe-api-production.up.railway.app/api/auth/profile',
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setUserProfile(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (!userProfile) {
        getUserProfile();
      }
    }, [userProfile]);
  
    

    return (
        <div>
            <UserProfileContext.Provider value={userProfile}>
                <Navbar />
                <Outlet />
                <Footer />
            </UserProfileContext.Provider>
        </div>
    )
}
export const useUserProfile = () => {
    const context = useContext(UserProfileContext);
    if (context === undefined) {
      console.log('useUserProfile must be used within a UserProfileProvider');
    }
    return context;
  };

Layout.propTypes = {
    children: Proptypes.node.isRequired,
}

