/* Meta Pixel, loaded only after the visitor agrees. No name, email or phone is sent. */
(function(){
var ID='1652726792426601',K='m4c',c=null;
try{c=localStorage.getItem(K)}catch(e){}
function load(){
  if(window.fbq)return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init',ID);fbq('track','PageView');
}
window.m4lead=function(lvl){
  if(!window.fbq)return;
  fbq('track','Lead',{content_name:'maslul4_atzuma',content_category:lvl||''},{eventID:'m4_'+Date.now()+'_'+Math.random().toString(36).slice(2,8)});
};
window.m4reset=function(){try{localStorage.removeItem(K)}catch(e){}location.reload()};
if(c==='1'){load();return}
if(c==='0')return;
var T={he:['האתר משתמש בעוגיית מדידה של Meta כדי לדעת אילו מודעות מביאות חתימות. לא נשלחים שם, דוא״ל או טלפון.','מסכים/ה','לא תודה'],
 en:['This site uses a Meta measurement cookie to learn which ads bring signatures. No name, email or phone is sent.','Agree','No thanks'],
 ru:['Сайт использует измерительный cookie Meta, чтобы понять, какие объявления приводят подписи. Имя, e-mail и телефон не передаются.','Согласен(на)','Нет, спасибо'],
 ar:['يستخدم الموقع ملف قياس من Meta لمعرفة أي الإعلانات تجلب التواقيع. لا يُرسَل الاسم أو البريد أو الهاتف.','موافق/ة','لا، شكرًا']};
function show(){
  var t=T[(document.documentElement.lang||'he').slice(0,2)]||T.he,d=document.createElement('div');
  d.setAttribute('role','region');d.setAttribute('aria-label','cookies');
  d.style.cssText='position:fixed;z-index:150;left:12px;right:12px;bottom:12px;max-width:640px;margin:0 auto;background:#14181c;color:#fff;border-radius:16px;padding:14px 16px;box-shadow:0 12px 40px rgba(0,0,0,.4);font:500 15px/1.5 Heebo,Arial,sans-serif;display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center';
  var p=document.createElement('span');p.textContent=t[0];p.style.cssText='flex:1 1 260px';
  function btn(txt,primary,val){var b=document.createElement('button');b.type='button';b.textContent=txt;b.style.cssText='font:800 15px Heebo,Arial,sans-serif;border-radius:999px;padding:9px 18px;cursor:pointer;border:2px solid #fff;'+(primary?'background:#fff;color:#14181c':'background:transparent;color:#fff');b.onclick=function(){try{localStorage.setItem(K,val)}catch(e){}d.remove();if(val==='1')load()};return b}
  d.appendChild(p);d.appendChild(btn(t[1],true,'1'));d.appendChild(btn(t[2],false,'0'));document.body.appendChild(d);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show);else show();
})();
