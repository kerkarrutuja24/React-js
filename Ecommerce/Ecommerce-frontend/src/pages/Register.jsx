import { useState } from "react";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/register",
        user
      );

      alert("Registration Successful");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email_id"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;