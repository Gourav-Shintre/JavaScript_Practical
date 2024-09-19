function checkStringsAnagram(a, b) {
    // Step 1: Check if the lengths of both strings are equal
    if (a.length !== b.length) {
        console.log('Invalid Input');
        return; // Exit the function if lengths are not equal
    }

    // Step 2: Sort both strings alphabetically and compare
    let str1 = a.split('').sort().join(''); // Sort characters of string 'a'
    let str2 = b.split('').sort().join(''); // Sort characters of string 'b'

    // Step 3: Compare the sorted strings
    if (str1 === str2) {
        console.log("This is anagram"); // Strings are anagrams
    } else {
        console.log("not anagram"); // Strings are not anagrams
    }
}

checkStringsAnagram("aanh", "anna"); // Example usage
