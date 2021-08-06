import React, {useState}from 'react';
import './Navigation.css';
import '../../colors2.css';
import Hamburger from "../../images/hamburger.png";

const Navigation = ({onRouteChange, isSignedIn,
                    route, user, 
                    changePublicStatus})=>{
    const [hideStatus,setHideStatus] = useState('Hidden')

    const hide = ()=>{
        hideStatus==='Hidden'?setHideStatus(''):setHideStatus('Hidden')
      
    }

    const closeDropDown = (route,status) =>{
        if (hideStatus === ''){
            setHideStatus('Hidden')
        }
        if (status===true||status===false){
            changePublicStatus(route,status)
        
        }else{
            onRouteChange(route)
        }
    }

    if (isSignedIn){
        return (
            <div className = "navroot">
                <div className = "title">Halpin Messaging App</div>
                    <div>
                        <button 
                            className = "hideButton" 
                            onClick = {hide}>
                                <img src = {Hamburger} alt = "=" width="30rem"></img>
                        </button>
                    </div>
                <div className = {'mainNav'+hideStatus}> 
                    <button className = "wideButton" onClick = {hide}>Close</button>
                        {/* <div className = "groupContainer"> */}
                            {/* <p className = "groupChat">Group Chats</p> */}
                            <div className = "navButtonContainer " >
                                <p 
                                    onClick = {()=>closeDropDown('home',true)} 
                                    className = {"navButtons home"+ route}>
                                        Public Chat
                                </p>
                                
                                    
                                </div>
                                <div>
                                <p 
                                    className = {"navButtons friend"+ route} 
                                    onClick = {()=>closeDropDown('friend',false)}>
                                        Friends Chat
                                </p>
                            </div>
                        {/* </div> */}
                       
                        <div>
                            <p 
                                className = {"navButtons private mail"+ route} 
                                onClick = {() => closeDropDown('mail')}>
                                    Private Message
                            </p>
                        </div>
                       
                        <div className = "">
                            <p 
                                className = {"navButtons friends"+ route} 
                                onClick = {()=>closeDropDown('friends')}>
                                    Contacts
                                    {user?.requests?.length
                                        ?<span className = "requests">{user.requests.length}</span>
                                        :<></>}
                            </p>
                        </div>
                        <nav className = "">
                        <p 
                            onClick = {() => onRouteChange('Sign In')} 
                            className = {"navButtons "}>
                                Sign Out
                        </p>
                    </nav>
                    </div>
                
            </div>            
        )
    }else {
        return (
            <div >
            </div>            
            )   
        }
}

export default Navigation;