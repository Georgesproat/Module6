function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-" + props.color}>
      {props.children}{" "}
      
    </div>
  );
}

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function CallOut(props) {
  return (
    <FancyBorder color="green">
      <FancyBox color="blue">
        <h1 className="Callout-title">{props.title}</h1>
        <p className="Callout-message">{props.message}</p>
        {props.children}{" "}
        
      </FancyBox>
    </FancyBorder>
  );
}

export default CallOut