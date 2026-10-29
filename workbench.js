'use strict';
const gallery=document.querySelector('.projects');
const galleryMotionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let galleryCards=[],galleryFrame=0;
const clampProgress=n=>Math.max(0,Math.min(1,n));
function updateGalleryFrames(){
 galleryFrame=0;
 if(!gallery.classList.contains('gallery-motion'))return;
 const height=innerHeight;
 for(const card of galleryCards){
  if(card.hidden)continue;
  const rect=card.getBoundingClientRect();
  if(rect.bottom<0||rect.top>height*1.5)continue;
  const progress=clampProgress((height-rect.top)/(rect.height+height));
  const opened=clampProgress(Math.min(progress/.3,(1-progress)/.25));
  const eased=1-Math.pow(1-opened,3);
  card.style.setProperty('--frame-inset',(46*(1-eased)).toFixed(2)+'%');
  card.style.setProperty('--image-shift',((progress-.5)*80).toFixed(2)+'px');
  card.style.setProperty('--frame-scale',(1.1-.08*eased).toFixed(3));
 }
}
function scheduleGallery(){if(!galleryFrame)galleryFrame=requestAnimationFrame(updateGalleryFrames);}
function prepareGallery(){
 galleryCards=[...gallery.querySelectorAll('.project-card')];
 for(const card of galleryCards){
  if(card.querySelector('.gallery-stage'))continue;
  const stage=document.createElement('div');stage.className='gallery-stage';
  stage.append(...card.children);card.append(stage);
 }
 gallery.classList.toggle('gallery-motion',!galleryMotionPreference.matches&&!gallery.classList.contains('list-view'));
 scheduleGallery();
}
window.addEventListener('portfolio:render',prepareGallery);
galleryMotionPreference.addEventListener('change',prepareGallery);
document.querySelector('.views').addEventListener('click',prepareGallery);
window.addEventListener('scroll',scheduleGallery,{passive:true});
window.addEventListener('resize',scheduleGallery,{passive:true});

// Short moving strokes follow the actual schematic paths, with no glow.
const wire=document.querySelector('.wire-divider');
for(const original of [...wire.querySelectorAll('svg>path')]){
 const pulse=original.cloneNode();pulse.removeAttribute('stroke');pulse.removeAttribute('stroke-width');
 pulse.setAttribute('pathLength','100');pulse.setAttribute('class','current-pulse');wire.querySelector('svg').append(pulse);
}
const component=document.querySelector('.component-drawing');
component.insertAdjacentHTML('beforeend','<svg class="chip-current" viewBox="0 0 180 180" fill="none" aria-hidden="true"><path d="M39 40h24v19h22M38 64h10v48h22M122 36v21h-17M141 81h-20v21H98M137 142h-29v-20H87" pathLength="100"/></svg><span class="chip-led" aria-hidden="true"></span>');
const currentObserver=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('current-active',e.isIntersecting)),{threshold:.1});
currentObserver.observe(wire);currentObserver.observe(component);
prepareGallery();
