import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) =>{//hoc
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth ) return <Redirect to="/login"/>//Redirect չի թողնում մուտք գործել մինչև չես գրանցվում

             return <Component {...this.props}/>
        }
    }


   let ConnectedAuthRedirectComponent = connect (mapStateForRedirect) (RedirectComponent);
    return ConnectedAuthRedirectComponent;
}