import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Restaurants.style.scss";
import StoreCard from "./components/StoreCard";
import { fetchRestaurants } from "@store/slices/restaurants";
import InfiniteScroll from "@sharedComponents/InfiniteScroll";
import VirtualScrollChild from "@sharedComponents/VirtualScrollChild/VirtualScrollChild";

const Restaurants = () => {
  const { items, isFetching, error } = useSelector(
    (state) => state.restaurants
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchRestaurants({ page: page }));
  }, [page]);

  const VirtualScrollChildren = items.map((listItem) => (
    <VirtualScrollChild
      height={260}
      className={Styles["card-wrapper"]}
      children={
        <StoreCard
          backgroundImage={listItem.data.backgroundImage}
          title={listItem.data.title}
          commentCount={listItem.data.commentCount}
          rate={listItem.data.rate}
          deliveryFee={listItem.data.deliveryFee}
          description={listItem.data.description}
          best_coupon={listItem.data.best_coupon}
          logo={listItem.data.logo}
          isZFExpress={listItem.data.isZFExpress}
        />
      }
    />
  ));

  return (
    <div className={Styles["container"]}>
      <InfiniteScroll
        listItems={VirtualScrollChildren}
        lastRowHandler={() => setPage(page + 1)}
        className={Styles["item-wrapper"]}
      />
      {isFetching ? <h3>Loading ...</h3> : null}
    </div>
  );
};

export default Restaurants;
