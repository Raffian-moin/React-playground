import { Link } from "react-router-dom";

// Component name must start with Upper case letter
// Component has only one tag that is self closing - i.e. <MyComponent />
// When we want to use JavaScript code inside JSX we need to use {} to escape from JSX
// Here div style should be dynamic, first {} is for escaping form JSX
// second {} is for Javascript object. Here object is the styling attributes
export default function Component() {
    return (
        <>
            <div style={{ color: 'red', fontSize: '20px' }}>Component</div>
            <div>
                <Link to={`props`}>Props</Link>
            </div>
        </>

    )
}