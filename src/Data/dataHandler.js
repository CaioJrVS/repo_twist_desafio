const data = require('./data');

//Votos de cada candidato:

let noticiasPorCandidato = [];
let noticiasFreixo = 0;
let noticiasCrivella = 0;
data.data.map((value, index)=>{
    if (value.candidato == 'Crivella'){
        noticiasCrivella ++;
    }
    if (value.candidato == 'Freixo'){
        noticiasFreixo ++;
    }
});

noticiasPorCandidato.push({noticiasCrivela:noticiasCrivella}, {noticiasFreixo:noticiasFreixo});

exports.noticiasPorCandidato= noticiasPorCandidato;
