function damerauLevenshtein(M, P) {
  console.log(`Distance de Damerau-Levenshtein de "${M}" et "${P}" :`);
  const matrix = [];

  for (let i = 0; i < M.length + 1; i++) {
    matrix[i] = [i];
    for (let j = 1; j < P.length + 1; j++) {
      if (i == 0) {
        matrix[i].push(j);
      } else {
        const costSubstitution = M[i - 1] === P[j - 1] ? 0 : 1;

        matrix[i].push(
          Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + costSubstitution
          )
        );
        if (i > 1 && j > 1 && M[i - 1] === P[j - 2] && M[i - 2] === P[j - 1]) {
          matrix[i][j] = Math.min(
            matrix[i][j],
            matrix[i - 2][j - 2] + costSubstitution
          );
        }
      }
    }
  }
  return matrix[M.length][P.length];
}

console.log(damerauLevenshtein("ai", "ia"));
