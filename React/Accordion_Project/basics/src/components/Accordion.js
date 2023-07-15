import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "react-bootstrap";
import "./style.css";

const Accordion = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const toggleAccordion4 = () => {
    setActive4(!active4);
  };

  const toggleAccordion5 = () => {
    setActive5(!active5);
  };

  return (
    <div className="accordions">
      <h1>Questions</h1>
      <div className="accordion">
        <div className="accordion-up">
          <h5>Do I Have To Allow The Use Of Cookies?</h5>
          <Button className="buttons" onClick={toggleAccordion1}>
            {active1 ? (
              <RemoveIcon className="remove-icon" />
            ) : (
              <AddIcon className="add-icon" />
            )}
          </Button>
        </div>
        {active1 && (
          <div className="accordion-down">
            <p>
              Unicorn vinyl poutine brooklyn, next level direct trade iceland.
              Shaman copper mug church-key coloring book, whatever poutine
              normcore fixie cred kickstarter post-ironic street art.
            </p>
          </div>
        )}
      </div>
      <div className="accordion">
        <div className="accordion-up">
          <h5>How Do I Change My My Page Password?</h5>
          <Button className="buttons" onClick={toggleAccordion2}>
            {active2 ? (
              <RemoveIcon className="remove-icon" />
            ) : (
              <AddIcon className="add-icon" />
            )}
          </Button>
        </div>
        {active2 && (
          <div className="accordion-down">
            <p>
              Coloring book forage photo booth gentrify lumbersexual. Migas
              chillwave poutine synth shoreditch, enamel pin thundercats fashion
              axe roof party polaroid chartreuse.
            </p>
          </div>
        )}
      </div>
      <div className="accordion">
        <div className="accordion-up">
          <h5>What Is BankID?</h5>
          <Button className="buttons" onClick={toggleAccordion3}>
            {active3 ? (
              <RemoveIcon className="remove-icon" />
            ) : (
              <AddIcon className="add-icon" />
            )}
          </Button>
        </div>
        <div className="accordion-down">
          {active3 && (
            <p>
              Enamel pin fam sustainable woke whatever venmo. Authentic
              asymmetrical put a bird on it, lumbersexual activated charcoal
              kinfolk banjo cred pickled sartorial.
            </p>
          )}
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-up">
          <h5>Whose Birth Number Can I Use?</h5>
          <Button className="buttons" onClick={toggleAccordion4}>
            {active4 ? (
              <RemoveIcon className="remove-icon" />
            ) : (
              <AddIcon className="add-icon" />
            )}
          </Button>
        </div>
        {active4 && (
          <div className="accordion-down">
            <p>
              Edison bulb direct trade gentrify beard lo-fi seitan sustainable
              roof party franzen occupy squid. Knausgaard cronut succulents,
              scenester readymade shabby chic lyft. Copper mug meh vegan
              gentrify.
            </p>
          </div>
        )}
      </div>
      <div className="accordion">
        <div className="accordion-up">
          <h5>When Do I Recieve A Password Ordered By Letter?</h5>
          <Button className="buttons" onClick={toggleAccordion5}>
            {active5 ? (
              <RemoveIcon className="remove-icon" />
            ) : (
              <AddIcon className="add-icon" />
            )}
          </Button>
        </div>
        {active5 && (
          <div className="accordion-down">
            <p>
              Locavore franzen fashion axe live-edge neutra irony synth af tilde
              shabby chic man braid chillwave waistcoat copper mug messenger
              bag. Banjo snackwave blog, microdosing thundercats migas vaporware
              viral lo-fi seitan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
