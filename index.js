import chalk from 'chalk';
import randomColor from 'randomcolor';

let color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

let colorHue = randomColor({
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

if (process.argv[2] !== 'light' || 'dark') {
  console.log(chalk.hex(color)(outputString(color)));
} else {
  console.log(chalk.hex(colorHue)(outputString(colorHue)));
}
