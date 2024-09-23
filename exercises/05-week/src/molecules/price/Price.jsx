import Title from "../../atoms/title/Title";
import Description from "../../atoms/description/Description";
import Link from "../../atoms/link/link";
import iconMusic from "../../assets/icon-music.svg";

import "./price.css";

const Price = () => {
  return (
    <section className="priceContainer">
      <img src={iconMusic} alt="icon-music" />
      <section className="priceInfo">
        <Title
          title={"Annual Plan"}
          fontSize={"1rem"}
          margin={"0.03rem 0.650rem"}
          padding={"0.03rem 0.650rem"}
        />
        <Description
          text={"$59.99/year"}
          margin={"0.2rem 0.650rem"}
          padding={"0.2rem 0.650rem"}
        />
      </section>
      <Link text={"Change"} />
    </section>
  );
};

export default Price;
