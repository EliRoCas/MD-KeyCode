import PropTypes from "prop-types";
import Header from "../Header";

const Site = ({ children, setRoute }) => {
  return (
    <>
      <Header setRoute={setRoute} />
      {children}
    </>
  );
};

Site.propTypes = {
  children: PropTypes.node,
};

export default Site;
