import "./card.css";

import Information from "../molecules/Information";
import ButtonGroup from "../molecules/ButtonGroup";
import Price from "../molecules/price/Price";
import DanceImg from "../assets/illustration-hero.svg";
const Card = () => {
  return (
    <div className="cardContainer">
      <img src={DanceImg} alt="Dance" className="imgHero"/>
      <Information />
      <Price />
      <ButtonGroup />
    </div>
  );
};

export default Card;
