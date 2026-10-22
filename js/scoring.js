/* Correction indépendante de l'affichage. Aucun appel réseau. */
(function(root){
'use strict';
function parseNumber(raw, unit='') {
 let s=String(raw??'').trim().replace(/\u2212/g,'-').replace(/[\s\u00a0\u202f]/g,'');
 let neg=false;if(/^\(.+\)$/.test(s)){neg=true;s=s.slice(1,-1);}
 const m=s.match(/^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))(?:(k|m)?(€|eur|euros?|%|\/action|€\/action)?)?$/i);
 if(!m)return [];
 let n=Number(m[1].replace(',','.'));if(neg)n=-n;if(!Number.isFinite(n))return [];
 const suffix=(m[2]||'').toLowerCase(),tail=(m[3]||'').toLowerCase();
 const monetary=/€|euros?/i.test(unit),ratio=unit==='%';
 if(ratio)return !suffix&&(!tail||tail==='%')?[n]:[];
 if(!monetary)return !suffix&&!tail?[n]:[];
 if(tail==='%')return [];
 if(unit==='€/action')return !suffix&&(!tail||/€|eur|action/.test(tail))?[n]:[];
 if(tail.includes('action'))return [];
 const scale=/^k/i.test(unit)?1e3:/^m/i.test(unit)?1e6:1;
 if(suffix||tail){const provided=suffix==='k'?1e3:suffix==='m'?1e6:1;return [n*provided/scale];}
 // Sans suffixe : unité affichée en premier ; grands montants entiers également lus en euros.
 return scale>1&&Math.abs(n)>=scale?[n,n/scale]:[n];
}
function numeric(q,raw){return parseNumber(raw,q.calculation?.unit||'').some(n=>Math.abs(n-q.expected)<=(q.tolerance||0)+1e-9);}
function evaluate(q,a) {
 if(q.type==='number')return numeric(q,a);
 if(q.type==='single')return a===q.expected;
 if(q.type==='multiple')return Array.isArray(a)&&a.length===q.expected.length&&q.expected.every(x=>a.includes(x));
 return false;
}
function calculate(expression){
 const src=String(expression).replace(/\s/g,'');const tokens=src.match(/\d+(?:\.\d+)?|[()+*/-]/g)||[];
 if(tokens.join('')!==src)throw Error('Expression invalide');
 let i=0;const steps=[];
 function atom(){if(tokens[i]==='-'){i++;return -atom();}if(tokens[i]==='+'){i++;return atom();}if(tokens[i]==='('){i++;let v=sum();if(tokens[i++]!==')')throw Error('Parenthèses');return v;}const t=tokens[i++];if(!/^\d/.test(t||''))throw Error('Nombre');return Number(t);}
 function product(){let v=atom();while(['*','/'].includes(tokens[i])){let op=tokens[i++],b=atom(),a=v;v=op==='*'?v*b:v/b;steps.push({a,op,b,result:v});}return v;}
 function sum(){let v=product();while(['+','-'].includes(tokens[i])){let op=tokens[i++],b=product(),a=v;v=op==='+'?v+b:v-b;steps.push({a,op,b,result:v});}return v;}
 const value=sum();if(i!==tokens.length||!Number.isFinite(value))throw Error('Calcul invalide');return {value,steps};
}
root.APP_SCORING={parseNumber,evaluate,calculate};
})(typeof window!=='undefined'?window:globalThis);
