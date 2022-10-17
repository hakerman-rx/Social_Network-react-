import { connect } from "react-redux"
import { getPosts } from "../../store/reducers/profile_red"
import Posts from "../Profile/Profile"


const mapStateToProps = state => {
    return {
        posts:state.profile.posts
    }
}

export default connect(mapStateToProps, {getPosts})(Posts)