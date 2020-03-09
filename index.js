import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  Platform,
  Dimensions,
} from 'react-native'

import { COLOR } from '@themes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.LIGHT,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  sheetContent: {
    width: '100%',
    minHeight: 56,
    maxHeight: Dimensions.get('window').height / 2,
  },
})

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class ActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
  }

  toggle = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  open = data => {
    this.setState({
      expanded: true,
    })
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  close = () => {
    this.setState({ expanded: false });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  renderChildren = () => {
    const { children } = this.props;
    return (
      <View style={styles.sheetContent}>
        {children}
      </View>
    )
  }

  render() {
    const {
      expanded,
    } = this.state;
    return (
      <View
        style={styles.container}
      >
        {expanded && this.renderChildren()}
      </View>
    )
  }
}

export default ActionSheet;
