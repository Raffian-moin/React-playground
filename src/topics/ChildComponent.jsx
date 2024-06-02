
// Props destructuring with renaming
export default function ChildComponent({name: myName, age: myAge}) {
    return (
        <>
            <p>Child component props destructuring</p>
            <div>Child component {myName}</div>
            <div>Child component {myAge}</div>
        </>
    )
}

// If we don't want to destructure we can use a single parameter this component
// and this parameter is an object and it holds all the props from parent component
// export default function ChildComponent(props) {
//     return (
//         <>
//             <p>Child component with only one props</p>
//             <p>{props.name}</p>
//             <p>{props.age}</p>
//         </>
//     )
// }

// If we have many props and we want to only destructure only few them and take others in a variable called rest
// export default function ChildComponent({name, ...rest}) {
//     return (
//         <>
//             <p>Child component with rest operator</p>
//             <p>{name}</p>
//             <p>{rest.age}</p>
//         </>

//     )
// }