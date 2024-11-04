$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        
        // Obtém o valor do campo de entrada
        const task = $('#taskInput').val();
        
        // Adiciona um novo item à lista de tarefas
        $('#taskList').append(`<li>${task}</li>`);
        
        // Limpa o campo de entrada
        $('#taskInput').val('');
    });

    // Adiciona o efeito de riscar ao clicar no item da lista
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
});
