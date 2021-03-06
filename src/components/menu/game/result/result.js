import React, { Component } from 'react';
import ActionGenerators from '../../../../actions/ActionGenerators'
import './result.css'

class Result extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    restars() {
        const { result } = this.props
        result()
    }

    render() {
        const { scoresUser, scoresComputer } = this.props
        return (
            <div className="result_div">
                <div className="div">
                    <div>
                        {
                            this.store.getState().seven < 4 ?
                                <h1> Етап завершений </h1>
                                :
                                <h1> Етап завершений комбінацією брідж </h1>
                        }
                        <h2> З рахунком : </h2>
                        <h3> Гравець - {scoresUser} </h3>
                        <h3> Комп'ютер - {scoresComputer} </h3>
                        <button onClick={this.restars.bind(this)}> Ok </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;