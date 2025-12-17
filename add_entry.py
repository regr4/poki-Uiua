import sys

with open("table.tsv", "a", encoding="utf-8") as f:
    while True:
        try:
            syntax = input("New Entry\nPaste Syntax: ")
        except EOFError:
            print("\nGoodbye!")
            sys.exit(0)  # exit upon Control-d
        description = input("Description: ")
        class_ = input("Class: ")
        category = input("Category: ")
        polymorphic = input("Is it rank-polymorphic? (true/false/irrelevant)")
        keywords = input("Keywords: ")
        example = input("Example: ")
        example_output = input("Example output: ")
        f.write(
            "\t".join(
                [
                    syntax,
                    description,
                    class_,
                    category,
                    polymorphic,
                    keywords,
                    example,
                    example_output,
                ]
            )
            + "\n"
        )
