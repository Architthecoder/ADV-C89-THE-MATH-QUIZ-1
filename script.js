function addUser(){
    let name1 = document.getElementById("player1_name_input").value;
    let name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player_1", name1);
    localStorage.setItem("player_2", name2);
    window.location = "quiz_game_page.html";
}