import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { basicInView } from "../../constants/animations";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="section blue-bg">
        <div className="container">
          <motion.div className="basic-content">
            <motion.h1
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h2"
            >
              Terms and conditions
            </motion.h1>
            <motion.p
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel eros vitae diam egestas lacinia. Vivamus id fermentum sem, nec
              lacinia felis. Nullam gravida justo quis sapien euismod, eget
              vehicula urna tempus. Nullam sit amet urna ornare, pulvinar nibh
              mollis, malesuada sem. Sed dolor diam, fermentum et ullamcorper
              ac, pulvinar eu nibh. Donec neque purus, egestas quis interdum ac,
              feugiat eget velit. Nam arcu libero, semper in enim sed, auctor
              interdum nisl.
            </motion.p>
            <motion.p
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Integer aliquet ultrices sapien, nec feugiat ligula convallis eu.
              Nam vel blandit sapien. Duis interdum ultrices libero eu
              sollicitudin. Duis vulputate vulputate odio, at egestas diam
              accumsan non. Nam et justo fringilla, commodo risus vitae, blandit
              tellus. Praesent sed neque vulputate, eleifend lectus eu, volutpat
              sapien. Duis pulvinar congue libero, mollis varius orci blandit
              eget. Nulla facilisi. Phasellus dictum eros a risus rhoncus
              elementum. Nullam tincidunt justo ac est tincidunt ultrices. Ut
              facilisis ullamcorper urna sit amet rhoncus.
            </motion.p>
            <motion.p
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </motion.p>

            <motion.div
              variants={basicInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link className="hero-cta" to="/">
                Go to homepage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
