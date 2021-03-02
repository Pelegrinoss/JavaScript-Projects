let ask = prompt("What would you like ToDo?");
const toDo = ['Wake up']
while (ask !== 'quit'){
    if(ask === 'list'){
        console.log("*************");
        console.log("List:")
        for(let i=0; i<toDo.length;i++){
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("*************");
    } else if (ask === 'new'){
        const newToDo = prompt("Ok, what is the new ToDo?");
        toDo.push(newToDo);
        console.log(`${newToDo} added to the list.`);
    } else if (ask === 'delete'){
        const index = parseInt(prompt("Ok, what index do you want to delete?"));
        if(!Number.isNaN(index)){
        const deleted = toDo.splice(index, 1);
        console.log(`${deleted} deleted from list.`);
        } else {
            console.log("Not an index.");
        }
    }
    ask = prompt("What would you like to do?");
}
alert("You quit the app.");