
function Greeting(props) {
  const { name, children } = props;

  return (
    <div className="Greeting componentBox">
      <p><strong>Hello {name ? name : "World"}</strong></p>
      {children && <p>{children}</p>}
    </div>
  );
}

export default Greeting;
