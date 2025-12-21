import database from '../../../../infra/database.js';

async function status(req, res) {
  const result = await database.query('SELECT 1+1 as sum;');
  console.log(result.rows);

  res.setHeader('x-creator', 'é o demonzin');

  res.status(200).json({
    status: 'ok',
    menssagem: 'primeiro endpoint da api',
    horarioAtual: new Date().toLocaleTimeString('pt-BR'),
  });
}

export default status;
