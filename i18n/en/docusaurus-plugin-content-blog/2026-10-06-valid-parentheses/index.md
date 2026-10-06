---
slug: valid-parentheses
title: Valid Parentheses
tags: [algo, leet-code]
---

### Problem

Each opened bracket must be closed by the same type of brackets and in the correct order. Every closing bracket must correspond to a valid opening bracket.
For example,

**Input:** `s = "()[]{}"`, **Output:** `true`

**Input:** `s = "([)]"`, **Output:** `false`

**Input:** `s = "([])"`, **Output:** `true`

To solve this, we will use a `stack` data structure and iterate over the `char`acters in the given `string`. We will use the LIFO (Last In, First Out) principle. For each closing bracket, we check the last element added to the `stack`. If it matches, we pop it from the `stack`; otherwise, we push the current bracket onto the `stack`. This way, even in nested structures, we can validate the parentheses from the inside out.

### TypeScript

I was able to define an array and treat it directly like a `stack`. I learned the `const .. of ..` syntax and remembered that I can use `Record` instead of `Object`. $(4ms)$

```typescript
function isValid(s: string): boolean { 
    const stack: Array<string> = []; 
    const chars: Record<string, string> = { ')': '(', '}': '{', ']': '[' } 
    for (const c of s) { 
        if(chars[c]) { 
            if(stack[stack.length -1] === chars[c]) { 
                stack.pop(); 
            } 
            else { 
                stack.push(c); 
            } 
        } 
        else {
            stack.push(c); 
        } 
    } 
    return stack.length === 0; 
};
```

### JavaScript

I deleted the type definitions from the `TypeScript` code and used the exact same solution directly. $(4ms)$

```javascript
/** 
* @param {string} s 
* @return {boolean} 
*/ 
var isValid = function(s) { 
    const stack = []; 
    const chars = { ')': '(', '}': '{', ']': '[' } 
    for (const c of s) { 
        if(chars[c]) { 
            if(stack[stack.length -1] === chars[c]) { 
                stack.pop(); 
            } 
            else{ 
                stack.push(c); 
            } 
        } 
        else { 
            stack.push(c); 
        } 
    } 
    return stack.length === 0; 
};
```

### C\#

I'd like to draw your attention to the `static` and `readonly` modifiers on the dictionary. I used the built-in `Stack` type provided by `C#`. $(6ms)$

```csharp
public class Solution { 
    static readonly Dictionary<char, char> chars = new Dictionary<char, char>{ 
        { ')', '(' }, 
        { '}', '{' }, 
        { ']', '[' } 
    }; 
    public bool IsValid(string s) { 
        Stack<char> stack = []; 
        for(int i=0; i<s.Length; i++) { 
            char c = s[i]; 
            if(chars.ContainsKey(c)) { 
                if( stack.Count > 0 && stack.Peek() == chars[c]) { 
                    stack.Pop(); 
                } 
                else { 
                    stack.Push(c); 
                } 
            } 
            else { 
                stack.Push(c); 
            } 
        } 
        return stack.Count == 0; 
    } 
}
```

### Python

I was able to treat the `list` type like a `stack`. In `Python`, I could check if a list is empty using the `not` keyword, and access the last element of the `list` using $-1$ indexing. $(<1ms)$

```python
class Solution:
    def isValid(self, s: str) -> bool: 
        """ :type s: str 
            :rtype: bool 
        """ 
        stack = [] 
        chars = { ')': '(', '}': '{', ']': '[' } 
        for c in s: 
            if c in chars: 
                if stack and stack[-1] == chars[c]: 
                    stack.pop() 
                else: 
                    stack.append(c) 
            else: 
                stack.append(c) 
        return not stack
```

### PHP

I keep forgetting to prefix variables with `$`. I could define an array and treat it directly like a `stack`. $(1ms)$

```php
class Solution { 
    /** 
    * @param String $s 
    * @return Boolean 
    */ 
    function isValid($s) { 
        $stack = []; 
        $chars = [ ')' => '(', '}' => '{', ']' => '[' ]; 
        for($i = 0; $i < strlen($s); $i++) { 
            $c = $s[$i]; 
            if(isset($chars[$c])) { 
                if($stack[count($stack) - 1] == $chars[$c]) { 
                    array_pop($stack); 
                } 
                else { 
                    array_push($stack, $c); 
                } 
            } 
            else { 
                array_push($stack, $c); 
            } 
        } 
        return empty($stack); 
    } 
}
```

### Go

Writing `} else {` on the same line is mandatory. The `rune` type represents a symbol, defined to emphasize that a character can correspond to multiple `bytes`. They broke the traditional `char` concept of $1$ `byte` ($8$ `bits`). $1$ `rune` is $4$ `bytes`. Also, I used `range` in the `for` loop. $(<1ms)$

```go
func isValid(s string) bool { 
    chars := map[rune]rune{ ')': '(', '}': '{', ']': '[', } 
    var stack []rune 
    for _, c := range s { 
        if chars[c] != 0 { 
            if len(stack) != 0 && stack[len(stack)-1] == chars[c] { 
                stack = stack[:len(stack)-1] 
            } else { 
                stack = append(stack, c) 
            } 
        } else { 
            stack = append(stack, c) 
        } 
    } 
    return len(stack) == 0 
}
```

### Conclusion

In terms of algorithm execution times, optimizations could be made for languages taking longer than $1ms$ by using a `switch` statement instead of a static dictionary. However, I also care about code readability. For this specific problem, I choose `go` as my favorite language.

See you in other blog posts!