import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import counter from "./reducers/counter";

const store = configureStore({
  reducer: { counter, auth },
});

export default store;
