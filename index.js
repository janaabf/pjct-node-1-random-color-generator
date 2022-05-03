import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const colorHue = randomColor({
  luminosity: process.argv[2],
});

const outputString = (c) => {
  return `###############################
###############################
###############################
#####                     #####
#####        ${c}      #####
#####                     #####
###############################
###############################
###############################`;
};

if (process.argv[2] === 'light' || process.argv[2] === 'dark') {
  console.log(chalk.hex(colorHue)(outputString(colorHue)));
} else {
  console.log(chalk.hex(color)(outputString(color)));
}
