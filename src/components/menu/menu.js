import React, { Component } from 'react';
import './menu.css';
import Game from './game';
import Rules from './rules';
import store from '../../store/store';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regime: 0
        }
    }

    goToGame = () => {
        this.setState({
            regime: 0
        })
    }

    goToRules = () => {
        this.setState({
            regime: 1
        })
    }

    goToDeveloper = () => {
        window.open('https://www.facebook.com/profile.php?id=100017404084249', "_blank")
    }

    leaveAComment = () => {
        window.open('https://www.facebook.com/groups/861873597994369/', "_blank")
    }
 
    render() {
        return (
            <>
                <div className="Header">
                    <div className="First">
                        <h1> 115 </h1>
                    </div>
                    <div className="Second">
                        <div>
                            <p onClick={this.goToGame} > Гра </p>
                            <p onClick={this.goToRules}> Правила </p>
                            <p onClick={this.goToDeveloper}> Розробник </p>
                            <button onClick={this.leaveAComment} id="leave_a_comment"> Залишити відгук </button>
                        </div>
                    </div>
                </div>
                { 
                    this.state.regime == 0 ? 
                        <Game store={store} />
                        :
                        <Rules />
                }
            </>
        );
    }
}

export default Menu;