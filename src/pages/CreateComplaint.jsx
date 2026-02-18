import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateComplaint.css";

export default function CreateComplaint() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    user: "",
    file: null
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
        setForm({ ...form, file: files[0] });
      } else {
        setForm({ ...form, [name]: value });
      
        // remove error when user fixes input
        setErrors({ ...errors, [name]: "" });
      }
      
  };

  // validation
  const validate = () => {
    let err = {};

    if (!form.title) err.title = "Title is required";
    if (!form.description) err.description = "Description is required";
    if (!form.category) err.category = "Category required";
    if (!form.user) err.user = "Select user";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Complaint submitted successfully!");

    navigate("/complaints");
  };

  return (
    <div className="form-container">
      <h1>Create Complaint</h1>

      <form onSubmit={handleSubmit} className="complaint-form">

        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange}/>
        {errors.description && <p className="error">{errors.description}</p>}

        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select</option>
          <option value="CARPENTRY">CARPENTRY</option>
          <option value="ELECTRICAL">ELECTRICAL</option>
          <option value="PLUMBING">PLUMBING</option>
          <option value="RAGGING">RAGGING</option>
        </select>
        {errors.category && <p className="error">{errors.category}</p>}

        <label>User</label>
        <select name="user" value={form.user} onChange={handleChange}>
          <option value="">Select User</option>
          <option value="1">Student 1</option>
          <option value="2">Student 2</option>
        </select>
        {errors.user && <p className="error">{errors.user}</p>}

        <label>Attachment (optional)</label>
<input type="file" name="file" onChange={handleChange} />

{form.file && (
  <p className="file-preview">Selected: {form.file.name}</p>
)}


        <button type="submit" className="submit-btn">Submit Complaint</button>

      </form>
    </div>
  );
}
