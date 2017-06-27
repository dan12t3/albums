// import tools for making component
import React from 'react';
import { View, Text, Image } from 'react-native';


// make component
// functional component because we don't need lifecycle methods

const AlbumDetail = ({ object, icon }) => {
  const { albumBoxStyle, albumImageStyle, albumInfoStyle, albumViewStyle,
     thumbnailStyle, songText, viewImageStyle } = styles;
  const { name, artist, listeners, image } = object;

  return (

    <View style={albumBoxStyle}>
      <View style={albumImageStyle}>

        <Image style={thumbnailStyle} source={{ uri: image[3]['#text'] }} />
        </View>
      <View style={albumInfoStyle}>
        <Text style={songText}>{name}</Text>
        <Text>{artist.name}</Text>
      </View>
      <View style={albumViewStyle}>
        <Image style={viewImageStyle} source={icon} />
        <Text>{listeners}</Text>
      </View>

    </View>

  );
};

const styles = {
  albumBoxStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 60,
    flexDirection: 'row'
  },
  albumImageStyle: {
    marginLeft: 5,
    justifyContent: 'space-around'


  },
  albumInfoStyle: {
    justifyContent: 'space-around',
    width: 225,
    marginLeft: 5


  },
  albumViewStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'

  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  viewImageStyle: {
    height: 15,
    width: 15
  },
  songText: {
    fontSize: 15,
    color: 'black'
  }
};

// make component available
export default AlbumDetail;
