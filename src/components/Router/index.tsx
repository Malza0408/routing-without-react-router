import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const Router = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Router;
