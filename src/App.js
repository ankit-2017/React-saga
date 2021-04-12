import Routes from './Router/routes'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers'
import rootSaga from './sagas'


//create saga middleware
const sagaMiddleware = createSagaMiddleware()
//mount it on store
const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
  )

  //run the saga
  sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
      
  );
}

export default App;
