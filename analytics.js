/* LiveInternet: HTML footer. SberAds 7752724. MyTracker 3800811. */
window.top100d=window.top100d||function(){(window.top100d.a=window.top100d.a||[]).push(arguments);};
window.travelAnalytics={track(name,parameters={}){
 window.dispatchEvent(new CustomEvent('travel:analytics',{detail:{name,parameters}}));
 const goal={show_translation:'showTranslation',complete_quiz:'completeQuiz'}[name];
 if(!goal)return;
 window.top100d(7752724,'reachGoal',goal,parameters);
 (window._tmr=window._tmr||[]).push({id:'3800811',type:'reachGoal',goal,params:parameters});
}};
