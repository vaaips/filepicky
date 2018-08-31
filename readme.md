### Filepicky
Simple custom file picker

#### Installation
```sh
$ npm i -S filepicky
```

#### Usage
######  HTML
```html
<input type="file" class="input">
<button class="picker">Choose file</button>
```

######  JS
```js
import filepicky from 'filepicky'

filepicky({picker: '.picker', input: '.input'})
```