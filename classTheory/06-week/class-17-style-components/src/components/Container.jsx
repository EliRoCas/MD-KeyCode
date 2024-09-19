import SassCard from "./sass/SassCard.jsx";
import CardStyledComponent from "./styleComponent/CardStyledComponent.jsx";
import TraditionalCard from "./traditional/TraditionalCard.jsx";

const Container = () => {
  return (
    <section className="container">
      <TraditionalCard />
      <SassCard />
      <CardStyledComponent />
    </section>
  );
};

export default Container;
