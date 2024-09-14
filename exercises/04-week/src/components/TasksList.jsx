import PropTypes from "prop-types";

function TasksList({ listTask }) {
  return listTask.map((task, index) => {
    return (
      <div key={index}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
    );
  });
}

TasksList.propTypes = {
  listTask: PropTypes.array.isRequired,
};

export default TasksList;
