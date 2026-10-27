---
"@expo/cli": patch
---

Optimize deduplication in `joinWithCommasAnd` to run in $O(N)$ time instead of $O(N^2)$ using `Set`.
