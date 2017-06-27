//Android Platform

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
  <View>
    <Header headerText={'Top Songs'} />
    <ScrollView>
      <AlbumList />
    </ScrollView>
  </View>
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
