import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Address from "./components/Address";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/Fullname";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import CallOut from "./components/CallOut";
import MoviesList from "./components/MoviesList";
import BigCats from "./components/BigCats";
import MoodChanger from "./components/MoodChanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import Emoji from "./components/Emoji";
import LoginForm from "./components/logInForm";
import ExplodingBomb from "./components/ExplodingBomb";
import Calculator from "./components/Calculator";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function Welcome(props) {
  return (
    <div className="Welcome componentBox">
      <h3>Welcome {props.name}!</h3>

      {props.children}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const whatIsJSX = (
    <div>
      <p>Is it JavaScript?</p>
      <p>Is it HTML?</p>
      <p>No, it's JSX!</p>
    </div>
  );

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility"
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {whatIsJSX}

      {spideyJSX}

      <ExampleComponent />
      <Welcome name="students">
        {" "}
        <p>Children of Welcome</p>
      </Welcome>

      <PropsDisplayer />

      <PropsDisplayer myProp="first prop" />

      <PropsDisplayer prop1="first" prop2="second" prop3={3} prop4="4" />

      <PropsDisplayer name="Harry Styles" age={29} />

      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />

      <City name="Sydney" />

      <City name="Melbourne" state="VIC" />

      <City name="Chicago" state="Illinois" country="USA" />
      <Address streetAddress={"29 Sussex Street"} suburb={"Grey Lynn"} />

      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      <Pet
        type="Cat"
        colour="Black & White"
        name="Hugo"
        gender="Male"
        hungry="meow, yes"
      />
      <Pet
        type="Dog"
        name="Buddy"
        color="Brown"
        gender="Male"
        age="3"
        breed="Golden Retriever"
        weight="65"
        hungry={true}
      />
      <Greeting name="George">
        I hope you are getting the hang of react
      </Greeting>

      <FullName first="George" middle="Denton" last="Sproat" />

      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

      <CallOut title="Nested React Component" message="My Fancy Green Border">
        <FullName first="Elon " last=" Musk" />
      </CallOut>

      <MoviesList />

      <BigCats />

      <MoodChanger />

      <BirthdayTranslator />

      <Weather />

      <Emoji />

      <LoginForm />

      <ExplodingBomb />

      <Calculator />
    </>
  );
}
export default App;
