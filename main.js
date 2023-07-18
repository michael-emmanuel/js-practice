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
    const firstItem = 0
    const lastItem = face.length - 1

    // check eyes
    if (face[firstItem] !== ":" || face[firstItem] !== ";") {
      continue
    }

    // check nose
    if (face.length === 3) {
      if (face[2] !== "-" || face[2] !== "~") {
        continue
      } else {
        // check smile
        if (
          face[lastItem] &&
          (face[lastItem] === ")" || face[lastItem] === "D")
        ) {
          count = count + 1
        } else {
          continue
        }
      }
    } else {
      // check smile
      if (
        face[lastItem] &&
        (face[lastItem] === ")" || face[lastItem] === "D")
      ) {
        count = count + 1
      } else {
        continue
      }
    }
  }
  return count
}

console.log(countSmileys([":)"]))
