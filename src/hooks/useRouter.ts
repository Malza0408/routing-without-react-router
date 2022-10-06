import React, { useState } from "react";

// type Props = {
//   url: string;
// };

const useRouter = () => {
  const push = (url: string) => {
    window.history.pushState({}, "", url);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return { push };
};

export default useRouter;
