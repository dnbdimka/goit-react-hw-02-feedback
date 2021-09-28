import React from "react";

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      {options.map((item) => (
        <button key={item} type="button" name={item} onClick={onBtnClick}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
