import PropTypes from "prop-types";
import TaskItem from "./item/TaskItem";

function TasksList({ listTask }) {
  return listTask.map((task, index) => {
    return <TaskItem key={index} task={task} />;
  });
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
