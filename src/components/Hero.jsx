import { useState } from "react";
import Icon from "../assets/WebIcon.png"
import { SUMMARY } from "../constants"
import BMIForm from "./BMIForm"

const Hero = () => {
    const [bmi, setBmi] = useState(null);

    const handleBmiChange = (bmiValue) => {
        setBmi(bmiValue);
    };

    return (
        <>
            <div className='pb-4 lg:mb-35'>
                <div className='flex justify-center items-center'>
                    <div className='w-full lg:w-1/2'>
                        <div className="flex justify-start items-center gap-5">
                            <img src={Icon} alt={Icon} className="h-12" />
                            <h1 className=' pb-6 text-6xl text-black font-medium tracking-tight lg:mt-5 lg:text-2xl'>Slimify</h1>
                        </div>
                        <div className='flex flex-col items-center lg:items-start my-36 mx-36'>
                            <span className='text-black bg-clip-text text-4xl font-bold tracking-tight mb-10'>Body Mass Index Calculator</span>
                            {SUMMARY.map((desc, index) => (
                                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                    <p className='my-2 max-w-xl py-6 text-slate-400 font-semibold tracking-tighter'>
                                        {desc.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <BMIForm onBmiChange={handleBmiChange} />
                </div>
            </div>
        </>
    )
}

export default Hero