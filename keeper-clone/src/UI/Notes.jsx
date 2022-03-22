import Note from "../components/Note";
import "./Notes.css";

const Notes = (props) => {
  return (
    <Note
      key={props.key}
      id={props.id}
      title={props.title}
      content={props.content}
      onDelete={props.onDelete}
    />
  );
};

export default Notes;
