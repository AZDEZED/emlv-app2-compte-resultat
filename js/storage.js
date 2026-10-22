(function(root){
'use strict';
const KEY='emlv_app2_html_v3_state';let failure='',protectedData=false;
function fresh(){return {appVersion:'4.0.0',contentVersion:'4.0.0',stateVersion:2,coursePositions:{},courseReturn:null,identity:null,currentBlock:null,currentActivity:null,lastPosition:{view:'home'},positions:{},activities:{},forms:{},completedActivities:[],completedBlocks:[],blockProgress:{},globalProgress:0,updatedAt:0};}
function valid(s){
 if(!s||![1,2].includes(s.stateVersion)||typeof s.activities!=='object'||Array.isArray(s.activities)||!s.activities||!s.lastPosition)return false;
 if(s.identity&&['firstName','lastName','studentId','group','email'].some(k=>typeof s.identity[k]!=='string'))return false;
 for(const a of Object.values(s.activities)){
  if(!a||typeof a!=='object'||!a.answers||!a.review||!a.transferAnswers||!a.transferReview||!a.orders||!Array.isArray(a.aids)||typeof a.completed!=='boolean')return false;
  for(const map of [a.answers,a.review,a.transferAnswers,a.transferReview,a.orders])if(typeof map!=='object'||Array.isArray(map))return false;
  if(Object.values(a.orders).some(order=>!Array.isArray(order)||order.some(id=>typeof id!=='string')))return false;
  for(const map of [a.review,a.transferReview])for(const r of Object.values(map)){if(!r||typeof r!=='object'||!Number.isFinite(r.tries)||typeof r.correct!=='boolean')return false;}
 }
 if(Object.values(s.forms||{}).some(f=>!f||typeof f!=='object'||Array.isArray(f)))return false;
 if(Object.values(s.positions||{}).some(v=>typeof v!=='string'))return false;
 return ['positions','forms'].every(k=>s[k]&&typeof s[k]==='object'&&!Array.isArray(s[k]));
}
function migrate(s){
 if(s.stateVersion===1){try{if(!localStorage.getItem(KEY+'_v1_backup'))localStorage.setItem(KEY+'_v1_backup',JSON.stringify(s));}catch(e){}for(const a of Object.values(s.activities)){a.legacyCredit=!!a.completed;}s.stateVersion=2;}
 s.appVersion='4.0.0';s.contentVersion='4.0.0';s.coursePositions ||= {};return Object.assign(fresh(),s);
}
function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return fresh();const s=JSON.parse(raw);if(!valid(s))throw Error('format');return migrate(s);}catch(e){failure='Votre sauvegarde est inaccessible ou illisible. Votre travail peut continuer dans cet onglet. Exportez votre bilan pour le conserver ; aucune ancienne donnée n’a été effacée.';protectedData=true;return fresh();}}
let state=load();
function merge(latest){
 if(!valid(latest)||latest.updatedAt<=state.updatedAt)return;
 for(const [id,a] of Object.entries(latest.activities))if(!state.activities[id]||(a.updatedAt||0)>(state.activities[id].updatedAt||0))state.activities[id]=a;
 for(const [id,f] of Object.entries(latest.forms))if(!state.forms[id]||(f.openedAt||f.presentedAt||0)>(state.forms[id].openedAt||state.forms[id].presentedAt||0))state.forms[id]=f;
}
function save(){
 try{if(protectedData)return false;const raw=localStorage.getItem(KEY);if(raw)merge(JSON.parse(raw));state.updatedAt=Date.now();localStorage.setItem(KEY,JSON.stringify(state));failure='';return true;}
 catch(e){failure='La sauvegarde sur cet appareil n’est pas disponible. Gardez cet onglet ouvert et exportez votre bilan avant de quitter.';return false;}
}
function importState(s){if(!valid(s))throw Error('Ce fichier n’est pas une sauvegarde compatible de cette application.');state=migrate(s);protectedData=false;return save();}
function reset(){try{localStorage.removeItem(KEY);}catch(e){}state=fresh();protectedData=false;failure='';save();}
root.APP_STORAGE={get state(){return state;},save,reset,importState,valid,get warning(){return failure;},key:KEY,fresh};
root.addEventListener?.('storage',e=>{if(e.key!==KEY)return;try{if(e.newValue){const next=JSON.parse(e.newValue);if(valid(next)){state=migrate(next);root.dispatchEvent(new Event('app-state-updated'));}}else{failure='Le parcours a été réinitialisé dans un autre onglet. Rechargez cette page avant de poursuivre.';protectedData=true;root.dispatchEvent(new Event('app-state-updated'));}}catch(err){}});
})(typeof window!=='undefined'?window:globalThis);
