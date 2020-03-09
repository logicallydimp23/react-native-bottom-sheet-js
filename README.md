A bottom sheet that uses Material sheets #specs. Written in pure JS.

### Installation

```
npm i react-native-bottom-sheet-js
```

or

```
yarn add react-native-bottom-sheet-js
```

if you are using Yarn

### Usage

```jsx
import BottomSheet from 'react-native-bottom-sheet-js'

// To open sheet do
this.bottomSheet.open()

// Always put <BottomSheet> at the very bottom of the screen file
<View>
  {/* Other content here. */}
  <BottomSheet
    ref={bottomSheet => { this.bottomSheet = bottomSheet }}
  >
    <Text>This is the content that will display when the bottom sheet is open.</Text>
  </BottomSheet>
</View>
```

### Props

- backgroundColor
  - String
  > Color of the background

- minHeight
  - Number
  > Minimum height of the sheet when open.
  > default value is 56
  > as stated https://material.io/components/sheets-bottom/#specs the minimum height of a sheet must be 56dp.

- maxHeight
  - Number
  > Maximum height of the sheet when open(only triggers when you have a lot of content).
  > default value is 50%(Dimensions.get('window).height) of the screen height.
  > as stated https://material.io/components/sheets-bottom/#specs the maximum height of a sheet must be half of the screen size which is 50%.

- contentStyle
  - Object
  > Style of the content component.
  > Only accepts object as a parameter.
  > If you specify a height on this component be sure to have it <= maxHeight so it won't clamp and render stuff out of place.
  > You can add paddings or margins here.

### Methods

- open()
  - Opens the bottom sheet.

- close()
  - Closes the sheet.

- toggle()
  - Open or closes the sheet based on last state.

### Contribute

Open for PR's. Any improvements or fixes are welcome!