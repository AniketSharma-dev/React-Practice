import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userChange = (e) => {
    console.log("changed");
    setUser(e.target.value);
  };

  const passChange = (e) => {
    console.log("Password");
    setPassword(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("submited");
    console.log(user);
    console.log(password);

    setUser("");
    setPassword("");
  };

  return (
    <>
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
            onChange={userChange}
            type="text"
            id="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
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
          <input
            value={password}
            onChange={passChange}
            type="Password"
            id="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*********"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
