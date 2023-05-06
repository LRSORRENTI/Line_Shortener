"use strict";
var fs = require('fs');
// fs module requiring file-system
var formatLines = function (filePath /* string constraint added here */) {
    // check if the file path ends with ".txt"
    if (!filePath.endsWith('.txt')) {
        throw new Error('Invalid file type. Only .txt files are allowed.');
        //   With this if you pass a file path that doesn't
        //    end with ".txt", TypeScript will give you a 
        //    compilation error:
        // Argument of type 'string' is not assignable 
        // to parameter of type 'string'.ts(2345)
        // And if you try to run the function with an 
        // invalid file type, it will throw an error:
        // Error: Invalid file type. Only .txt files are allowed.
    }
    // Read file contents and split into an array of lines
    var lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    // Initialize an empty array to store the formatted lines
    var formattedLines = [];
    // Loop through each line in the file
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        // but you can specify whatever line length 20 chars,
        // 100 chars, etc
        if (line.length > 60) {
            // Split the line into an array of words
            var words = line.split(' ');
            // Initialize a variable to hold the current line being built
            var currentLine = words[0];
            // Loop through each word in the line, starting with the second word
            for (var _a = 0, _b = words.slice(1); _a < _b.length; _a++) {
                var word = _b[_a];
                // If adding the next word to the current line would 
                // make it longer than 60 characters
                if (currentLine.length + word.length + 1 > 60) {
                    // Then Add the current line to the array of formatted lines
                    formattedLines.push(currentLine);
                    // Start a new line with the current word
                    currentLine = word;
                }
                else {
                    // Add the next word to the current line
                    currentLine += " ".concat(word);
                }
            }
            // Add the last line to the array of formatted lines
            formattedLines.push(currentLine);
        }
        else {
            // If the line is 60 characters or shorter,
            // add it to the array of formatted lines without modification
            formattedLines.push(line);
        }
    }
    // Return the array of formatted lines
    return formattedLines;
};
//  Add a type constraint to the filePath argument 
//  to enforce that it must be a string ending with ".txt".
//  formatLines function to add this type constraint:

// const formattedLines = formatLines('path/to/your/folder/or/file.txt');

// Example of structure of above variable: 
// the argument for formatLines needs to be the path to your .txt file
// const formattedLines = formatLines('path/to/textfile.txt');
// copy txt file path, then paste below

// if on windows, after copying path
// and you see '\path\to\textFile.txt'
// you need to change the backslash in path '\' to
// forward slash '/' 

var formattedLines = formatLines('path/to/textfile.txt');

// The argument for writeFileSync needs to be the path to your file: 
// ../03_formattedTextOutDir/name_Of_Your_New_Formatted_Text_File.txt

fs.writeFileSync('./03_formattedTextOutDir/name_Of_Your_New_Formatted_Text_File.txt', formattedLines.join('\n'), 'utf-8');

// Example of structure below: 
// fs.writeFileSync('BEARD-CARE_file.txt', formattedLines.join('\n'), 'utf-8');
// Then after saving with proper paths, run: node Line_Shortener.js
// in the terminal
