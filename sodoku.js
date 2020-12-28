let
    grid = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ]


function test(grid) {

    //check for each row
    let row = []
    for (let member of grid) {
        if (extractUniqueValues(member).length !== 9) return false
    }


    //check for columns

    let counter_index = 0,
        counter_row = 0
    while (counter_index < 9) {
        if (row.length < 9) {
            row.push(grid[counter_row][counter_index])
            counter_row++
        } else if (extractUniqueValues(row).length === 9) {
            row = []
            counter_row = 0
            counter_index++
        } else return false
    }


    //check for  3 × 3 sub-grids

    counter_index = 0
    counter_row = 0
    row = []
    let illegal_indexes = [3, 6, 9]
    let index_to_start_row = 0
    let index_to_start_value = 0
    let premission_comein = false

    while (counter_index < 8 || counter_row < 8) {
        if (row.length < 9) {

            if (illegal_indexes.indexOf(counter_index) === -1 || premission_comein === true) {
                row.push(grid[counter_row][counter_index])
                counter_index++
                premission_comein = false
            } else {
                counter_index = index_to_start_value
                counter_row++
                premission_comein = true
            }

        } else if (extractUniqueValues(row).length === 9) {
            row = []
            counter_row = index_to_start_row
            index_to_start_value = index_to_start_value + 3
            if (counter_index === 6) index_to_start_row = index_to_start_row + 3
            else if (counter_index === 9) {
                counter_index = 0
                index_to_start_value = 0
            }
            premission_comein = true
        } else return false
    }


    return true
}

function extractUniqueValues(array) {
    return [...new Set(array)]
}

console.log(test(grid))