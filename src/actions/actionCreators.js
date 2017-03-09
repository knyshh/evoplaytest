import { BET_CHANGE, COIN_CHANGE ,SOUND_CHANGE , MUSIC_CHANGE } from '../constants'

export const coinValueChange = (input) => {
    return {
        type: COIN_CHANGE,
        payload: input.target.value
    }
};

export const betValueChange = (input) => {
    return {
        type: BET_CHANGE,
        payload: input.target.value
    }
};

export const soundValueChange = (input) => {
    return {
        type: SOUND_CHANGE,
        payload: input.target.value
    }
};

export const musicValueChange = (input) => {
    return {
        type: MUSIC_CHANGE,
        payload: input.target.value
    }
};
