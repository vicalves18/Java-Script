<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Números</title>
</head>
<style>
    select#listam{
        width: 200px;
    }
</style>
<body>
    
    <h1>Escolha os números:</h1>
    <div>
        Números:
        <input type="number" name="numero">
        <input type="button" value="adicionar" onclick="adicionar()">
        <br>
        <select name="listam" id="listam" size="10"></select>
        <br> 
        <input type="button" value="Pronto" onclick="pronto()">
        <div id="res"></div>

    </div>
    <script>
        let num = window.document.getElementById('numero')
        let lista=window.document.getElementById('listam')
        let res =window.document.getElementById('res')
        let valores=[]
        function isNumero(n) {
            if(Number(n) >=1 && Number(n) <=1000){
                return true
            }else{
                return false
            }
            
        }
        function inLista(n,l){
            if(l.indexOf(Number(n)) !=-1){
                return true
            }else{ 
                return false
            }


        }

        function adicionar() {
            while (valores<=20){
                res.innerHTML=''
            }
            if(isNumero(num.value) && !inLista(num.value,valores)){
                valores.push(Number(num.value))
                let item=document.createElement('option')
                item.text=`Valor adicionado ${num.value}`
                lista.appendChild(item)
                res.innerHTML=''

            }
            else {
                window.alert('Número já encontrado na lista ou valor inválido.')

            }
            num.value=''
            num.focus()

        }
        function finalizar() {
            if (valores == 0){
                window.alert=('Adicione um número.')
            }
            else{
                let total = valores
                let soma=0
                for(let pos in valores){
                    soma+=valores[pos]
                }

                res.innerHTML=''
                res.innerHTML+=`<p> Ao todo temos ${total} itens.</p>`
                res.innerHTML+=`<p> A soma dos valores é ${soma}.<p>`

            }
            
        }
        
    
    </script>
    
</body>
</html>
