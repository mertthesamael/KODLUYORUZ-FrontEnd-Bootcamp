function Assistants(props){

    return (
    <div className="assistants-div">
    <h2 className="assistant-names">{props.data.name}</h2>
    <p className="assistant-groups">{props.data.group}</p>
    </div>
    );
}

export default Assistants