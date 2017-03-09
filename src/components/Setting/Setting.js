import React from "react";
import { connect } from 'react-redux';
import Control from '../Control/Control';
import Switch from '../Switch/Switch';
import Total from '../Total/Total';

import { switchMusic , coinValue, betValue, switchSound } from "../../data/data";  //include data from data
import { coinValueChange, betValueChange, soundValueChange, musicValueChange } from "../../actions/actionCreators";


class Settings extends React.Component{

    render(){
        const { activeCoin, activeBet, activeSound, activeMusic } = this.props;
    return(
        <div className="panel">

                <p className="panel__title">Setting</p>

                <div className="content">

                    <div className="content__row">

                        <div className="content__col content__col--75">

                            <Control activeValue={ activeCoin }   action={ coinValueChange } controlData={ coinValue } ></Control>

                            <Control   activeValue={ activeBet } action={ betValueChange } controlData={ betValue } ></Control>

                        </div>

                        <div className="content__col content__col--25">

                            <Total coin={ activeCoin } bet={ activeBet } ></Total>

                        </div>
                    </div>
                </div>

                <div className="content">

                    <span className="content__line"></span>

                    <div className="content__row">

                        <div className="content__col content__col--45">

                            <Switch activeSwitch={ activeSound } action={soundValueChange} switchData={switchSound}></Switch>

                        </div>

                        <div className="content__col content__col--45">

                            <Switch activeSwitch={ activeMusic } action={musicValueChange}  switchData={switchMusic}></Switch>

                        </div>

                    </div>

                </div>

        </div>

    )
}
}

export default connect(
    ( state ) =>({
        activeCoin: state.data.coin,
        activeBet: state.data.bet,
        activeMusic: state.data.music,
        activeSound: state.data.sound
    }))(Settings);