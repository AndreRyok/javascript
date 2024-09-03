function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) >= ano) {
        alert('Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade > 0 && idade <= 11){
                img.setAttribute('src', 'bebe-m.png') 
                document.body.style.backgroundColor = 'rgb(88, 137, 236)'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png') 
                document.body.style.backgroundColor = 'rgb(88, 137, 236)'
            } else if (idade < 65) {
                img.setAttribute('src','adulto-m.png' ) 
                document.body.style.backgroundColor = 'rgb(88, 137, 236)'
            } else {
                img.setAttribute('src', 'idoso-m.png') 
                document.body.style.backgroundColor = 'rgb(88, 137, 236)'
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade > 0 && idade <= 11){
                img.setAttribute('src', 'bebe-f.png') 
                document.body.style.backgroundColor = 'rgb(243, 139, 188)'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png') 
                document.body.style.backgroundColor = 'rgb(243, 139, 188)'
            } else if (idade < 65) {
                img.setAttribute('src','adulta-f.png' ) 
                document.body.style.backgroundColor = 'rgb(243, 139, 188)'
            } else {
                img.setAttribute('src', 'idosa-f.png') 
                document.body.style.backgroundColor = 'rgb(243, 139, 188)'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
