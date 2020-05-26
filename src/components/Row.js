import React from "react";

export const Row = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: props.padding,
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
};
