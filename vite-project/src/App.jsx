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
import CallOut from "./components/CallOut";
import MoviesList from "./components/MoviesList";
import BigCats from "./components/BigCats";
import MoodChanger from "./components/MoodChanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import Emoji from "./components/Emoji";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
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
        <p>Children of Welcome</p>
      </Welcome>
      {/* Renders the component with no props */}
      <PropsDisplayer />
      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer myProp="first prop" />
      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} prop4="4" />
      {/* String prop value uses quotes, numeric prop value uses
       curly braces */}
      <PropsDisplayer name="Harry Styles" age={29} />
      {/* Array prop value - uses curly braces */}
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />
      {/* state and country are not specified, will use defaults */}
      <City name="Sydney" />
      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />
      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />
      <Address streetAddress={"29 Sussex Street"} suburb={"Grey Lynn"} />
      {/* Everything in between <City> and </City> is passed as
props.children */}
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

      <CallOut title="Nested React Component" message="My Fancy Green Border">
        <FullName first="Elon " last=" Musk" />
      </CallOut>

      <MoviesList />

      <BigCats />

      <MoodChanger/>

      <BirthdayTranslator/>

      <Weather/>

      <Emoji/>
    </>
  );
}
export default App;
