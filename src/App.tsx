import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props: { greeting: string }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>{props.greeting}</h2>
      <button onClick={() => setCount(count + 1)}>
        This button has been clicked {count} times.
      </button>
    </div>
  );
}

ReactDOM.render(
  <App greeting="Hello, world!" />,
  document.getElementById("app")
);
