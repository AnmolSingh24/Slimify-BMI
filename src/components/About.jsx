import { motion } from "framer-motion"
import AboutImg from "../assets/About.jpg"
import { ABOUT } from "../constants"

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
            <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                src={AboutImg} alt={AboutImg} className="lg:h-[26rem] -mb-28 lg:mb-0" />
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="lg:w-[35rem] mt-20">
                <h1 className="text-xl lg:text-4xl lg:pt-10 text-neutral-800 font-semibold mb-8">What your BMI result means ?</h1>
                {ABOUT.map((about, index) => (
                    <div key={index}>
                        <p className="text-xs lg:text-base font-semibold text-neutral-400 text-justify">{about.aboutBMI}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default About