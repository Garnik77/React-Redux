const  SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ashot'},
        {id: 2, name: 'Mashot'},
        {id: 3, name: 'Atabek'},
        {id: 4, name: 'Ibrahim'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Karlen'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'YO'},
    ]
};

    const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody ;
            return {
                ...state,
                messages:[...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});

export default dialogsReducer;