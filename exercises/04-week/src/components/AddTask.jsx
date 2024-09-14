import PropTypes from "prop-types";

function AddTask({ setTaskList, listTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const task = { title, description };
    setTaskList([...listTask, task]);
  };

  return (
    <>
      <h2>Agregar una Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título </label>
        <input type="text" name="title" id="title" />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}

AddTask.propTypes = {
  setTaskList: PropTypes.func.isRequired,
  listTask: PropTypes.array.isRequired,
};

export default AddTask;
