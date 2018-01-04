# Class Name Builder
Simple class for building BEM class names from css modules.

## Usage
### SCSS
```scss
.Modal {
  display: block;
  
  &__header {
    font-size: 2em;
    
    &--large {
      font-size: 3em;
    }
  }
  
  &--small {
    font-size: 0.5em;
  }
}
```
### JS
Please note that the constructor has a new option available. Providing `true`
as the third argument will result in generating two classes instead of one
when fetching for element with modifier. Please see `headerLarge` example.

```js
import ClassNameBuilder from 'class-name-builder';
import style from './style.scss';

const c = new ClassNameBuilder(style, 'Modal');
const cExtended = new ClassNameBuilder(style, 'Modal', true);

const base = c.get(); // returns `Modal`
const header = c.get({ e: 'header' }); // returns `Modal__header`
const small = c.get({ m: 'small' }); // returns `Modal--small'
const headerLarge = cExtended.get({ e: 'header', m: 'large' }); // returns `Modal__header Modal__header--large`
const headerLargeWithoutElement = c.get({ e: 'header', m: 'large' }); // returns `Modal__header--large`
const nonExistent = c.get({ e: 'error' }); // returns `` (empty string)
```
