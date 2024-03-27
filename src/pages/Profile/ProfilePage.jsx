import Background2 from "../../background2/background2"
import Banner from "../../Banner/Banner"
import axios from 'axios';
import { useState } from 'react';
import { useUserProfile } from "../../layouts/BaseLayout"
import  "./Profile.css"

export default function ProfilePage() {


const Logout = () => {
    localStorage.clear()
    Navigate('/')
}
    const userProfile = useUserProfile();
    // let user = JSON.parse(localStorage.getItem(userProfile))
    // console.warn(userProfile)
    return (
        <div className="bgimg2">
            <div className="bar"></div>
            
            <div className="card">
                
                    <h1>{userProfile?.username}</h1>
                    <img src='https://cdn.iconscout.com/icon/free/png-256/free-anonymous-user-3-1133988.png?f=webp' />
                    <p>Email: {userProfile?.email}</p>
                    <p>Role: {userProfile?.role}</p>
                    <p>User ID: {userProfile?.Id}</p>
                    <div>
                        {userProfile? (
                            <a onClick={() => localStorage.clear()} href ="/home">Logout</a>
                        ) : (
                            <p></p>
                        )}
                    
                    </div>
            </div>    
        
            
        </div>
    
    )
    
}