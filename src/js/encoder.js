const encode = (text) => {
  let str = "";
  for (let i = 0; i < text.length; i++) {
    if (String(text.charCodeAt(i)).length >= 3) {
      str += String(`\\u` + text.charCodeAt(i).toString(16));
    } else {
      str += String(text[i]);
    }
  }
  console.log(str);
  return str;
};

    // let char = String(text.charCodeAt(i));
    // // space
    // if (char == 32) {
    //   str += char.replace("32", " ");
    // }
    // // .
    // else if (char == 46) {
    //   str += char.replace("46", ".");
    // }
    // // Double quote
    // else if (char == 34) {
    //   str += char.replace("34", '"');
    // }
    // // Newline
    // else if (char == 10) {
    //   str += char.replace("10", "\\n");
    // }
    // // Carriage return
    // else if (char == 13) {
    //   str += char.replace("13", "\\r");
    // }
    // // Backspace
    // else if (char == 8) {
    //   str += char.replace("8", "\\f");
    // }
    // // Form feed
    // else if (char == 12) {
    //   str += char.replace("12", "\\b");
    // }
    // // Backslash
    // else if (char == 12) {
    //   str += char.replace("12", "\\");
    // }
    // // Tap
    // else if (char == 9) {
    //   str += char.replace("9", "\\t");
    // }
    // // '
    // else if (char == 39) {
    //   str += char.replace("39", "'");
    // }
    // // ,
    // else if (char == 44) {
    //   str += char.replace("44", ",");
    // } else {
    //   str += String(`\\u` + text.charCodeAt(i).toString(16));
    //   // str += String(`\\u` + text.charCodeAt(i));
    // }