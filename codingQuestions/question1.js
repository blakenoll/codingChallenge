const str = "{key:[[value_1, value_2],[value_3, value4]], 5:10:00AM]}";

function stringToHash(str) {
  let tempStr = "";
  let time = "";
  // track braces to know when there is an extra
  let leftBrace = 0;
  let rightBrace = 0;
  let leftCurlyBrace = 0;
  let rightCurlyBrace = 0;

  // regular expression to find time and replace with string to replace later
  const regex = /(0[0-9]|1[0-9]|2[0-3]|[0-9]):([0-5][0-9][a-zA-Z][a-zA-Z])/gm;
  tempStr = str.replace(regex, string => {
    time = string.substring(0, 7);
    return "time";
  });
  // loop through and remove extra braces
  for (let i = 0; i < tempStr.length; i++) {
    switch (tempStr.charAt(i)) {
      case "[":
        leftBrace++;
        break;
      case "]":
        rightBrace++;
        break;
      case "{":
        leftCurlyBrace++;
        break;
      case "}":
        rightCurlyBrace++;
        break;
      default:
        break;
    }
    // if closing brace doesnt have opening brace remove from string
    if (rightBrace > leftBrace) {
      tempStr = tempStr.slice(0, i) + tempStr.slice(i + 1, tempStr.length);
      rightBrace--;
    }
    // if closing curly brace doesnt have opening curly brace remove from string
    if (rightCurlyBrace > leftCurlyBrace) {
      tempStr = tempStr.slice(0, i) + tempStr.slice(i + 1, tempStr.length);
      rightCurlyBrace--;
    }
  }

  //take the matches that dont have special charectures
  tempStr = tempStr.replace(/[a-zA-Z0-9_$]+/g, string => {
    return `"${string}"`;
  });
  // put the actual time value back in before parsing into object
  tempStr = tempStr.replace("time", time);
  // parse string into JSON object
  console.log(JSON.parse(tempStr));
}

stringToHash(str);
