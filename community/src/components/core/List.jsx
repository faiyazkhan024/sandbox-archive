import React from "react";

const List = ({ children, ...rest }) => {
  return (
    <ul className="my-4 space-y-4" {...rest}>
      {children}
    </ul>
  );
};

export default List;
