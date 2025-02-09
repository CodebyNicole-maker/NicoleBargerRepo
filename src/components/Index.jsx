// import React, { useState } from "react";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";

// const Form = () => {
//   const [entireName, setEntireName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "entireName") {
//       setEntireName(value);
//     } else if (name === "email") {
//       setEmail(value);
//     } else if (name === "message") {
//       setMessage(value);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Here you can add any form submission logic if needed

//     // Clear the form fields
//     setEntireName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="container text-center">
//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="entireName"
//           placeholder="Your Name"
//           value={entireName}
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button className="btn btn-primary mt-3" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
