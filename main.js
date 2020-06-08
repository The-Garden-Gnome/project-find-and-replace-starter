const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function (){
    const find = findInput.value;
    const replace = replaceInput.value;
    for (let rowindex = 0; rowindex < rowElements.length; rowindex++) {
        let nameList = getCellElements(rowElements[rowindex])
        for (let cellIndex = 0; cellIndex < nameList.length; cellIndex++){
            if (nameList[cellIndex].innerText.includes(find)) {
                nameList[cellIndex].innerHTML = nameList[cellIndex].innerHTML.replace(find, replace)
            }
        }
}
})

// Requirements
// Add a click event listener to the replaceAllButton.
// On click but outside of a loop, assign the values of the two input textboxes ( findInput and replaceInput), so that you are only retrieving these values once per click.
// Write a loop which loops over the rowElements array (which is already provided in the starter code).
// Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.
// Write a nested loop which loops over the array of cell elements.
// For each cell element, check if a cell contains the user-provided search string. Use the string method includes().
// If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.
// In all your loops, avoid using low-meaning index variables like "i" and "j".


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
