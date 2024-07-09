import { PiBowlFoodLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-100 to-white rounded-full my-48 p-20">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-56 bg-white p-6 rounded-lg -mb-16 lg:mb-0">
          <PiBowlFoodLight className="h-12 w-12 bg-pink-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Healthy Eating</h2>
          <p className="text-neutral-500 font-semibold text-sm lg:text-base">Consuming a balanced variety of foods rich in essential nutrients like vitamins, minerals, and antioxidants while limiting processed foods.</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-56 bg-white p-6 rounded-lg -mb-16 lg:mb-0">
          <CgGym className="h-12 w-12 bg-orange-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Regular Exercise</h2>
          <p className="text-neutral-500 font-semibold text-sm lg:text-base">The importance of consistent physical activity for maintaining fitness and overall health, complementing other health-focused sections.</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-56 h-[19.5rem] bg-white p-6 rounded-lg">
          <BsMoonStars className="h-12 w-12 bg-blue-300 text-white p-2 mb-2 rounded-full" />
          <h2 className="mb-4 text-neutral-700 font-bold">Adequate sleep</h2>
          <p className="text-neutral-500 font-semibold text-sm lg:text-base">The importance of sufficient rest for overall well-being, emphasizing its role alongside other health-promoting activities.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Features;