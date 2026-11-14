// Typing effect for the hero line
const t=document.getElementById('type');
if(t){const roles=['a Software Developer','an API Builder','a Mobile App Developer','a Rust Tinkerer'];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce){t.textContent="I'm "+roles[0]}else{let r=0,c=0,del=false;
 (function tick(){const w=roles[r];t.textContent="I'm "+w.slice(0,c);
  if(!del&&c===w.length){del=true;return setTimeout(tick,1400)}
  if(del&&c===0){del=false;r=(r+1)%roles.length}
  c+=del?-1:1;setTimeout(tick,del?40:80)})();}}
// Highlight active nav link while scrolling
const links=[...document.querySelectorAll('nav a[href^="#"]')];
if('IntersectionObserver' in window&&links.length){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
 links.forEach(l=>{const s=document.querySelector(l.hash);s&&io.observe(s)})}
