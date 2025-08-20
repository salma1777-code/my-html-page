/* Floating heart trail */
document.addEventListener('pointermove', (e)=>{
  const h = document.createElement('span');
  h.textContent = '❤';
  h.className = 'heart';
  Object.assign(h.style, {
    position:'fixed', left: (e.clientX-6)+'px', top:(e.clientY-6)+'px',
    pointerEvents:'none', userSelect:'none', fontSize:'14px', opacity:'1',
    transition:'transform .9s ease, opacity .9s ease'
  });
  document.body.appendChild(h);
  requestAnimationFrame(()=>{
    h.style.transform = `translate(${(Math.random()*40-20)}px, -40px) scale(${1+Math.random()}) rotate(${(Math.random()*40-20)}deg)`;
    h.style.opacity = '0';
  });
  setTimeout(()=>h.remove(), 900);
});

/* Confetti (very tiny & dependency-free) */
function confettiBurst(){
  for(let i=0;i<120;i++){
    const c=document.createElement('i');
    Object.assign(c.style,{
      position:'fixed', width:'6px', height:'6px', background:'white',
      left: (innerWidth/2)+'px', top:'-10px', transform:`translate(${(Math.random()*innerWidth - innerWidth/2)}px,0)`,
      transition:'transform 1.2s cubic-bezier(.15,.85,.2,1)', pointerEvents:'none'
    });
    c.style.background = `hsl(${Math.random()*360},90%,60%)`;
    document.body.appendChild(c);
    const dx=(Math.random()*innerWidth - innerWidth/2);
    const dy= (innerHeight*0.9*Math.random()+80);
    requestAnimationFrame(()=> c.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random()*720}deg)`);
    setTimeout(()=>c.remove(), 1400);
  }
}
document.getElementById('confettiBtn')?.addEventListener('click', confettiBurst);
document.getElementById('confettiBtn2')?.addEventListener('click', confettiBurst);

/* Typewriter already handled in CSS */

/* Map glow toggle */
document.getElementById('mapGlow')?.addEventListener('click', ()=>{
  document.querySelector('.xspot')?.classList.toggle('glow');
});

/* Choose-your-own navigation */
document.querySelectorAll('[data-go]')?.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-go');
    document.querySelectorAll('.story-card').forEach(s=>s.classList.add('hidden'));
    document.getElementById(id)?.classList.remove('hidden');
  });
});

/* Reasons Randomizer */
const defaultReasons = [
  "Your laugh makes bad days retire early.",
  "You make fries taste better just by sharing them.",
  "You text like a sunbeam.",
  "You’re my favorite plot twist.",
  "Your hugs recalibrate my whole nervous system.",
  "You remember small things that are actually big things.",
  "You’re brave in quiet ways.",
  "You turn ordinary moments into core memories.",
  "You let me be silly and safe at the same time.",
  "You make me want to be gentler with the world."
];
let reasons = [...defaultReasons];

const reasonEl = document.getElementById('reason');
document.getElementById('shuffle')?.addEventListener('click', ()=>{
  const r = reasons[Math.floor(Math.random()*reasons.length)];
  reasonEl.textContent = r;
});

document.getElementById('copy')?.addEventListener('click', async ()=>{
  const text = reasonEl?.textContent || "";
  try{ await navigator.clipboard.writeText(text); alert("Copied!"); }
  catch{ alert("Couldn’t copy, sorry!"); }
});

document.getElementById('addReasons')?.addEventListener('click', ()=>{
  const box = document.getElementById('customReasons');
  if(!box) return;
  const lines = box.value.split('\n').map(s=>s.trim()).filter(Boolean);
  if(lines.length){ reasons.push(...lines); box.value=''; alert("Added! Shuffle to see them."); }
});
