import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import CounterApp from './src/CounterApp'

// redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/**
 * Store - holds our state - THERE IS ONLY ONE STATE - (all components state are in the store) - original state is read only - can be copied and modified
 * Action - State can be modified using actions - SIMPLE OBJECTS
 *  (actions must go to a reducer)
 * Dispatcher - Actions needs to be sent by someone (function) - known as dispatching the action
 * Reducer - receives the action and modifies the state to give us a new state - reducer return the updated state
 *  - pure functions
 *  - only mandatory argument is the "type"
 * Subscriber - listens for state change to update the ui
 * 
 * Provider needs to connect the store to the application
 */

const initialState = {
  counter: 0
}
 
const reducer = (state = initialState, action) => {
   switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1}
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1}
   }
  return state
}

const store = createStore(reducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CounterApp/>  
      </Provider>
      
    )
  }    
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
});


