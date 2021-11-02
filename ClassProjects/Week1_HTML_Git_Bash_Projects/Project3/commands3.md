marina @ students ~/bootcamp/Week1_Projects/Project3 (master)$ touch commands3.md

Questions:
1) What command would you use to clear the screen?
Answer: $ clear

2) What is the shortcut command to open a new tab in your terminal?
Answer: ctrl + shift + `

3) What key would you use to scroll through previous commands you’ve typed before?
Answer: $ history

4) You have a three txt files and an empty folder on your desktop. Write a single line command that will move all three txt files into the folder.
Answer: $ mv text1 text2 text3 Empty

5) You want to inspect the differences between two txt files myfile1.txt and myfile2.txt. Write a command that would display the differences in content between these two files.
Answer: $ diff file1.txt file2.txt

6) Write a command that would delete this folder and all of the contents inside.
Answer: $ rm -r dirname

7) What is the command to list all files, including hidden files? Write a command that displays all .css files in a folder.
Answer: $ ls -a Project2

8) What is the command to find a file by name on your disk (or some other storage medium)?
Answer: $ find . -name BakedPotato.css

9) What is the command to find a file by content
    in your folder
    on the disk?
    That is, how do you search for a word or phrase in the file contents?
Answer: $ grep -rnw 'Project2' -e 'me'


10) Use a bash command to create a file named YourName.txt with no content in it. Look at the permissions.
    Now change the permissions so everyone can read it and execute it.
    Now change the permissions so only you can read it.

Answer: $ touch marina.txt

        $ ls -l marina.txt
        /*-rw-rw-r-- 1 marina marina 0 Sep  2 11:04 marina.txt*/

        $ chmod u=rx,g=rx,o=rx marina.txt
        /*-r-xr-xr-x 1 marina marina 0 Sep  2 11:04 marina.txt*/

        $ chmod u=r,g=,o= marina.txt
        /*-r-------- 1 marina marina 0 Sep  2 11:04 marina.txt*/
