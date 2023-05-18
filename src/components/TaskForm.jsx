import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask} from "../features/tasks/taskSlice"; //importamos la funcion addTask
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate(); //hook de react router dom
    const params = useParams(); //hook de react router dom  //nos permite acceder a los parametros de la url 
    const tasks = useSelector(state => state.tasks); //obtenemos el estado de las tareas

    const handlechange = (e) => {
        setTask({
            ...task, [e.target.name]: e.target.value,
        })
    }

    const handleSubmmit = (e) => {
        e.preventDefault();//evita que se recargue la pagina

        if (params.id) {
            dispatch(editTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }));//llamamos a la funcion addTask y le pasamos el objeto task
        }
        navigate("/"); //redireccionamos a la ruta principal
    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find((task) => task.id === params.id));
        }
    }, [params.id, tasks]);

    return (
        <form onSubmit={handleSubmmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
            <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
            <input name="title" type="text" placeholder="Title" onChange={handlechange} value={task.title} className="w-full p-2 rounded-md bg-zinc-600 mb-2" />
            <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
            <textarea name="description" placeholder="Description" onChange={handlechange} value={task.description} className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>

            <button className="bg-indigo-600 px-2 py-1">save </button>
        </form>
    )
}

export default TaskForm;