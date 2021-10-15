import Router from 'vanilla-router';

const showMessage = (markup) => {
  document.getElementById('message-box').innerHTML = markup;
};

const router = new Router({
  mode: 'history',
  page404: (path) => showMessage(`Página não encontrada: /${path}`),
});

const handleNavigate = (event) => {
  event.preventDefault();
  const url = new URL(event.currentTarget.href);
  router.navigateTo(url.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', handleNavigate);
  });

  router
    .add('/', () => showMessage('Você acessou a página inicial.'))
    .add('/hello/{parameter}', (parameter) => showMessage(`Hello ${parameter}`))
    .add('/about', () => showMessage('Você acessou a página "Sobre".'))
    .addUriListener();
});
