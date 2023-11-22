import "./index.css";

const Card = ({ title, image, follows, likes }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        {follows && <span className="">{follows} Follows</span>}
        {likes && <span className="">{likes} Likes</span>}
      </div>
      {title}
    </div>
  );
};
export default Card;
