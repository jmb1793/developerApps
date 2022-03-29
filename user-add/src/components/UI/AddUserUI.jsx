import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import UsersAdded from "../UsersAdded/UsersAdded";

const usersAdded = {
  userName: "Schadenfreuder",
  userAge: 21,
  key: Math.random(),
  id: Math.random(),
};

const AddUserUI = (props) => {
  const [userArray, addUserArray] = useState([usersAdded]);
  const handleUserArray = (e) => {
    addUserArray((prevValues) => {
      return [e, ...prevValues];
    });
  };

  const onAddNewUser = (newUser) => {
    const userData = {
      ...newUser,
    };
    handleUserArray(userData);
  };



  return (
    <div className="flex flex-col justify-center items-center">
      <InputForm onAdd={onAddNewUser}/>
      <UsersAdded users={userArray} />
    </div>
  );
};

export default AddUserUI;
