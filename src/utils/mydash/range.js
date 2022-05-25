/*
	* range(4); // => [0, 1, 2, 3]
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/
// range(0,20, 5);
range(1, 4, 0);

function range(start, end, step) {
    let array = [];
    if (!end) {
        if (Math.sign(start) === -1) {
            for (let i = 0; i > start; i--) {
                array.push(i)
            }
        } else {
            for (let i = 0; i < start; i++) {
                array.push(i)
            }
        }
    }
    if (end && step === undefined) {

        if (Math.sign(end) === -1) {
            for (let i = start; i > end; i--) {
                array.push(i)
            }
        } else {
            for (let i = start; i < end; i++) {
                array.push(i)
            }
        }
    }
    if (end && step !== undefined) {
        if (step !== 0) {
            if (Math.sign(end) === -1) {
                for (let i = start; i > end; i += step) {
                    array.push(i)
                }
            } else {
                for (let i = start; i < end; i += step) {
                    array.push(i)
                }
            }
        } else {
            if (Math.sign(end) === -1) {
                for (let i = start; i > end; i--) {
                    array.push(start)
                }
            } else {
                for (let i = start; i < end; i++) {
                    array.push(start)
                }
            }

        }
    }
    return array;
}


// решение автора:
const baseRange = (start, end, step) => {
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);

    while (length--) {
        result[++index] = start;
        start += step;
    }

    return result;
}

// Проверку на типы данных не добавлял, но студенты должны будут
function range2(start = 0, end, step) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step);
}
