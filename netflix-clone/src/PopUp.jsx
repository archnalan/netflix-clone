import YouTube from "react-youtube";
import PropTypes from "prop-types";
import "./PopUp.css";

const PopUp = ({ trailerUrl, handleClose }) => {
  if (!trailerUrl) return null;

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="popUp" onClick={handleClose}>
      <div className="popUp_content" onClick={(e) => e.stopPropagation()}>
        <span className="popUp_close" onClick={handleClose}>
          &times;
        </span>
        <YouTube videoId={trailerUrl} opts={opts} />
      </div>
    </div>
  );
};
PopUp.propTypes = {
  trailerUrl: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};
export default PopUp;
