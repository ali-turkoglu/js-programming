/*
Word Break Problem
Given an input string and a dictionary of words, find out if the input string can be segmented
into a space-separated sequence of dictionary words. See following examples for more details.
This is a famous Google interview question, also being asked by many other companies now a days.
Consider the following dictionary
    { i, like, sam, sung, samsung, mobile, ice, cream, icecream, man, go, mango}
    Input:  ilike
    Output: Yes
    The string can be segmented as "i like".

    Input:  ilikesamsung
    Output: Yes
    The string can be segmented as "i like samsung" or "i like sam sung".
    */
   function wordBreak(s, dictionary) {
    const dictSet = new Set(dictionary);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dictSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length] ? "Yes" : "No";
}

// Example usage:
const dictionary = [ 'i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango' ];
console.log(wordBreak("ilike", dictionary)); // Yes
console.log(wordBreak("ilikesamsung", dictionary)); // Yes
