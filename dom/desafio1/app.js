new Vue({
    el: '#desafio',
    data: {
        nome: 'Carol',
        idade: 28,
        imagem: 'https://coritiba.com.br/Images/imgs/logo_new_n.png'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        }
    }

})