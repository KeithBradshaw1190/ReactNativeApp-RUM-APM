import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Header = ({title}) => {


  return (
    <View style={styles.headWrapper}>
    <Text style={styles.sectionTitle}>{title}</Text> 
    </View>
  );
};

Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
headWrapper: {
  paddingTop: 60,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color:'black',
},

});

export default Header;
