sampleNews = `As software developers, the natural tendency is to start developing
applications based on your own hands-on experience and knowledge right away.
However, overtime issues in the application arise, adaptations to changes,
and new features happen. Since then, you gradually realize that you have put
too much effort into one thing: modifying the application. Even when implementing
a simple task, it also requires understanding the whole system. You can’t blame
them for changes or new features since they are inevitable parts of software development.
So, what is the main problem here?
The obvious answer could be derived from the application’s design. Keeping the system
design as clean and scalable as possible is one of the critical things that any professional
developer should dedicate their time to. And that’s where SOLID design principles come into play.
It helps developers eliminate design smells and build the best designs for a set of features.
Although the SOLID design principles were first introduced by the famous Computer Scientist
Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by
Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture,
Agile Software Development: Principles, Patterns, and Practices.`

// console.log(sampleNews.replace(/ /g,''));

// console.log(sampleNews.length);

// function spaceCount(str) {
//     count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] == " ") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// spaceCount(sampleNews);

// function SentenceCount(str) {
//     count = 0;
//     str.split("").forEach((char) => {
//         if (char == "." || char == "!" || char == "?") {
//             count++
//         }
//     });
//     console.log(count);
// }

// SentenceCount(sampleNews);

// function wordCount(str) {
//     count=0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             count++
//         }
        
//     }
//     console.log(count);
// }

// wordCount(sampleNews);

// function letterCount(str) {
//     count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != " " || str[i] != "’" || str[i] != "!" || str[i] != "." || str[i] != "," || str[i] != "?" || str[i] != "(" || str[i] != ")" || str[i] != ":") {
//             count++
//         }
        
//     }
//     console.log(count);
// }

// letterCount(sampleNews);

// let a = `sdafasdf asdasd fsfd`
function capitalWord(str) {
    let myStr = str.split(' ')
    myStr.forEach((word) => word[0] == word[0].toLocaleUpperCase() && console.log(word))
}

capitalWord(sampleNews);


// fullName = "Jeyhun Abilov Familovich"

// // console.log(fullName.split(''));

// //////

// arr = fullName.split(' ');

// // arr.unshift["Abilov"];


// // delete arr[1];

// arr1 = [...arr]


// arr.unfhift()

// console.log(arr);