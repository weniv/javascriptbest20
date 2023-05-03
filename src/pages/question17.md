- info
    - Lv.1
    - Binary Tree

# Robot-Cat Inspection Day

## Problem Description
Licat decided to create a robot called 'Robot-Cat' as a deputy version of Licat's Fish Inc. to operate the giant company. He assigned a unique identification number to each Robot-Cat to easily manage them. Then, Robot-Cats flew all over to Weniv World.

And on the day of Robot-Cat inspection, most of the Robot-Cats returned to the company. However, there were also some Robot-Cats that couldn't return because they were too far away. For the Robot-Cats that need inspection but did not attend, an alarm should be sent.

" Beep- Robot-Cat 1103, inspection required- 

Write a solution function that returns the identification number of the Robot-Cats that needs an alarm to be sent based on the identification numbers of the Robot-Cats that attended and those that need inspection.

---

## Constraints

- 1 ≤ number of Robot-Cats that attended ≤ 1000 
- 1 ≤ number of Robot-Cats that need inspection ≤ 1000 
- The identification numbers are not duplicated. 
- The result should be sorted in ascending order.
- This problem should be solved using a binary tree.

---

## Examples

| Input                                  | Output  |
| ------------------------------------ | ------- |
| [[2, 4, 1, 7, 9, 8, 12], [2, 4, 8, 3, 6]] | [3, 6] |
| [[3, 6, 9, 1, 8, 7], [3, 8]] | [] |
| [[102, 21, 38, 52, 219, 63, 1, 9, 35], [36, 9, 95, 32, 7, 52, 102]] | [7, 32, 36, 95] |

---

## Explanation for Examples

- The identification numbers for the Robot-Cats that attended and the identification numbers for the Robot-Cats that need inspection are given in a two-dimensional array.
- Return an array of identification numbers of the Robot-Cats that require an alarm in ascending order.
- If there are no Robot-Cats that require an alarm, return an empty list.