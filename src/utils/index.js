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

const getUrl = (ElementType, Url) => {
  let url = '';
  switch (ElementType) {
    case 'Search':
      url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${Url}`;
      break;
    case 'Store':
      url = `https://24h.pchome.com.tw/store/${Url}`;
      break;
    case 'Prod':
      url = `https://24h.pchome.com.tw/prod/${Url}`;
      break;
    case 'Url':
    default:
      url = Url;
      break;
  }
  return url;
};

export { arrayChunk, getUrl };
