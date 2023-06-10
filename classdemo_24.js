const ClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'api.md':
      showDemo.innerHTML = `<iframe src='../api_md.html' width="100%" height="100%"></iframe>`;
      break;
    case '4a.md':
      showDemo.innerHTML = `<iframe src='../4a.html' width="100%" height="100%"></iframe>`;
      break;
    case '4b.md':
      showDemo.innerHTML = `<iframe src='../4b.html' width="100%" height="100%"></iframe>`;
      break;
    case '4c.md':
      showDemo.innerHTML = `<iframe src='../4c.html' width="100%" height="100%"></iframe>`;
      break;
    case 'talk.md':
      showDemo.innerHTML = `<iframe src='../talk.html' width="100%" height="100%"></iframe>`;
      break;
  }
};
