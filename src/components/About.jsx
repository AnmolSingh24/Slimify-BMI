import AboutImg from "../assets/About.jpg"
import { ABOUT } from "../constants"

const About = () => {
    return (
        <div className="flex justify-center items-center gap-20">
            <img src={AboutImg} alt={AboutImg} className="h-[26rem]" />
            <div className="w-[35rem] mt-20">
                <h1 className="text-4xl text-neutral-800 font-semibold mb-8">What your BMI result means ?</h1>
                {ABOUT.map((about, index) => (
                    <div key={index}>
                        <p className="font-semibold text-neutral-400">{about.aboutBMI}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About