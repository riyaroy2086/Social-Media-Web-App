import "./post.css";
import { MoreVert, Morevert } from "@material-ui/icons";
import{Posts, Users} from "../../dummyData";
import {useState} from "react";

export default function Post({post}) {
  const[like,setLike] = useState(post.like)
  const[isLiked,setIsLiked] = useState(false)
  const likeHandler = ()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
  }
  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img className="postProfileImg" src={post.profilePicture} alt="" />
            <span className="postUserName">{ post.username}</span>
            {/* <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span> */}
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
            {/* Hey Mates !! View from my balcony hehe */}
          </span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.jpeg" onClick={likeHandler}  alt="" className="likeIcon" />
            <img src="/assets/love.jpeg" onClick={likeHandler} alt="" className="likeIcon" />
            <img src="/assets/wow.jpeg"  onClick={likeHandler} alt="" className="likeIcon" />
            <img src="/assets/care.jpeg"  onClick={likeHandler} alt="" className="likeIcon" />
            <span className="postlikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
