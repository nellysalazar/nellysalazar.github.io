let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#be4c7f;">Soy Programadora Frontend en TecnolochicasPRO.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
