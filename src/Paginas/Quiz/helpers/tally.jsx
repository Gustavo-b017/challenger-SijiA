// A função Tally recebe um array como argumento
export default function Tally(arr) {
  // O método map é usado para criar um novo array que contém o número de tentativas de cada item no array original
  return arr.map(item => {
    // Para cada item no array, retornamos o valor da propriedade 'tries'
    return item.tries;
  // O método reduce é então usado para transformar o array em um objeto
  }).reduce((acc, item) => {
    // Para cada item no array, verificamos se a propriedade correspondente já existe no objeto acumulador
    // Se existir, incrementamos o valor dessa propriedade
    // Se não existir, inicializamos essa propriedade com o valor 1
    acc[item] = (acc[item] || 0) + 1;
    // Retornamos o objeto acumulador para a próxima iteração
    return acc;
  // O objeto acumulador é inicializado como um objeto vazio
  }, {});
};