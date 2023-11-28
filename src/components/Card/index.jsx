import Tooltip from "@mui/material/Tooltip";
import "./index.css";
import { forwardRef } from "react";

const Card = (props) => {
  return (
    <>
      {props.songs && (
        <Tooltip title={`${props.songs.length} songs`} arrow placement="top">
          <div>
            <Component
              name={props.title}
              image={props.image}
              follows={props.follows}
              likes={props.likes}
            />
          </div>
        </Tooltip>
      )}
      {!props.songs && (
        <Component
          name={props.title}
          image={props.image}
          follows={props.follows}
          likes={props.likes}
        />
      )}
    </>
  );
};
export default Card;

const Component = forwardRef(({ name, image, follows, likes }, ref) => (
  <div className="card">
    <div className="card-img">
      <img src={image} alt={name} />
    </div>
    <div className="card-body">
      {follows && <span className="">{follows} Follows</span>}
      {likes && <span className="">{likes} Likes</span>}
    </div>
    {name}
  </div>
));
