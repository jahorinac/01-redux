import React, {Component} from 'react';
import {connect} from 'react-redux';
import { logIn, logOut } from './actions/formActions'
import fetchData from './actions/fetchData'

//  App.js

export class App extends Component {

    state = {};

    componentDidMount() {
        this.props.dispatch(fetchData())
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = this.props.form

        if(form.login){
            this.props.dispatch(logOut(form))
        }else{
            form.username = this.state.username;
            this.props.dispatch(logIn(form))
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    render() {
        console.log(this.props)
        return (
            <div className="app">
                <h1>{this.props.form.message} {this.props.form.username}</h1>
                {this.props.form.login ? (

                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="logout">Log out</button>
                    </form>

                ) : (

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username
                            <input type="text"
                                   name="username"
                                   onChange={this.handleChange}/>
                        </label>
                        <button type="submit" className="login">Log IN</button>
                    </form>
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