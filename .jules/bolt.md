## 2025-05-10 - O(1) Duplicate Lookup for Fingerprint Sources
**Learning:** `dedupSources` in `@expo/fingerprint` used linear array searches (`Array.prototype.findIndex`) for every incoming source across all types, resulting in O(N^2) time complexity during fingerprint deduplication. `contents` and `package` types can be deduplicated in O(1) time using `Map` keyed by `id` and `overrideHashKey ?? \`${name}@${version}\``.
**Action:** Use `Map` index lookups for discrete key-based items in deduplication loops to convert O(N^2) iterations into O(N).
