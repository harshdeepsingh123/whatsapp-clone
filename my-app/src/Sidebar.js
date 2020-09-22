import React, { useEffect, useState } from 'react'
import {Avatar,IconButton} from "@material-ui/core"
import DonuLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import './Sidebar.css'
import Sidebarchat from "./Sidebarchat"
import { useStateValue } from './StateProvider'
import db from './firebase'
function Sidebar() {
    const [rooms,setRooms] = useState([]);
    const [{ user },dispatch]=useStateValue();
    useEffect(()=>{
      const unsubscribe=  db.collection('rooms').onSnapshot(snapshot =>(
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })
            ))
    ))
    return()=>{
        unsubscribe()
    };
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            <Avatar  src={user?.photoURL}/>
            <div className="sidebar_headerright">
            <IconButton>
                <DonuLargeIcon/>
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            
            <IconButton>
                 <MoreVertIcon/>
            </IconButton>

            
            </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcontainer">
                <SearchOutlined/>
                <input placeholder="Search or Start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
            <Sidebarchat addnewchat/>
            {rooms.map(room=>(
                <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
    )) }
            </div>
        </div>
    )
}

export default Sidebar
