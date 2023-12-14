//Creating player class to pass in the values from user input
 function Player(name,team,pos,playerNum){
        this.name = name;
        this.team = team;
        this.pos = pos;
        this.playerNum = playerNum;
        
 }
 
 const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    createPlayer();
})


 //Function to create the player and check team value
function createPlayer() {

    const name = document.getElementById('playerInput').value;
    const team = document.getElementById('teamSelect').value;
    const pos = document.querySelector('input[name="position"]:checked').value;
    const playerNum = document.getElementById('playNum').value
    
    if (!name || !team || !pos || !playerNum) {
        alert("Please fill in all fields.");
        return;
    }

    const player = new Player (name,team,pos,playerNum)

    if(player.team === 'redTeam') {
        addRed(player);
    } else addBlue(player);

    document.getElementById('playerInput').value = '';
    document.getElementById('teamSelect').value = '';
    document.querySelector('input[name="position"]:checked').checked = false;
    document.getElementById('playNum').value ='';
}

//Functions to add the player to the proper teams
 function addRed(player) {
    let table = document.getElementById('redTeam');
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = player.name;
    row.insertCell(1).innerHTML = player.playerNum;
    row.insertCell(2).innerHTML = player.pos;
    let actions = row.insertCell(3);
    actions.appendChild(deletePlayer(row));
 }

 function addBlue(player) {
    let table = document.getElementById('blueTeam');
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = player.name;
    row.insertCell(1).innerHTML = player.playerNum;
    row.insertCell(2).innerHTML = player.pos;
    let actions = row.insertCell(3);
    actions.appendChild(deletePlayer(row));
 }

 function deletePlayer(row) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
       row.remove();
    };
    return btn;
 }


 