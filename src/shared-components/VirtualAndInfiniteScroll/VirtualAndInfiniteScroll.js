import React from "react";
import InfiniteScroll from "../InfiniteScroll";
import VirtualScrollChild from "../VirtualScrollChild/VirtualScrollChild";

/**
 * A wrapper component for implementing virtual and
 * infinite scrolling.
 */
function VirtualAndInfiniteScroll({ listItems, height, lastRowHandler }) {
  const VirtualScrollChildren = listItems.map((listItem) => (
    <VirtualScrollChild height={height} children={listItem} />
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export default VirtualAndInfiniteScroll;
