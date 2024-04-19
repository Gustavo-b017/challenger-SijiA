export default function shuffleQuestions(arr) {
  let currentIndex = arr.length, temporaryValue, randomIndex;

  // Enquanto ainda houver elementos para embaralhar...
  while (0 !== currentIndex) {

    // Escolhe um elemento restante...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E troca com o elemento atual.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}