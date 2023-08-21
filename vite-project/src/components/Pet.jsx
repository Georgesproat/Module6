function Pet(props) {
  let type = "unknown";
  if (props.type) type = props.type;
  return (
    <div className="Pet componentBox">
      <h2>My Pet</h2> <p>Type: {type}</p>
      {props.name && <p>Name: {props.name}</p>}
      {props.color && <p>Color: {props.color}</p>}
      {props.gender && <p>Gender: {props.gender}</p>}
      {props.age && <p>Age: {props.age}</p>}
      {props.breed && <p>Breed: {props.breed}</p>}
      {props.weight && <p>Weight: {props.weight} kgs</p>}
      {props.hungry !== undefined && (
        <p>Hungry?: {props.hungry ? "Yes" : "No"}</p>
      )}
    </div>
  );
}
export default Pet; // render this component in App.jsx. Try out different prop values, add support for more
