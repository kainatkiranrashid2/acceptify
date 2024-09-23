import { IoIosArrowUp, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiArrowsOutBold } from "react-icons/pi";
import { HiOutlineInboxIn } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import ThemeToggle from "../reuseable_components/ThemeToggle";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TextComponent from "../reuseable_components/TextComponent";
import { FaE } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Payment Devices",
    path: "/",
  },
  {
    id: 2,
    title: "Payment Processing",
    path: "#",
  },
  {
    id: 3,
    title: "POS Solution",
    path: "#",
  },
  {
    id: 4,
    title: "Industries",
    path: "#",
    dropdown: {
      businessSolutions: [
        {
          icon: <BsArrowRepeat />,
          title: "Industries",
          description: "Analyze conversation",
        },
        {
          icon: <MdOutlineDashboardCustomize />,
          title: "Payment Processing",
          description: "Measure active usage",
        },
      ],
      industrySolutions: [
        {
          icon: <PiArrowsOutBold />,
          title: "POS Solution",
          description: "Find retention drivers",
        },
        {
          icon: <HiOutlineInboxIn />,
          title: "Back Office",
          description: "Maximize all customers",
        },
      ],
      insight: [
        { icon: "icon-land", title: "Land" },
        { icon: "icon-air", title: "Air" },
        { icon: "icon-sea", title: "Sea" },
      ],
      insightDescription:
        "Machine learning and product analytics...Machine learning and product analytics...Machine learning and product analytics...Machine learning and product analytics...Machine learning and product analytics... ",
    },
  },
  {
    id: 5,
    title: "Support",
    path: "#",
  },
  {
    id: 5,
    title: "Developer",
    path: "#",
  },
];

