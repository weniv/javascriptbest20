- info
    - Lv.3
    - Tree | Linked List | Trie

# Mura's Spilled Latte
![Heoni spilled the latte](./11_1.webp)

## Problem Description
Mura, the strategist, was forming a revolutionary team in her notebook! When butler Heoni was passing the latte to Mura, it fell directly onto Mura's notebook.

The part where the entire structure was written was damaged, but meticulous Mura have already written an example of a rough category approach in the notebook as follow.

```py
["Chief of Staff-Deputy Chief of Staff-Secretary's Office", "Chief of Staff-Deputy Chief of Staff", "Deputy Chief of Staff-Planning and Management Staff", "Deputy Chief of Staff-Personnel Staff", "Deputy Chief of Staff-Intelligence Operations Staff", "Chief of Staff-Deputy Chief of Staff-Military Staff", "Intelligence Operations Staff-Special Forces", "Intelligence Operations Staff-Educational Staff"]
```

Clever Mura could reconstruct the category with only a few clues. Help her to configure it as follows based on this example!

```txt
Chief of Staff
  └ Deputy Chief of Staff
      ├ Intelligence Operations Staff
      │   ├ Educational Staff
      │   └ Special Forces
      │ Military Staff
      ├ Personnel Staff
      ├ Planning and Management Staff
      └ Secretary's Office
```

---

## Constraints

- Input is given as an array. 
- The output consists of line breaks, spaces, and three special characters (├,│,└). 
- Sub-directories are separated by `two spaces + special character + space.` 
- If there are sub-directories in sub-directories, they should be separated by `two spaces + special character + space` based on the starting point of the parent directory. 
- The ouput of each category should be sorted in alphabetical order. 
- Each category in the input is separated by "-". 
- If a new category starts, it comes after a blank line. 
- The output has to use the escape character `\ n` for line breaks.
---

## Examples

**Input**

```jsx
["Clothing-Men Clothing-Tops-T-Shirts-Brand", "Clothing-Men Clothing", "Clothing-Women Clothing-Tops-T-Shirts", "Men Clothing-Tops-Suit", "Animal-Cat-Toy"]
```

**Output**

```jsx

Animal 
  └ Cat
    └ Toy 
    
Clothing 
  ├ Men Clothing 
  │   └ Tops 
  │       ├ Suit 
  │       └ T-Shirts 
  │           └ Brand 
  └ Women Clothing 
      └ Tops 
          └ T-Shirts 
```
---

## Explanation for Examples

For the "Animal" category, all are connected with "└" since there is only one connection. In the second line, "└" is entered after two spaces from where the "Animal" text starts, and then one space and "Cat" comes.

"Clothing" category has two sub-categories, "Men Clothing" and "Women Clothing". This must be sorted in alphabetical order regardless of the input order. Therefore, "Men Clothing" should come first.

Since "Women Clothing" is below "Men Clothing", there must be two spaces and "│" in the front for all the descendant categories of Men Clothing.

The line break is expressed as the escape character `\n` in the actual output.