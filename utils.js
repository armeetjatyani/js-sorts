function swap(list, a, b) {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function gen(size) {
  if (size === 0) return [];

  let gen = [];

  return gen;
}

export {
  swap,
  gen
}
