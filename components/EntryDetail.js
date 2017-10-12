import React from 'react';
import { View, Text } from 'react-native';

class EntryDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>Entry Detail - {this.props.navigation.state.params.entryId}</Text>
      </View>
    )
  }
}

export default EntryDetail;
