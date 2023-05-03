- info
    - Lv.1
    - Heap

# Boarding the Flight
![Licat measuring the weight](./13_1.webp)

## Problem Description
Licat has made an embark order. Licat's colleagues who gained their power in each region are taking a flying boat to head to Lion Town. This flight has a minimum weight limit of K.

If a colleague weighs over K, they must ride alone on the flight. If their weight is less than K, they can board a flight together when their total weight is K or more, regardless of the number of people.

Licat wanted his colleagues to rest in a more spacious place when coming up. Given an array containing the weight of his colleagues, find the maximum number of flying boats needed for everyone to board the flight.

---

## Constraints

- Input is given as a two-dimensional array. The first one is an array of `weights`, and the second is the `minimum weight limit`.
- The weight of colleagues is an integer between 1 and 100, inclusive. 
- K is an integer between 0 and 50, inclusive. 
- If no one can board the flight, return -1.

---

## Examples

| Weight                                  | K | Output |
| ---------------------------------------- | ------- |
| [46, 26, 37, 32, 10] | 30 | 4 |
| [22, 45, 1, 7, 5] | 15 | 2 |
| [7, 36, 25, 12, 22] | 47 | 2 |

---

## Explanation for Examples

When K is 30 and `[46, 26, 37, 32, 10]` is given , 46, 37, and 32 can ride alone on a flight. Since 10 and 26 sums up to more than 30, they can ride together on a flight. If the sum of two weights is less than 30, they must ride with another colleague.