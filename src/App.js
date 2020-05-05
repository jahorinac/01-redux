import React, {Component} from 'react';
import {connect} from 'react-redux';
import { logIn, logOut } from './redux'


//  App.js

 export class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.form.message || 'Let`s login'}</h1>
                {this.props.form.message ? (
                    <button onClick={ this.props.logOut } className="logout">Log out</button>
                ) : (
                    <button onClick={ () => this.props.logIn({ message: 'WELCOME!' }) } className="login"
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

console.log(mapStateToProps)

const mapDispatchToProps = {
    logIn,
    logOut
};

console.log(mapDispatchToProps)

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;