const handleClick = (e) => {
  let elem = e.target;
  while (!elem.id) {
    elem = elem.parentNode;
  }
  console.log(elem.id);
};

export function monitor() {
  window.addEventListener('click', handleClick);
}

export function clearMonitor() {
  window.removeEventListener('click', handleClick);
}
