import { Route, Routes } from "react-router-dom"
import UsersHOC from "./users/UsersHOC"


const Main = () => {
    return (
        <main className='main'>
                <Routes>
                    <Route path="/" element={<UsersHOC/>}/>
                    <Route path="users" element={<UsersHOC/>}/>
                </Routes>
        </main>
    )
}

export default Main