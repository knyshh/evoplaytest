import React from "react";
import ReactDOM from "react-dom";
import "./Total.scss";


class Total extends React.Component{

    render(){

         const { coin, bet } = this.props
         console.log(this.props);
        return(
            <div className="total">
                <div className="total__title">
                    Total bet
                </div>
                <div className="total__number">
                    {
                        coin * bet * 9
                    }
                </div>
            </div>
        )
    }
}

export default Total;