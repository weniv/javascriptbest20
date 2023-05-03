- info
    - Lv.1
    - Greedy

# (Licat's Dream-2) Defeat the Lich!
![Licat battling the Lich](./19_1.webp)

## Problem Description
Catching fish near Skull Island, Licat encountered a fierce storm.

" The storm is too strong to go home, meow...

Licat anchored the ship on the beach and began to explore the island in search of a place to stay for the night. There were various statues scattered around Skull Island. Then, a muffled voice was heard from somewhere.

" Who are you? This is a place where alive people cannot reach... Interesting that you came from a dream.

A skull with a cloak floated up from the water. An old legend popped up in Licat's head. It was about a cursed Lich who was trapped on Skull Island and turned any cat that trespassed on his territory into stone. 

" I'll give you a greedy problem as you've come to a place where alive visitors cannot come. If you solve this, I'll give you something which could be a curse and a gift.
 
The Lich uttered an unknown spell.

" I put a spell on your fish bag, so you can endlessly take out fish from it. I'll give you an exact weight K. Tell me the minimum number of fish that can meet the weight K.

Given an array containing the weights of the fish, find the minimum number of fish that can be combined to satisfy the weight K.

---

## Constraints

- The numbers in the array are between 1 and 100. 
- 1 < K < 1000 
- Fish can be duplicated.

---

## Examples

| Weight                                  | K | Output  |
| ---------------------------------------- | ------- | ------- |
| [45, 5, 3, 15] | 100 | 4 |
| [6, 2, 4, 8, 32] | 50 | 4 |
| [7, 2, 14, 28] | 74 | 5 |

---

## Explanation for Examples

When an array of fish weights [45, 5, 3, 15] is given and K is 100, there are several combinations that satisfy 100. Among them, the minimum number of fish required to meet the K is 4(45, 45, 5, and 5).
