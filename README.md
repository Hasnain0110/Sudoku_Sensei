# Sudoku_Sensei
It is about a simple Sudoku Solver, Which is Based on simple DSA concept Backtracking. It generate Sudoku and get solution of it. 

## Overview
Sudoku web app:  generates and solves sudoku puzzles.

The main two function of this web app is generates and solves sudoku puzzles.
1. Generating puzzles - It generate puzzles using the API mentioned below. Diffculty is set to random in my code, you can change it using the command mentioned below.
2. Solving puzzles - It solve the puzzles using a simple Data Struction Algorithm "Back tracking". you can find a cpp file in the file section which is well explained how the functions are validing each number before filling it in the box, it can be used as a textcase as well.
## API

### Get

Board - returns a puzzle board

`https://sugoku.onrender.com/board`

Arguments -

- Difficulty:
  - easy
  - medium
  - hard
  - random

Example:

    https://sugoku.onrender.com/board?difficulty=easy


## Language Used
- HTML
- Javascript
- css
- cpp( for explaining and implimentation of the logic )

### NOTE:
While implimentation of the logic in js file, we need to keep in mind there will be some change in the syntax.
all "int" type will be considered as "let"

## Setting Up
### 1. Clone/Download the Repository
run the following command in your command prompt or terminal.
```
git clone "link of this repository" folder name
```
1. the folder can be any folder in which you want to save the files of the repository
2. Don't forget to install git in your computer, otherwise the command git will not be recognized as a command.



