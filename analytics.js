/* Внешние счётчики пока не подключены. Вставьте официальный код из своего кабинета на каждую HTML-страницу. */
window.travelAnalytics={track(name,parameters={}){window.dispatchEvent(new CustomEvent('travel:analytics',{detail:{name,parameters}}));if(typeof window.travelExternalTrack==='function')window.travelExternalTrack(name,parameters);}};
