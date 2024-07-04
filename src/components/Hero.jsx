import Icon from "../assets/WebIcon.png"
import { SUMMARY } from "../constants"

const Hero = () => {
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
                                    <p className='my-2 max-w-xl py-6 text-slate-700 font-semibold tracking-tighter text-justify'>
                                        {desc.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 lg:p-36'>
                        <div className="flex flex-col bg-white h-72 w-80 p-6 mt-20 rounded-lg shadow-lg">
                            <form className="flex flex-col space-y-4">
                                <h2 className="text-neutral-600 font-semibold tracking-tight">Enter your details below</h2>
                                <div className="flex flex-col">
                                    <label htmlFor="weight" className="text-slate-800 tracking-tight">Weight</label>
                                    <input type="text" id="weight" className="p-2 rounded-md border-2 border-neutral-400" />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="height" className="text-slate-800 tracking-tight">Height</label>
                                    <input type="text" id="height" className="p-2 rounded-md border-2 border-neutral-400" />
                                </div>

                                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 tracking-tight">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero