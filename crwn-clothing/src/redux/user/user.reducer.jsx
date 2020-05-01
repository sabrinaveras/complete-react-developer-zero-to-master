/*
*   Write a new concept called initial state and this will just  be a object.
*
*   We make sure to set some initial state value which is the default values when this component mounts for the first time
*
* */

const INITIAL_STATE = {
	currentUser: null
}


/*
*   state = INITIAL_STATE --> So this is an iOS 6 feature functions where you can actually pass some default value here
*   with this equals and then value syntax. What this means is that if state is ever undefined meaning that it's not set
*   then it will fall back and leverage this initial state value that we passed here.
*
* */
const userReducer = (state = INITIAL_STATE, action) =>{

	switch (action.type) {
		case "SET_CURRENT_USER":
			return{
				...state,
				currentUser: action.payload
			}
		default:
			return state
	}
}

export default userReducer;