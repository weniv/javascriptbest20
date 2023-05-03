- info
    - Lv.1
    - Implementation

# Sorting Cat Breeds

## Problem Description
As the revolution approaches, Licat is trying to sort types of feline species to determine their roles. He wants to collect data on cat breeds by region and sort them in descending order by the most number of types.

The feline species are as follows.

```text
Korean Shorthair, British Shothair, Maine Coon, Sphynx, Bengal, Norwegian Forest
```

Given a string array representing cat breeds collected by region and an integer array representing population, return them in order from the most number of types in descending order.

---

## Constraints

- The length of the array representing the breed and the array for the population should be the same.
- Both arrays have a length between 1 and 10,000. 
- If there are multiple breeds with the same population, they are sorted in alphabetical order.

---

## Examples

| Breed Array | Population Array | Output |
| --- | --- | --- |
| [“Korean Shorthair“, “Korean Shorthair“, “Maine Coon”, “Bengal”, “Maine Coon”, “British Shorthair“, “Norwegian Forest” ] | [30, 15, 13, 4, 45, 9, 21] | ["Maine Coon", "Korean Shorthair",  "Norwegian Forest", "British Shorthair", "Bengal"] |
| [”Sphynx”, “British Shorthair“, “Sphynx”, “Sphynx”, “Bengal”, “Maine Coon”] | [3, 16, 1, 9, 25, 5] | ["Bengal", "British Shorthair", "Sphynx", "Maine Coon"] |
| [”Maine Coon”, “Korean Shorthair“, “British Shorthair”, “Norwegian Forest”, “Norwegian Forest”, “Korean Shorthair“, “Korean Shorthair“] | [8, 32, 15, 17, 12, 13, 31] | ["Korean Shorthair", "Norwegian Forest", "British Shorthair", "Maine Coon"] |

---

## Explanation for Examples

A string array representing cat breeds and an array of numbers representing each population are input. Return the breeds in the order of the most number of types in descending order.

1. The breed array ['Sphinx', 'British Shorthair', 'Sphinx', 'Sphinx', 'Bengal', 'Maine Coon'] and the population array [3, 16, 1, 9, 25, 5] are given.
2. The largest number in the population array is 25, which is mapped to 'Bengal'. Therefore, 'Bengal' is first in order. 
3. The second largest number is 16, which is mapped to 'British Shorthair'. Therefore, 'British Shorthair' comes after 'Bengal'.
4. 'Sphynx' has three values: 3, 1, and 9. The sum of these numbers is 13 which is smaller than 16 for 'British Shorthair'. Therefore, the result is ['Bengal', 'British Shorthair', 'Sphynx'] so far.
5. Lastly, 'Maine Coon' goes last since its population is 5.