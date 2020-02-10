const CreateMessages = 'CREATE-MESSAGE';
const UpdateNewMessages = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UpdateNewMessages:
            let newMessage = {
                id: 6,
                message: state.newMessage
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;

        case CreateMessages:
            state.newMessage = action.newText;
            return state;
            default:
                return state;
    }

}


export const CreateMessagesCreator = (text) => ({type: CreateMessages, newText: text})
export const UpdateNewMessagesCreator = () => ({type: UpdateNewMessages})

export default dialogsReducer;