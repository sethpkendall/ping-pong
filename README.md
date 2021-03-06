# _Ping-Pong Counter_

###_Epicodus Code Review for week 3, 8.19.2016_

#### By _Seth Kendall_

## Description

_This program is designed to take input of a single number and, using arrays and looping in Javascript, return a count of all positive integers from 1 up to the inputted number while inserting words instead of certain numbers based on divisibility. _

## Specifications

* The program can count up, by consecutive positive integers, to an input number.
  * Example Input: 2
  * Example Output: [1, 2]

* It will not accept non-number input.
  * Example Input: word
  * Example Output: null

* It will not accept empty input.
  * Example Input: ""
  * Example Output: Alert: "Please enter a number!"

* For numbers divisible by 3, it inserts the word "ping" instead.
  * Example Input: 6
  * Example Output: [1, 2, ping, 4, 5, 6]

* For numbers divisible by 5, it inserts the word "pong" instead.
  * Example Input: 5
  * Example Output: [1, 2, ping, 4, pong]

* For numbers divisible by 15, it inserts the word "pingpong" instead.
  * Example Input: 20
  * Example Output: [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong, 16, 17, ping, 19, pong]

## Setup Instructions

* _Clone the program from its github repository_
* _Open its index.html file in the browser of your choosing._

## Licensing

*This product can be used in accordance with the provisions under its MIT license.*

copyright (c) 2016 **_Seth Kendall_**
