import "../style.css"

function Members(props){
    return (
        <div className="members-div">
        <h1 className="member-names">{props.data.name}</h1>
        <p className="member-groups">{props.data.group}</p>
        </div>
    )
}

export default Members