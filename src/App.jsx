import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Link to={`/`}>Home page</Link>
      </div>
      <div>
        <Link to={`ref`}>Ref</Link>
      </div>
      <div>
        <Link to={`component`}>Component</Link>
      </div>

      <Link to={`contact/2`}>Your Friend</Link>
    </>
  )
}

export default App
