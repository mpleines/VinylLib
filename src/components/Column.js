import React from "react";

export const Column = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: props.margin,
      }}
    >
      {props.children}
    </div>
  );
};
