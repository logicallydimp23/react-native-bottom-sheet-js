import React, { Component, PureComponent } from 'react'
import {
  StyleProp,
  ViewStyle,
} from 'react-native'

export interface BottomSheetProps {
  /**
   * Color of the background
   */
  backgroundColor?: String,
  /**
   * Minimum height of the sheet when open.
   * 
   * @default 56
   * 
   * as stated https://material.io/components/sheets-bottom/#specs
   * the minimum height of a sheet must be 56dp.
   */
  minHeight?: Number,
  /**
   * Maximum height of the sheet when open(only triggers when you have a lot of content).
   * 
   * @default 50%
   * 
   * as stated https://material.io/components/sheets-bottom/#specs
   * the maximum height of a sheet must be half of the screen size which is 50%.
   */
  maxHeight?: Number,
  /**
   * Style of the content component.
   * 
   * Only accepts object as a parameter.
   * 
   * If you specify a height on this component be sure to have it <= maxHeight so it won't clamp and render stuff out of place.
   * 
   * You can add paddings or margins here.
   * 
   * @type Object
   */
  contentStyle?: StyleProp<ViewStyle>,
}

export class BottomSheet extends Component<BottomSheet> { }