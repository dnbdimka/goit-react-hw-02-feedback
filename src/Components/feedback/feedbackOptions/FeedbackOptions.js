import React from "react";

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      <button type="button" name="good" onClick={onBtnClick}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onBtnClick}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onBtnClick}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
