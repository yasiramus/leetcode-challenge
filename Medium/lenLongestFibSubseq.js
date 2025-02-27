// implementaion

// approach used: HashMap and dynamic programming
function findLongestFibonacciSubsequence(numbers) {
    let maxSequenceLength = 0;
    let sequenceMap = new Map();
    let numberIndexMap = new Map();

    numbers.forEach((num, index) => numberIndexMap.set(num, index));

    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
        for (let previousIndex = 0; previousIndex < currentIndex; previousIndex++) {
            let firstNumber = numbers[previousIndex];
            let secondNumber = numbers[currentIndex];
            let requiredNumber = secondNumber - firstNumber;

            if (requiredNumber < firstNumber && numberIndexMap.has(requiredNumber)) {
                let requiredIndex = numberIndexMap.get(requiredNumber);
                let sequenceKey = `${previousIndex},${currentIndex}`;
                let previousSequenceKey = `${requiredIndex},${previousIndex}`;
                let previousSequenceLength = sequenceMap.get(previousSequenceKey) || 2;
                sequenceMap.set(sequenceKey, previousSequenceLength + 1);
                maxSequenceLength = Math.max(maxSequenceLength, sequenceMap.get(sequenceKey));
            }
        }
    }
    
    return maxSequenceLength >= 3 ? maxSequenceLength : 0;
}


