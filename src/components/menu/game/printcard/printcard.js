import React, { Component } from 'react'

class PrintCard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
       
        this.usedCard_angle = [] 
    }

    render() {
        const { card } = this.props

        var usedCard = Object.keys(this.store.getState().usedCard)

        if (card == "usedCard") {
            if (usedCard.length > 15) {
                usedCard = usedCard.slice(usedCard.length - 15, usedCard.length)
                this.usedCard_angle = this.usedCard_angle.slice(usedCard.length - 15, usedCard.length)
            }
        }

        usedCard.map((el, index) => (
            this.usedCard_angle.length < index + 1 ?
                this.usedCard_angle.push(-10 + Math.random() * 10 - -10)
                :
                null  
        ))

        return (
            <>
                {
                    card == "usedCard" ?
                        <div className="usedCard_1">
                            {
                                usedCard.map((el, index) =>
                                (
                                    <img src={`image/${this.store.getState().usedCard[el].card}.png`} key={el} style={{transform: `rotate(${this.usedCard_angle[index]}deg)`}} />
                                ))
                            }
                        </div>
                        :
                        <div>
                            {
                                Object.keys(this.store.getState().computer).map((el) =>
                                (
                                    <img src={`image/колода.png`} key={el} />
                                ))
                            }
                        </div>
                }
            </>
        );
    }
}

export default PrintCard;