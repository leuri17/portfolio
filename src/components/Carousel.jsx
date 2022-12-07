import '../styles/Carousel.css'
import { FaCss3, FaDocker, FaGit, FaHtml5, FaJava, FaJs, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiSpring } from 'react-icons/si'
import { useState, useEffect } from 'react'

const CAROUSEL_ITEMS = [
  {
    name: 'HTML',
    icon: <FaHtml5 />
  },
  {
    name: 'CSS',
    icon: <FaCss3 />
  },
  {
    name: 'JavaScript',
    icon: <FaJs />
  },
  {
    name: 'Java',
    icon: <FaJava />
  },
  {
    name: 'Spring Boot',
    icon: <SiSpring />
  },
  {
    name: 'Git',
    icon: <FaGit />
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs />
  },
  {
    name: 'Docker',
    icon: <FaDocker />
  }
]

const Carousel2 = () => {
  const [slider, setSlider] = useState()
  const [direction, setDirection] = useState()

  useEffect(() => {
    setSlider(document.getElementById('slider'))
  })

  const carouselPrev = (e) => {
    setDirection(-1)

    slider.style.transform = 'translate(0)'
  }

  const carouselNext = (e) => {
    setDirection(1)

    slider.style.transform = 'translate(-40%)'
  }

  const handleCarouselTransition = (e) => {
    if (direction === 1) {
      slider.appendChild(slider.firstElementChild)
    } else if (direction === -1) {
      slider.prepend(slider.lastElementChild)
    }

    slider.style.transition = 'none'
    slider.style.transform = 'translate(-20%)'
    setTimeout(() => {
      slider.style.transition = 'all 0.5s'
    })
  }

  const handleSwipe = (e) => {
    e.preventDefault()

    const mouseDownX = e.clientX

    const pointerMove = (e) => {
      if (e.clientX - mouseDownX > 0) {
        carouselPrev()
      } else if (e.clientX - mouseDownX < 0) {
        carouselNext()
      }

      slider.removeEventListener('pointermove', pointerMove)
    }

    slider.addEventListener('pointermove', pointerMove)
  }

  return (
    <div id="container">
      <div id="carousel">
        <div id="slider" onTransitionEnd={handleCarouselTransition} onPointerDown={handleSwipe}>
          {CAROUSEL_ITEMS.map((item, index) => (
            <div key={index} className="carousel-item" id={item.name}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}>
        <button onClick={carouselPrev}>&lt;</button>
        <button onClick={carouselNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Carousel2
