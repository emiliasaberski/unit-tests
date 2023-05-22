export const hackerSpeak = (words) => {
let newString = words
.replaceAll(/a/gi, "4")
.replaceAll(/e/gi, "3")
.replaceAll(/i/gi, "1")
.replaceAll(/o/gi, "0")
.replaceAll(/s/gi, "5")

  return newString
}
console.log(hackerSpeak("javascript is cool"))
