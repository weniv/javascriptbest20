- info
    - Lv.2
    - Matrix

# Selling Oranges
![Ali's Orange Farm](./15-1.webp)

## Problem Description
Data analyst Ali has managed her orange farm to give away oranges to the peaceful frog town. On the first day of harvest , Ali could finally pick oranges with joy.

The gathered oranges are kept in one box until the order date. Ripe oranges emit growth hormone that makes adjacent oranges ripe or rotten.

" How many oranges can Ali sell?

Adjacent oranges mean the top, bottom, left, and right directions, and diagonal oranges do not affect adjacent oranges. If an adjacent orange is unripe, it will become ripe, and if it is ripe already, both oranges will rot. In both cases, it takes a day.

Suppose that only ripe oranges can be sold, find the total number of oranges that can be sold in k days from the harvest day. If no oranges can be sold, print -1.

The table below is an orange box and represents the condition of oranges. 1 means ripe oranges, 0 means unripe oranges, and -1 means rotten oranges. The order will be placed in three days.

|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 0 | 0 | 0 |
| 3 | 0 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 0 | 0 |
| 5 | 0 | 0 | 0 | 0 | 0 |

After one day, the unripe oranges [1, 2] and [2, 1] which are adjacent to ripe orange [1, 1] became ripe as shown below.

|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 0 | 0 | 0 |
| 2 | 1 | 0 | 0 | 0 | 0 |
| 3 | 0 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 0 | 0 |
| 5 | 0 | 0 | 0 | 0 | 0 |

After two days, the ripened oranges [1, 1], [1, 2], and [2, 1] got rotten, and the unripened oranges [1, 3], [2, 2], [3, 1] turned into ripe oranges.

|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | -1 | -1 | 1 | 0 | 0 |
| 2 | -1 | 1 | 0 | 0 | 0 |
| 3 | 1 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 0 | 0 |
| 5 | 0 | 0 | 0 | 0 | 0 |

After three days, the oranges [1, 4], [2, 3], [3, 2], and [4, 1] that were adjacent to the ripe oranges turned into ripe, and the number of oranges that Ali can sell is increased to 7.

|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | -1 | -1 | 1 | 1 | 0 |
| 2 | -1 | 1 | 1 | 0 | 0 |
| 3 | 1 | 1 | 0 | 0 | 0 |
| 4 | 1 | 0 | 0 | 0 | 0 |
| 5 | 0 | 0 | 0 | 0 | 0 |

---

## Constraints

- 1 ≤ n, m (the size of the box in width, height) ≤ 100 
- 1 ≤ k(days) ≤ 10 
- The orange box is given as a two-dimensional array. 
- The oranges in the diagonal direction do not affect. 
- 0 means unripe oranges, 1 means ripe oranges, and -1 means rotten oranges. 
- Rotten oranges do not affect other oranges.

---

## Examples

| n, m, k | Condition of Oranges | Output |
| --- | --- | --- |
| 5, 5, 3 | [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] | 7 |
| 7, 5, 4 | [[0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]] | 2 |
| 4, 3, 2 | [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]] | 5 |

---

## Explanation for Examples

A two-dimensional array is entered. It consists of the size of a box(n, m), days oranges are kept(k), and the condition of the oranges. When n * m oranges are sold after k days, the total number of oranges that can be sold is returned.

For example, if [4, 3, 2] is given, the changes are as follows.

Day 0

|  | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 0 |
| 2 | 0 | 1 | 0 | 0 |
| 3 | 0 | 0 | 0 | 0 |

Day 1

|  | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 0 | 0 |
| 2 | 1 | 1 | 1 | 0 |
| 3 | 0 | 1 | 0 | 0 |

Day 2

|  | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 1 | 1 | -1 | 1 | 0 |
| 2 | -1 | -1 | -1 | 1 |
| 3 | 1 | -1 | 1 | 0 |

The total number of ripe oranges(1) on the second day is 5.
