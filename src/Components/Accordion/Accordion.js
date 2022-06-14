import React, { useState, useEffect,useRef } from "react";

function Accordion({ accordion_list }) {
  const [accordionState, setAccordionState] = useState(1);
  const [accordionToggle, setAccordionToggle] = useState("open");
  const accordionHandle = (v) => {
    setAccordionState(v);
    console.log(accordionToggle);
    // !accordionToggle && setAccordionState(0)
  };



  const [count, setCount] = useState(0)
  const prevCounter = useRef()


  useEffect(()=> {
    prevCounter.current = accordionState;
  }, [accordionState])
  
  return (
    <div id="Accordion" style={{ width: "30rem", margin: "3rem auto" }}>
      <ul>
        {accordion_list.map((v) => {
          return (
            <li key={v.id}>
              <button onClick={() => accordionHandle(accordionState=> accordionState+ ' ' + v.id)}>{v.title}</button>
              {v.id === accordionState && <p>{v.description}</p>}
            </li>
          );
        })}
      </ul>

      <button onClick={()=> accordionHandle(accordionState=> accordionState+1)}> Counter</button>
      <p>
        Counter result:
        prev: {accordionState} Next: {prevCounter.current}
      </p>
    </div>
  );
}

export default Accordion;
