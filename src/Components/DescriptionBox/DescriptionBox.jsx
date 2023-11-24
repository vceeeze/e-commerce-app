import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam nisi placeat explicabo odio incidunt autem natus, voluptates
          itaque est similique. Nostrum, neque repudiandae sint voluptate eius
          labore deleniti eligendi praesentium nihil autem quis dolorem illum
          vero expedita nesciunt temporibus!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
