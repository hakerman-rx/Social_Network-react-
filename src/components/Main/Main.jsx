import { Route, Routes } from "react-router-dom"
import ProfileHOC from "../Profile/ProfileHOC"
import UsersHOC from "./users/UsersHOC"


const Main = () => {
    return (
        <main className='main'>
                <Routes>
                    <Route path="/" element={<UsersHOC/>}/>
                    <Route path="users" element={<UsersHOC/>}/>
                    <Route path="profile" element={<ProfileHOC/>}></Route>
                </Routes>
        </main>
    )
}

export default Main