import React, { useState, useEffect } from "react";

function Accordion({ accordion_list }) {
  const [accordionState, setAccordionState] = useState(1);
  const [accordionToggle, setAccordionToggle] = useState("open");
  const accordionHandle = (v) => {
    setAccordionState(v);
    console.log(accordionToggle);
    // !accordionToggle && setAccordionState(0)
  };
  //   useEffect(() => {
  //       console.log('hi')
  //       setAccordionToggle(!accordionToggle)
  //   }, [accordionState]);
  return (
    <div id="Accordion" style={{ width: "30rem", margin: "3rem auto" }}>
      <ul>
        {accordion_list.map((v) => {
          return (
            <li key={v.id}>
              <button onClick={() => accordionHandle(v.id)}>{v.title}</button>
              {v.id === accordionState && <p>{v.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Accordion;
