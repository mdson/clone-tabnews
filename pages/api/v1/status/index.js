function status(req, res) {
  res.setHeader('x-creator', 'é o demonzin');

  res.status(200).json({
    status: 'ok',
    menssagem: 'primeiro endpoint da api',
    horarioAtual: new Date().toLocaleTimeString('pt-BR'),
  });
}

export default status;
