import { useState } from "react";

function App() {
  const [message, setMessage] = useState(
    "Let's learn more about testing in React"
  );

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button onClick={() => setMessage("New message!")}>Change message</button>
    </div>
  );
}

export default App;
