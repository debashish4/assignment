const numList = [
  { num: 1, color: "#6F98A8" },
  { num: 2, color: "#2B8EAD" },
  { num: 3, color: "#2F454E" },
  { num: 4, color: "#2B8EAD" },
  { num: 5, color: "#2F454E" },
  { num: 6, color: "#BFBFBF" },
  { num: 7, color: "#BFBFBF" },
  { num: 8, color: "#6F98A8" },
  { num: 9, color: "#2F454E" },
];

// Module Design Pattern to encapsulate the functionality
let app = (function (data, NumContainer) {
  // RENDER NUMBERS ONLOAD
  const renderNumbers = (data) => {
    let blocks = data.map(
      (num) =>
        `<p class="block"><span class="bg" style="background: ${num.color}"></span><span class="num">${num.num}</span></p>`
    );
    NumContainer.innerHTML = blocks.join("");
  };
  renderNumbers(data);

  // SHUFFLE NUMBERS
  const shuffleNum = () => {
    let suffledNumbers = data.sort(() => Math.random() - 0.5);
    renderNumbers(suffledNumbers);
  };

  // SORT NUMBERS
  const sortNum = () => {
    let sortedNumbers = data.sort((a, b) => a.num - b.num);
    renderNumbers(sortedNumbers);
  };

  return {
    shuffleNum,
    sortNum,
  };
})(numList, document.querySelector(".num-blocks"));
