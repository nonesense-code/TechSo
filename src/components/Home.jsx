import React, { useEffect } from "react";
import BulbLogo from "../../src/assets/images/BulbLogo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    gsap.to("#navbar", {
      backgroundColor: "#000",
      height: "72px",
      duration: 0.2,
      scrollTrigger: {
        trigger: "#navbar",
        start: "top 0%",
        end: "top -11%",
        scrub: 0.3,
        // markers: true,
      },
    });

    gsap.to("#main", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -40%",
        scrub: 2,
      },
    });
    window.addEventListener(
      "mousemove",
      (e) => {
        const cursor = document.getElementById("cursor");
        cursor.style.display = "block";
        cursor.style.left = e.x + "px";
        cursor.style.top = e.y + "px";
        const cursor_blur = document.getElementById("cursor-blur");
        cursor_blur.style.display = "block";
        cursor_blur.style.left = e.x + "px";
        cursor_blur.style.top = e.y + "px";
      },
      []
    );
  });

  return (
    <>
      <div
        className="navbar fixed z-50 flex justify-between px-4 h-22 py-1 w-full text-white"
        id="navbar"
      >
        <div className="flex items-center justify-evenly w-full">
          <div className="h-20 w-20 select-none">
            <img src={BulbLogo} alt="img" />
          </div>
          {["BOD", "Event", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                color: "#95C11E",
                duration: 2,
              }}
              className="text-2xl uppercase font-bolder"
            >
              <Link to={`${item.toLowerCase().split(" ").join("")}`}>
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        id="cursor"
        className="h-8 w-8 rounded-full bg-[#E89A19] fixed blur-[2px] z-50 -translate-x-1/2 -translate-y-1/2 hidden"
      ></div>
      <div
        id="cursor-blur"
        className="h-52 w-52 rounded-full bg-[#E89A19] fixed blur-[50px] -translate-x-1/2 -translate-y-1/2 hidden"
      ></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1639327380081-bf86fc57a7a5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center fixed -z-10 inset-0 object-cover"></div>
      <div className="pt-52" id="main">
        <div className="flex flex-col items-center gap-4 text-white">
          <h1 className="heading relative uppercase text-[80px] font-extrabold whitespace-nowrap overflow-hidden">
            Sustainable. Solutions.
          </h1>
          <h1 className="text-4xl font-extrabold">Welcome to Techso</h1>
          <h1 className="mt-2 text-3xl font-semibold">
            Serving society with innovative, reliable technology.
          </h1>
        </div>

        <div className="marquee relative w-full overflow-hidden hidden md:flex text-white mt-52">
          <div className="relative w-full h-24 sm:h-full flex items-center justify-center">
            <div className="relative w-full py-2 overflow-hidden">
              <div className="flex whitespace-nowrap text-[100px] sm:text-[130px] font-extrabold">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="leading-none pl-12"
                >
                  <h4>WE ARE TechSo!</h4>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center text-white justify-center pt-32 w-full px-20 gap-10 py-20">
          <div className="w-[25%] rounded-xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 w-[50%] items-center justify-center text-center">
            <div>
              <h1 className="flex text-5xl text-white font-extrabold">
                ABOUT US
              </h1>
            </div>
            <div>
              <p className="para1 leading-2">
                TechSo stands out as a beacon of tech support and education
                because of our unwavering commitment to excellence and our
                genuine passion for technology. Unlike other service providers,
                we prioritize building strong relationships with our clients and
                addressing their unique needs with tailored solutions.
              </p>
            </div>
          </div>
          <div className="w-[25%] rounded-xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex pt-20 justify-evenly px-10 py-4">
          <div className="h-[500px] w-[25%]">
            <img
              src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="h-[500px] w-[25%]">
            <img
              src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="h-[500px] w-[25%]">
            <img
              src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
