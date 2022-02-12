import "./rightbar.css";
import{Posts, Users} from "../../dummyData";

export default function Rightbar({profile}) {
  const HomeRightBar = () =>{
    return(
      <> 
      <hr className="RightbarHr"/>
      <h4 className="rightbarTitle">User Info</h4>
     <div className="rightbarInfo">
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">City:</span>
         <span className="rightbarInfoValue">Manhattan</span>
       </div>

       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">From:</span>
         <span className="rightbarInfoValue">New York, United States</span>
       </div>

       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Education</span>
         <span className="rightbarInfoValue">Graduation from MITt</span>
       </div>

       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Relationship:</span>
         <span className="rightbarInfoValue">Married</span>
       </div>

       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Fun fact:</span>
         <span className="rightbarInfoValue">Handling an IQ of 186 on a daily basis :)</span>
       </div>
       <hr className="RightbarHr"/>
         
       <div className="birthdatContainer">
          <img className="birthdayImg" src="/assets/cake.jpeg" alt="" />
          <span className="birthdayText">
            <b>Steeve </b>and<b> 2 other friends</b> have a birthday today. Wish
            them early.
          </span>
       </div>
       <hr className="RightbarHr"/>
     
        </div>
        <img className="rightbarAd" src="assets/maleAd.jpeg" alt="" />
        <hr className="RightbarHr"/>
        <img className="rightbarAd" src="assets/coupleAd.jpeg" alt="" />
        <hr className="RightbarHr"/>
        <img className="rightbarAd" src="assets/femaleAd.jpeg" alt="" />
        <hr className="RightbarHr"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList"><li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/carol.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Caroll</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/thorr.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Thhor</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/loki.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Loki</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/scarlett.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Scarlet Witchh</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/bp.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Kilmongerr</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/shang.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shawnn</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/peter.jpeg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Petter</span>
          </li>
           </ul>
           <hr className="RightbarHr"/>
      </>
    )
  }
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">

        {/* <profileRightBar/> */}

        <HomeRightBar/>
         

        {/* {Users.map(u => (
              <Online key={u.id} user={u}/>
          ))}  */}

    
      </div>
    </div>
  );
}
