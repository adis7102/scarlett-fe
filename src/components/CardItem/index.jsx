import React, { useState } from "react";
import dayjs from "dayjs";

import "./styles.scss";

const CardItem = (props) => {
  const { data, index, onCheck, onClick, handleRemoveDate } = props;
  const { id, title, type, date } = data || {};

  const [active, setActive] = useState(false);

  const handleCheck = () => {
    setActive(true)

    setTimeout(() => {
      onCheck(id);

    }, 800)
  }

  return (
    <div className="card-item">
      <div className="check-list" onClick={() => handleCheck()}>
        {active && <div className="check-list-checked" />}
      </div>
      <div className="card-item-title">{title}</div>
      <div className="card-item-text type">{type}</div>
      {date && (
        <div className="card-item-text date">
          {dayjs(date).format("D/MMMM/YYYY - hh:mm")}
        </div>
      )}
      <div className="card-item-text edit" onClick={() => onClick(index)}>
        Edit
      </div>
      <div
        className="card-item-text remove"
        onClick={() => handleRemoveDate(index)}
      >
        Remove Date
      </div>
    </div>
  );
};

export default CardItem;
