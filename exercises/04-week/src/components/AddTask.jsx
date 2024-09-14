import { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({ setTaskList, listTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  let [isAlertShown, setIsAlertShown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      setIsAlertShown = true;
      alert("Por favor, complete todos los campos");
      return;
    }
    setIsAlertShown = false;
    setTaskList([...listTask, formData]);

    setFormData({
      title: "",
      description: "",
    });

    toast.success("Tarea agregada correctamente");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <article>
      <h2>Agregar una Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
        <button type="submit" className="add">
          Agregar
        </button>
      </form>
      <ToastContainer />
    </article>
  );
}

AddTask.propTypes = {
  setTaskList: PropTypes.func.isRequired,
  listTask: PropTypes.array.isRequired,
};

export default AddTask;

// This is another way to handle the form data. In this approach, we use the useRef hook to get the values of the input fields.
// This is a more traditional way to handle forms in React
// const titleRef = useRef(null);
// const descriptionRef = useRef(null);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const task = { title, description };
//   setTaskList([...listTask, task]);

//   titleRef.current.value = "";
//   descriptionRef.current.value = "";
// };
