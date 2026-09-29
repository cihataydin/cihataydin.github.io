---
slug: longest-common-prefix
title: Longest Common Prefix
tags: [algo, leet-code]
---

This is the problem of finding the longest common starting prefix among all words in a given string array (word list).
Example,

Input: strs = ["flower","flow","flight"]

Output: "fl"

**Solution Logic:**
- The first element in the array is taken as a reference, and a loop is established sequentially through the characters of this element.
- At each loop step, the current character is compared with the remaining elements of the array.
- If there is a character mismatch at the same indices or if the character index exceeds the size of the compared word, the process is terminated immediately and the current accumulated prefix up to that point is returned.

### TypeScript
```typescript
function longestCommonPrefix(strs: string[]): string { 
	let commonPrefix = ''; 
	let i = 0; 
	let hasMatch = true; 
	while (hasMatch) { 
		let current = strs[0][i]; 
		if(!current) return commonPrefix; 
		for(let j=1; j<strs.length; j++) { 
			if(current !== strs[j][i]) return commonPrefix; 
		} 
		commonPrefix += current; i++; 
	} 
	return commonPrefix; 
}
```

In TypeScript, the return type of functions can be specified by using a `:` after the parentheses. Specifying types in function parameters is a good practice and usually mandatory. When defining variables, `let` or `const` is used; an explicit type (Type Annotation) can be added with `:` if desired. When no type is specified, TypeScript automatically guesses the variable's type thanks to **Type Inference**.

### JavaScript
```javascript
/** 
* @param {string[]} strs 
* @return {string} 
*/ 
var longestCommonPrefix = function(strs) { 
	let commonPrefix = ''; 
	let i = 0; 
	let hasMatch = true; 
	while (hasMatch) { 
		let current = strs[0][i]; 
		if(!current) return commonPrefix; 
		for(let j=1; j<strs.length; j++) { 
			if(current !== strs[j][i]) return commonPrefix; 
		} 
		commonPrefix += current; 
		i++; 
	} 
	return commonPrefix; 
};
```

This code is a nice longest common prefix solution written in JavaScript. JavaScript and TypeScript syntax are fundamentally very similar; functions can even be assigned to variables in both languages. As a difference, in JavaScript, instead of pure TypeScript types, we can proceed by using **JSDoc** (`@param`, `@return`) as shown above or without specifying any types at all (dynamically).

### Python
```python
class Solution: 
	def longestCommonPrefix(self, strs: list[str]) -> str: 
		commonPrefix = "" 
		for i in range(len(strs[0])): 
			current = strs[0][i] 
			if current is None: 
				return commonPrefix 
			for j in range(1, len(strs)): 
				if i >= len(strs[j]) or current != strs[j][i]: 
					return commonPrefix 
			commonPrefix += current 
		return commonPrefix
```

In Python, you need to pay close attention to indentation and block structures (spaces are used instead of curly braces `{}`). `for` loops are generally written in the form `for i in range(...)`. Although types are not mandatory in Python, a return type can be specified with `->` in the function signature, and data types can be specified with `:` in parameters (Type Hinting). String and list sizes are measured using the `len()` function.

### C# 
```csharp
public class Solution { 
	public string LongestCommonPrefix(string[] strs) { 
		string commonPrefix = ""; 
		if (string.IsNullOrEmpty(strs[0])) return commonPrefix; 
		if (strs.Length == 1) return strs[0]; 
		for(int i = 0; i < strs[0].Length; i++) { 
			char current = strs[0][i]; 
			if(char.IsWhiteSpace(current)) break; 
			for(int j = 1; j < strs.Length; j++) { 
				if(i >= strs[j].Length || current != strs[j][i]) 
					return commonPrefix; 
			} 
			commonPrefix += current; 
		} 
		return commonPrefix; 
	} 
}
```

The output type signature is written at the beginning of the function.

### PHP
```php
class Solution { 
	/** 
	* @param String[] $strs 
	* @return String 
	*/ 
	function longestCommonPrefix($strs) { 
		$commonPrefix = ""; 
		$firstItem = $strs[0]; 
		$firstItemLength = strlen($strs[0]); 
		for($i=0; $i<$firstItemLength; $i++) {
			$current = $firstItem[$i]; 
			for($j=1; $j<count($strs); $j++) { 
				if($i >= strlen($strs[$j]) || $current != $strs[$j][$i]) { 
					return $commonPrefix; 
				} 
			} 
			$commonPrefix .= $current; 
		} 
		return $commonPrefix; 
	} 
}
```

Every variable starts with the `$` sign. We do not specify types except within comments. `count()` is used for array size, and `strlen()` for string size. Concatenation of two strings is achieved using `.` instead of `+`.

### Go (Golang)
```go
func longestCommonPrefix(strs []string) string { 
	commonPrefix := ""; 
	firstItem := strs[0]; 
	firstItemLength := len(strs[0]); 
	for i := 0; i < firstItemLength; i++ {
		current := firstItem[i]; 
		for j := 1; j < len(strs); j++ { 
			if i >= len(strs[j]) || current != strs[j][i] { 
				return commonPrefix; 
			} 
		} 
		commonPrefix += string(current); 
	} 
	return commonPrefix; 
}
```

**Function Definition:** Defined with the `func` keyword, and the return type of the function is specified at the very end of the parentheses.

**Variable Declaration:** Defined using a short variable declaration with the `:=` operator, similar to mathematical definitions.

**Data Types:** Array/Slice definitions are made with square brackets like `[]string`.

**Syntax Rules (Critical):** Using parentheses `()` in `for` and `if` conditions is not mandatory. However, the opening curly brace `{` **must definitely start on the same line**; otherwise, the Go compiler throws an error due to the Automatic Semicolon Insertion (ASI) rule.

**Size and Characters:** Sizes are measured with `len()`. When accessing a string index, it returns a value of type `byte` (`uint8`); therefore, casting it like `string(current)` is necessary to use it in concatenation operations.