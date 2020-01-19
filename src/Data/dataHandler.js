const data = require('./data');

//Noticias de cada candidato:

let noticiasFreixo = 0;
let noticiasCrivella = 0;
data.data.map(value=>{
    if (value.candidato === 'Crivella'){
        return (noticiasCrivella ++);
    }
    if (value.candidato === 'Freixo'){
        return(noticiasFreixo ++);
    }
    return 0
});

export const noticiasPorCandidato= {Crivella:noticiasCrivella, Freixo:noticiasFreixo};



//Noticias de cada candidato por dia


let noticiasPorDiaCrivella =[];
let noticiasPorDiaFreixo =[];

let contaDias =0;
let dia = data.data[0].date_published.slice(8,10);
for (let i=0; i< noticiasPorCandidato.Freixo ;i++){

    if (data.data[i].date_published.slice(8,10) === dia){
        contaDias++
    }
    else{
        noticiasPorDiaFreixo.push({dia:data.data[i].date_published.slice(5,10),numDeNoticias:contaDias});
        contaDias=1;
        dia=data.data[i].date_published.slice(8,10);
    }
};
noticiasPorDiaFreixo.push({dia:data.data[noticiasPorCandidato.Freixo].date_published.slice(5,10),numDeNoticias:contaDias});

contaDias =0
dia = data.data[noticiasPorCandidato.Freixo].date_published.slice(8,10);

for( let i = noticiasPorCandidato.Freixo; i< noticiasPorCandidato.Crivella+noticiasPorCandidato.Freixo; i++ ){
    if (data.data[i].date_published.slice(8,10) === dia){
        contaDias++
    }
    else{
        noticiasPorDiaCrivella.push({dia:data.data[i].date_published.slice(5,10),numDeNoticias:contaDias});
        contaDias=1;
        dia=data.data[i].date_published.slice(8,10);
    }
};
noticiasPorDiaCrivella.push({dia:data.data[noticiasPorCandidato.Freixo].date_published.slice(5,10),numDeNoticias:contaDias});

export const noticiasPorDia= {Crivella:noticiasPorDiaCrivella,Freixo:noticiasPorDiaFreixo};
