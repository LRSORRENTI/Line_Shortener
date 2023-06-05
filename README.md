# QUICKSTART:

## Text file line length formatter

## Command Line Version:

Apparently there's a Linux command for this:

cat textFile.txt | fmt -w 40 -u

Still fun to build

```
 You can run it from the command line with:

 Takes two arguments (path_to_file, numChars)

 node /CLVersion/CLShortener.js path-to-file-arg.txt 60

 This will read the contents of the file
 at path-to-file-arg.txt, format the lines to be no
 longer than 60 characters, and write the formatted
 lines to a new file called output.txt

```

## Hard Change Code Version:

### Step 1 - Specify line-length in this if statement

```
  if (line.length > 60) { }
```

### Step 2 - Argument for formattedLines is path to .txt file

```javascript
var formattedLines = formatLines("path/to/textfile.txt");
```

### Step 3 - Change the "name_Of_Your_New_Formatted_Text_File.txt" argument to new name for formatted file

```javascript
fs.writeFileSync(
  "./03_formattedTextOutDir/name_Of_Your_New_Formatted_Text_File.txt",
  formattedLines.join("\n"),
  "utf-8"
);
```

### Step 4 - Then after updating paths run with Node

```
node LineShortener.js
```

### Formatted text file will be inside '03_formattedTextOutDir' folder
