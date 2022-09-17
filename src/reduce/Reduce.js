import {combineReducers} from "redux";
import {CardRepoReducer} from "../components/CardRepo/CardRepo.reducer";
import {CardSearchReducer} from "../components/CardSearch/Card.reducer";
import {MainLayoutReducer} from "../layouts/MainLayout.reducer";


const rootReducer = combineReducers({
  cardRepo: CardRepoReducer,
  cardSearch: CardSearchReducer,
  mainLayout:MainLayoutReducer
})

export default rootReducer
