import { DdSdkReactNative, DdSdkReactNativeConfiguration } from 'dd-sdk-reactnative';

const config = new DdSdkReactNativeConfiguration(
  "CLIENT_TOKEN",
  "DD_ENV",
  "RUM_APPLICATION_ID",
  true, // track User interactions (e.g.: Tap on buttons)
  true, // track XHR Resources
  true // track Errors
)

DdSdkReactNative.initialize(config)

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
// Our Components
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


let listUrl = "NGROK_LIST_API_URL"+'/list';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setItems] = useState([]);
  //Fetch data on start
  useEffect(() => {
    fetch(
      listUrl)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.error(error))
      .then(() => setLoading(false));
  }, []);

  const deleteItem = (id) => {
    //Delete the item visually
    setItems(prevItems => {
      return prevItems.filter(item => item._id != id);
    });
    // DEL request
    fetch(listUrl + `/${id}`, {
      method: 'delete',
    }).then(res => res)
      .then(res => {
        
        console.log(res.status)
      })
      .catch((error) => {
        Alert.alert('Error', "Couldn't delete that item, try again.");
        console.log(error);
      })
  }

  const addItem = (text) => {

    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {

      //Post request
      fetch(listUrl, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: text })
      }).then(res => res.json())
        .then(res => {
          console.log(res)
          //Update UI
          setItems(prevItems => {
            return [...prevItems, { _id: res._id, text: text }]
          })
        })
        .catch((error) => {
          Alert.alert('Error', "Couldn't add that item, try again.");
          console.log(error);

        })

    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <Header title='Shopping List' ></Header>
      {isLoading ? <ActivityIndicator /> : (

        <FlatList
          style={styles.items}
          data={data}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />)}
        />

      )}
      <AddItem addItem={addItem} />

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 5
  },

  items: {
    marginTop: 30,
  },

});

export default App;
