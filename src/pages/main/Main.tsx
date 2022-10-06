import React from "react";
import useRouter from "../../hooks/useRouter";

const Main = () => {
  const { push } = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    push("/about");
  };
  return (
    <div>
      <div>root</div>
      <a onClick={handleClick}>about으로 가자!</a>
    </div>
  );
};

export default Main;
