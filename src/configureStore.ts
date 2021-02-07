import { configureStore, getDefaultMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// root reducer
import reducer from "@Reducers";
// saga
import sagas from "@Sagas";

const configureAppStore = (): EnhancedStore => {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    // Create the store with saga middleware
    const middleware = [sagaMiddleware, logger];

    const store = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
        devTools: process.env.NODE_ENV !== "production",
    });

    sagaMiddleware.run(sagas);

    return store;
};

export default configureAppStore;
