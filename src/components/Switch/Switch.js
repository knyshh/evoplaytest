import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Switch.scss";


class Switch extends React.Component{


    render(){
        
        const { title, status , switches} = this.props.switchData;
        const { activeSwitch, action, getSwitchValue } = this.props;


        return(

        <div className="switch">
            <div className="switch__col">
                <p className="switch__title">{title}</p>

                <p className="switch__status">{status}</p>

            </div>

            <div className="switch__col">
                <div className="switch__box">
                    {
                        switches.map((item, i)=> {
                            return (
                                <button key={i}  onClick={ e => { getSwitchValue(e, action) } }
                                        className={"switch__btn " + (activeSwitch === item.name ? 'switch__btn--active' : '')}
                                         value={ item.name}>
                                    { item.name }
                                </button>
                            )
                        })
                    }
                </div>
            </div>

        </div>

        )

    }

}


const mapStateToProps = ( state ) =>({

});

const mapDispatchToProps = ( dispatch ) =>({
    getSwitchValue: (e, action) => { dispatch(action(e)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(Switch);