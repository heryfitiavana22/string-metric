function jarowinkler(s1, s2) {
  console.log(`La similarite entre ${s1} et ${s2} : `);
  const matrix = [];
  const p = 0.1;
  let m = 0;
  let transposition = 0;
  let commonPrefix = 0;
  let hasCommonPrefix = true;
  const maxDistance = Math.max(s1.length, s2.length) / 2 - 1;
  for (let i = 0; i < s1.length; i++) {
    matrix[i] = [];
    const reversedPair = s1[i + 1] + s1[i];
    for (let j = 0; j < s2.length; j++) {
      // correspondant et ne depasse pas le maximum d'eloignment
      if (s1[i] == s2[j] && Math.abs(j - i) <= maxDistance) {
        matrix[i].push(1);
        m++;
      } else matrix[i].push(0);
    }
    if (s2.includes(reversedPair)) transposition += 2;
    if (hasCommonPrefix && s1[i] == s2[i] && commonPrefix < 4) commonPrefix++;
    else hasCommonPrefix = false;
  }
  transposition /= 2;

  const a = m / s1.length;
  const b = m / s2.length;
  const c = (m - transposition) / m;
  const dj = (1 / 3) * (a + b + c);
  const dw = dj + commonPrefix * p * (1 - dj);
  return dw;
}
console.log(jarowinkler("martha", "marhta"));
