import { useState } from "react";
import Icon from "../assets/WebIcon.png";
import { SUMMARY } from "../constants";
import BMIForm from "./BMIForm";
import { motion } from "framer-motion";

const Container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const Hero = () => {
    const [bmi, setBmi] = useState(null);

    const handleBmiChange = (bmiValue) => {
        setBmi(bmiValue);
    };

    return (
        <div className='pb-4'>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-full lg:w-1/2 p-6 lg:p-0 lg:-mt-28'>
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1 }}
                        className="flex justify-start items-center gap-5">
                        <img src={Icon} alt="Icon" className="h-12" />
                        <h1 className='pb-0 text-4xl text-black font-medium tracking-tight'>Slimify</h1>
                    </motion.div>
                    <div className='flex flex-col items-center lg:items-start mt-10 lg:mt-36 px-4 lg:px-36'>
                        <motion.span
                            variants={Container(0)}
                            initial="hidden"
                            animate="visible"
                            className='text-black bg-clip-text text-2xl lg:text-4xl font-bold tracking-tight mb-10 text-center lg:text-left'>Body Mass Index Calculator</motion.span>
                        {SUMMARY.map((desc, index) => (
                            <motion.p
                                key={index}
                                variants={Container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className='my-2 max-w-xl py-6 text-slate-400 font-semibold tracking-tighter text-center lg:text-left'>
                                {desc.description}
                            </motion.p>
                        ))}
                    </div>
                </div>
                <div className='w-full lg:w-1/2 p-4 lg:p-0 lg:mt-0'>
                    <BMIForm onBmiChange={handleBmiChange} />
                </div>
            </div>
        </div>
    );
}

export default Hero;