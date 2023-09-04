import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

//template_wy7by6n
//service_g0r170q
//wvUHWI1T3jp2k439K
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_g0r170q",
        "template_wy7by6n",
        {
          from_name: form.name,
          to_name: "Adrian",
          from_email: form.email,
          to_email: "abdullahbinazeem06@gmail.com",
          message: form.message,
        },
        "wvUHWI1T3jp2k439K"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will talk to you soon !");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);

            console.log(error);

            alert("something is going crazzy aahahahha");
          }
        );
      });
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact me.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What is your message?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto grow md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="mt-[5em]">
        <h3 className={styles.sectionHeadText}>Contacts Info.</h3>
        <motion.div className="bg-black-200 p-10 rounded-3xl mt-6 w-full justify-evenly gap-10  flex-wrap md:flex">
          <div>
            <h4 className={styles.sectionSubText}>Email</h4>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="mailto:abdullahbinazeem06@gmail"
                className="flex items-center gap-4"
              >
                <AiFillMail size={32} />
                <p className="text-white tracking xs:text-[16px] text-[12px]">
                  abdullahbinazeem06@gmail
                </p>
              </a>
            </div>
          </div>
          <div className="md:mt-0 mt-8">
            <h4 className={styles.sectionSubText}>Social</h4>
            <div className=" mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abdullah-azeem-6aa441227/ "
                className="flex items-center gap-4"
              >
                <AiFillLinkedin size={32} />
                <p className="text-white tracking xs:text-[16px] text-[12px]">
                  Linkedin
                </p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
