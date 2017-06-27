// import library for making component
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import ViewImage from './Images/eye.png';
import SortAlbums from './SortAlbums';

// make component
// class component
class AlbumList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };


    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByArtistAsc = this.sortByArtistAsc.bind(this);
    this.sortByListenersAsc = this.sortByListenersAsc.bind(this);
    this.sortByNameDes = this.sortByNameDes.bind(this);
    this.sortByArtistDes = this.sortByArtistDes.bind(this);
    this.sortByListenersDes = this.sortByListenersDes.bind(this);
  }

  componentWillMount() {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=9c7bc14a4159906cae3a29372b621642&format=json')
    .then((response) => response.json())
    .then((responseData) => {
      //console.log(responseData);
      this.setState({ albums: responseData.tracks.track });
    });
  }

  sortByListenersAsc() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = Number(a.listeners);
      const bTemp = Number(b.listeners);

      if (bTemp < aTemp) return -1;
      if (bTemp > aTemp) return 1;
      return 0;
    });
    this.setState({ albums: arr });
  }

  sortByListenersDes() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = Number(a.listeners);
      const bTemp = Number(b.listeners);

      if (bTemp < aTemp) return 1;
      if (bTemp > aTemp) return -1;
      return 0;
    });
    this.setState({ albums: arr });
  }

  sortByNameAsc() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = a.name.toLowerCase();
      const bTemp = b.name.toLowerCase();

      if (bTemp < aTemp) return -1;
      if (bTemp > aTemp) return 1;
      return 0;
    });

    this.setState({ albums: arr });
  }

  sortByNameDes() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = a.name.toLowerCase();
      const bTemp = b.name.toLowerCase();

      if (bTemp < aTemp) return 1;
      if (bTemp > aTemp) return -1;
      return 0;
    });
    this.setState({ albums: arr });
  }

  sortByArtistAsc() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = a.artist.name.toLowerCase();
      const bTemp = b.artist.name.toLowerCase();

      if (bTemp < aTemp) return -1;
      if (bTemp > aTemp) return 1;
      return 0;
    });
    this.setState({ albums: arr });
  }

  sortByArtistDes() {
    const arr = this.state.albums.sort((a, b) => {
      const aTemp = a.artist.name.toLowerCase();
      const bTemp = b.artist.name.toLowerCase();

      if (bTemp < aTemp) return 1;
      if (bTemp > aTemp) return -1;
      return 0;
    });
    this.setState({ albums: arr });
  }


  iterateAlbumData() {
    //this.sortByNameDes();
    // array helper
    return this.state.albums.map(x =>
      <AlbumDetail key={x.url} object={x} icon={ViewImage} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
      <SortAlbums
      nameA={this.sortByNameAsc} nameD={this.sortByNameDes}
      artistA={this.sortByArtistAsc} artistD={this.sortByArtistDes}
      listA={this.sortByListenersAsc} listD={this.sortByListenersDes}
      />
        { this.iterateAlbumData() }
      </View>
    );
  }
}


// functional component
/*const AlbumList = () => {
  return(
    <View>
      <Text>AlbumList!</Text>
    </View>
  );
};
*/

// make the component available
export default AlbumList;
