const arrayChunk = (array, size) => {
  if (!Array.isArray(array) || !Number.isInteger(size)) return [];

  return array.reduce((chunks, item, i) => {
    if (i % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};

export default arrayChunk;
