import Hero from "../../components/Hero/Hero";
import OurClients from "../../components/OurClients/OurClients";
import OurIndustries from "../../components/OurIndustries/OurIndustries";
import SectionHeading from "../../components/reuseable_components/SectionHeading";
import ScrollAnimationComponent from "../../components/ScrollAnimationComponent/ScrollAnimationComponent";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const items = [
    {
      id: 0,
      icon: {
        src: "/assets/whylsa/lock_svg.svg",
        alt: "online_svg",
      },
      title: "Simplify Your PCI",
      details:
        "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
    },
    {
      id: 1,
      icon: {
        src: "/assets/whylsa/no_wifi_svg.svg",
        alt: "no_wifi_svg",
      },
      title: "Online / Offline",
      details:
        "No connection, no problem. acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
    },
    {
      id: 2,
      icon: {
        src: "/assets/whylsa/online_svg.svg",
        alt: "online_svg",
      },
      title: "iOS, Android or Windows",
      details:
        "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), acceptify simply integrates and supports all platforms.",
    },
    {
      id: 3,
      icon: {
        src: "/assets/whylsa/wristband_svg.svg",
        alt: "Accept Wristbands",
      },
      title: "Accept Wristbands",
      details:
        "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
    },
  ];
  console.log(items);
  return (
    <>
      <div>
        <Hero />
        {/* <OurClients classText="grayscale" /> */}
        <OurClients />
        <div className="bg-[#F3F4F2] py-[54px] sm:py-[68px]  py:mb-[61px] py:mb-[76px]">
          <SectionHeading mainText="Why choose Acceptify" />
          <WhyChooseUs />
        </div>
        {/* <OurIndustries /> */}
        <div className="bg-[#FFFFFF] dark:bg-[#FFFFFF]">
          <ScrollAnimationComponent />
        </div>
        {/* <div className="bg-[#F6F6F6] py-[110px]">
          <SectionHeading mainText="Why choose Acceptify" />
          <WhyChooseUs />
        </div> */}
      </div>
    </>
  );
};

export default Home;
