import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
              <img
              className="profileCoverImg"
              src="assets/ilu3.jpg"
              alt=""
              />
            <img  className="profileUserImg" src="assets/tony.jpeg" alt="" />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Toni Starck</h4>
                  <span className="profileInfoDesc"> I am Fe Man || Ex CEO at Starck Insdustries</span>
              </div>
            
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
