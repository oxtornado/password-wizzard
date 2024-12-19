function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function generatePassword() {

    const con = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "abcdefghijklmnñopqrstuvwxyz123456789*/_+-";
    let pas = "";
    let pasLength = document.getElementById("length");

    if (isNaN(pasLength) || pasLength <= 0) {
        alert("Please enter a valid number greater than 0."); // Show an error message if the input is invalid
        return ""; // Stop the function
    }

    for (let i = 0; i < parseInt(pasLength.value); i++) {
        pas += con.charAt(getRandomInt(con.length))
      } 

      document.getElementById("result").textContent = `Generated Password: ${pas}`;
      return pas   
}