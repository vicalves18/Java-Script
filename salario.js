<!DOCTYPE html >
<html >
<head>
    <meta charset = "utf-8" >
    <title > Calcular Media </title >
</head >
<body >
    <h1 > Calcular Media </h1 >
    <input type="number" name="txtn1" id="txtn1" > +
    <input type="number" name="txtn2" id="txtn2" > +
    <input type="number" name="txntn3" id="txtn3">
    <input type="button" value="Somar" onclick="somar()">
    <div id="res">Resultado</div>
    <script> 
        function somar(){
            var tn1 = window.document.getElementById('txtn1')
            var tn2 = window.document.getElementById('txtn2')
            var tn3 = window.document.getElementById('txtn3')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var n3 = Number(tn3.value)
            var total= n1 + n2 + n3
            var media = total / 3
            var res= window.document.getElementById('res')
            res.innerHTML = `A media entre ${n1}, ${n2} e ${n3} é igual a ${media}`
            
        }

    </script>
</body > 
</html>
