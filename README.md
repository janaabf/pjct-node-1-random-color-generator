# Random Color Generator

This application generates random colors and will print it with it's respective hex code in the command line. The hue and/or luminosity can be specified by the user.

## What it does:

- accepts user input (if one or both values are left blank, random value is applied):
  1.  hue
  2.  luminosity
- prints colored output: block of # (31x9) with respective hex color in the middle

! colors, even when specified, may vary in between runs.

## Usage:

Generate random colored square:

```bash
$ node index.js
```

![sc_random](https://user-images.githubusercontent.com/102243548/166485238-c891e79e-8745-4891-bf12-6a3d10b97989.png 'random color') ![sc_random2](https://user-images.githubusercontent.com/102243548/166501062-ceb79901-3fce-4226-a7c6-c59339b91fc0.png 'random color 2')

Generate square with specific color:

```bash
$ node index.js blue
```

![sc_blue](https://user-images.githubusercontent.com/102243548/166501133-2d734353-50fe-4c4d-bb18-82a20dd4c08c.png 'blue')

Generate square with specific color and luminosity (light/dark):

```bash
$ node index.js blue dark
```

![sc_blue_dark](https://user-images.githubusercontent.com/102243548/166501183-a17097f8-71ef-46fe-be76-d47b44306611.png 'blue dark')

## Used Libraries

Chalk:

```bash
yarn add chalk
```

Random Color Picker:

```bash
yarn add randomcolor
```
