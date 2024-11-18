import React from 'react'

const Dropdown = ({title, option, fun}) => {
  return (
    <div className='select'>
      <select defaultValue="0" onChange={fun} name='format' id='format'>
        <option value="0" disabled>
            {title}
        </option>
        {option.map((o, i) =>  <option key={i} value={o}>
            {o.toUpperCase()}
        </option>)}
      </select>
    </div>
  )
}

export default Dropdown
