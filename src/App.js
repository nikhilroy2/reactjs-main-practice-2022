import logo from "./logo.svg";
// import './App.css';
import Accordion from "./Components/Accordion/Accordion";

import AntDesign from "./Components/AntDesign/AntDesign";
import Todo from "./Components/Todo/Todo";
function App() {
  const accordion_list = [
    {
      id: 1,
      title: "1. Lorem ipsum dolor sit amet.",
      description:
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Vero officiis tempore fugiat nostrum praesentium eaque, dignissimos quibusdam, placeat provident eligendi quaerat dolore consectetur!",
    },
    {
      id: 2,
      title: "2. Lorem ipsum dolor sit amet.",
      description:
        "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Vero officiis tempore fugiat nostrum praesentium eaque, dignissimos quibusdam, placeat provident eligendi quaerat dolore consectetur!",
    },
    {
      id: 3,
      title: "3. Lorem ipsum dolor sit amet.",
      description:
        "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Vero officiis tempore fugiat nostrum praesentium eaque, dignissimos quibusdam, placeat provident eligendi quaerat dolore consectetur!",
    },
    {
      id: 4,
      title: "4. Lorem ipsum dolor sit amet.",
      description:
        "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Vero officiis tempore fugiat nostrum praesentium eaque, dignissimos quibusdam, placeat provident eligendi quaerat dolore consectetur!",
    },
    {
      id: 5,
      title: "5. Lorem ipsum dolor sit amet.",
      description:
        "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Vero officiis tempore fugiat nostrum praesentium eaque, dignissimos quibusdam, placeat provident eligendi quaerat dolore consectetur!",
    },
  ];
  return (
    <div className="App">
      {/* <Accordion accordion_list={accordion_list}></Accordion>
      <AntDesign></AntDesign> */}
      <Todo></Todo>
    </div>
  );
}

export default App;
