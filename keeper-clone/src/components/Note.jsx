import "./Note.css";

const Note = (props) => {

  function handleClick(event){
    props.onDelete(props.id);
    event.preventDefault();
  }

  return (
    <div className="note-card">
      <form className="delete-form" onSubmit={handleClick}>
        <h2 className="note-title line-clamp">{props.title}</h2>
        <p className="note-content line-clamp">{props.content}</p>
        <button type="submit" className="delete-button" >Delete</button>
      </form>
    </div>
  );
};

export default Note;
