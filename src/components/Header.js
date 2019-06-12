// import libraries
import React from "react";
import { Text, View } from "react-native";

// create component
const Header = (props) => {
  const { fontStyles, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={fontStyles}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
    viewStyles: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
  fontStyles: {
    fontSize: 25
  }
};

// make component visible to other parts
export default Header;
