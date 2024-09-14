// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

const Nav = () => {
  const openCity = (evt, cityName) => {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  // var a = document.getElementById("defaultOpen");
  // a.click();

  return (
    <>
      <div className="tab">
        <button
          className="tablinks"
          onClick={(event) => {
            openCity(event, "London");
          }}
        >
          London
        </button>
        <button
          className="tablinks"
          onClick={(event) => {
            openCity(event, "Paris");
          }}
        >
          Paris
        </button>
        <button
          className="tablinks"
          onClick={(event) => openCity(event, "Tokyo")}
        >
          Tokyo
        </button>
      </div>

      <div id="London" className="tabcontent">
        <h2>London</h2>
        <p>Bla Bla Bl </p>
        <span
          onClick={(event) =>
            (event.currentTarget.parentElement.style.display = "none")
          }
        >
          x
        </span>
      </div>
      <div id="Paris" className="tabcontent">
        <h2>Paris</h2>
        <p>Bla Bal Bla </p>
      </div>
      <div id="Tokyo" className="tabcontent">
        <h2>Tokyo</h2>
        <p>Bla Bla Bla </p>
      </div>
    </>
  );
};

// Nav.propTypes = {};

export default Nav;
