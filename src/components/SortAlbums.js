import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class SortAlbums extends Component {
  state={
    sort: 'Ldsc'
  }

  sort(itemValue) {
    switch (itemValue) {
      case 'Nasc':
      this.props.nameA();
      break;

      case 'Aasc':
      this.props.artistA();
      break;

      case 'Lasc':
      this.props.listA();
      break;

      case 'Ndsc':
      this.props.nameD();
      break;

      case 'Adsc':
      this.props.artistD();
      break;

      case 'Ldsc':
      this.props.listD();
      break;

      default:
      console.log('default');

    }
  }


render() {
  const { sortBox } = styles;


  return (
    <View style={sortBox}>
      <Text>Sort By: </Text>
      <Picker
      selectedValue={this.state.sort}
      onValueChange={(itemValue, itemIndex) => {
          this.sort(itemValue);
          this.setState({ sort: itemValue });
        }
      }
      >
        <Picker.Item label="Name - Ascending" value="Nasc" />
        <Picker.Item label="Name - Descending" value="Ndsc" />
        <Picker.Item label="Artist - Ascending" value="Aasc" />
        <Picker.Item label="Artist - Descending" value="Adsc" />
        <Picker.Item label="Listeners - Ascending" value="Lasc" />
        <Picker.Item label="Listeners - Descending" value="Ldsc" />
      </Picker>

    </View>
  );
}
}

const styles = {
  sortBox: {
    height: 60,
    margin: 5,
    justifyContent: 'flex-start'
  }
};

export default SortAlbums;
