import { useEffect } from "react"

const Users = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => props.getUsers(users))
        }
    },[])
    const users = props.users.map((user) => {
        return (
            <li id={user.id} key={user.id}>
                <div>{user.name}</div>
                <div>{user.company.name}</div>
            </li>
        )
    })
    return (
        <div className="users">
            <ul>
                {users}
            </ul>
        </div>
    )
}

export default Users