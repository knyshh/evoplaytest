import React from "react";
import { connect } from 'react-redux';
import { coinValueChange } from "../../actions/actionCreators";
import "./Control.scss";

class Control extends React.Component{

    state = {
        checked: false,
    };

    render(){

        const { title, values , name  } = this.props.controlData;
        const { activeValue, getValue, action } = this.props;

        return(
        <div className="control">
            <p className="control__title">{title}</p>

            <div className="control__list">
                {
                    values.map((item, i)=> {
                        return (
                            <label key={i}  className="control__btn">
                                <input className="control__radio" type="radio" name={ this.props.controlData.name}  checked={ item.value === activeValue } onClick={this.handleChangeValue}  onChange={ e => { getValue(e, action) } }  value={ item.value } />
                                    <span className="control__value">
                                        {item.value}
                                    </span>
                                </label>
                        )
                    })
                }
            </div>

        </div>

        )
    }

    handleChangeValue = ev => {
        coinValueChange(ev);
    }
}

const mapStateToProps = ( state ) =>({

});

const mapDispatchToProps = ( dispatch ) =>({
    getValue: (e, action) => { dispatch(action(e)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);