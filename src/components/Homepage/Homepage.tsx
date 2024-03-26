import "./Homepage.css";
import card1 from "@/assets/img/card1.svg";
import card2 from "@/assets/img/card2.svg";
import card3 from "@/assets/img/card3.svg";
import tick from "@/assets/img/tick.svg";
import ico1 from "@/assets/img/ico1.svg";
import ico2 from "@/assets/img/ico2.svg";
import ico3 from "@/assets/img/ico3.svg";
import ico4 from "@/assets/img/ico4.svg";
import ico5 from "@/assets/img/ico5.svg";
import ico6 from "@/assets/img/ico6.svg";
import ico7 from "@/assets/img/ico7.svg";
import ico8 from "@/assets/img/ico8.svg";
import logoWhite from "@/assets/img/logo-white.svg";
import HomeForm from "./HomeForm";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { basicAnimation, basicInView } from "../../constants/animations";
import HomeAnim from "./HomeAnim";
import { Link } from "react-router-dom";
import DialogHome from "../Dialog/DialogHome";

const Homepage = () => {
  const [zip, setZip] = useState("");
  const date = new Date();
  return (
    <>
      <Navbar />

      <div className="blue-bg">
        <HomeAnim />
        <div className="container">
          <motion.section
            className="hero-content"
            variants={basicAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={basicAnimation} className="h1 hero-h1">
              Compare
              <br />
              <span className="red-text">Insurance Offers</span>
              <br />
              From <span className="blue-text">Trusted</span> Providers Near You
            </motion.h1>
            <motion.div variants={basicAnimation} custom={2}>
              <HomeForm formLocation="hero" zip={zip} setZip={setZip} />
            </motion.div>
          </motion.section>

          <motion.section
            variants={basicAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block1-wrap"
            >
              <h2 className="h2 home-h2">
                Fast, <span className="red-text">Free</span> Home Insurance
                Quotes
              </h2>
              <p>
                With so many home insurance companies competing for your
                business, we'll find you{" "}
                <u>the best deal in your area for FREE!</u> Compare up to four
                competing quotes based on your specific home insurance needs and
                you will SAVE!
              </p>
            </motion.div>

            <div className="block2-cards-wrap">
              <motion.div
                variants={basicInView}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="single-card">
                  <div className="block2-title">
                    <img className="tick" src={tick} alt="tick" />
                    <h3 className="h3-cards">
                      Qualify for <br />
                      multi-policy discounts
                    </h3>
                  </div>
                  <img className="block2-card-img" src={card1} alt="house1" />
                </div>
              </motion.div>
              <motion.div
                variants={basicInView}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="single-card">
                  <div className="block2-title">
                    <img className="tick" src={tick} alt="tick" />
                    <h3 className="h3-cards">
                      Protect your personal belongings
                    </h3>
                  </div>
                  <img className="block2-card-img" src={card2} alt="house1" />
                </div>
              </motion.div>

              <motion.div
                variants={basicInView}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="single-card">
                  <div className="block2-title">
                    <img className="tick" src={tick} alt="tick" />
                    <h3 className="h3-cards">
                      Replace all your stolen property
                    </h3>
                  </div>
                  <img className="block2-card-img" src={card3} alt="house1" />
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <section className="container">
        <div className="block3-features-wrap">
          <motion.h2
            className="h2 home-h2"
            variants={basicInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Does Your Home Insurance Policy Have You{" "}
            <span className="red-text">Covered?</span>
          </motion.h2>

          <div className="block3-features">
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico1} alt="ico" />
              <p className="p-features">Flood Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico2} alt="ico" />
              <p className="p-features">Mold Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico3} alt="ico" />
              <p className="p-features">Home Repair Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico4} alt="ico" />
              <p className="p-features">Theft Insurance</p>
            </motion.div>

            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico5} alt="ico" />
              <p className="p-features">Liability Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico6} alt="ico" />
              <p className="p-features">Vacant Home Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico7} alt="ico" />
              <p className="p-features">High-Value Home Insurance</p>
            </motion.div>
            <motion.div
              className="block3-single-feature"
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img className="feature-ico" src={ico8} alt="ico" />
              <p className="p-features">Land Insurance</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-wrap">
        <div className="container">
          <motion.section
            className="bottom-cta-wrap"
            variants={basicInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="h1 bottom-h1">
              Compare Insurance Offers Near You Now
            </h2>
            <HomeForm formLocation="footer" zip={zip} setZip={setZip} />
          </motion.section>

          <div className="home-footer-divider" />

          <footer className="footer-wrap">
            <img className="logo-footer" src={logoWhite} alt="Logo" />
            <div className="footer-text">
              <Link to={"/terms"} className="footer-link">
                Terms and Privacy Policy
              </Link>
              <div>|</div>
              <div>Created by</div>
              <a
                className="footer-link"
                href="https://www.upwork.com/freelancers/~01bea2dc183c19e97a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Svitlana Iordatii
              </a>
              <div>©{date.getFullYear()}</div>
            </div>
          </footer>
        </div>
      </div>

      <DialogHome />
    </>
  );
};

export default Homepage;
