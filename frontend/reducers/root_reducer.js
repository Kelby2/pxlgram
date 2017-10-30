import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './sessions/session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
});

export default RootReducer;
