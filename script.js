const input = document.querySelector('.input');

const output = document.querySelector('.output');

input.addEventListener('keydown', function(event) {

  if (event.key === 'Enter') {

    const command = input.textContent.trim();

    input.textContent = '';

    output.innerHTML += `<p>${command}</p>`;

    if (command === 'hello') {

      output.innerHTML += `<p>Hello!</p>`;

    } else if (command === 'world') {

      output.innerHTML += `<p>World!</p>`;

    } else {

      output.innerHTML += `<p>Unknown command</p>`;

    }

    output.scrollTop = output.scrollHeight;

  }

});

