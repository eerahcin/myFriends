
document.getElementById("showFriendsButton").addEventListener("click", function() {

    var numFriends = Math.floor(Math.random() * 9) + 1;
    alert("จำนวนเพื่อนที่จะรับข้อมูลนำเข้า: " + numFriends);
});

document.getElementById("friendForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var numFriends = parseInt(document.getElementById("numFriends").textContent); // จำนวนเพื่อน
    var nickname = document.getElementById("nickname").value; 
    var age = parseInt(document.getElementById("age").value); 


    if (friendsData.length < numFriends) {
        friendsData.push({ nickname: nickname, age: age });
        document.getElementById("friendCount").textContent = friendsData.length; // แสดงจำนวนเพื่อนที่ใส่ข้อมูลเข้ามาแล้ว
        document.getElementById("friendForm").reset(); 
    } else {
        alert("ใส่ข้อมูลเพื่อนครบแล้ว");
    }
});


document.getElementById("resetButton").addEventListener("click", function() {
    friendsData = []; 
    document.getElementById("friendCount").textContent = "0"; 
    document.getElementById("friendForm").reset(); 
});


var friendsData = [];
