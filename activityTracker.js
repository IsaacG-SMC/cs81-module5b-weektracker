const myWeek = [
    {day: "Saturday", activity: "attending a 4th of July gathering", category: "social", hoursSpent: 4, enjoyment: 5, timeOfDay: "afternoon"},
    {day: "Sunday", activity: "going to a bar event", category: "social", hoursSpent: 3, enjoyment: 8, timeOfDay: "evening"},
    {day: "Monday", activity: "walking", category: "physical", hoursSpent: 1.5, enjoyment: 7.5, timeOfDay: "evening"},
    {day: "Tuesday", activity: "reorganizing", category: "physical", hoursSpent: 1.5, enjoyment: 4, timeOfDay: "afternoon"},
    {day: "Wednesday", activity: "walking", category: "physical", hoursSpent: 1.33, enjoyment: 7, timeOfDay: "evening"},
    {day: "Thursday", activity: "drawing", category: "creative", hoursSpent: 1, enjoyment: 6, timeOfDay: "evening"},
    {day: "Friday", activity: "walking", category: "physical", hoursSpent: 1.5, enjoyment: 7.5, timeOfDay: "evening"}
];

/* --- PREDICTIONS ---
*   1. The bar event had the highest enjoyment level.
*   2. I guess it's physical, which is a surprise. I wouldn't say I'm a physically-inclined
*       person, but I guess I do go on walks on all weekday evenings.
*   3. I'm inclined to do things later in the day because in the morning/day time, I'm busy with
*       being not productive.
*/

// Returns the entry with the most enjoyment
// Takes in an array of objects and returns the object with greatest enjoyment value
function mostEnjoyed(log){
    return log.reduce((prev, curr) => prev.enjoyment > curr.enjoyment ? prev : curr);
}

// Returns entries whose time spent falls within a given time frame
// Takes in an array of objects, as well as two numbers for a min and max time value (in hours)
// Returns an array of objects whose hoursSpent value falls between the min and max input values
function withinTimeFrame(log, hoursMin, hoursMax){
    return log.filter(entry => entry.hoursSpent > hoursMin && entry.hoursSpent < hoursMax);
}

// Gives back a given log with only unique property entries
// Takes in an array of objects and a function which will determine which property will be returned
// Returns a new array with only unique entries of the given property
function uniqueEntry(log, tag){
    const unique = log.map(tag);
    return [...new Set(unique)];
}

console.log("My most enjoyed activity was " + mostEnjoyed(myWeek).activity + ".");

// Stores an array of objects whose hoursSpent is >1 and <3
const myTimeFrame = withinTimeFrame(myWeek, 1, 3);
// Prints only the unique activity values of the objects whose hoursSpent is >1 and <3
console.log("Unique hobbies which I spent 1 to 3 hours on:", uniqueEntry(myTimeFrame, entry => entry.activity));

console.log("Unique enjoyment values:", uniqueEntry(myWeek, entry => entry.enjoyment));