import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>
         const {tweet: {user: image, name, handle}, timestamp, message} = props

return (
  <div className="tweet">
    <ProfileImage image={image}/>
    <div className="body">
      <div className="top">
        <User name={name} handle={handle} />
        <Timestamp timestamp={timestamp} />
      </div>
      <Message message={message} />
      <Actions />
    </div>

    <i className="fas fa-ellipsis-h"></i>
  </div>
);
}
export default Tweet;