import React from "react";

//Input: liked: boolean
//Output: onClick
const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }

  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
