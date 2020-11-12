
In GoDaddy’s  **Get Found**  product, small business customers can input their price list or menu and have it distributed to Yelp, Google and other online listing sites. As a convenience,  **Get Found**  customers can also get their menus typeset onto letter paper so it can be printed for in-store use.

A  `menu`  is composed of an array of items that have distinct  _labels_  and are of  _type_  either  `"Section Header"`  or  `"Menu Item"`. The typesetting algorithm must bucket these individual section headers and menu items into multiple pages while avoiding abnormalities. Two of the most common abnormalities are  _widowed menu items_  and  _orphaned section headers_. The former occurs when the last menu item in a section appears on a new page while the latter occurs when a section header appears as the last items on the bottom of a page without any menu items underneath it on the same page.

Your job is to write a typesetting algorithm that splits up a given  `menu`  into multiple pages while pushing menu items and section headers to the next page whenever a  _widowed menu item_  or  _orphaned section header_  occurs. Each page can contain no more than  `numberOfItems`  items on it.

Example

For

```
menu = [["Breakfast", "Section Header"],
        ["Eggs and Toast", "Menu Item"],
        ["Waffles", "Menu Item"],
        ["Orange juice", "Menu Item"],
        ["Dinner", "Section Header"],
        ["Steak", "Menu Item"],
        ["Merlot", "Menu Item"]]

```

and  `numberOfItems = 3`, the output should be

```
menuTypesetting(menu, numberOfItems) = 
    [["Breakfast", "Eggs and Toast"],
     ["Waffles", "Orange juice"],
     ["Dinner", "Steak", "Merlot"]]

```

There can be no more than  `3`  items on each page so to avoid abnormalities we end-up with a 3 page menu.  
It's impossible to add  `"Waffles"`  on the first page, since it will leave  `"Orange juice"`  _orphaned_  on the second page. It's also impossible to add  `"Dinner"`  on the second page, since it will make it  _widowed_.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/menuTypesetting/img/example.png?_tm=1582042162298)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.string menu**
    
    Array of items given in the same order as they should appear in the printed menu.  `"Section Header"`  type items mark the start of sections and each section has at least one  `"Menu Item"`  in it.  
    Each item is represented as an array of two elements.  `menu[i][0]`  is the  _label_  of the  `ith`  object, and  `menu[i][1]`  is its  _type_. It is guaranteed that the first item has  `"Section Header"`  _type_.
    
    _Guaranteed constraints:_  
    `4 ≤ menu.length ≤ 15`,  
    `2 ≤ menu[i][j].length ≤ 30`.
    
-   **[input] integer numberOfItems**
    
    The maximum number of items on each page.
    
    _Guaranteed constraints:_  
    `3 ≤ numberOfItems ≤ 15`.
    
-   **[output] array.array.string**
    
    The list of items'  _labels_  by page.
