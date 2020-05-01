import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect,Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import Switch from "react-router-dom/es/Switch";

const DialogsContainer = React.lazy( () => import("./components/Dialogs/Message/DialogsContainer"));//զագրուզկա ա եղնում են ժամանակ մինչև ի զապրոս չենք անում,կոմպոնենտն էլ գրում ենք Suspense   մեջ
const ProfileContainer = React.lazy( () => import("./components/Profile/ProfileInfo/ProfileContainer"));//զագրուզկա ա եղնում են ժամանակ մինչև ի զապրոս չենք անում

class App extends React.Component {
    catchAllUnhandledErrors = (reason,promise) => {
        alert("inch vor sxal");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors);
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/'
                           render= {() => <Redirect to={"/profile/"}/>}/>

                    <Route path='/dialogs'//գրում Է հասցեն
                        //Suspense միջոցով էջը բացում է այն ժամանակ երբ իրան կանչում ենք
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                               render= {withSuspense(ProfileContainer)}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/>

                   <Route path='*'
                          render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    initialized:state.app.initialized
});
let AppContainer = compose(//composը ընդունում է hok
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

const  SamuraiJSApp = (props) =>{
 return   <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;