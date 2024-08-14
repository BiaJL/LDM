const Sequelize = require('sequelize')
const sequelize = new Sequelize('dbcadastro', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}) .catch(function(erro){
    console.log('Falha ao se conectar: ' + erro)
})
const Cliente = sequelize.define('cliente',{
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    },
})

// Cliente.sync({force: true})

Cliente.bulkCreate( //bulkCreat é para mais de umaa entidade
    [
        {
            nome: 'Vicenzzo',
            endereco: 'Av Aguia de Haia, 1246',
            bairro: 'São Miguel Paulista',
            cep: '3889100',
            telefone: '(11) 85263-8947',
            celular: '(11) 91478-3652'
        },
        {
            nome: 'Ana',
            endereco: 'Av São Miguel, 246',
            bairro: 'São Miguel Paulista',
            cep: '3989110',
            telefone: '(11) 98947-5263',
            celular: '(11) 93652-1478'
        },
        {
            nome: 'Michelli',
            endereco: 'Rua Antonio Requião, 852',
            bairro: 'Vila Matilde',
            cep: '1239117',
            telefone: '(11) 91234-5678',
            celular: '(11) 98765-4328'
        }
    ]
    )
