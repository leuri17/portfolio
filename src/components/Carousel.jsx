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

const Carousel = () => {
  const [itemPos, setItemPos] = useState(0)
  const [prevItem, setPrevItem] = useState()
  const [currentItem, setCurrentItem] = useState(CAROUSEL_ITEMS[itemPos])
  const [nextItem, setNextItem] = useState()

  useEffect(() => {
    if (itemPos === 0) {
      setPrevItem(CAROUSEL_ITEMS[CAROUSEL_ITEMS.length - 1])
      setNextItem(CAROUSEL_ITEMS[itemPos + 1])
    } else if (itemPos === CAROUSEL_ITEMS.length - 1) {
      setPrevItem(CAROUSEL_ITEMS[itemPos - 1])
      setNextItem(CAROUSEL_ITEMS[0])
    } else {
      setPrevItem(CAROUSEL_ITEMS[itemPos - 1])
      setNextItem(CAROUSEL_ITEMS[itemPos + 1])
    }
    setCurrentItem(CAROUSEL_ITEMS[itemPos])
  }, [itemPos])

  const carouselPrev = (e) => {
    if (itemPos === 0) {
      setItemPos(CAROUSEL_ITEMS.length - 1)
    } else {
      setItemPos(itemPos - 1)
    }
  }

  const carouselNext = (e) => {
    if (itemPos === CAROUSEL_ITEMS.length - 1) {
      setItemPos(0)
    } else {
      setItemPos(itemPos + 1)
    }
  }

  // const handleSwipe = (e) => {
  //   e.preventDefault()

  //   const mouseDownX = e.clientX

  //   const pointerMove = (e) => {
  //     if (e.clientX - mouseDownX > 0) {
  //       carouselPrev()
  //     } else if (e.clientX - mouseDownX < 0) {
  //       carouselNext()
  //     }

  //     slider.removeEventListener('pointermove', pointerMove)
  //   }

  //   slider.addEventListener('pointermove', pointerMove)
  // }

  return (
    <div id="container">
      <div id="carousel">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
          }}>
          <div className="item" >
            {prevItem?.icon}
          </div>
          <div className="item" >{currentItem.icon}</div>
          <div className="item">{nextItem?.icon}</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}>
        <button onClick={carouselPrev}>&lt;</button>
        <button onClick={carouselNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Carousel
