import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './js/reducers/index.js'
import rootSaga from './js/sagas/index.js'
import FilesApp from './js/components/app.js'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const rootElement = (
	<Provider store={store}>
		<FilesApp />
	</Provider>
)

ReactDOM.render(rootElement, document.getElementById('react-root'))
