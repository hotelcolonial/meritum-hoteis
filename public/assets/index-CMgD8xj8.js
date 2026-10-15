// Visitantes com o HTML do site antigo (Vite) em cache no navegador chegam aqui, porque
// esse HTML carrega este arquivo. Vai para a mesma rota com um parâmetro único, o que
// obriga o navegador a buscar o HTML novo. O #/... é mantido para o HashRedirect.
// Não usa location.reload(): o navegador poderia servir de novo o HTML guardado.
// Remover depois de 2026-12-15.
(function () {
  var u = new URL(location.href);
  if (u.searchParams.has("_r")) return; // já tentou uma vez: evita laço
  u.searchParams.set("_r", String(Date.now()));
  location.replace(u.pathname + u.search + u.hash);
})();
