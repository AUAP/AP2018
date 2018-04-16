##### [Mark down cheatsheet - files with .md](https://guides.github.com/features/mastering-markdown/)

##### Video: What is Git? (Git-SCM) • Git Basics [#1](https://www.youtube.com/watch?v=8oRjP8yj2Wo&list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH) [#2](https://www.youtube.com/watch?v=uhtzxPU7Bz0&index=2&list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH)

##### [The concept of git in command line and github](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

##### [Git Tutorial - for command line users](https://try.github.io/levels/1/challenges/1)


##### Detailed command line

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- PREPARATION: prepare a working directory, then type 
  ```
  git init
  ```
- Download the github files to the local machine: 
  ```
  git pull https://github.com/xxxxx.git
  ```
If the downloaded files are different from the local, they will then merge with the local. Just input the message and then esc (meaning save) > :wq (meaning exit)
- Sign up: [github account](https://github.com/) and create your own repository "Respositories" > click the "New" button
- Modify your file, add your code files etc
- See cheatsheet [here](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- Example: If you want to remove a file > type rm, and if you want to add file or modify the file > type add
  ```
  git rm filename.extension
  // need to remove one by one
  ```
  ```
  git add filename.extension
 
  //can also do git add *
  ```
- Example continue: 
  ```
  git commit -m "description e.g delete what"
  ```
- Upload the files to github:
  ```
  git push --set-upstream http://www.github.com/yourusername/yourrespositoryname master
  ```
- other useful commands:
  ```
  git status
  git diff    //see the difference
  git add *   //staging everything -> then commit -> then push
  ```
