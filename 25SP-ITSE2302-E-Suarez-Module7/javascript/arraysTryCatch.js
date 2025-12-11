//breeds of cats
let siteTopics = [
  "Siamese cat",
  "British Shorthair",
  "Maine Coon",
  "Persian cat",
  "Ragdoll",
];

let dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var Evan = "Evan";
var Birthday = 2010;

siteTopics.push("My breed of cats");
console.log("The length of the siteTopics array is " + siteTopics.length);

let i = 0;
while (i < siteTopics.length) {
  console.log(siteTopics[i]);
  i++;
}
dayNames.reverse();
for (let i = 0; i < dayNames.length; i++) {
  console.log(dayNames[i]);
}
dayNames.shift();


try {
  if (dayNames[0] === "Sunday") {
    throw "Error: Sunday should be missing!";
  }
} catch (error) {
  console.log("error");
} finally {
  console.log(
    Evan +
      " was born in the year " +
      Birthday +
      " I think the day was either a " +
      dayNames[2] +
      " or a " +
      dayNames[4]
  );
}
