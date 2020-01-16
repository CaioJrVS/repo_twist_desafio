const data = require('./data');

//Noticias de cada candidato:

let noticiasPorCandidato = [];
let noticiasFreixo = 0;
let noticiasCrivella = 0;
data.data.map(value=>{
    if (value.candidato == 'Crivella'){
        noticiasCrivella ++;
    }
    if (value.candidato == 'Freixo'){
        noticiasFreixo ++;
    }
});

noticiasPorCandidato= {Crivella:noticiasCrivella, Freixo:noticiasFreixo};

export const noticiasPorCandidato= noticiasPorCandidato;


//Noticias de cada candidato por dia


let noticiasPorDiaCrivella =[];
let noticiasPorDiaFreixo =[];

contaDias =0;
dia = data.data[0].date_published.slice(8,10);
for (i=0; i< noticiasPorCandidato.Freixo ;i++){

    if (data.data[i].date_published.slice(8,10) == dia){
        contaDias++
    }
    else{
        noticiasPorDiaFreixo.push({dia:data.data[i].date_published.slice(5,10),numDeNoticias:contaDias});
        contaDias=1;
        dia=data.data[i].date_published.slice(8,10);
    }
};
noticiasPorDiaFreixo.push({dia:data.data[i].date_published.slice(5,10),numDeNoticias:contaDias});

contaDias =0
dia = data.data[noticiasPorCandidato.Freixo].date_published.slice(8,10);

for( i = noticiasPorCandidato.Freixo; i< noticiasPorCandidato.Crivella+noticiasPorCandidato.Freixo; i++ ){
    if (data.data[i].date_published.slice(8,10) == dia){
        contaDias++
    }
    else{
        noticiasPorDiaCrivella.push({dia:data.data[i].date_published.slice(5,10),numDeNoticias:contaDias});
        contaDias=1;
        dia=data.data[i].date_published.slice(8,10);
    }
};
noticiasPorDiaCrivella.push(contaDias);

export const noticiasPorDia= {Crivella:noticiasPorDiaCrivella,Freixo:noticiasPorDiaFreixo};
