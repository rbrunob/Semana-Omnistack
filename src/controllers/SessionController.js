//index(lista de sessões), show(lista uma ÚNICA sessão), store(criar sessão), update(alterar sessão), destroy(remover/deletar sessão)
const User = require('../models/User');

module.exports = {
 async store(req, res) {
     const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }


     return res.json(user);
 }
}