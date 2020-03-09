import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  Platform,
  Dimensions,
} from 'react-native'

import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    width: '100%',
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

class BottomSheet extends Component {
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

  open = () => {
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
      backgroundColor,
    } = this.state;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
          },
        ]}
      >
        {expanded && this.renderChildren()}
      </View>
    )
  }
}

BottomSheet.propTypes = {
  backgroundColor: PropTypes.string,
}

BottomSheet.defaultProps = {
  backgroundColor: '#ffffff'
}

export default BottomSheet;
