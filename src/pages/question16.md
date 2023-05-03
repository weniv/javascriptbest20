- info
    - Lv.1
    - Implementation

# 2nd Deputy Selection

## Problem Description
Licat's Fish Inc. had an unexpected situation where the leader, No.1, had to leave for a personal mission. Licat's Fish Inc. was left without anyone in charge and all the operations were paralyzed. To select a new leader, No.1 set the following problem. The one who solves this problem will become the new leader of Licat's Fish Inc. The problem is as follows.

Given an input array consisting of ASCII codes, it should be converted to corresponding Roman numerals using the following table. Then all the possible combinations of numbers are extracted, and the maximum value M is returned.

| Roman Numeral | Value |
| --- | --- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals can be written in subtractive notation, meaning that a smaller numeral can be placed before a larger numeral to represent a single numeral using two characters. For example, IV represents 4 (5-1). The solution function should follow this notation rule.

---

## Constraints

- The input array will not contain duplicated elements.
- 1 ≤ length of an array ≤ 5 
- 1 ≤ M ≤ 1660

---

## Examples

| Input | Output |
| --- | --- |
| [73, 88, 86] | 16 |
| [67, 86, 77, 76] | 1155 |
| [68, 86, 76, 73, 88] | 566 |

---

## Explanation for Examples

- The input is an array of ASCII codes.
- The function should compute all possible combinations of Roman numerals that can be made from these ASCII codes, and return the maximum value M among them.
- The Roman numerals for [73, 88, 86] are [I, X, V]. 
- X is the largest numeral, so it should come first. Therefore, there are two possible combinations: [X, I, V] and [X, V, I]. 
- The first combination equals 14 and the second 16, so the maximum value M is 16.
