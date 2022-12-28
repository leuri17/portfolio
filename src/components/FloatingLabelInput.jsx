import PropTypes from 'prop-types'
import '../styles/FloatingLabelInput.css'

const FloatingLabelInput = ({ type = 'text', label, id, name, value, onChange, required = false, ...props }) => {
  return (
    <div className="form-group">
      {type === 'area'
        ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          rows={6}
          cols={64}></textarea>
          )
        : (
        <input name={name} type={type} value={value} onChange={onChange} id={id} required={required} />
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
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default FloatingLabelInput
