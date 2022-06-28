import chalk from 'chalk'; // colors text in terminal
import randomColor from 'randomcolor'; // generates random colors & lets us define some values

// process.argv[i] takes whatever word is written in console in the position of i
const colorHueFirst = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const colorLuminosityFirst = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

// function to output the desired block. Input is the randomly generated color (format: hex code):
const outputString = (hexColorCode) => {
  return `###############################
###############################
###############################
#####                     #####
#####        ${hexColorCode}      #####
#####                     #####
###############################
###############################
###############################`;
};

// selects code (colorHueFirst or ColorLuminosityFirst)
// based on wether user specifies color or hue first
if (process.argv[2] === 'light' || process.argv[2] === 'dark') {
  console.log(
    chalk.hex(colorLuminosityFirst)(outputString(colorLuminosityFirst)),
  );
} else {
  console.log(chalk.hex(colorHueFirst)(outputString(colorHueFirst)));
}
