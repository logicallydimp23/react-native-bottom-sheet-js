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
    const {
      children,
      minHeight,
      maxHeight,
      contentStyle,
    } = this.props;
    return (
      <View
        style={{
          width: '100%',
          minHeight,
          maxHeight,
          ...contentStyle,
        }}
      >
        {children}
      </View>
    )
  }

  render() {
    const {
      expanded,
    } = this.state;

    const {
      backgroundColor,
    } = this.props;
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
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  contentStyle: PropTypes.object,
}

BottomSheet.defaultProps = {
  backgroundColor: '#ffffff',
  minHeight: 56,
  maxHeight: Dimensions.get('window').height / 2,
  contentStyle: {},
}

export default BottomSheet;
