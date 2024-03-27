import { useState } from "react";
import Todos from "../Todos/Todos";

export default function ToDosPage() {
    const [todos] = useState(["todo 1, todo 2, todo 3"]);
    return (
        <div>
            <Todos todos={todos} />
        </div>
    )
}