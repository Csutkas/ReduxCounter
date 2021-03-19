import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';

// redux imports
import { connect } from 'react-redux'

class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View 
          style={{ 
            flexDirection: 'row', 
            width: 200,
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }    
}

// access to the store
function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
});


