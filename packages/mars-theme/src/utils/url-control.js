export const urlControl = (url, stateFrontity) => {
  let newUrl = url;
  if (!stateFrontity.isLocal) {
    const reg = new RegExp(stateFrontity.adminUrl, "g");
    newUrl = url.replace(reg, stateFrontity.url);
  }
  return newUrl;
};