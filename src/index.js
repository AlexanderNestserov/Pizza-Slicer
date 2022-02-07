
document.getElementById('app').innerHTML = `<p>Click 👆 this button</p>`
const button = document.getElementById('load-btn');
button.addEventListener('click', () => {
   document.getElementById('app').innerHTML = 'waiting...';
   button.style.backgroundColor = "grey";
   fetch('https://gp-js-test.herokuapp.com/pizza')
      .then((response) => response.json())
      .then((data) => {
         render(data);
         button.addEventListener('click', () => { window.location.reload(); })
      })
})

function render(party) {
   let count = 0;
   let sum = 0;
   Object.values(party).forEach(e => {
      console.log(e);
      for (let i = 0; i < e.length; i++) {
         if (e[i].eatsPizza === true) {
            count = count + 1;
         }
         if (e[i].name) {
            sum = sum + 1;
         }
      }
      console.log(count);
      console.log(sum);
      button.style.backgroundColor = "red";
      document.getElementById('app').innerHTML = `<p>There are ${sum} party participants and ${count} tasty Pizza eaters.</p>`;
      if (count === 2) {
         let circle6 = document.querySelector('.circle6');
         circle6.style.display = 'block';
      }
      else if (count === 4) {
         let circle5 = document.querySelector('.circle5');
         circle5.style.display = 'block';
      }
      else if (count === 6) {
         let circle4 = document.querySelector('.circle4');
         circle4.style.display = 'block';
      }
      else if (count === 8) {
         let circle3 = document.querySelector('.circle3');
         circle3.style.display = 'block';
      }
      else if (count === 10) {
         let circle2 = document.querySelector('.circle2');
         circle2.style.display = 'block';
      }
      else if (count === 12) {
         let circle1 = document.querySelector('.circle1');
         circle1.style.display = 'block';
      }
      else if (count > 12) {
         let circle1 = document.querySelector('.circle1');
         circle1.style.display = 'block';
         document.getElementById('not').innerHTML = `<p>And there are too many Pizza eaters, and ${count - 12} participants will be left without pizza! </p>`;
      }
   })
}
