import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//template_g4wee8p
//service_xr6k9q2
//xGrep2NoXk9bGhNsz

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xr6k9q2",
        "template_sk1q5ic",
        {
          from_name: form.name,
          to_name: `Satyam Shivam`,
          from_email: form.email,
          to_email: `satyamdk2927@gmail.com`,
          message: form.message,
        },
        "xGrep2NoXk9bGhNsz"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
            {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
              style: { backgroundColor: "#915eFF", color: "white" },
              progressStyle: { background: "white" },
              icon: "✅", //overriding default green and red color toasts
            }
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            style: { backgroundColor: "white", color: "#915eFF" },
            progressStyle: { background: "#915eFF" },
            icon: "⚠️",
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl mx-50"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          <span className="text-[#915eFF]">Contact.</span>
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#915eFF] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-[#444] focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] outline-none font-medium transition-all duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#915eFF] font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-[#444] focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] outline-none font-medium transition-all duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#915eFF] font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-[#444] focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] outline-none font-medium transition-all duration-200"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915eFF] hover:bg-[#7e4ee0] transition-all duration-200 ring-2 ring-[#915eFF] hover:ring-offset-2 hover:ring-offset-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="custom-toast"
          bodyClassName="custom-toast-body"
          progressClassName="custom-progress-bar"
        />
      </motion.div>

      <motion.div
        ref={ref}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mr-50"
      >
        {inView && <EarthCanvas />}
      </motion.div>
    </div>
  );
};

export default Contact;
