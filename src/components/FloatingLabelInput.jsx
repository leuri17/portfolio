import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/FloatingLabelInput.css'

const FloatingLabelInput = ({ type = 'text', label, id, name, ...props }) => {
  const [value, setValue] = useState('')

  function handleChange (e) {
    setValue(e.target.value)
  }

  return (
    <div className="form-group">
      {type === 'area'
        ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          required
          rows={6}
          cols={64}></textarea>
          )
        : (
        <input name={name} type={type} value={value} onChange={handleChange} id={id} required />
          )}
      <label className={value && 'filled'} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

FloatingLabelInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default FloatingLabelInput
