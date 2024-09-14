import { useRef } from "react";
import PropTypes from "prop-types";

function AddTask({ setTaskList, listTask }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const task = { title, description };
    setTaskList([...listTask, task]);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <>
      <h2>Agregar una Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título </label>
        <input type="text" name="title" id="title" ref={titleRef} />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          ref={descriptionRef}
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
