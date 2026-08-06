// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
    const matrix = [];
    if (label) {
        console.log(`\nEntering Matrix ${label}:`);
    }
    for (let i = 0; i < rows; i++) {
        const line = readlineSync.question(`Enter row ${i + 1}: `);
        const row = line.trim().split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('  '));
    }
}

function transposeMatrix(matrix) {
    const result = [];
    for (let col = 0; col < matrix[0].length; col++) {
        const newRow = [];
        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[0].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function main() {
    console.log('--- PART A: Transpose Matrix ---');
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    const matrixA = readMatrix(rows, cols);
    console.log('\nOriginal Matrix:');
    printMatrix(matrixA);
    console.log('\nTransposed Matrix:');
    printMatrix(transposeMatrix(matrixA));

    console.log('\n--- PART B: Add Two Matrices ---');
    const rowsB = readlineSync.questionInt('Enter number of rows for matrices: ');
    const colsB = readlineSync.questionInt('Enter number of columns for matrices: ');
    const mat1 = readMatrix(rowsB, colsB, '1');
    const mat2 = readMatrix(rowsB, colsB, '2');
    console.log('\nSum of Matrices:');
    printMatrix(addMatrices(mat1, mat2));

    console.log('\n--- PART C: Multiply Two Matrices ---');
    const r1 = readlineSync.questionInt('Enter Matrix A rows: ');
    const c1 = readlineSync.questionInt('Enter Matrix A columns (and Matrix B rows): ');
    const c2 = readlineSync.questionInt('Enter Matrix B columns: ');
    const matA = readMatrix(r1, c1, 'A');
    const matB = readMatrix(c1, c2, 'B');
    console.log('\nProduct of Matrix A x Matrix B:');
    printMatrix(multiplyMatrices(matA, matB));
}

main();
