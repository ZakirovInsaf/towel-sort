// You should implement your task here.
module.exports = function towelSort(matrix) {
    let a = [];
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    function check(matrix) {
        for (let i of matrix) {
            if (i.length > 1 && matrix.indexOf(i) % 2 == 1) {
                check(i.reverse());
            } else if (i.length > 1 && matrix.indexOf(i) % 2 == 0) {
                check(i);
            } else {
                a.push(i);
            }
        }
    }
    check(matrix);
    return a;
};
