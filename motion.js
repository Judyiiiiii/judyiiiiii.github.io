'use strict';
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)');
const scene=document.querySelector('.hero-scene');
const world=document.querySelector('.scene-world');
const zoom=document.querySelector('.scene-zoom');
let glyphs=[],centres=[],pointerFrame=0,latestPointer=null,activeTilt=null;
const clearGlyphs=()=>glyphs.forEach(el=>{el.style.removeProperty('--letter-x');el.style.removeProperty('--letter-y');el.style.removeProperty('--letter-r');el.classList.remove('is-near');});

function prepareHeadline(){
 const title=document.querySelector('[data-scatter]');
 if(!title.querySelector('.scatter-letter')){
  const spoken=[...title.childNodes].map(n=>n.nodeType===3?n.textContent:' ').join('');
  for(const node of [...title.childNodes]){
   if(node.nodeType!==3)continue;
   const fragment=document.createDocumentFragment();
   for(const word of node.textContent.match(/\S+|\s+/g)||[]){
    if(/^\s+$/.test(word)){fragment.append(document.createTextNode(word));continue;}
    const wrapper=document.createElement('span');wrapper.className='scatter-word';wrapper.setAttribute('aria-hidden','true');
    for(const char of word){const letter=document.createElement('span');letter.className='scatter-letter';letter.textContent=char;wrapper.append(letter);}
    fragment.append(wrapper);
   }
   node.replaceWith(fragment);
  }
  const accessible=document.createElement('span');accessible.className='sr-only';accessible.textContent=spoken;title.append(accessible);
 }
 glyphs=[...title.querySelectorAll('.scatter-letter')];centres=[];
 requestAnimationFrame(measureLetters);
}
function measureLetters(){
 clearGlyphs();
 centres=glyphs.map(el=>{const r=el.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2};});
}
function resetTilt(){if(activeTilt){activeTilt.style.removeProperty('--tilt-x');activeTilt.style.removeProperty('--tilt-y');activeTilt=null;}}
function paintPointer(){
 pointerFrame=0;if(!latestPointer||motionPreference.matches||!finePointer.matches)return;
 const {x,y,target}=latestPointer;
 const rect=scene.getBoundingClientRect();
 const overScene=x>=rect.left&&x<=rect.right&&y>=rect.top&&y<=rect.bottom;
 if(overScene){
  world.style.setProperty('--scene-x',((x-rect.left)/rect.width-.5)*-14+'px');
  world.style.setProperty('--scene-y',((y-rect.top)/rect.height-.5)*-10+'px');
 }else{world.style.removeProperty('--scene-x');world.style.removeProperty('--scene-y');}
 glyphs.forEach((el,i)=>{
  const c=centres[i];if(!c)return;
  const dx=c.x-x,dy=c.y-y,distance=Math.hypot(dx,dy),strength=Math.max(0,1-distance/88);
  el.style.setProperty('--letter-x',(dx/(distance||1))*strength*40+'px');
  el.style.setProperty('--letter-y',(dy/(distance||1))*strength*34+'px');
  el.style.setProperty('--letter-r',(i%2?1:-1)*strength*18+'deg');el.classList.toggle('is-near',strength>.05);
 });
 const tilt=target.closest('.project-visual');if(activeTilt!==tilt)resetTilt();
 if(tilt){activeTilt=tilt;const r=tilt.getBoundingClientRect();tilt.style.setProperty('--tilt-x',((y-r.top)/r.height-.5)*-5+'deg');tilt.style.setProperty('--tilt-y',((x-r.left)/r.width-.5)*5+'deg');}
}
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;latestPointer={x:e.clientX,y:e.clientY,target:e.target};if(!pointerFrame)pointerFrame=requestAnimationFrame(paintPointer);},{passive:true});
document.addEventListener('pointerleave',()=>{latestPointer=null;clearGlyphs();resetTilt();world.style.removeProperty('--scene-x');world.style.removeProperty('--scene-y');});
zoom.addEventListener('click',()=>{const enabled=zoom.getAttribute('aria-pressed')!=='true';zoom.setAttribute('aria-pressed',enabled);scene.classList.toggle('is-zoomed',enabled);});

const revealObserver=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}},{threshold:.06});
function observeContent(){
 revealObserver.disconnect();
 document.querySelectorAll('[data-reveal],.project-card').forEach(el=>{if(motionPreference.matches)el.classList.add('is-visible');else revealObserver.observe(el);});
}
function updateMotion(){
 document.body.classList.toggle('motion-ready',!motionPreference.matches);clearGlyphs();resetTilt();
 world.style.removeProperty('--scene-x');world.style.removeProperty('--scene-y');observeContent();
}
window.addEventListener('portfolio:render',observeContent);
window.addEventListener('portfolio:language',prepareHeadline);
window.addEventListener('resize',measureLetters,{passive:true});
window.addEventListener('scroll',()=>{if(!motionPreference.matches)measureLetters();},{passive:true});
motionPreference.addEventListener('change',updateMotion);
finePointer.addEventListener('change',()=>{clearGlyphs();resetTilt();});
prepareHeadline();updateMotion();document.fonts.ready.then(measureLetters);
