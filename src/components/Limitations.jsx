import { LIMITATIONS } from '../constants'
import { BsGenderAmbiguous } from "react-icons/bs";
import { RiCake2Line } from "react-icons/ri";
import { GiBiceps } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { IoBodyOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const Limitations = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-evenly items-center'>
        <div className='w-[36rem]'>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="text-2xl lg:text-4xl lg:pt-10 text-neutral-800 font-semibold mb-8 text-center lg:text-start">Limitations of BMI</motion.h1>
          {LIMITATIONS.map((limit, index) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              key={index} className="mb-8 flex flex-wrap justify-center lg:justify-center">
              <p className="w-64 lg:w-full lg:text-base font-semibold text-neutral-400 text-sm text-justify">{limit.disAdvantages}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='lg:h-40 lg:w-80 shadow-2xl rounded-2xl mt-10'>
          <div className='flex justify-start items-center gap-4 px-4 py-2'>
            <BsGenderAmbiguous className='text-orange-400 w-6 h-6' />
            <h1 className='text-neutral-800 font-semibold'>Gender</h1>
          </div>

          <div className='px-4 py-2'>
            <p className='text-neutral-400 font-semibold tracking-tighter'>The development of body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluationg their BMI.</p>
          </div>
        </motion.div>
      </div>

      <div className='flex flex-col lg:flex-row justify-end items-center gap-8 px-32 mt-6'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='lg:h-40 lg:w-80 w-64 shadow-2xl rounded-2xl'>
          <div className='flex justify-start items-center gap-4 px-4 py-2'>
            <RiCake2Line className='text-blue-400 w-6 h-6' />
            <h1 className='text-neutral-800 font-semibold'>Age</h1>
          </div>

          <div className='px-4 py-2'>
            <p className='text-neutral-400 font-semibold tracking-tighter'>In aging individuals, increased body fat and muscle loss amy cause BMI to underestimate body fat content.</p>
          </div>
        </motion.div>


        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='lg:h-40 lg:w-80 w-64 shadow-2xl rounded-2xl'>
          <div className='flex justify-start items-center gap-4 px-4 py-2'>
            <GiBiceps className='text-purple-400 w-6 h-6' />
            <h1 className='text-neutral-800 font-semibold'>Muscle</h1>
          </div>

          <div className='px-4 py-2'>
            <p className='text-neutral-400 font-semibold tracking-tighter'>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
          </div>
        </motion.div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-6 mb-20'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='lg:h-46 lg:w-80 w-64 shadow-2xl rounded-2xl'>
          <div className='flex justify-start items-center gap-4 px-4 py-2'>
            <LuBaby className='text-yellow-400 w-6 h-6' />
            <h1 className='text-neutral-800 font-semibold'>Pregnancy</h1>
          </div>

          <div className='px-4 py-2'>
            <p className='text-neutral-400 font-semibold tracking-tighter'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
          </div>
        </motion.div>

        <div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='lg:h-46 lg:w-80 w-64 shadow-2xl rounded-2xl'>
            <div className='flex justify-start items-center gap-4 px-4 py-2'>
              <IoBodyOutline className='text-pink-400 w-6 h-6' />
              <h1 className='text-neutral-800 font-semibold'>Race</h1>
            </div>

            <div className='px-4 py-2'>
              <p className='text-neutral-400 font-semibold tracking-tighter'>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than other. To learn more, it is advised to sicuss this with your GP or practice nurse.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Limitations