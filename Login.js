import { Button } from '@material-ui/core'
import React, { useEffect, useState } from "react";
import "./Login.css"
import {   auth ,provider  } from "./firebase";
import {actionType, actionTypes } from "./reducer";
import {  useStateValue } from "./StateProvider";


function Login() {

      const [state, dispatch] = useStateValue();

    const signIn = () => {

        //signIN
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch(
            {  
                type: actionTypes.SET_USER,
                user: result.user
            }
        );

        })
           
        .catch((error) => alert(error.message))
    };
     
    return ( 
        <div className="login">
            <div className="login__logo">
            <img src="https://i.ibb.co/kKzn8v5/Whats-App-Image-2021-04-28-at-11-28-12-AM.jpg" alt="" />
            
            
            <img src="https://www.pngarea.com/pngm/542/3855149_lets-play-png-gta-iv-lets-play-logo.png" alt="" />
            <br/>
            <br/>
            <div class="title">
            <h1>DEVs<br/>Ankit & Arthur</h1>
            

               
             </div>
             <div>
                 
             </div>


                
            </div>
            <Button type="submit" onClick={signIn} >
                Sign IN with Google 
            </Button>
        </div>
    );
};


export default Login
