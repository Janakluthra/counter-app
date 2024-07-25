//arrow function ES6
//arrow function best use for oneline function
//one line function it return implicit
//arrow function -- object creation (new can't be use)
//pure function
export const Button = (props) => {
  return (
    <button onClick={props.fn} className={props.color}>
      {props.val}
    </button>
  );
};
