export const linkReplace = (url, replaces = []) => {
  let newLink = url;
  replaces.forEach((r) => {
    if (url.startsWith(r)) {
      newLink = url.replace(r, '');
    }
  });
  return newLink;
};

export const linkImageReplace = (url, replaces = []) => {
  let newLink = url;
  replaces.forEach((r) => {
    if (url.startsWith(r)) {
      newLink = url.replace(r, '');
    }
  });
  return newLink;
};
