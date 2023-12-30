const boxes = document.querySelectorAll('.boxes');
let bool = true;
const patterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (bool && box.innerHTML === '-') {
            box.innerHTML = 'X';
            bool = false;
        } else if (!bool && box.innerHTML === '-') {
            box.innerHTML = 'O';
            bool = true;
        }

        const temp = checkWin();
        if (temp) {
            alert('Congratulations');
            // You can add more logic here for the end of the game
        }
    });
});

const checkWin = () => {
    let temp = false;
    for (const pattern of patterns) {
        temp = temp || (
            boxes[pattern[0]].innerHTML !== '-' &&
            boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML &&
            boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML
        );
    }
    return temp;
};
