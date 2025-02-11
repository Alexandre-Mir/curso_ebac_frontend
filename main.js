$(document).ready(function () {
	$("form").submit(function (e) {
		e.preventDefault();
		const novaTarefa = $("#novaTarefa").val();
		const listaTarefas = $("#listaTarefas");
		$(listaTarefas).append(`<li><p id="tarefa" class="tarefa">${novaTarefa}</p></li>`);
		$("#novaTarefa").val("");
	});
	$(document).on("click", "#tarefa", function () {
		$(this).toggleClass("checked");
	});
});
