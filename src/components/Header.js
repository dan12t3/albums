// import libararies for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical
    alignItems: 'center',  //horizontal
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
    /*iOS settings:
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2
    */
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
};


// Make the component available to other parts of the App
export default Header;

// These components will not be directly rendered but will allow the component
// to be use at other parts of the applications
