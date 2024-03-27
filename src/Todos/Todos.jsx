import PropTypes from "prop-types";
import { memo } from "react";

function Todos({ todos }){
    return(
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>{todo}</div>
            })}
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default memo(Todos)