import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css"

export default function Home(){
    return(
      <>
        <Topbar/>
        <div className="homeContainer">
           <Sidebar/>
           <Feed/>
           <Rightbar/>
        </div>
        
      
      
      </>
    

    )
}