import React from "react";
import Card from "@sharedComponents/Card";
import { thousandSeparator } from "@utils/numberFilters";
import Rate from "./components/Rate";
import Styles from "./StoreCard.style.scss";

const StoreCard = ({
  backgroundImage,
  title,
  commentCount,
  rate,
  deliveryFee,
  description,
  best_coupon,
  logo,
  isZFExpress,
}) => {
  return (
    <Card className={Styles["card"]}>
      <header className={Styles["header"]}>
        <div className={Styles["cover-wrapper"]}>
          <img className={Styles["cover"]} src={backgroundImage} alt={title} />
        </div>
        <div className={Styles["ribbon"]}>
          {best_coupon && (
            <div className={Styles["discount"]}>
              <div>{best_coupon}</div>
            </div>
          )}
        </div>
        <div className={Styles["logo-wrapper"]}>
          <img src={logo} alt={title} />
        </div>
      </header>
      <div className={Styles["detail-box"]}>
        <div className={Styles["title-row"]}>
          <div>
            <h3>{title}</h3>
            <>
              <div></div>
              <div></div>
            </>
          </div>
          <div className={Styles["reviews"]}>
            <span className={Styles["comments"]}>{`(${commentCount})`}</span>
            <Rate rate={rate} />
          </div>
        </div>
        <div className={Styles["description"]}>
          {description?.replace(/,/g, "")}
        </div>
        <div className={Styles["delivery-row"]}>
          <span className={Styles["label"]}>
            {isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}
          </span>
          <span className={Styles["price"]}>
            {thousandSeparator(deliveryFee)}
          </span>
          <span className={Styles["currency"]}>تومان</span>
        </div>
      </div>
    </Card>
  );
};

export default StoreCard;
