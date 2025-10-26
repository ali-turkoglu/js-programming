/*
Create a function that can Count of substrings having all distinct characters
        Given a string str consisting of lowercase alphabets, the task is to find the number of possible substrings (not necessarily distinct) that consists of distinct characters only.
            Examples:
                Input: Str = “gffg”
                Output: 6
        Explanation:
            All possible substrings from the given string are,
            ( “g“, “gf“, “gff”, “gffg”, “f“, “ff”, “ffg”, “f“, “fg“, “g” )
            Among them, the highlighted ones ( “g“, “gf“, “f“, “f“, “fg“, “g” ) consists of distinct characters only.

                Input: str = “gfg”
                Output: 5
        Explanation:
            All possible substrings from the given string are,
            ( “g“, “gf“, “gfg”, “f“, “fg“, “g” )
            Among them, the highlighted ( “g“, “gf“, “f“, “fg“, “g” ) consists of distinct characters only.
            */
            function countDistinctSubstrings(str) {
                const n = str.length;
                let count = 0;
                for (let i = 0; i < n; i++) {
                    const set = new Set();
                    for (let j = i; j < n; j++) {
                        if (!set.has(str[j])) {
                            set.add(str[j]);
                            count++;
                        }
                    }
                }
                return count;
            }

            // Example usage:
            console.log(countDistinctSubstrings("gfg")); // Output: 5
            console.log(countDistinctSubstrings("gffga")); // Output: 12

