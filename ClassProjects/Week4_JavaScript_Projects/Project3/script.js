function askNums(){

        var num0 = prompt("Give a number.");
        var num1 = prompt("Give a another number.");
        var num2 = prompt("Give a number again.");

        let nums = [num0, num1, num2]

        var total = 0;
        

        for(var count=0; count < nums.length; count++){

            total = Number(total) + Number(nums[count]);

        }





        document.write("The sum of all of your numbers is " + total + ".");

}

