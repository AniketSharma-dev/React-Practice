import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);

  // States to track the validity of the password
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialchar, setSpecialchar] = useState(false);
  const [minlength, setMinLength] = useState(false);

  const userUpdate = (e) => {
    console.log("changed");
    setUser(e.target.value);
  };

  const passUpdate = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log("Password");
    console.log(value);

    setUpperCase(/[A-Z]/.test(value));
    setLowerCase(/[a-z]/.test(value));
    setNumber(/[0-9]/.test(value));
    setSpecialchar(/[\W_]/.test(value));
    setMinLength(value.length >= 8);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("submited");
    console.log(user);
    console.log(password);

    setUser("");
    setPassword("");
  };

  console.log();

  const togglePassword = () => {
    setType(!type);

    // setUppercase()
  };

  return (
    <>
      <section className="flex justify-center flex-col items-center w-full h-[100vh]">
        <h4 className="text-2xl mb-14">Login Form </h4>
        <form className="w-[350px]" onSubmit={handelSubmit}>
          <div className="mb-5">
            <label
              htmlFor="Username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Username
            </label>
            <input
              value={user}
              onChange={userUpdate}
              type="text"
              id="Username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          {/*   */}
          <div className="mb-5">
            <label
              htmlFor="Password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={passUpdate}
                type={type ? "text" : "password"}
                id="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
              <span
                onClick={togglePassword}
                className="absolute right-2 top-1 text-2xl cursor-pointer text-gray-300"
              >
                <i className={type ? "ri-eye-line" : "ri-eye-off-line"}></i>
              </span>
            </div>
          </div>
          <div className="w-full mb-5">
            <ul>
              <li id="upper" className={`text-lg ${uppercase ? "text-green-500" : "text-red-500"}`}>
                {" "}
                <i
                  className={
                    uppercase
                      ? "ri-checkbox-circle-line"
                      : "ri-close-circle-line"
                  }
                ></i>{" "}
                At least one uppercase character
              </li>
              <li id="lower" className={`text-lg ${lowercase ? "text-green-500" : "text-red-500"}`}>
                {" "}
                <i
                  className={
                    lowercase
                      ? "ri-checkbox-circle-line"
                      : "ri-close-circle-line"
                  }
                ></i>{" "}
                At least one lowercase character
              </li>
              <li id="number" className={`text-lg ${number ? "text-green-500" : "text-red-500"}`}>
                {" "}
                <i
                  className={
                    number ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                  }
                ></i>{" "}
                At least one number character
              </li>
              <li id="special" className={`text-lg ${specialchar ? "text-green-500" : "text-red-500"}`}>
                {" "}
                <i
                  className={
                    specialchar
                      ? "ri-checkbox-circle-line"
                      : "ri-close-circle-line"
                  }
                ></i>{" "}
                At least one special character
              </li>
              <li id="length" className={`text-lg ${minlength ? "text-green-500" : "text-red-500"}`}>
                {" "}
                <i
                  className={
                    minlength
                      ? "ri-checkbox-circle-line"
                      : "ri-close-circle-line"
                  }
                ></i>{" "}
                At least one 8 character
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
