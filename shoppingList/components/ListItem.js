import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
    return(
        <TouchableOpacity>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{item.text}</Text>
            </View>
            <Icon
            name="remove"
            size={20}
            color="black"
            onPress={() => deleteItem(item._id)}
          />

            
        </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square:{
        width: 24,
        height: 24,
        opacity: 0.4,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight:15,

    },
    itemText:{
        maxWidth: '80%',
    },


});

export default ListItem;
