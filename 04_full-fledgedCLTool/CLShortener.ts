

const fs = require('fs');

const formatLines = (filePath, lineLength) => {
  // Check if the file path ends with ".txt"
  if (!filePath.endsWith('.txt')) {
    throw new Error('Invalid file type. Only .txt files are allowed.');
  }

  // Read file contents and split into an array of lines
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  // Initialize an empty array to store the formatted lines
  const formattedLines = [];

  // Loop through each line in the file
  for (const line of lines) {
    // If the line is shorter than or equal to the line length, add it to the array of formatted lines without modification
    if (line.length <= lineLength) {
      formattedLines.push(line);
    } else {
      // Split the line into an array of words
      const words = line.split(' ');

      // Initialize a variable to hold the current line being built
      let currentLine = words[0];

      // Loop through each word in the line, starting with the second word
      for (const word of words.slice(1)) {
        // If adding the next word to the current line would make it longer than the line length
        if (currentLine.length + word.length + 1 > lineLength) {
          // Add the current line to the array of formatted lines
          formattedLines.push(currentLine);
          // Start a new line with the current word
          currentLine = word;
        } else {
          // Add the next word to the current line
          currentLine += ` ${word}`;
        }
      }

      // Add the last line to the array of formatted lines
      formattedLines.push(currentLine);
    }
  }

  // Return the array of formatted lines
  return formattedLines;
};

// Get the file path and line length from the command line arguments
const filePath = process.argv[2];
const lineLength = parseInt(process.argv[3]);

// Call the formatLines function with the file path and line length arguments
const formattedLines = formatLines(filePath, lineLength);

// Write the formatted lines to a new file
fs.writeFileSync('./output.txt', formattedLines.join('\n'), 'utf-8');

// You can run it from the command line with 
// node CLShortener.js path-to-file-arg.txt 70.

// This will read the contents of the file
//  at path-to-file-arg.txt, format the lines to be no
//   longer than 70 characters, and write the formatted 
//   lines to a new file called output.txt