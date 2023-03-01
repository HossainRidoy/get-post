import { createStore, action,persist } from "easy-peasy";
import DataModel from "./model/data-model";

const store = createStore({
data:persist(DataModel),

  });
export default store