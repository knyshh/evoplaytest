import { BET_CHANGE, COIN_CHANGE ,SOUND_CHANGE , MUSIC_CHANGE } from '../constants'

export const data = ( state = {}, action ) =>{
    switch(action.type){
        case "BET_CHANGE":
            return  { ...state, bet : Number(action.payload) };
        case "COIN_CHANGE":
            return { ...state, coin : Number(action.payload)  };
        case "SOUND_CHANGE":
            return { ...state, sound : action.payload  };
        case "MUSIC_CHANGE":
            return { ...state, music : action.payload  };
        default:
            return state
    }
}
