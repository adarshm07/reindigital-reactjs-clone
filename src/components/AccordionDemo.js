import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

const AccordionDemo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  return (
    <div className="accordion-demo">
      <div className="container">
        <Accordion activeIndex={0}>
          <AccordionTab header="How would REIN help us?">
            <p>
              When we say we are a 360-degree full-stack digital marketing
              agency, we mean we do everything your brand could need help within
              the digital space. From strategizing to building online assets and
              to finding a brand voice that stands out in the clutter of the
              Internet, we are a force you need to have by your side. If you are
              bored and uninspired with the traditional ways of thinking,
              strategizing, and campaigning, we should get in touch to reimagine
              the possibilities soon!
            </p>
          </AccordionTab>
          <AccordionTab header="Why become our partner?">
            <p>
              At REIN, our core competence lies in deeply understanding our
              client’s needs and then offering custom solutions and strategies.
              We understand one size does not fit all in the digital space. Even
              with our expanding team and the overall growth, we ensure to
              deliver a transparent, personalized experience for all our
              clients. We do not walk the journey for you, we work with you.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionDemo;
