import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import BMIResult from './BMIResult';
import { motion } from 'framer-motion';

const BMIForm = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters));
            setBmi(bmiValue.toFixed(2));
            setIsFlipped(true);
        } else {
            alert('Please enter valid weight and height');
        }
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full lg:w-1/2 lg:p-36"
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="flex flex-col bg-white h-72 w-full lg:w-80 p-4 lg:mt-20 rounded-lg shadow-lg">
                    <form onSubmit={calculateBMI} className="flex flex-col space-y-4">
                        <h2 className="text-neutral-600 pt-1 lg:pt-2 font-semibold tracking-tight text-lg">Enter your details below</h2>
                        <div className="flex flex-col">
                            <label htmlFor="weight" className="text-slate-500 font-semibold text-xs tracking-tight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                className="p-2 rounded-md border-2 border-neutral-400 text-neutral-800"
                                placeholder='kg'
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="height" className="text-slate-500 font-semibold text-xs tracking-tight">Height</label>
                            <input
                                type="text"
                                id="height"
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                                className="p-2 rounded-md border-2 border-neutral-400 text-neutral-800"
                                placeholder='cm'
                                required
                            />
                        </div>

                        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 tracking-tight">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex flex-col bg-white h-72 w-full lg:w-80 p-6 mt-10 lg:mt-20 rounded-lg shadow-lg">
                    <BMIResult bmi={bmi} />
                    <button onClick={handleClick} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 tracking-tight mt-4">
                        Back
                    </button>
                </div>
            </ReactCardFlip>
        </motion.div>
    );
};

export default BMIForm;