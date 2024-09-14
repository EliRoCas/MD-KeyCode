import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  return (
    <article className="taskItem">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </article>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