const Navbar = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef(null);
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768); // Assuming 768px is your breakpoint for mobile
  };
  useEffect(() => {
    checkIfMobile();

    const handleResize = () => {
      checkIfMobile();
      if (window.innerWidth >= 768) {
        setIsSolutionOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Toggle scroll lock when mobile menu opens/closes
    toggleScrollLock(isMobileMenuOpen);

    return () => {
      window.removeEventListener("resize", handleResize);
      toggleScrollLock(false); // Ensure scroll is enabled when component unmounts
    };
  }, [isMobileMenuOpen]); // Add isMobileMenuOpen to the dependency array
  const toggleScrollLock = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "";
    document.body.style.height = lock ? "100%" : "";
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSolutionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[82px]  relative z-50">
        <div className="container h-full flex justify-between items-center">
          {/* Logo section */}
          <div className="h-[62px] w-[62px] flex items-center">
            <img
              src="/assets/Logo_png.png"
              className="bg-transparent h-full w-auto object-contain"
              alt="lsapay_logo"
            />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-3">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="relative">
                  <Link
                    to={menu.path}
                    className="flex text-dark dark:text-white  justify-center items-center font-PP_Mori font-semibold py-2 px-3 text-[16px]  relative group"
                    onClick={() => {
                      if (menu.title === "Industries") {
                        setIsSolutionOpen(!isSolutionOpen);
                      }
                    }}>
                    {menu.title}
                    {menu.title === "Industries" && (
                      <span className="ml-1">
                        {isSolutionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex gap-[14px] items-center">
            <ThemeToggle />
            <motion.button
              className=" primary-btn flex items-center text-white text-[16px] font-bold !w-[139px] !h-[46px] py-[17.5px] px-6 rounded-lg font-PP_Mori"
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}>
              Get Started
            </motion.button>
          </div>
          {/* Mobile Hamburger menu section */}
          <div className="md:hidden">
            <FaEquals
              className="text-4xl text-white"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setMobileSubmenu(null);
              }}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white
              z-50 overflow-y-auto">
              <div className="container py-4">
                <ul className="space-y-4">
                  {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                      <div
                        className="flex justify-between items-center font-Inter font-semibold py-2 px-3 hover:text-primary cursor-pointer"
                        onClick={() => {
                          if (menu.title === "Industries") {
                            setMobileSubmenu(
                              mobileSubmenu === "Industries"
                                ? null
                                : "Industries"
                            );
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}>
                        <Link to={menu.path}>{menu.title}</Link>
                        {menu.title === "Industries" && (
                          <span
                            className={`transition-transform duration-300 ${
                              mobileSubmenu === "Industries" ? "rotate-180" : ""
                            }`}>
                            <IoIosArrowDown />
                          </span>
                        )}
                      </div>
                      {menu.title === "Industries" &&
                        mobileSubmenu === "Industries" && (
                          <div className="pl-6 mt-2 space-y-4">
                            <div>
                              <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                BUSINESS SOLUTIONS
                              </h3>
                              <ul className="space-y-2">
                                {menu.dropdown.businessSolutions.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start">
                                      <div className="mr-2 mt-1 flex justify-center items-center">
                                        {item.icon}
                                      </div>
                                      <div>
                                        <p className="text-[14px] text-dark font-Inter font-semibold">
                                          {item.title}
                                        </p>
                                        <p className="text-[12px] text-dark2 font-Space_Grotesk">
                                          {item.description}
                                        </p>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                INDUSTRY SOLUTIONS
                              </h3>
                              <ul className="space-y-2">
                                {menu.dropdown.industrySolutions.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start">
                                      <div className="mr-2 mt-1 flex justify-center items-center">
                                        {item.icon}
                                      </div>
                                      <div>
                                        <p className="text-[14px] text-dark font-Inter font-semibold">
                                          {item.title}
                                        </p>
                                        <p className="text-[12px] text-dark2 font-Space_Grotesk">
                                          {item.description}
                                        </p>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-2">
                                INDUSTRY SOLUTIONS
                              </h3>
                              <ul className="space-y-2">
                                {menu.dropdown.insight.map((item, index) => (
                                  <li key={index} className="flex items-center">
                                    <p className="text-dark font-semibold font-Inter">
                                      {item.title}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 relative isolate">
                                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                                  INSIGHT
                                </h3>
                                <img
                                  src="/assets/illustration.png"
                                  alt="illustration"
                                  className="w-full max-w-[200px] mb-4  h-full object-contain mx-auto relative"
                                />
                                <img
                                  src="/assets/ornament_top.png"
                                  alt="Ornament Top"
                                  className="w-5 max-w-20 absolute right-[-5px] top-[-30px] h-full object-contain mx-auto"
                                />
                              </div>
                              <div className=" mt-2">
                                <TextComponent
                                  text={menu.dropdown.insightDescription}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
                <button className="primary-btn px-4 py-2 rounded-lg mt-6 w-full">
                  Request a demo
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Solutions Dropdown - Outside the navbar */}
      <AnimatePresence>
        {isSolutionOpen && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 w-full bg-white shadow-lg p-6 z-40">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4">
              <div>
                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                  BUSINESS SOLUTIONS
                </h3>
                <ul>
                  {NavbarMenu.find(
                    (item) => item.title === "Industries"
                  ).dropdown.businessSolutions.map((item, index) => (
                    <li key={index} className="flex items-start mb-4">
                      <div className="mr-2 mt-1 flex justify-center items-center">
                        {item.icon}
                      </div>
                      {/* <i className={`${item.icon} mr-2`}></i> */}
                      <Link
                        onClick={() => {
                          console.log("----");
                          setIsSolutionOpen(!isSolutionOpen);
                        }}
                        className=""
                        to="">
                        <p className="text-[16px] text-dark font-Inter  font-semibold">
                          {item.title}
                        </p>
                        <p className="text-[14px] text-dark2 font-Space_Grotesk ">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                  INDUSTRY SOLUTIONS
                </h3>
                <ul>
                  {NavbarMenu.find(
                    (item) => item.title === "Industries"
                  ).dropdown.industrySolutions.map((item, index) => (
                    <li key={index} className="flex items-start mb-4">
                      <div className="mr-2 mt-1 flex justify-center items-center">
                        {item.icon}
                      </div>
                      <Link
                        to=""
                        onClick={() => {
                          console.log("----");
                          setIsSolutionOpen(!isSolutionOpen);
                        }}>
                        <p className="text-[16px] text-dark font-Inter  font-semibold">
                          {item.title}
                        </p>
                        <p className="text-[14px] text-dark2 font-Space_Grotesk ">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                  INDUSTRY SOLUTIONS
                </h3>
                <ul>
                  {NavbarMenu.find(
                    (item) => item.title === "Industries"
                  ).dropdown.insight.map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                      {/* <i className={`${item.icon} mr-2`}></i> */}
                      <Link
                        onClick={() => {
                          console.log("----");
                          setIsSolutionOpen(!isSolutionOpen);
                        }}
                        to=""
                        className="text-dark font-semibold font-Inter">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-Inter text-light_gray text-[12px] font-semibold mb-4">
                  INSIGHT
                </h3>
                <div className="relative isolate">
                  <img
                    src="/assets/illustration.png"
                    className="w-full max-w-[250px] h-full object-contain mx-auto"
                    alt="illustration"
                  />
                  <img
                    src="/assets/ornament_top.png"
                    className="w-5 max-w-20 absolute right-[-20px] top-[-60px] h-full object-contain mx-auto"
                    alt="illustration"
                  />
                </div>
                <div className="mt-4">
                  <TextComponent
                    text={
                      NavbarMenu.find((item) => item.title === "Industries")
                        .dropdown.insightDescription
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
