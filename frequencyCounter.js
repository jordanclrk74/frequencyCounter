// Problem 1 //

    const sameOccurrences = (num1, num2) => {

        if (!num1 || !num2) return false;
        if (num1.length !== num2.length) return false;
        
        const occurrence = {};
        for (value of num1) {
        occurrence[value] = (occurrence[value] || 0) + 1;
        }

        for (value2 of num2) {
        if (!occurrence[value2]) return false;
        occurrence[value2] -= 1;
        }
        return true;
    }

// Problem 2 //

    const validAnagram = (first, second) => {
        if (!first || !second) return false;
        if (first.length !== second.length) return false;
    
        const anagramCount = {};
    
        for (value of first) {
        anagramCount[value] ? (anagramCount[value] += 1) : (anagramCount[value] = 1);
        }
    
        for (value2 of second) {
        if (!anagramCount[value2]) return false;
        anagramCount[value2] -= 1;
        }
        return true;
    }

