import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    // Validate message
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.log("Form errors:", formErrors);
    }
  };

  return (
    <div className="container text-left">
      <h1>Contact Me</h1>
      <form className="form-group mb-3" onSubmit={handleFormSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          className="form-control mb-3"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button className="btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
