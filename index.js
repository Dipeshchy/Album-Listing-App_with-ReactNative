// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import library to create component
import React from "react";
import { AppRegistry , View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// create component
const App = () => (
  <View style={{ flex:1 }}>
  <Header headerText={"Albums"} />
  <AlbumList />
  </View>
);

// render the component to device
AppRegistry.registerComponent("albums", () => App);
