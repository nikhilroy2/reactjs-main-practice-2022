import React from 'react';

function Todo(props) {
    const [add, setAdd] = React.useState([]);
    const inputControl = (event) => {
        // console.log(event.target.value)
        setAdd(event.target.value)
    }
    //console.log(add)
    const [btnAction, setBtnAction] = React.useState([])


    const inputValue = React.useRef();
    // btn actionn
    const sendBtn = () => {
        let copy = [...btnAction];
        setBtnAction([add, ...copy]);
        inputValue.current.value = '';
    }

    return (
        <div id='todo'>
            <input ref={inputValue} type="text" onKeyDown={inputControl} />
            <button onClick={sendBtn}>Send</button>

            {/* ul list */}
            <ul>
                {
                    btnAction.map((v, i) => {
                        return (
                            <li key={i}>
                                {v}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Todo;