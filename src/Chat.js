import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'
import { useDispatch } from 'react-redux'
import { selectImage } from './features/appSlice'
import { db } from './firebase'
import { useHistory } from 'react-router-dom'

function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
    const dispatch = useDispatch();
    const history = useHistory();
    TimeAgo.addLocale(en)

    const open =()=>{
        if(!read){
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set(
                {
                    read:true,
                },
                {
                    merge:true
                }
            );
            history.push('/chats/view')
        }
    };
    
    return (
        <div className='chat' onClick={open}>
          <Avatar src={profilePic} className='chat__avatar'/>
          <div className="chat__info">
              <h4>{username}</h4>
              <p>{!read && 'Tap To View..'}{' '}<ReactTimeAgo date={new Date(timestamp?.toDate()).toLocaleString()}/></p>
          </div>
          {!read && <StopRoundedIcon className="chat__readIcon"/>}
            
        </div>
    )
}

export default Chat;
