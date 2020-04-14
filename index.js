export function loadScript(src, attrObject) {
  return new Promise(((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();

      return;
    }

    const el = document.createElement('script');

    el.type = 'text/javascript';
    el.async = true;
    el.src = src;
    if (Object.prototype.toString.call(attrObject) === '[object Object]') {
      Object.keys(attrObject).forEach(key => {
        el.setAttribute(key, attrObject[key]);
      });
    }

    el.addEventListener('load', resolve);
    el.addEventListener('error', reject);
    el.addEventListener('abort', reject);

    document.head.appendChild(el);
  }));
}

function unloadScript(src) { // eslint-disable-line no-param-reassign
  return new Promise(function (resolve, reject) {
    const el = document.querySelector('script[src="' + src + '"]')

    if (!el) {
      reject()

      return
    }

    document.head.removeChild(el)

    resolve()
  })
}
