import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";




let store = {
    _state: {
        profilePage : {
            posts :[
                {id: 1, message: 'Hi, how are you', likesCount:12},
                {id: 2, message: 'It is my first post',likesCount:17},
                {id: 3, message: 'huhuhauhau',likesCount:17},
                {id: 4, message: 'mmkmkmkm',likesCount:17},
            ],
            newPostText: 'samuray.com'

        },
        messagePage: {
            dialogs :[
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
            ],

            newMessageBody: ""
        },

    },
     _callSubscriber(){
        console.log('State changed');
    },

    getState(){

      return  this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer
    },



    dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage,action) ;
    this._state.messagePage = dialogsReducer(this._state.messagePage,action) ;

    this._callSubscriber(this._state);
    }
}


let SEND_MESSAGE;
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
let UPDATE_NEW_MESSAGE_BODY;
export  const updateNewMessageBodyCreator = (body) =>
            ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.state = store;