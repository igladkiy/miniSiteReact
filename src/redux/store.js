import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 12 },
        { id: 2, message: "It's my first post", likes: 11 },
        { id: 3, message: "blabla", likes: 14 },
        { id: 4, message: "dada", likes: 18 },

      ],
      newPostText: 'it-kamasutraaa',

    },
    dialogPage: {
      messages: [
        { id: 1, message: 'hi', },
        { id: 2, message: "How is your IT camasutra", },
        { id: 3, message: 'YO', },
        { id: 4, message: 'YO', },
        { id: 5, message: 'YO', },
      ],
      dialogs: [
        { id: 1, name: 'Dimych', },
        { id: 2, name: 'Andrey', },
        { id: 3, name: 'Sveta', },
        { id: 4, name: 'sasha', },
        { id: 5, name: 'Viktor', },
        { id: 6, name: 'Valera', }
      ],
      newMessage: '',
    },
    sideBar: {}
  },
  _callSubscriber() {
    console.log('state was changed');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }
}
export default store;
window.store = store;




