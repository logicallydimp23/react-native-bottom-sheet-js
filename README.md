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

// Put at the very bottom of the screen file
<View>
  {/* Other content here. */}
  <BottomSheet
    ref={bottomSheet => { this.bottomSheet = bottomSheet }}
  >
    <Text>This is the content that will display when the bottom sheet is open.</Text>
  </BottomSheet>
</View>
```

### Methods

- open()
  - Opens the bottom sheet.

- close()
  - Closes the sheet.

- toggle()
  - Open or closes the sheet based on last state.

### Contribute

Open for PR's. Any improvements or fixes are welcome!