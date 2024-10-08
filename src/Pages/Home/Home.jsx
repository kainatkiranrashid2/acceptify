import FlexCaseAnimation from "../../components/FlexcaseAnimation/FlexcaseSequence";
import Hero from "../../components/Hero/Hero";
import OurClients from "../../components/OurClients/OurClients";
import OurIndustries from "../../components/OurIndustries/OurIndustries";
import SectionHeading from "../../components/reuseable_components/SectionHeading";
import ScrollAnimationComponent from "../../components/ScrollAnimationComponent/ScrollAnimationComponent";
import ScrollSequence from "../../components/ScrollSequence/ScrollSequence";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <OurClients />
        <div className="bg-[#F3F4F2] py-[54px] sm:py-[68px]  py:mb-[61px] py:mb-[76px]">
          <SectionHeading mainText="Why choose Acceptify" />
          <WhyChooseUs />
        </div>
        <OurIndustries />

        <div className="bg-[#FFFFFF] dark:bg-[#FFFFFF]">
          {/* <ScrollSequence /> */}
          <FlexCaseAnimation />
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#FFFFFF]">
          {/* <ScrollAnimationComponent /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
