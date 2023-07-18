// Rules for each smiley
// MUST HAVE valid eye : or ;
// OPTIONAL nose - or ~
// MUST HAVE valid smile ) or D

// EYES - if it does not have either eyes above, continue else check for nose
// NOSE - if it does not have nose, check for mouth, if it does have nose - must be either - or ~ or else continue
// SMILE - if it does not have either smile above, skip count else increment count

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0

  for (let face of arr) {
    if (face.length < 2) {
      continue
    }

    // 2 figure face must only contain eyes and mouth
    if (face.length && face.length === 2) {
      if (face[0] === ":" || face[0] === ";") {
        if (face[1] === ")" || face[1] === "D") {
          count = count + 1
        }
      }
    }

    // 3 figure face must contain proper eyes, nose and smile
    if (face.length && face.length === 3) {
      if (face[0] === ":" || face[0] === ";") {
        if (face[1] === "-" || face[1] === "~") {
          if (face[2] === ")" || face[2] === "D") {
            count = count + 1
          }
        }
      }
    }
  }

  return count
}

console.log(countSmileys([":)", ";~D", ":0", ":D"]))
