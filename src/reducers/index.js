
import {v4 as uuid} from 'uuid'


const reducer = (state = {}, action) => {
    switch(action.type) {

        case "ADD_ITEM": {
            const {text} = action.payload

            const newItem = {
                id: uuid(),
                text
            }

            return {
                items: [...state.items, newItem]
            }
        }

        default:
            return state
    }
}

export default reducer
