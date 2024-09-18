import { useState } from "react";
import PropTypes from "prop-types";

const TextComponent = ({ text, limit = 50 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const handleToggle = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.slice(0, limit) : text;

  return (
    <div className="">
      <p className="text-14px text-dark font-medium ">
        {displayText}
        {isTruncated && text.length > limit ? "... " : ""}
        {text.length > limit && (
          <button onClick={handleToggle} className="text-inherit">
            {isTruncated ? " Read more" : " Read less"}
          </button>
        )}
      </p>
    </div>
  );
};

export default TextComponent;
TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.number,
};
