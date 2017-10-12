import React from 'react';
import { View, Text } from 'react-native';

class EntryDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    const year = entryId.slice(0, 4);
    const month = entryId.slice(5, 7);
    const day = entryId.slice(8);

    return {
      title: `${year}/${month}/${day}`
    }
  }
  render() {
    return (
      <View>
        <Text>Entry Detail - {this.props.navigation.state.params.entryId}</Text>
      </View>
    )
  }
}

export default EntryDetail;
