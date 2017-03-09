import React from "react";
import Header from "../Header/Header";
import "./Main.scss";

class Main extends React.Component{

    constructor( props ){
        super( props );
    }

    render(){
        const { children } = this.props
        return(
            <div>
                <Header/>
                {
                    children
                }
            </div>
        )
    }
}

export default Main;