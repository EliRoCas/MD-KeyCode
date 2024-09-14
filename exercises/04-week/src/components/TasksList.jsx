import PropTypes from "prop-types";
import TaskItem from "./item/TaskItem";

function TasksList({ listTask }) {
  return (
    <section>
      <h2>Lista de Tareas</h2>
      {listTask.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </section>
  );
}

TasksList.propTypes = {
  listTask: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TasksList;
