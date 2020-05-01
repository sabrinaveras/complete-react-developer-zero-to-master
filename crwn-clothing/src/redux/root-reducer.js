import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
	user: userReducer
});

/*
*   The rootReducer represents the overall reducer based on all of the reduces that it pulls in order for us to combine
*   them all together. We actually need to import this function called CombineReducers and this comes from the redux
*   library. So with this when we import our userReducer file we are going to export out this as the default value which
*   gets returned from combined producers passing in this object where the key goes to the actual reducer that we want.
*
* */

/*
*   So if you remember our full state in redux is just one big Jason object. The key is that represent the individual
*   slices of state the actual reducer as is the actual individual red doors users that we've wrote. So this userReducer
*   is just currently this object with a current user value that will get set whenever the set current user action fires.
*
* */