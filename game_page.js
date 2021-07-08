p1Name = localStorage.getItem("player1_name")
p2Name = localStorage.getItem("player2_name")
p1Score = 0
p2Score = 0
qturn = "Player1"
aturn = "Player2"
document.getElementById("player1Name").innerHTML = p1Name + " : "
document.getElementById("player1Score").innerHTML = p1Score

document.getElementById("player2Name").innerHTML = p2Name + " : "
document.getElementById('player2Score').innerHTML = p2Score
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p1Name
document.getElementById("playerAnswer").innerHTML = "Anwser Turn - " + p2Name




function check() {
    getAnswer = document.getElementById("playerAnswer").value
    
      

    if (qturn == "Player1") {
        qturn = "Player2"
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p2Name    
    } else {
        qturn = "Player1"
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p1Name
    }
    if (aturn == "Player2") {
        aturn = "Player1"
        document.getElementById("playerAnswer").innerHTML = "Anwser Turn - " + p1Name
    } else {
        aturn = "Player2"
        document.getElementById("playerAnswer").innerHTML = "Anwser Turn - " + p2Name
    }
    document.getElementById("output").innerHTML = ""
   }

function send() {
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    anwser = parseInt(number1) * parseInt(number2)
    questionNumber = "<h4>" + number1 + "X" + number2 + "</h4>";
inputBOX = "<br> Anwser: <input  id='playerAnswer' class='form-control' type='text'> ";
buttonCheck = "<br> <br> <button class='btn btn-success' onclick = 'check()'>  CHECK </button>";
row = questionNumber + inputBOX + buttonCheck;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").value=""; 
document.getElementById("Number2").value="";
}
