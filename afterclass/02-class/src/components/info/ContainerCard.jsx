import { useContext } from "react";
import Card from "../functionals/Card";

import { CountContext } from "../../pages/App";

const ContainerCard = () => {
  //   const list = [{ title: "Card 1", description: "Description 1", img: "" }]; The context is used instead of the list
  const { list } = useContext(CountContext);
  return (
    <div>
      <h3>Container Card</h3>

      {list.map((item, index) => (
        <Card
          key={index}
          title={item.tittle}
          description={item.description}
          img={item.img}
          increment={item.increment}
        />
      ))}
    </div>
  );
};

export default ContainerCard;
