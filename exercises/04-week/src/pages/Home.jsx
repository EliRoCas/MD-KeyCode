import { useState } from "react";
import AddTask from "../components/AddTask.jsx";
import TasksList from "../components/TasksList.jsx";

function Home() {
  const [listTask, setlistTask] = useState([]);

  return (
    <>
      <h1>Lista de Tareas</h1>

      <article>
        <AddTask setTaskList={setlistTask} listTask={listTask} />
        <TasksList listTask={listTask} />
      </article>
    </>
  );
}

export default Home;
