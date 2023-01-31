import React from "react";

interface Props {
  children: React.ReactNode;
}
const Card: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};

export default Card;
