import { Map } from 'immutable'
import * as constants from '../constants/files.js'

const initialState = Map({
	storageSize: '',
	storageCost: '',
})

export default function allowanceDialogReducer(state = initialState, action) {
	switch (action.type) {
	case constants.HANDLE_STORAGE_SIZE_CHANGE:
		return state.set('storageSize', action.size)
	case constants.SET_STORAGE_COST:
		return state.set('storageCost', action.cost)
	default:
		return state
	}
}
