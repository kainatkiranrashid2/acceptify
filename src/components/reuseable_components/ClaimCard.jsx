import PropTypes from "prop-types";

const ClaimCard = ({ icon, heading, details }) => {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white px-8 flex flex-col items-start">
      <div className="absolute -top-40 -right-16 w-64 h-64 border border-[#E1E1E1] rounded-full"></div>
      <div className="my-6 bg-white flex flex-col items-start rounded-2xl">
        <div className="w-[62px] h-[62px]">
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1
            className="text-h4 text-dark text-left font-bold font-PP_Mori mb-[8px] mt-[18px]"
            style={{ lineHeight: "40px", letterSpacing: "-1px" }}>
            {heading}
          </h1>
          <p className="text-[18px] text-dark text-left font-[500] font-PP_Mori">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

ClaimCard.propTypes = {
  icon: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  heading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ClaimCard;
