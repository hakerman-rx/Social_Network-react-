const GET_POSTS = 'get posts'

const initialState = {
    posts: [
        { id: 1, name: 'vasya', post: 'Lorem ipsum dolor sit amet consectetus architecto dolorem, ab doloribus deserunt quisquam pariatur, facere consequatur odit dignissimos iste porro?' },
        { id: 2, name: 'vasya', post: 'Lorem ipsum dolor sit amet consectetus architecto dolorem, ab doloribus deserunt quisquam pariatur, facere consequatur odit dignissimos iste porro?' },
        { id: 3, name: 'vasya', post: 'Lorem ipsum dolor sit amet consectetus architecto dolorem, ab doloribus deserunt quisquam pariatur, facere consequatur odit dignissimos iste porro?' },
        { id: 4, name: 'vasya', post: 'Lorem ipsum dolor sit amet consectetus architecto dolorem, ab doloribus deserunt quisquam pariatur, facere consequatur odit dignissimos iste porro?' }
        
    ]
}

const profileReducer = (state = initialState, action) => {
    //  
    return state
}

export const getPosts = posts => ({type:GET_POSTS, posts})
export default profileReducer