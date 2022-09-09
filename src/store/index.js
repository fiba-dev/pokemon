import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducers";
import localforage from "localforage";

const persistConfig = {
	key: "root",
	storage: localforage,
};

console.log("Soy storage", storage);
const persistReduce = persistReducer(persistConfig, reducer);
const store = createStore(persistReduce, applyMiddleware());
// store.subscribe(() => {
// 	console.log("SOYLOCALSTORAGE", localStorage);
// });
const persistor = persistStore(store);
console.log("Soy storage", storage, persistor);
export { persistor };
export default store;
