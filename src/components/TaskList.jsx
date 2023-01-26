import  TaskCard  from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskList() {

    const {tasks} = useContext(TaskContext);


    if (tasks.lentgh === 0) {
        return <h1 className="text-white text-4x1 font-bold  text-center">No hya Tareas</h1>;
}

    return (
        <div className="grid grid-cols-4 gap-2">
           { tasks.map((task)=>(
               <TaskCard key={task.id} task={task}  />
           ))}
        </div>
    );
}

export default TaskList;





/* {!task && <p>No hay lista</p>}
            {task && task.lentgh===0 && <p>La lista essta vacia</p>}
            { ): <p>No hay lista</p>} */