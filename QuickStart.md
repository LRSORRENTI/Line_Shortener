# QUICKSTART:

## Text file line length formatter

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
