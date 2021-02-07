import { takeLatest, all, put } from "redux-saga/effects";
import {
    fetchDataRequested,
    fetchDataReceived,
    fetchDataFailure,
} from "@Reducers/home";

function* getHomeData() {
    try {
        // TODO call api
        yield put(fetchDataReceived({ text: "1234" }));
    } catch (error) {
        yield put(fetchDataFailure(yield error));
    }
}

export default function* home() {
    yield all([takeLatest(fetchDataRequested.type, getHomeData)]);
}
