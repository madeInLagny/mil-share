# \<mil-share\>

'mil-share' is webcomponent that let share the current url on social networks and by email.
Available links: Facebook, Twitter, Whatsapp, email.
V2 removes dependency from Polymer and only relies on lit-element

Demo: https://stackblitz.com/edit/mil-share-example?file=index.js

## Usage

### Install from npm

```sh
npm install --save mil-share
```

### Import to your webcomponent

```js
import "mil-share";
```

### Add to html

```js
<mil-share></mil-share>
```

## Styling

Use customs CSS properties for styling.

| CSS property               | Definition                         | Default |
| -------------------------- | ---------------------------------- | ------- |
| `--body-text-color`        | header font color                  | #555    |
| `--social-icon-width`      | social icons width                 | 32px    |
| `--social-icon-height`     | social icons height                | 32px    |
| `--share-icon-color`       | share icon color                   | #555    |
| `--share-icon-height`      | share icon height                  | 24px    |
| `--share-icon-width`       | share icon width                   | 24px    |
| `--share-icon-color-hover` | share icon fill color when hovered | #eee    |
