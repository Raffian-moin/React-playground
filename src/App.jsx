import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <p>
        Click on the Vite and React logos to learn more
      </p>

      <Link to={`contact/2`}>Your Friend</Link>
    </>
  )
}

export default App
