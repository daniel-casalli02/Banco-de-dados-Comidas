import * as comidasModel from '../models/comidasModel';

export const listarTodos = async (req, res) => {
  try {
    const comidas = await comidasModel.findAll();

    if(!comidas || comidas.length === 0 ){
    res.status(404).json({
      total: comidas.length,
      mensagem: 'Algo deu errado, tente ovamente mais tarde'
    });
}

    res.status(200).json({
        total:bruxos.length,
        mensagem:"Cardapio",
        comidas
    })
  } catch (error) {
    res.status(500).json({ 
      erro: 'Esse pedido não esta disponivel no momento',
      detalhes: error.message,
    });
  }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await comidasModel.encontreUm(id);

        if (!comida) {
            return res.status(404).json({
                erro:'Comida Não encontrada no cardapio',
                mensagem:'Verifique o id no cardapio',
                id: id
            })
        }

        res.status(200).json({
            message:'Comida encontrada',
            comida
        })

    }catch (error) {
        res.status(500).json({
            erro:"Erro interno no servidor",
            detalhes: error.message,
            status:500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { nome, tipo, preco, descricao } = req.body;

        const dado = { nome, tipo, preco, descricao } = req.body;

        const camposObrigatorios = ['nome', 'tipo', 'preco', 'descricao'];

        const faltando = camposObrigatorios.filter(campo => !data[campo]);
        
        if (faltando.length > 0) {
          return res.status(400).json({
            erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
          });
        }

    const novoBruxo = await comidasModel.criar(req.body)

    res.status(201).json({
        message: 'Comidas criadas com sucesso',
        comida: novaComida
    })

    }catch(error) {
        res.status(500).json({
            erro: 'Erro ao criar comida',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) =>{


    try {
        const id = parseInt(req.params.id);

        const comidaExiste = await comidasModel.encontreUm(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não econtrado com esse id',
                id: id
            })
        }

        await comidasModel.deletar(id);

        res.status(200).json({
            mensagem: ' Comida apagada com sucesso!',
            comidaRemovido: comidaExiste
        })

    }catch (error) {
        res.status(500).json({
            erro: ' Erro ao apagar a comida!',
            detalhes: error.message
        })
    }

}