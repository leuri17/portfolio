import '../styles/Carousel.css'
import { SKILL_LIST } from '../data/Skills'
import { useEffect, useState, useRef } from 'react'

const Carousel = () => {
  const ELEMENTS_PER_PAGE = 8
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState()

  const carouselRef = useRef()
  const prevBtn = useRef()
  const nextBtn = useRef()

  useEffect(() => {
    setPagesNumber(parseInt((SKILL_LIST.length / ELEMENTS_PER_PAGE).toFixed()))
  }, [])

  useEffect(() => {
    if (carouselRef.current.classList.contains('next')) {
      carouselRef.current.classList.toggle('next')
    }

    if (carouselRef.current.classList.contains('prev')) {
      carouselRef.current.classList.toggle('prev')
    }
    enableButtons()
  }, [currentPage])

  const prevPage = (e) => {
    e.preventDefault()
    disableButtons()
    carouselRef.current.style.animation = ''

    const onAnimationEnd = (ev) => {
      carouselRef.current.style.animation = 'enter-prev .35s linear'

      if (currentPage === 1) {
        setCurrentPage(pagesNumber)
      } else {
        setCurrentPage(currentPage - 1)
      }

      carouselRef.current.removeEventListener('animationend', onAnimationEnd)
    }

    carouselRef.current.addEventListener('animationend', onAnimationEnd)
    carouselRef.current.classList.toggle('prev')
  }

  const nextPage = (e) => {
    e.preventDefault()
    disableButtons()
    carouselRef.current.style.animation = ''

    const onAnimationEnd = (ev) => {
      carouselRef.current.style.animation = 'enter-next .35s linear'

      if (currentPage === pagesNumber) {
        setCurrentPage(1)
      } else {
        setCurrentPage(currentPage + 1)
      }

      carouselRef.current.removeEventListener('animationend', onAnimationEnd)
    }

    carouselRef.current.addEventListener('animationend', onAnimationEnd)
    carouselRef.current.classList.toggle('next')
  }

  const disableButtons = () => {
    prevBtn.current.disabled = true
    nextBtn.current.disabled = true
  }

  const enableButtons = () => {
    prevBtn.current.disabled = false
    nextBtn.current.disabled = false
  }

  return (
    <div id="carousel-container">
      <div id="carousel" ref={carouselRef}>
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
        <button onClick={prevPage} ref={prevBtn}>
          &lt;
        </button>
        <button onClick={nextPage} ref={nextBtn}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel
