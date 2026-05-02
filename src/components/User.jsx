function User({ id, name, username }) {
    return (
        <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{id}</div>
        </div>
    )
}


export default User