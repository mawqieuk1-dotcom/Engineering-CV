AOS.init({ duration: 800, once: true });
const darkToggle=document.getElementById('darkModeToggle'),darkCSS=document.getElementById('dark-mode-css'),body=document.body;
function setDark(e){if(e){body.classList.add('dark');darkCSS.disabled=false;darkToggle.innerHTML='<i class="fas fa-sun"></i>';}else{body.classList.remove('dark');darkCSS.disabled=true;darkToggle.innerHTML='<i class="fas fa-moon"></i>';}localStorage.setItem('darkMode',e?'enabled':'disabled');}
darkToggle.addEventListener('click',()=>setDark(!body.classList.contains('dark')));
if(localStorage.getItem('darkMode')==='enabled')setDark(true);

const header=document.getElementById('header'),bottomNav=document.getElementById('bottomNav');let ls=0;
window.addEventListener('scroll',()=>{let s=window.pageYOffset||document.documentElement.scrollTop;if(s>ls&&s>80){header.classList.add('header-hidden');if(bottomNav)bottomNav.classList.add('bottom-nav-hidden');}else{header.classList.remove('header-hidden');if(bottomNav)bottomNav.classList.remove('bottom-nav-hidden');}ls=s;updateActiveNav();animateDonuts();});

function updateActiveNav(){const sec=['home','about','experience','research','skills','contact'];let c='home';sec.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=150)c=id;});document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active');});}

const counters=document.querySelectorAll('.counter');let animated=false;
function animateCounters(){counters.forEach(c=>{const t=+c.getAttribute('data-target'),inc=t/40;const u=()=>{const cur=+c.innerText;if(cur<t){c.innerText=Math.ceil(cur+inc);setTimeout(u,30);}else c.innerText=t;};u();});}
window.addEventListener('scroll',()=>{const stats=document.querySelector('.hero-stats');if(stats&&!animated&&stats.getBoundingClientRect().top<window.innerHeight-100){animateCounters();animated=true;}});

function animateDonuts(){document.querySelectorAll('.fg-circle').forEach(circle=>{const rect=circle.getBoundingClientRect();if(rect.top<window.innerHeight&&!circle.dataset.animated){const percent=circle.getAttribute('data-percent');const circumference=2*Math.PI*45;circle.style.strokeDasharray=circumference;circle.style.strokeDashoffset=circumference*(1-percent/100);circle.dataset.animated='true';}});}

// DNA Canvas
const canvas=document.getElementById('dnaCanvas');if(canvas){const ctx=canvas.getContext('2d');let w,h;function resize(){w=canvas.width=window.innerWidth;h=canvas.height=canvas.parentElement.offsetHeight;}resize();window.addEventListener('resize',resize);let offset=0;function drawDNA(){ctx.clearRect(0,0,w,h);const cols=12,spacingX=w/(cols+1);for(let i=0;i<cols;i++){const x=i*spacingX+spacingX/2;for(let y=0;y<h;y+=60){const phase=(y+offset)*0.05+i*0.5;const x1=x+Math.sin(phase)*25;const x2=x+Math.sin(phase+Math.PI)*25;ctx.beginPath();ctx.arc(x1,y,3,0,Math.PI*2);ctx.fillStyle='rgba(0,201,167,0.15)';ctx.fill();ctx.beginPath();ctx.arc(x2,y+30,3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y+30);ctx.strokeStyle='rgba(0,201,167,0.08)';ctx.stroke();}}offset+=0.3;requestAnimationFrame(drawDNA);}drawDNA();}

function submitContact(){const name=document.getElementById('name')?.value?.trim()||'',email=document.getElementById('email')?.value?.trim()||'',msg=document.getElementById('message')?.value?.trim()||'لا يوجد',fb=document.getElementById('formFeedback');if(!name){fb.textContent='الاسم مطلوب';fb.style.color='red';return;}if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fb.textContent='بريد غير صحيح';fb.style.color='red';return;}fb.style.color='';const m=`*رسالة جديدة*\n\nالاسم: ${name}\nالبريد: ${email}\nالرسالة: ${msg}`;window.open(`https://wa.me/966507652943?text=${encodeURIComponent(m)}`,'_blank');fb.textContent='✅ تم!';fb.style.color='green';document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value='';setTimeout(()=>{fb.textContent='';},5000);}
