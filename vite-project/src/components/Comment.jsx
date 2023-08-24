function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function FormattedDate(props) {
  return <div className="Comment-date">{props.date.toLocaleString()}</div>;
}

function Comment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <FormattedDate date={props.date} />
    </div>
  );
}

export default Comment