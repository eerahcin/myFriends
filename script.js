document.getElementById("generateFriends").addEventListener("click", generateFriends);
document.getElementById("calculateTotalAge").addEventListener("click", calculateTotalAge);
document.getElementById("calculateAverageAge").addEventListener("click", calculateAverageAge);
document.getElementById("calculateMinAge").addEventListener("click", calculateMinAge);
document.getElementById("calculateMaxAge").addEventListener("click", calculateMaxAge);
document.getElementById("reset").addEventListener("click", reset);

let friendsData = [];

function generateFriends() {
    const numFriends = Math.floor(Math.random() * 9) + 1; // Random number of friends from 1 to 9
    let friendInputsHTML = "";
    for (let i = 0; i < numFriends; i++) {
        friendInputsHTML += `<div>
                                <label for="friendName${i}">Friend ${i + 1} Name:</label>
                                <input type="text" id="friendName${i}">
                                <label for="friendAge${i}">Friend ${i + 1} Age:</label>
                                <input type="number" id="friendAge${i}" min="1" max="120">
                            </div>`;
    }
    document.getElementById("friendInputs").innerHTML = friendInputsHTML;
}

function calculateTotalAge() {
    if (friendsData.length !== document.querySelectorAll('input[type="text"]').length) {
        alert("Please enter the names of all friends.");
        return;
    }

    let totalAge = 0;
    for (let friend of friendsData) {
        totalAge += friend.age;
    }
    document.getElementById("result").innerText = `Total Age of Friends: ${totalAge}`;
}

function calculateAverageAge() {
    if (friendsData.length !== document.querySelectorAll('input[type="text"]').length) {
        alert("Please enter the names of all friends.");
        return;
    }

    let totalAge = 0;
    for (let friend of friendsData) {
        totalAge += friend.age;
    }
    const averageAge = totalAge / friendsData.length;
    document.getElementById("result").innerText = `Average Age of Friends: ${averageAge.toFixed(2)}`;
}

function calculateMinAge() {
    if (friendsData.length !== document.querySelectorAll('input[type="text"]').length) {
        alert("Please enter the names of all friends.");
        return;
    }

    let minAge = Infinity;
    let minAgeFriends = [];
    for (let friend of friendsData) {
        if (friend.age < minAge) {
            minAge = friend.age;
            minAgeFriends = [friend];
        } else if (friend.age === minAge) {
            minAgeFriends.push(friend);
        }
    }
    let resultString = `Minimum Age: ${minAge}`;
    for (let friend of minAgeFriends) {
        resultString += `\n${friend.name}, Age: ${friend.age}`;
    }
    document.getElementById("result").innerText = resultString;
}

function calculateMaxAge() {
    if (friendsData.length !== document.querySelectorAll('input[type="text"]').length) {
        alert("Please enter the names of all friends.");
        return;
    }
    
    let maxAge = -Infinity;
    let maxAgeFriends = [];
    for (let friend of friendsData) {
        if (friend.age > maxAge) {
            maxAge = friend.age;
            maxAgeFriends = [friend];
        } else if (friend.age === maxAge) {
            maxAgeFriends.push(friend);
        }
    }
    let resultString = `Maximum Age: ${maxAge}`;
    for (let friend of maxAgeFriends) {
        resultString += `\n${friend.name}, Age: ${friend.age}`;
    }
    document.getElementById("result").innerText = resultString;
}

function reset() {
    friendsData = [];
    document.getElementById("friendInputs").innerHTML = "";
    document.getElementById("result").innerText = "";
}

document.addEventListener("input", function(event) {
    const inputId = event.target.id;
    if (inputId.startsWith("friendAge")) {
        const friendIndex = parseInt(inputId.slice(9));
        const friendName = document.getElementById(`friendName${friendIndex}`).value;
        const friendAge = parseInt(event.target.value);
        friendsData[friendIndex] = { name: friendName, age: friendAge };
    }
});
