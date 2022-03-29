//index(lista de sessões), show(lista uma ÚNICA sessão), store(criar sessão), update(alterar sessão), destroy(remover/deletar sessão)

module.exports = {
 store(req, res) {
     return res.json({ message: 'Hello World!'})
 }
}