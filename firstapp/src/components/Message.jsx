import React from "react";

const Message = (props) => {
  return (
    <h2 className={props.color}>
      {props.msg} {props.val}
    </h2>
  );
};

export default Message;
