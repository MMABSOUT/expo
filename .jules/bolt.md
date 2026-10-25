## 2025-05-18 - Fast Set Lookups and Memoization for StackTrace Animations

**Learning:** `Array.prototype.some` linear search inside array mappings for UI lists (like `StackTraceList` in error overlays) creates $O(N \times M)$ overhead during animation frame updates. Additionally, unmemoized list items cause state transition effects to trigger on unrelated layout/resize renders.
**Action:** Use a `Set` for $O(1)$ ID lookups during array diffing in state effects, and memoize item array mapping to stabilize reference equality across layout updates.
