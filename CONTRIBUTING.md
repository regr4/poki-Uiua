# Contributing

If something is missing or not right, please submit an issue.

You can also submit a pull request, especially against [table.tsv](table.tsv) — the really simple TSV file database: 

- `<`, `>`, `&`, `'`, and `"` are automatically escaped
- rows are separated by line breaks
- line breaks may be CR+LF or just LF
- empty rows are ignored
- trailing line break is required
- columns are separated by tabs (`	`)
- each line should have the same number of tabs (currently 6)

### Example entries from table.tsv

|SYNTAX|DESCRIPTION|CLASS|CATEGORY|KEYWORDS|
|------|-----------|-----|--------|--------|
| +y   |Conjugate ('Identity' if y not complex)|Primitive|Mathematical|greek cross plus conj() conjugating
|(+´÷≠)n|Arithmetic mean of n|Tacit|Mathematical|average arithmeticmean() AM() avg() mean()
|F⎉j0 y|Rank: apply F to j0-cells to form cells of the result|Primitive|Function Application|sub-array dimensions axes ending
|x F⎉j1 y|Rank: F on corresponding cells of x and y|Primitive|Function Application|sub-array dimensions axes ending
|F{𝔽𝕩⋄𝕩}y|Apply function F but discard result and return the original value|Block Modifier|Function Application|is-yfunction do-yfunction enpassant noresult isyfunction doyfunction

Keywords aren't required, but providing as many as possible makes it more likely that someone looking for the entry will find it.
