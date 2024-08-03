import React from "react";
import { easeInOut, motion } from "framer-motion";
import image1 from "../assets/images/img-kaushal kadariya.JPG";
import image2 from "../assets/images/img-Aayush Karn.jpg";
import image3 from "../assets/images/img-Alisha Ghimire.jpg";
import image4 from "../assets/images/img-Himanshu Mahaseth.JPG";
import image5 from "../assets/images/img-Ishan kharel.jpg";
import image6 from "../assets/images/img-Manish Singh Mahato.jpg";
import image7 from "../assets/images/img-Nandini Karna.jpg";
import image8 from "../assets/images/img-Peshal Parajuli.jpg";
import image9 from "../assets/images/img-Ronen Acharya.jpg";
import image10 from "../assets/images/img-Ram Julum Yadav.jpg";
import image11 from "../assets/images/img-Rivash Shrestha.jpg";
import image13 from "../assets/images/img-Samriddhi Basyal.jpg";
import image14 from "../assets/images/img-Sumit.jpg";


const directors = [
  {
    name: "Peshal Parajuli",
    image: image8,
    post: "President",
    email: "feedback.krishal@gmail.com",
  },
  {
    name: "Manish Singh Mahato",
    image: image6,
    post: "Founding Director",
    email: "anishkushwaha1116@gmail.com",
  },
  {
    name: "Kaushal Kadariya",
    image: image1,
    post: "Technician Head",
    email: "kaushalkadariya2062@gmail.com",
  },

  {
    name: "Samriddhi Basyal",
    image: image13,
    post: "Social Catalyst",
    email: "samriddhi.basyal2007@gmail.com",
  },
  {
    name: "Ronen Acharya",
    image: image9,
    post: "Mentor",
    email: "ronenacharya68@gmail.com",
  },
  {
    name: "Himanshu Mahaseth",
    image: image4,
    post: "Coordinator",
    email: "thegr8empires@gmail.com",
  },
  {
    name: "Ram Julum Yadav",
    image: image10,
    post: "Program Incharge",
    email: "ram@gmail.com", //email
  },
  {
    name: "Nandini Karna",
    image: image7,
    post: "Committee Head",
    email: "abc123@gmail.com", //email
  },
  {
    name: "Rivash Shrestha",
    image: image11,
    post: "sponsorship Director",
    email: "rivashshrestha5@gmail.com",
  },
  {
    name: "Alisha Ghimire",
    image: image3,
    post: "Ambassador Head",
    email: "alsagmre@gmail.com",
  },
  {
    name: "Aayush Karn",
    image: image2,
    post: "Secretary",
    email: "akkarn15@gmail.com",
  },
  {
    name: "Sumit Subedi",
    image: image14,
    post: "Treasurer",
    email: "subedisumit40@gmail.com",
  },
  {
    name: "Ishan kharel",
    image: image5,
    post: "Ambassador Head",
    email: "ishankharel641@gmail.com",
  },
];

function Bod() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-col flex-wrap flex items-center justify-center"
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Board of Directors
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 whitespace-nowrap">
            Meet the team leading our club to success.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="flex flex-wrap gap-4 p-10 items-center justify-center"
        >
          {directors.map((item, index) => (
            <motion.div
              whileHover={{
                scale: 1.02,
                duration: 0.4,
                border: "1px yellow dashed",
              }}
              className="bg-gray-400/40 rounded-xl flex items-center flex-col justify-evenly w-72 h-72 cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="h-32 w-32 rounded-full border-2 border-black object-cover object-center"
              />
              <h1 className="text-lg font-semibold tracking-tight">
                {item.name}
              </h1>
              <div className="text-md text-blue-600 font-bold">
                {item.email}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Bod;
