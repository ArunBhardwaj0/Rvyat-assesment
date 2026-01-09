import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser(form)).then(() => {
      navigate("/login"); // redirect after signup
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

        <input
          className="border w-full mb-3 p-2 rounded"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          className="border w-full mb-3 p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="border w-full mb-3 p-2 rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="bg-green-600 text-white w-full py-2 rounded">
          {loading ? "Signing up..." : "Signup"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
