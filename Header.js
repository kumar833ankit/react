import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import {Avatar, IconButton } from "@material-ui/core";
//import StorefrontOutLinedIcon from "@material-ui/icons/StorefrontOutLined"
//import SupervisedUserCircleIcon from "@material-ui/icons/SuperviseUserCircle"
import AddIcon from "@material-ui/icons/Add";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";







function Header({username}) {
    return (
        <div className='header'>
            <div className='header__left'>
            <img src="https://i.ibb.co/kKzn8v5/Whats-App-Image-2021-04-28-at-11-28-12-AM.jpg" alt="Site Logo" alt="description " />
            
            <div className='header__input'>
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
                </div>
                

                

                </div>

            <div className='header__center'>
            <div className='header__option header__option--active'> <HomeIcon fontSize="large"/> 
                </div>
                <div className='header__option'> <FlagIcon fontSize="large"/> 
                </div>
                
                <div className='header__option'> <SubscriptionsOutlinedIcon fontSize="large"/> 
                
                </div>
                <div className='header__option'> <AttachFileIcon fontSize="large"/> 
                
                </div>
                <div className='header__option'> <BookmarksIcon fontSize="large"/> 
                
                </div>
            </div>

            <div className='header__right' ><h5 className="active">Active</h5>
            <div className='header__info'>
                
           

            </div>


            <IconButton fontSize="large">
                <AddIcon />
                <ForumIcon />
            < NotificationsActiveIcon/>

               
            < ExpandMoreIcon />

            </IconButton>
        </div>
        </div>
    )
}

export default Header


