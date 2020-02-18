$(document).ready(function () {
  //   Default model
  const todos = []

  // Function to update the view
  function displayTodos () {
    $('.container').empty()
    for (todo of todos) {
      const todoElement = $('<div>').addClass('todoContainer')
      const todoCheckbox = $('<input>')
        .val(todo.done)
        .attr('type', 'checkbox')
      todoElement.append(todoCheckbox)
      todoElement.append($('<p>').text(todo.name))
      $('.container').append(todoElement)
    }
  }

  // When focused on the text field, when enter is hit, add the value to the list of todos and clear the text field
  $("input[data-target='todoName']").keyup(function (event) {
    const keycode = event.keyCode ? event.keyCode : event.which
    if (keycode === 13) {
      todos.push({
        name: $("input[data-target='todoName']").val(),
        done: false
      })
      $("input[data-target='todoName']").val('')
      displayTodos()
    }
  })
})
