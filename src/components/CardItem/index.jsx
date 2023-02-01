import React from "react";
import dayjs from "dayjs";

import "./styles.scss";

const CardItem = (props) => {
  const { data, index, onCheck, onClick, handleRemoveDate } = props;
  const { id, title, type, date } = data || {};

  return (
    <div className="card-item">
      <div className="check-list" onClick={() => onCheck(id)} />
      <div className="card-item-title">{title}</div>
      <div className="card-item-text type">{type}</div>
      {date && (
        <div className="card-item-text date">
          {dayjs(date).format("D/MMMM/YYYY - hh:mm")}
        </div>
      )}
      <div className="card-item-text type" onClick={() => onClick(index)}>
        Edit
      </div>
      <div
        className="card-item-text type"
        onClick={() => handleRemoveDate(index)}
      >
        Remove Date
      </div>
    </div>
  );
};

export default CardItem;
