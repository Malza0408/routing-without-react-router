import React from "react";

type Props = {
  path: string;
  component: React.ReactNode;
};

const Route = ({ path, component }: Props) => {
  return window.location.pathname === path ? <>{component}</> : null;
};

export default Route;
