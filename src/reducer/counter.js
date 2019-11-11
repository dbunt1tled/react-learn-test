import {STORE_COUNTER_INCREMENT} from '../constants'

export default (counterState = 0, action) => {
    return action.type === STORE_COUNTER_INCREMENT ? counterState + 1 : counterState;
}
