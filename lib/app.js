// criando o módulo
angular.module("listaTelefonica", []);
//achamdo o módulo e criando um controller pra ele
angular.module("listaTelefonica").controller('listaTelefonicaCtrl', function($scope){
    //depois do $scope.qualquer coisa
    $scope.app = "Lista Telefonica";
    //Array de contatos
    $scope.contatos = [
        {/*key*/nome: "Pedro", /*value*/telefone: 99999999 },
        {nome: "Ana", telefone: 99999998},
        {nome: "Maria", telefone: 99999997}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14},
        {nome: "Vivo", codigo: 15},
        {nome: "Tim", codigo: 41},
    ];
    //criando a função para o ng click
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
    };
});