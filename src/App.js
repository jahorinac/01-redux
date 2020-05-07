import React, {Component} from 'react';
import {connect} from 'react-redux';
import { logIn, logOut } from './actions/formActions'
import fetchData from './actions/fetchData'

//  App.js

 export class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchData())
    }

     render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.form.message}</h1>
                {this.props.form.login ? (
                    <button onClick={ () => this.props.logOut({ message: 'Let`s login', login: false }) } className="logout">Log out</button>
                ) : (
                    <button onClick={ () => this.props.logIn({ message: 'WELCOME!', login: true }) } className="login"
                    >
                        Log IN
                    </button>
                )}
            </div>
        );
    }
}


//  AppContainer.js

const mapStateToProps = state => ({
        form: state.form
    });

const mapDispatchToProps = dispatch => ({
    logIn,
    logOut,
    dispatch
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;