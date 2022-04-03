function calcular() {


    var colheita = colheitaIdeal.value
    var valorPorKg = valor.value


    var lucroIdeal = colheita * valorPorKg
    var colheitaReal = (colheita - (colheita*0.4))
    var lucroConPerda = colheitaReal * valorPorKg

    var prejuizoBruto = lucroIdeal - lucroConPerda

    //FORMATAÇÃO EM REAL BRL
    var format_lucroConPerda = lucroConPerda.toLocaleString("pt-br",{
        style: 'currency',
        currency: 'BRL' 
    })

    var format_lucroIdeal = lucroIdeal.toLocaleString("pt-br",{
        style: 'currency',
        currency: 'BRL' 
    })

    var format_prejuizoBruto = prejuizoBruto.toLocaleString("pt-br",{
        style: 'currency',
        currency: 'BRL' 
    })

    
    span_colheita1.innerHTML = `${colheita} Kg`
    span_recConPerd1.innerHTML = `${format_lucroConPerda} `
    span_recSenPerd1.innerHTML = `${format_lucroIdeal} `
    span_preju1.innerHTML = `${format_prejuizoBruto}`
    span_recConPerd1.innerHTML = `${format_lucroConPerda} `
    span_recSenPerd1.innerHTML = `${format_lucroIdeal} `
    span_preju1.innerHTML = `${format_prejuizoBruto}`

    span_colheita2.innerHTML = `${colheita} Kg`
    span_recConPerd2.innerHTML = `${format_lucroConPerda} `
    span_recSenPerd2.innerHTML = `${format_lucroIdeal} `
    span_preju2.innerHTML = `${format_prejuizoBruto}`
    span_recConPerd2.innerHTML = `${format_lucroConPerda} `
    span_recSenPerd2.innerHTML = `${format_lucroIdeal} `
    span_preju2.innerHTML = `${format_prejuizoBruto}`

    articleResult.style.display = "flex"
    cardResult.style.backgroundColor = "#EBFFE1"
    cardResult.style.width = "70vw"
    cardSimu.style.width = "30vw"
    result.style.display = "block"
    cardDiagram.style.display = "none"
    btnVoltar.style.display = "block"
    topoSimu.style.marginTop="2px"
  }

function mostrarDiagram(){
    articleResult.style.display = "none"
    cardResult.style.backgroundColor = "#ffffff"
    cardResult.style.width = "33vw"
    cardSimu.style.width = "33vw"
    result.style.display = "none"
    cardDiagram.style.display = "block"
    btnVoltar.style.display = "none"
    topoSimu.style.marginTop="20%"
}