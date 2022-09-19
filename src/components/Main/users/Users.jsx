const Users = (props) => {
    const users = props.users.map((user)=>{
        return (
            <li id={user.id} key={user.id}>
                <div>{user.name}</div>
                <div>{user.company}</div>
            </li>
        )
    })
    return(
        <div className="users">
            <ul>
                {users}
            </ul>
        </div>
    )
}

export default Users