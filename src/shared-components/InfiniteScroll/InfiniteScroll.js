import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll = ({ listItems, lastRowHandler, className }) => {
  const [lastRowRef, lastRowInView] = useInView();
  // if last row is in view, call the last row handler
  useEffect(() => {
    lastRowInView && lastRowHandler();
  }, [lastRowInView]);

  const Elements = listItems.map((listItem, i) => {
    const props = {
      key: i,
      ...(i === listItems.length - 3 && { ref: lastRowRef }),
      className,
    };
    return <div {...props}>{listItem}</div>;
  });

  return <>{Elements}</>;
};

export default InfiniteScroll;
