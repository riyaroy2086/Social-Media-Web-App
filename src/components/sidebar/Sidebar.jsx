import "./sidebar.css"
import {RssFeed,ChatBubbleOutline,GroupAddOutlined, PlayCircleFilled, Bookmark,HelpOutline,WorkOutline,Event,School} from "@material-ui/icons"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItem2">Feed</span>
                    </li>
 
                     <li className="sidebarListItem">
                        < ChatBubbleOutline className="sidebarIcon"/>
                        <span className="sidebarListItem2">Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItem2">Videos</span>
                    </li>  

                    <li className="sidebarListItem">
                        <GroupAddOutlined className="sidebarIcon"/>
                        <span className="sidebarListItem2">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItem2">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItem2">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItem2">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        < Event className="sidebarIcon"/>
                        <span className="sidebarListItem2">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItem2">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/peter.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Petter </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/shang.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Shawnn  </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/thorr.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Thhor </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/strange.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Steephen </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/hulk.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Dr. Bannor </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/loki.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Lokii </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/nat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" > Black Widoww </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/gamora.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" > Gammora </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/scarlett.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Scarlet Witchh </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/carol.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Caroll </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/bp.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >T'Chala </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/ws.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Buckky </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/okai.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Okoyee </span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/starlord.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName" >Starrlord </span>
                    </li>

                  
                </ul>
            </div>
          
        </div>
    )

}
