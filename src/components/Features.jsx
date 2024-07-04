import { PiBowlFoodLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-100 to-white rounded-full my-48 p-20">
      <div className="flex justify-center items-center gap-20">
        <div className="w-56">
          <PiBowlFoodLight className="h-12 w-12 bg-pink-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Healthy Eating</h2>
          <p className="text-justify text-neutral-500 font-semibold">Consuming a balanced variety of foods rich in essential nutrients like vitamins, minerals, and antioxidants while limiting processed foods.</p>
        </div>

        <div className="w-56">
          <CgGym className="h-12 w-12 bg-orange-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Regular Exercise</h2>
          <p className="text-justify text-neutral-500 font-semibold">The importance of consistent physical activity for maintaining fitness and overall health, complementing other health-focused sections.</p>
        </div>

        <div className="w-56">
          <BsMoonStars className="h-12 w-12 bg-blue-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Adequate sleep</h2>
          <p className="text-justify text-neutral-500 font-semibold">The importance of sufficient rest for overall well-being, emphasizing its role alongside other health-promoting activities.</p>
        </div>
      </div>
    </div>
  )
}

export default Features