import { connect } from "react-redux"
import { getUsers } from "../../../store/reducers/user_red"
import Users from "./Users"

const mapStateToProps = state => {
    return {
        users:state.users.users
    }
}

export default connect(mapStateToProps, {getUsers})(Users)