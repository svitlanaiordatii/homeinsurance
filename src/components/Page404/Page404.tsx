import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Page404.css";
import { motion } from "framer-motion";
import { basicAnimation } from "../../constants/animations";
import HomeAnim from "../Homepage/HomeAnim";
const Page404 = () => {
  return (
    <>
      <Navbar />
      <div className="section blue-bg">
        <HomeAnim />
        <div className="container">
          <motion.div
            className="basic-content"
            variants={basicAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={basicAnimation} custom={1} className="h1-404">
              Page doesn't exist
            </motion.h1>
            <motion.p variants={basicAnimation} custom={2}>
              The page you're looking for deosn't exist.
            </motion.p>
            <motion.div variants={basicAnimation} custom={3}>
              <Link className="hero-cta" to="/">
                Go back home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page404;
