import "./topbar.css"
import { Search ,Person ,Chat , Notifications } from "@material-ui/icons"

export default function Topbar(){
    return(
        <div className = "topbarContainer">

            <div className="topbarLeft">
                <span className = "logo">We Connect</span>
            </div>

            <div className="topbarCenter">
                <div className = "searchbar">
                <Search className="searchIcon"/>
                <input placeholder = "Search" className = "searchInput" />
                </div>
            </div>

            <div className="topbarRight"> 
                 <div className="topbarlinks">
                     <span className="topbarLink">Homepage</span>
                     <span className="topbarLink">Timeline</span>
                     <span className="topbarLink">Sign up/Login in</span>
                     
                 </div>
                 <div className="topbarIcons">
                     <div className="topbarIconItem">
                         <Person/>
                     <span className="topbarIconBadge">3</span>
                     </div>
                     <div className="topbarIconItem">
                         <Chat/>
                     <span className="topbarIconBadge">2</span>
                     </div>
                     <div className="topbarIconItem">
                         <Notifications/>
                     <span className="topbarIconBadge">8</span>
                     </div>

                 </div>
                 <img src="/assets/tony.jpeg" alt="" className="topbarImage"/>
            </div>
        </div>
    )
}