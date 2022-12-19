import '../styles/CarouselItem.css'
import PropTypes from 'prop-types'
import { useEffect, useState, forwardRef } from 'react'

const CarouselItem = forwardRef(({ type, itemList, pos, ...props }, ref) => {
  const [itemPos, setItemPos] = useState()

  useEffect(() => {
    if (type === 'current') {
      setItemPos(pos)
    } else {
      setItemPos(calculateItemPos({ type }))
    }
  }, [pos])

  const calculateItemPos = ({ type }) => {
    if (type === 'prev-holder') {
      return pos === 0 ? itemList.length - 2 : pos === 1 ? itemList.length - 1 : pos - 2
    } else if (type === 'prev') {
      return pos === 0 ? itemList.length - 1 : pos - 1
    } else if (type === 'next') {
      return pos === itemList.length - 1 ? 0 : pos + 1
    } else if (type === 'next-holder') {
      return pos === itemList.length - 2 ? 0 : pos === itemList.length - 1 ? 1 : pos + 2
    }
  }

  return (
    <div className="item" ref={ref} {...props}>
      {itemList[itemPos]?.icon}
    </div>
  )
})

CarouselItem.displayName = 'CarouselItem'

CarouselItem.propTypes = {
  type: PropTypes.oneOf(['prev-holder', 'prev', 'current', 'next', 'next-holder']).isRequired,
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
  pos: PropTypes.number.isRequired
}

export default CarouselItem
