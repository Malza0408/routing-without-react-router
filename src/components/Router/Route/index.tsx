import React, { useEffect, useState } from "react";

type Props = {
  path: string;
  component: React.ReactNode;
};

const Route = ({ path, component }: Props) => {
  const [curPath, setCurPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationPathname = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationPathname);

    return () => {
      window.removeEventListener("popstate", onLocationPathname);
    };
  }, []);
  return curPath === path ? <>{component}</> : null;
};

export default Route;
