import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const test = e => {
  console.log('test');
}
const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-30 " onClick={test}></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <React.Fragment>
    <div className="absolute  min-h-screen w-full flex flex-col justify-center align-center bg-slate-800/75">
      <div className="relative self-center grid grid-col w-80 h-60 z-50 border rounded-md bg-slate-300">
        <header className="justify-self-start w-full h-1/2 bg-blue-400 p-2">
          <h2 className=" font-bold ">{props.title}</h2>
        </header>
        <div className="self-center justify-self-center m-auto p-6">
          <p>{props.message}</p>
        </div>
        <footer className="relative justify-self-end self-end m-4 w-10">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
      </div>
    </React.Fragment>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
      
    </React.Fragment>
  );
};

export default ErrorModal;
