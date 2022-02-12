import "./share.css"
import {PermMedia , Label , Room, EmojiEmotions} from "@material-ui/icons"

export default function share(){
    return (
    
            <div className="share">
                <div className="shreWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src="/assets/tony.jpeg" alt="" />
                        <input placeholder="What's on your mind ? Share !!" className="shareInput" />
                    </div>
                    <hr className="shareHr"/>

                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="#FF6363" className="shareIcon"/>
                                <span className="shareOptionText">Photo OR Video</span>
                            </div>

                            <div className="shareOption">
                                <Label htmlColor="#548CFF" className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>

                            <div className="shareOption">
                                <Room htmlColor="#91C483" className="shareIcon"/>

                                <span className="shareOptionText">Location</span>
                            </div>

                            <div className="shareOption">
                                <EmojiEmotions htmlColor="#FFE162 " className="shareIcon"/>
                                <span className="shareOptionText">Feelings</span>
                            </div>
                        </div>
                        <button className="shareButton">Share</button>

                    </div>

                </div>
            </div>

    

    )
}