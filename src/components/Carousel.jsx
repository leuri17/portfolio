import '../styles/Carousel.css'
import { SKILL_LIST } from '../data/Skills'
import { useEffect, useState, useRef } from 'react'

const Carousel = () => {
  const ELEMENTS_PER_PAGE = 8
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState()

  const carouselItemsRef = useRef()
  const prevBtnRef = useRef()
  const nextBtnRef = useRef()

  useEffect(() => {
    setPagesNumber(parseInt((SKILL_LIST.length / ELEMENTS_PER_PAGE).toFixed()))
  }, [])

  useEffect(() => {
    if (carouselItemsRef.current.classList.contains('next')) {
      carouselItemsRef.current.classList.toggle('next')
    }

    if (carouselItemsRef.current.classList.contains('prev')) {
      carouselItemsRef.current.classList.toggle('prev')
    }
    enableButtons()
  }, [currentPage])

  const prevPage = (e) => {
    e.preventDefault()
    disableButtons()
    carouselItemsRef.current.style.animation = ''

    const onAnimationEnd = (ev) => {
      carouselItemsRef.current.style.animation = 'enter-prev .35s linear'

      if (currentPage === 1) {
        setCurrentPage(pagesNumber)
      } else {
        setCurrentPage(currentPage - 1)
      }

      carouselItemsRef.current.removeEventListener('animationend', onAnimationEnd)
    }

    carouselItemsRef.current.addEventListener('animationend', onAnimationEnd)
    carouselItemsRef.current.classList.toggle('prev')
  }

  const nextPage = (e) => {
    e.preventDefault()
    disableButtons()
    carouselItemsRef.current.style.animation = ''

    const onAnimationEnd = (ev) => {
      carouselItemsRef.current.style.animation = 'enter-next .35s linear'

      if (currentPage === pagesNumber) {
        setCurrentPage(1)
      } else {
        setCurrentPage(currentPage + 1)
      }

      carouselItemsRef.current.removeEventListener('animationend', onAnimationEnd)
    }

    carouselItemsRef.current.addEventListener('animationend', onAnimationEnd)
    carouselItemsRef.current.classList.toggle('next')
  }

  const disableButtons = () => {
    prevBtnRef.current.disabled = true
    nextBtnRef.current.disabled = true
  }

  const enableButtons = () => {
    prevBtnRef.current.disabled = false
    nextBtnRef.current.disabled = false
  }

  const handlePointerDown = (downEvent) => {
    const handlePointerMove = (moveEvent) => {
      const pointerMovement = moveEvent.clientX - downEvent.clientX

      if (pointerMovement > 6) {
        prevBtnRef.current.click()
      } else if (pointerMovement < -6) {
        nextBtnRef.current.click()
      }

      carouselItemsRef.current.removeEventListener('pointermove', handlePointerMove)
    }

    carouselItemsRef.current.addEventListener('pointerup', (ev) => {
      carouselItemsRef.current.removeEventListener('pointermove', handlePointerMove)
    })

    carouselItemsRef.current.addEventListener('pointermove', handlePointerMove)
  }

  return (
    <div id="carousel">
      <div id="carousel-items" onPointerDown={handlePointerDown} ref={carouselItemsRef} >
        {SKILL_LIST.slice(
          (currentPage - 1) * ELEMENTS_PER_PAGE,
          currentPage * ELEMENTS_PER_PAGE
        ).map((skill) => {
          return (
            <div className="skill-card" key={skill.name}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          )
        })}
      </div>
      <div id="carousel-buttons">
        <button onClick={prevPage} ref={prevBtnRef}>
          &lt;
        </button>
        <button onClick={nextPage} ref={nextBtnRef}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel
