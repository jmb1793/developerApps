import { useState, Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const InputForm = (props) => {
  //Add States
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userAge: 0,
    key: Math.random(),
    id: Math.random(),
  });
  const [error, setError] = useState();
  const [checkError, setErrorCheck] = useState(false);

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  };

  const submitUser = (event) => {
    event.preventDefault();
    if (
      userInfo.userName.trim().length < 2 ||
      userInfo.userAge.trim().length === 0
    ) {
      console.log("invalid name");
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userInfo.userAge < 1) {
      console.log("invalid age");
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (greater than 0).",
      });
      return;
    }

    props.onAdd(userInfo);
    setUserInfo({
      userName: "",
      userAge: "",
      key: Math.random(),
      id: Math.random(),
    });
  };

  const errorHandler = () => {
      console.log('error nullify');
      setError(null);
  }
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="flex flex-col justify-center items-center m-3 w-2/4 z-1">
        <form
          className="grid grid-cols-3 gap-y-4   
        p-4 m-2  mx-auto shadow-md rounded-md"
          onSubmit={submitUser}
        >
          <h1 className="text-3xl text-center font-bold underline col-span-3 ">
            User Input Form
          </h1>
          <label className="text-right my-auto pl-8 font-medium">Name:</label>
          <input
            className="text-left col-span-2 rounded-md outline outline-1 m-2 px-2 w-3/4
          focus:outline focus:outline-2 focus:outline-black-300/50"
            type="text"
            placeholder="Full Name"
            name="userName"
            value={userInfo.userName}
            onChange={handleUserInfo}
          ></input>
          <label className="text-right  my-auto pl-8 font-medium">Age:</label>
          <input
            className="text-left col-span-2 rounded-md outline outline-1 m-2 px-2 w-3/4
          focus:outline focus:outline-2 focus:outline-black-300/50"
            type="number"
            placeholder="Age"
            min="1"
            name="userAge"
            value={userInfo.userAge}
            onChange={handleUserInfo}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputForm;
