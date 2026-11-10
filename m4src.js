/* First-touch source of this visit (link / ad / referrer). Kept in sessionStorage only, sent only together with a signature. */
(function(){try{
var K='m4src';if(sessionStorage.getItem(K))return;
var q=new URLSearchParams(location.search),p=[],h='';
['utm_source','utm_medium','utm_campaign','utm_content'].forEach(function(k){var v=q.get(k);if(v)p.push(k.slice(4)+'='+v)});
if(q.get('src'))p.push('src='+q.get('src'));
if(q.get('fbclid'))p.push('fbclid');
try{h=document.referrer?new URL(document.referrer).hostname:''}catch(e){}
if(h&&h!==location.hostname)p.push('ref='+h);
p.push('land='+location.pathname);
sessionStorage.setItem(K,p.join('|'));
}catch(e){}})();
