import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    height: 14,
    width: 14,
    marginRight: 4,
    marginTop: 2
  }
});

export default class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    const phoneRegex = /^(\d{3})(\d{3})(\d{4})$/;
    const numberMatch = phoneRegex.exec(this.props.phone);
    this.state = {
      formattedNumber: numberMatch[1] +
        '.' +
        numberMatch[2] +
        '.' +
        numberMatch[3],
      phoneURL: 'tel:' + this.props.phone
    };
  }
  handleTouch(event) {
    Linking.canOpenURL(this.state.phoneURL).then(supported => {
      if (supported) {
        Linking.openURL(this.state.phoneURL);
      } else {
        console.log("Don't know how to open URI: " + this.state.phoneURL);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.icon]}
          source={require('./icon-phone.png')}
        />
        <TouchableHighlight
          onPress={() => this.handleTouch()}
        >
          <Text style={this.props.style}>
            {this.state.formattedNumber}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

PhoneNumber.propTyps = {
  phone: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
};
