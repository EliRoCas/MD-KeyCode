import { useState } from "react";
import AddTask from "../components/AddTask.jsx";
import TasksList from "../components/TasksList.jsx";
import Nav from "../components/layout/Nav.jsx";

function Home() {
  const [listTask, setlistTask] = useState([]);

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Nav />

      <article>
        <AddTask setTaskList={setlistTask} listTask={listTask} />
        <TasksList listTask={listTask} />
      </article>
    </>
  );
}

export default Home;
