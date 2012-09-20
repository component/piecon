
# piecon

  Pie charts for [component/favicon](https://github.com/component/favicon)
  inspired by the original [piecon](https://github.com/lipka/piecon). Styled
  with CSS!

  ![](http://f.cl.ly/items/360n3W0D2I451205041b/Screen%20Shot%202012-09-19%20at%204.35.54%20PM.png)

## Installation

    $ component install component/piecon

## Styling

  Piecon utilizes [component/style](https://github.com/component/style)
  to enable CSS styling for Canvas rasters. For example the default
  style is:

```css
.pie {
  color: #EC4E89;
  background: #bbb;
  border: 2px solid white;
}
```

## API

### new Piecon([selector])

  Initialize a new `Piecon` with optional CSS `selector` used
  for styling, this defaults to ".pie".

### Piecon#update(n)

  Update the percentage to `n`, this will automatically
  draw the pie and replace the favicon.

### Piecon#size(n)

  Set the diameter to `n`.

# License

  MIT

