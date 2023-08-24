import { useState } from "react"; 

function LoginForm() {
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  
  const [submitResult, setSubmitResult] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
  };

  return (
    <div className="LoginForm componentBox">
     
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
           
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Log In</button> 
      </form>
      <p>{submitResult}</p> 
    </div>
  );
}

export default LoginForm; 
