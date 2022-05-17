

document.querySelector('#inputCpf').addEventListener('change', (e) =>{

    e.preventDefault();
    var input = document.querySelector('#inputCpf');

    input.value = input.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    var cpf = input.value.replace(/\D/g ,'');

    let regExp = /^[0-9]{11}$/

    if(regExp.test(cpf) == true){
        alert('cpf OK')
    }else{
        alert('cpf invaido')
    }

    document.querySelector('#hl').textContent = input.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

})