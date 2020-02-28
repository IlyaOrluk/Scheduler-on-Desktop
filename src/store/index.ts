import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleware = [thunk]
// const composeEnhancers =
//   typeof window !== 'undefined'
//     ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose
const composeEnhancers = process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

let state
if (typeof window !== 'undefined') {
  state = (window as any).__PRELOADED_STATE__
  delete (window as any).__PRELOADED_STATE__
}
const store = createStore(
  reducers,
  state,
  composeEnhancers(applyMiddleware(...middleware))
)

export { store }
