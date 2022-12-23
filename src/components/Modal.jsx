import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import Card from './Card'

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <Card {...props} />
        </Backdrop>,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default Modal
