import React from "react";
import Card from "@sharedComponents/Card";
import Styles from "./Home.style.scss";
import Button from "@sharedComponents/Button";
import { Paths } from "@routes/urls";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={Styles["main"]}>
      <Card className={Styles["welcome-card"]}>
        <p className={Styles["title"]}>به اسنپ فود خوش آمدید!</p>
        <Link to={Paths.vendorsList}>
          <Button>
            <p>لیست رستوران‌ها</p>
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
