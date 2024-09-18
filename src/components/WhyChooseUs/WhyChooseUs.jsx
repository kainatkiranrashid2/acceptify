import { motion } from "framer-motion";
import { useRef } from "react";
import ClaimCard from "../reuseable_components/ClaimCard";
const WhyLsaPayValues = [
  {
    id: 0,
    icon: {
      src: "/assets/why_choose_us/pci.png",
      alt: "pci",
    },
    heading: "Simplify Your PCI",
    details:
      "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
  },
  {
    id: 1,
    icon: {
      src: "/assets/why_choose_us/offline.png",
      alt: "no_wifi_svg",
    },
    heading: "Online / Offline",
    details:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
  },
  {
    id: 2,
    icon: {
      src: "/assets/why_choose_us/ios.png",
      alt: "online_svg",
    },
    heading: "iOS, Android or Windows",
    details:
      "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), LSAPay simply integrates and supports all platforms.",
  },
  {
    id: 3,
    icon: {
      src: "/assets/why_choose_us/accept_wristbands.png",
      alt: "Accept Wristbands",
    },
    heading: "Accept Wristbands",
    details:
      "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
  },

  {
    id: 4,
    icon: {
      src: "/assets/why_choose_us/accept_cards.png",
      alt: "Accept Cards/Wallets",
    },
    heading: "Accept Cards/Wallets",
    details:
      "Swipe, tap or insert. LSAPay safely accepts electronic payments whether your customers choose credit cards or e-wallets to run transactions.  ",
  },
  {
    id: 5,
    icon: {
      src: "/assets/why_choose_us/configurable_data.png",
      alt: "guarantee_svg",
    },
    heading: "Configurable Data",
    details:
      "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name – whatever is important to you and your customer.",
  },

  {
    id: 6,
    icon: {
      src: "/assets/why_choose_us/global_payments.png",
      alt: "database_svg",
    },
    heading: "Global Payments",
    details:
      "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring your own processors or we can help you select one.",
  },
  {
    id: 7,
    icon: {
      src: "/assets/why_choose_us/beautiful_branding.png",
      alt: "Beautiful Branding",
    },
    heading: "Beautiful Branding",
    details:
      "Represent your brand anywhere you take transactions. Brandable cases. Your Colors, Your logo.",
  },
  {
    id: 8,
    icon: {
      src: "/assets/why_choose_us/recapture_engine.png",
      alt: "Recapture Engine  ",
    },
    heading: "Recapture Engine",
    details:
      "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  // const [isMobile, setIsMobile] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["-2.5 1", "0.6 1"],
  // });
  // useEffect(() => {
  //   const checkIfMobile = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   checkIfMobile();
  //   window.addEventListener("resize", checkIfMobile);

  //   return () => window.removeEventListener("resize", checkIfMobile);
  // }, []);

  return (
    <motion.div ref={ref} className="container  rounded-3xl ">
      <div className="grid grid-cols-3 gap-10 ">
        {WhyLsaPayValues.map((item) => (
          <ClaimCard
            key={item.id}
            icon={item.icon}
            heading={item.heading}
            details={item.details}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
