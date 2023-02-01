import React from 'react';

import './styles.scss';

const DatePicker = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div className="datepicker">
      <p className="title">{title}</p>
      <div className="input-wrap">
        <input
          type="datetime-local"
          name={name}
          onChange={(e) => onChange(e)}
          value={value}
        />
      </div>
    </div>
  )
}

export default DatePicker