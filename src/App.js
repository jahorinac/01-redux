import React, {Component} from 'react';
import {connect} from 'react-redux';
import { activateGeod, closeGeod } from './redux'


//  App.js

 export class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.form.message || 'Let`s login'}</h1>
                {this.props.form.message ? (
                    <button onClick={ this.props.closeGeod }>Exit Geod</button>
                ) : (
                    <button onClick={ () => this.props.activateGeod({ message: 'WELCOME!' })
                        }
                    >
                        Click me!
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
    activateGeod,
    closeGeod
};

console.log(mapDispatchToProps)

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;