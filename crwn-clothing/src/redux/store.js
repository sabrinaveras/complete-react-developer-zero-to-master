import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middleware = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store);
/*
*   What we need to do is add middleware to our store so that whenever actions get fired or dispatched we can catch them
*   and then display them.
*
*   And the middle wears which is the peace in the middle between our actions firing and our rootReducer are pretty much
*   just functions that receive actions in and then do something with them and pass them out into rootReducer.
*
* */


/*
*   redux-logger
*
*   This redux-logger library is pretty much just that and all does is it catches the action it console logs it out for us
*   and then it moves it along.
*
*   So all we need to do to bring that in is we just import logger from redux-logger and this is a really handy middleware
*   because once we finish writing all of this configuration and setup which is quite extensive I totally understand it
*   will make it much easier for us to understand what it is that we did so once we have these required libraries we the
*   import in our rootReducer form our reducer file and now we have to actually set up our middleware.
*
*
* */

export default {store, persistor};