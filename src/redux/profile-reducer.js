const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likes: 12 },
        { id: 2, message: "It's my first post", likes: 11 },
        { id: 3, message: "blabla", likes: 14 },
        { id: 4, message: "dada", likes: 18 },

      ],
      newPostText: 'it-kamasutraaa',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCrerator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;