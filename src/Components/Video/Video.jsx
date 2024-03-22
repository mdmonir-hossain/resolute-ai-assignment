import { useContext, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoSendSharp } from "react-icons/io5";

const Video = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const playerRef = useRef(null);

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    const currentTime = playerRef.current.getCurrentTime();
    setComments([...comments, { text: commentInput, time: currentTime }]);
    setCommentInput("");
  };
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <ReactPlayer
            ref={playerRef}
            url="https://resoluteaisoftware.in/static/media/facegenieMedia.f3923a8c50b38fc96f73.mp4"
            controls
          />
          <div>
            <div>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>
                    <span className="font-bold">{user?.displayName}</span>
                    <br />
                    <span>{comment.text}</span> -{" "}
                    <span>
                      {Math.floor(comment.time / 3600)}:
                      {Math.floor((comment.time % 3600) / 60)} :
                      {Math.floor(comment.time % 60)}
                    </span>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                value={commentInput}
                onChange={handleCommentInputChange}
                placeholder="Add comment..." required
              />
              <button onClick={handleCommentSubmit}>
                <IoSendSharp className="w-10" />
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
