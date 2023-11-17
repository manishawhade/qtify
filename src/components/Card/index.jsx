import "./index.css";

const Card = ({ title, image, follows }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <span className="">{follows} Follows</span>
      </div>
      {title}
    </div>
  );
};
export default Card;
