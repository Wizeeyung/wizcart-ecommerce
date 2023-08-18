import React, {useState} from 'react'
import './Banner.css'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

const Banner = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    'https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg',
    'https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg',
    'https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg',
    'https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg'
  ]

  const prevSlide = ()=>{
    setCurrentSlide(currentSlide === 0 ? 3 : (prev)=> prev - 1)
  }

  const nextSlide = ()=>{
    setCurrentSlide(currentSlide === 3 ? 0 : (prev)=> prev + 1)
  }

  // console.log(currentSlide)

  return (
    <div className='banners'>
      <div className='banner'>
        <div className='images' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt='img' loading='priority' className='img'/>
          <img src={data[1]} alt='img' loading='priority' className='img'/>
          <img src={data[2]} alt='img' loading='priority' className='img'/>
          <img src={data[3]} alt='img' loading='priority' className='img'/>
        </div>

        <div className='icons'>
          <div onClick={prevSlide} className='icon'>< BiLeftArrow /></div>
          <div onClick={nextSlide} className='icon'><BiRightArrow  /></div>
        </div>
      </div>
      

      
      
      
    </div>
  )
}

export default Banner