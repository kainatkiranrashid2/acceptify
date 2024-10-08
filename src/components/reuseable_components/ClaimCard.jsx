import PropTypes from "prop-types";

const ClaimCard = ({ icon, heading, details }) => {
  console.log(icon);
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white px-8 flex flex-col items-start">
      <div className="absolute -top-[11rem] -right-28 md:-top-[10rem] md:-right-28 lg:-top-40 lg:-right-16 w-64 h-64 border border-[#E1E1E1] rounded-full"></div>
      <div className="my-6 bg-white flex flex-col items-start rounded-2xl">
        <div
          className={`${
            icon.alt === "online_svg" ? "w-[100px]" : "w-[62px]"
          } h-[62px]`}>
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1
            className="text-[19px]/[24px] sm:text-[21px]/[26px] md:text-[24px]/[30px] xl:text-[29px]/[36.25px] 2xl:text-[32px]/[40px]   font-semibold text-dark text-left  font-PP_Mori mb-[8px] mt-[18px]"
            style={{ letterSpacing: "-1px" }}>
            {heading}
          </h1>
          <p className="text-[15px]/[24px] sm:text-[14.5px]/[23px] md:text-[18px]/[29px] xl:text-[18px]/[30px]  text-dark text-left font-[500] font-PP_Mori">
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
