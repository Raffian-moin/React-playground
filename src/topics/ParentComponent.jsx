import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    return (
        <>
            <div>Parent component</div>
            <ChildComponent
                name={"Moin"}
                age={"27"}
            />
        </>

    )
}