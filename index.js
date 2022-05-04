import chalk from 'chalk'; // colors text in terminal
import randomColor from 'randomcolor'; // generates random colors & lets us define some values

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const colorLum = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

// function to output the desired block. Input is the random generated color:
const outputString = (hex) => {
  return `###############################
###############################
###############################
#####                     #####
#####        ${hex}      #####
#####                     #####
###############################
###############################
###############################`;
};

/* chooses between const color & colorLum.
color accepts hue first, the luminosity second.
colorLum accepts the luminosity first, hue second. */
if (process.argv[2] === 'light' || process.argv[2] === 'dark') {
  console.log(chalk.hex(colorLum)(outputString(colorLum)));
} else {
  console.log(chalk.hex(color)(outputString(color)));
}
