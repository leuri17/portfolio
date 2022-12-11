import '../styles/Carousel.css'
import { useState, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarouselItem from './CarouselItem'

const Carousel = ({ itemList, ...props }) => {
  const [currentPos, setCurrentPos] = useState(0)

  const prevItemHolder = createRef()
  const prevItem = createRef()
  const currentItem = createRef()
  const nextItem = createRef()
  const nextItemHolder = createRef()

  const prevBtn = createRef()
  const nextBtn = createRef()

  const slider = createRef()

  useEffect(() => {
    restoreItems()
  }, [currentPos])

  const carouselPrev = () => {
    prevBtn.current.disabled = true
    nextBtn.current.disabled = true
    slider.current.style.display = 'none'

    prevItemHolder.current.className = 'item prev-holder-right'
    prevItem.current.className = 'item prev-right'
    currentItem.current.className = 'item current-right'
    nextItem.current.className = 'item next-right'

    setTimeout(() => {
      if (currentPos === 0) {
        setCurrentPos(itemList.length - 1)
      } else {
        setCurrentPos(currentPos - 1)
      }
    }, 650)
  }

  const carouselNext = () => {
    prevBtn.current.disabled = true
    nextBtn.current.disabled = true
    slider.current.style.display = 'none'

    prevItem.current.className = 'item prev-left'
    currentItem.current.className = 'item current-left'
    nextItem.current.className = 'item next-left'
    nextItemHolder.current.className = 'item next-holder-left'

    setTimeout(() => {
      if (currentPos === itemList.length - 1) {
        setCurrentPos(0)
      } else {
        setCurrentPos(currentPos + 1)
      }
    }, 650)
  }

  const restoreItems = () => {
    prevItemHolder.current.className = 'item'
    prevItem.current.className = 'item'
    currentItem.current.className = 'item'
    nextItem.current.className = 'item'
    nextItemHolder.current.className = 'item'

    prevBtn.current.disabled = false
    nextBtn.current.disabled = false
    slider.current.style.display = 'block'
  }

  const handleSwipe = (e) => {
    const mouseDownX = e.clientX

    const pointerMove = (ev) => {
      if (ev.clientX - mouseDownX > 0) {
        carouselPrev()
      } else if (ev.clientX - mouseDownX < 0) {
        carouselNext()
      }

      slider.current.removeEventListener('pointermove', pointerMove)
    }

    slider.current.addEventListener('pointermove', pointerMove)
  }

  return (
    <div id="container" {...props}>
      <div id="slider" onPointerDown={handleSwipe} ref={slider}></div>
      <div id="carousel">
        <CarouselItem
          itemList={itemList}
          pos={currentPos}
          type="prev-holder"
          ref={prevItemHolder}
        />
        <CarouselItem itemList={itemList} pos={currentPos} type="prev" ref={prevItem} />
        <CarouselItem itemList={itemList} pos={currentPos} type="current" ref={currentItem} />
        <CarouselItem itemList={itemList} pos={currentPos} type="next" ref={nextItem} />
        <CarouselItem
          itemList={itemList}
          pos={currentPos}
          type="next-holder"
          ref={nextItemHolder}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}>
        <button onClick={carouselPrev} ref={prevBtn}>
          &lt;
        </button>
        <button onClick={carouselNext} ref={nextBtn}>
          &gt;
        </button>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Carousel
