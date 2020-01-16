/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
    }).join('');
    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);

  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    console.log("ici")
    const car = VIRTUO.getCar();
    const begin = document.getElementById("date1").value;
    const end = document.getElementById("date2").value;
    const distance = document.getElementById("distance").value;
    const option = document.getElementById("option").value == 'Yes' ? true : false; 
    const actors = VIRTUO.payActors(car, begin, end, distance, option);
    console.log(actors)
    render(actors);
    return;
  });
})();
