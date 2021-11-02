

function askName(){

    var name = prompt("Tell me your name.");
    
    document.write("You are going to have a wonderful day, " + name +". ");

}

function askNums(){

        var firNum = prompt("Give me a number.");
        var secNum = prompt("Give me another number.");

        var total = Number(firNum) + Number(secNum);

        document.write("By the way, the sum of your numbers is " + total + ".");

}

