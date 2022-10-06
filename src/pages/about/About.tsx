import React from "react";
import useRouter from "../../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    push("/");
  };
  return (
    <div>
      <div>root</div>
      <a onClick={handleClick}>home으로 가자!</a>
    </div>
  );
};

export default About;
