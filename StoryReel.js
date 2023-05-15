import React from 'react'
import "./StoryReel.css";
import Story from "./Story"

function StoryReel() {

    return (
        <div className="storyReel">
            <Story image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg"
            profileSrc="https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=3241%2C2160"
                        title="Mark Z." ></Story>
                        <Story image="https://cdn.arstechnica.net/wp-content/uploads/2020/07/primingTOP.jpg"
            profileSrc="https://image.freepik.com/free-vector/magician-with-magic-hat-wand_1308-37654.jpg"
            title="Arthur ©️" ></Story>
            <Story image="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"
            profileSrc="https://www.biographyonline.net/wp-content/uploads/2018/04/Al_Gore.jpg.webp"
            title="Al Gore." ></Story>
            <Story image="https://cdn.mos.cms.futurecdn.net/J2NTP9Er4Ad3kRsms7XRoD.jpeg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
            title="Elon M" ></Story>
            <Story image="https://i.pinimg.com/originals/c3/e2/7f/c3e27f0ff2e325f5914f2f270d6daf64.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            title="Ankit ©️" ></Story>
            
            
        </div>
    );
}

export default StoryReel
