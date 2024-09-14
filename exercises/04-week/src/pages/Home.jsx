import { useState } from "react";
import AddTask from "../components/AddTask.jsx";
import TasksList from "../components/TasksList.jsx";
import Nav from "../components/layout/Nav.jsx";

function Home() {
  const [listTask, setlistTask] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <Nav setShowComponent={setShowComponent} showComponent={showComponent} />

      {showComponent ? (
        <AddTask setTaskList={setlistTask} listTask={listTask} />
      ) : (
        <TasksList listTask={listTask} />
      )}
    </>
  );
}

export default Home;
