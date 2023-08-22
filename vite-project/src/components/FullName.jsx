function NamePart(props) {
  return <span className="NamePart">{props.value}</span>;
}

function FullName({ first, middle, last }) {
  return (
    <div className="FullName componentBox">
      Full name:
      <NamePart value={first} /> <NamePart value={middle} />{" "}
      <NamePart value={last} />
    </div>
  );
}

export default FullName;
