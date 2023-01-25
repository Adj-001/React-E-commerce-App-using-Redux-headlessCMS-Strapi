import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useState } from 'react';


function Slider() {

    const [current, setCurrent] = useState(0)

const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cx=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cx=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cx=tinysrgb&w=1600",
]

const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1)
}

const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1)
}

  return (
    <div className='w-[90vw] h-[90vh] m-auto relative'>
        <div className="w-full h-full rounded-2xl py-1 bg-center bg-cover ">
            <img className='w-screen h-full object-scale-down' src={data[current]} alt="" />
        </div>
        <div className="flex icons gap-10 absolute w-full justify-between bottom-1/2">
            <div className="sliderIcon rounded-sm border p-3 border-current hover:opacity-70 hover:cursor-pointer"
                 onClick={prevSlide}
            >
                <ArrowBackIosOutlinedIcon />
            </div>
            <div className="sliderIcon rounded-sm border p-3 border-current hover:opacity-70 hover:cursor-pointer"
                 onClick={nextSlide}
            >
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
        <div className='sliderDot flex justify-center'>
            {data.map((data) => (
                <div><FiberManualRecordOutlinedIcon /></div>
            ) )}
        </div>
    </div>
  )
}

export default Slider