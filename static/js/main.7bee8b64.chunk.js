(this["webpackJsonpevent-planner"]=this["webpackJsonpevent-planner"]||[]).push([[0],{270:function(e,t){},275:function(e,t,n){e.exports=n(482)},280:function(e,t,n){},444:function(e,t,n){},482:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(126),l=n.n(o),c=(n(280),n(256)),i=n(257),s=n(272),u=n(271),d=n(14);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(){e.handleChangeViewClick("EventDetails"),e.handleSelectEvent({title:e.title,host:e.host,date:e.date,yes:e.yes,maybe:e.maybe,no:e.no,id:e.id})}},r.a.createElement("h3",null,e.title)))},m=n(52),v=n(17),p=n(15);function g(){var e=Object(d.a)(["\n  border: 2px solid grey;\n  border-radius: 9px;\n  background-color: #909f86a7;\n  padding-left: 6px;\n  margin-top: 6px;\n"]);return g=function(){return e},e}var b=p.a.div(g());var h=function(e){Object(v.useFirestoreConnect)([{collection:"events"}]);var t=Object(m.c)((function(e){return e.firestore.ordered.events}));return Object(v.isLoaded)(t)?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.map((function(t,n){return r.a.createElement(b,{key:t.id},r.a.createElement(E,{title:t.title,host:t.host,date:t.date,yes:t.yes,maybe:t.maybe,no:t.no,id:t.id,handleChangeViewClick:e.handleChangeViewClick,handleSelectEvent:e.handleSelectEvent}))})))):r.a.createElement("h3",null,"Loading...")},f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button",onClick:function(){return e.handleChangeViewClick("NewEventForm")}},"Add New Event"),r.a.createElement(h,{handleChangeViewClick:e.handleChangeViewClick,handleSelectEvent:e.handleSelectEvent}))},y=n(98);function S(){var e=Object(d.a)(["\n  font-size: 50px;\n  ","\n  color: #b5f587;\n  ",'\n  font-family: "Trebuchet MS", Helvetica, sans-serif;\n  margin:0%\n']);return S=function(){return e},e}var O=p.a.h1(S(),"",""),_={textDecoration:"none",color:"#b5f587",fontSize:"25px",backgroundColor:"#030c0185",borderRadius:"9px",padding:"5px"};var P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"centerBox"},r.a.createElement(O,{className:"blocks"},"Event Planner"),r.a.createElement("div",{className:"linkBox"},r.a.createElement("li",{className:"blocks",onClick:e.handleClickLink},r.a.createElement(y.b,{style:_,to:"/"},"Home")),r.a.createElement("li",{className:"blocks",onClick:e.handleClickLink},r.a.createElement(y.b,{style:_,to:"/signin"},"Sign In")))))};function C(){var e=Object(d.a)(["\nposition: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #909f86a7;\n  border: 2px solid grey;\n  font-size: 11px;\n  padding-left: 7%\n"]);return C=function(){return e},e}var k=p.a.div(C()),A=function(){return r.a.createElement(k,null,r.a.createElement("p",null,"\xa9 2020 - Keturah Howard, Jamison Cozart, Zakkrey Short, Stephanie Podolak"))};function N(){var e=Object(d.a)(["\n  padding: 5px;\n  \n"]);return N=function(){return e},e}var T=p.a.div(N());var w=function(e){var t=Object(v.useFirestore)();function n(n){return"yes"===n?(console.log("IN FUNCTION",e.selectedEvent.id),t.update({collection:"events",doc:e.id},{yes:e.selectedEvent.yes+1})):"maybe"===n?t.update({collection:"events",doc:e.id},{maybe:e.selectedEvent.maybe+1}):"no"===n?t.update({collection:"events",doc:e.id},{no:e.selectedEvent.no+1}):void 0}return console.log("IN DETAILS",e.selectedEvent),r.a.createElement(T,null,r.a.createElement("button",{className:"buttonVote",onClick:function(){return n("yes")}},"Yes"),r.a.createElement("button",{className:"buttonVote",onClick:function(){return n("maybe")}},"Maybe"),r.a.createElement("button",{className:"buttonVote",onClick:function(){return n("no")}},"No"))},x=n(494),j=n(498),I=n(495);function R(){var e=Object(d.a)(["\n\n  margin: 10px;\n\n"]);return R=function(){return e},e}function F(){var e=Object(d.a)(["\n  border-radius: 9px;\n  border: 2px solid grey;\n  margin: 10px;\n  background-color: rgba(253, 255, 253, 0.886);\n"]);return F=function(){return e},e}function D(){var e=Object(d.a)(["\n  padding: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return e},e}var B=p.a.div(D()),V=p.a.div(F()),M=p.a.div(R());var L=function(e){var t=[{status:"yes",votes:e.yescount},{status:"maybe",votes:e.maybecount},{status:"no",votes:e.nocount}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,r.a.createElement(V,null,r.a.createElement("div",{className:"data"},r.a.createElement(x.a,{theme:j.a.material,domainPadding:20},r.a.createElement(I.a,{data:t,style:{data:{fill:"pink"}},x:"status",y:"votes"})))),r.a.createElement(M,null,r.a.createElement("p",null,"Going: ",e.yescount),r.a.createElement("p",null,"Might be going: ",e.maybecount),r.a.createElement("p",null,"Not going: ",e.nocount))))};function U(){var e=Object(d.a)(["\n  padding: 6px;\n  display: flex;\n  justify-content: center;\n"]);return U=function(){return e},e}function W(){var e=Object(d.a)(["\n  border: 2px solid grey;\n  border-radius: 9px;\n  background-color: #909f86a7;\n  padding-left: 6px;\n  margin-top: 6px;\n"]);return W=function(){return e},e}var H=p.a.div(W()),K=p.a.div(U());var Y=function(e){var t=e.selectedEvent;Object(v.useFirestoreConnect)([{collection:"events",doc:t.id}]);var n=Object(m.c)((function(e){var n=e.firestore.data;return n.events&&n.events[t.id]}));if(Object(v.isLoaded)(n))return console.log("DB SELECTED:",n),r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,r.a.createElement("h3",null,t.title),r.a.createElement("h4",null,"On ",n.date," by: ",t.host),r.a.createElement(K,null,r.a.createElement(w,{selectedEvent:n,id:t.id})),r.a.createElement("hr",null),r.a.createElement(L,{yescount:n.yes,maybecount:n.maybe,nocount:n.no}),r.a.createElement("hr",null),r.a.createElement(K,null,r.a.createElement("button",{className:"button",onClick:function(){return e.handleBackToMainPage("MainPage")}},"MainPage"))))};function z(){var e=Object(d.a)(["\n  border: 2px solid grey;\n  border-radius: 9px;\n  padding: 3px;\n  ","\n  padding-bottom: 3%;\n  background-color: #909f86a7;\n  text-align: center;\n"]);return z=function(){return e},e}var G=p.a.div(z(),"");var J=function(e){var t=Object(v.useFirestore)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,r.a.createElement("h2",null,"New Event Form"),r.a.createElement("form",{className:"centerBox",onSubmit:function(n){return n.preventDefault(),e.handleBackToMainPage("MainPage"),t.collection("events").add({title:n.target.title.value,host:n.target.host.value,date:n.target.date.value,yes:0,maybe:0,no:0})}},r.a.createElement("input",{type:"text",name:"title",placeholder:"Event Title"}),r.a.createElement("input",{type:"text",name:"host",placeholder:"Event Host"}),r.a.createElement("input",{type:"text",name:"date",placeholder:"Event Date"}),r.a.createElement("button",{className:"button",type:"submit"},"Submit")),r.a.createElement("div",{className:"centerBox"},r.a.createElement("button",{className:"button",onClick:function(){return e.handleBackToMainPage("MainPage")}},"Back to Events"))))},X=n(133),Z=n.n(X);function $(){var e=Object(d.a)(["\n  border: 2px solid grey;\n  border-radius: 9px;\n  padding: 3px;\n  padding-left: 7%;\n  padding-bottom: 3%;\n  background-color: #909f86a7;\n"]);return $=function(){return e},e}var q=p.a.div($());var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null,r.a.createElement("h1",null,"Sign up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.email.value,n=e.target.password.value;Z.a.auth().createUserWithEmailAndPassword(t,n).then((function(){console.log("successfully signed up!")})).catch((function(e){console.log(e.message)}))}},r.a.createElement("input",{type:"text",name:"email",placeholder:"email"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{className:"button",type:"submit"},"Sign up")),r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.signinEmail.value,n=e.target.signinPassword.value;Z.a.auth().signInWithEmailAndPassword(t,n).then((function(){console.log("WHOOOA WE KNOW YOU")})).catch((function(e){console.log(e.message)}))}},r.a.createElement("input",{type:"text",name:"signinEmail",placeholder:"email"}),r.a.createElement("input",{type:"password",name:"signinPassword",placeholder:"Password"}),r.a.createElement("button",{className:"button",type:"submit"},"Sign in")),r.a.createElement("h1",null,"Sign Out"),r.a.createElement("button",{className:"button",onClick:function(){Z.a.auth().signOut().then((function(){console.log("Bish bye!")})).catch((function(e){console.log(e.message)}))}},"Sign out")))},ee=n(55);n(444);function te(){var e=Object(d.a)(["\n  margin: 7%;\n"]);return te=function(){return e},e}var ne=p.a.div(te()),ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).reRender=function(){a.setState({stateToUpdate:!a.state.stateToUpdate})},a.handleChangingView=function(e){var t=a.props.dispatch,n={};"MainPage"===e?n.type="SHOW_MAINPAGE":"NewEventForm"===e?n.type="SHOW_NEWEVENTFORM":"EventDetails"===e&&(n.type="SHOW_EVENTDETAILS"),t(n)},a.handleChangeSelectedEvent=function(e){var t=a.props.dispatch;console.log("event id: ",e.id),t({type:"SELECT_EVENT",title:e.title,host:e.host,date:e.date,id:e.id,yes:e.yes,maybe:e.maybe,no:e.no})},a.state={stateToUpdate:!1},a}return Object(i.a)(n,[{key:"setVisibility",value:function(){return"MainPage"===this.props.currentPage?r.a.createElement(f,{handleChangeViewClick:this.handleChangingView,handleSelectEvent:this.handleChangeSelectedEvent}):"NewEventForm"===this.props.currentPage?r.a.createElement(J,{handleBackToMainPage:this.handleChangingView}):"EventDetails"===this.props.currentPage?r.a.createElement(Y,{handleBackToMainPage:this.handleChangingView,selectedEvent:this.props.selectedEvent}):void 0}},{key:"render",value:function(){console.log("PROPS",this.props);var e=this.props.firebase.auth(),t=null;return Object(v.isLoaded)(e)||(t=r.a.createElement("h1",null,"Loading...")),Object(v.isLoaded)(e)&&null==e.currentUser&&(t=r.a.createElement("h1",null,"You need to be signed in to view this page!")),Object(v.isLoaded)(e)&&null!=e.currentUser&&(t=this.setVisibility()),console.log("yoooo",e),r.a.createElement(y.a,null,r.a.createElement(P,{handleClickLink:this.reRender}),r.a.createElement(ne,null,r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"/signin"},r.a.createElement(Q,null)),r.a.createElement(ee.a,{path:"/"},t))),r.a.createElement(A,null))}}]),n}(r.a.Component),re=function(e){return{events:e.events,presetEvents:e.presetEvents,currentPage:e.currentPage,selectedEvent:e.selectedEvent}};ae=Object(m.b)(re)(ae),console.log("MAP",re);var oe=Object(v.withFirestore)(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(76),ce=n(270),ie=n.n(ce),se=n(132),ue=Object(le.b)({events:ie.a,currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"MainPage",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MAINPAGE":return"MainPage";case"SHOW_EVENTDETAILS":return"EventDetails";case"SHOW_NEWEVENTFORM":return"NewEventForm";default:return e}},selectedEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_EVENT":var n=t.title,a=t.host,r=t.date,o=t.id,l=t.yes,c=t.maybe,i=t.no;return{title:n,host:a,date:r,id:o,yes:l,maybe:c,no:i};default:return e}},firestore:se.firestoreReducer}),de=n(134),Ee=(n(480),{apiKey:"AIzaSyBmAgmHo9rTU0BwaKnS7jm4kY1nKJgEToY",authDomain:"eventplanner2v2.firebaseapp.com",databaseURL:"https://eventplanner2v2.firebaseio.com",projectId:"eventplanner2v2",storageBucket:"eventplanner2v2.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/EventPlanner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBmAgmHo9rTU0BwaKnS7jm4kY1nKJgEToY",REACT_APP_FIREBASE_AUTH_DOMAIN:"eventplanner2v2.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://eventplanner2v2.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"eventplanner2v2",REACT_APP_FIREBASE_STORAGE_BUCKET:"eventplanner2v2.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"111622383791",REACT_APP_FIREBASE_APP_ID:"1:111622383791:web:fd7ed76e91d43f298e8c5a"}).REACT_APP_FIREBASE_SENDER_ID,appId:"1:111622383791:web:fd7ed76e91d43f298e8c5a"});de.initializeApp(Ee),de.firestore();var me=de,ve=(n(481),Object(le.c)(ue,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));ve.subscribe((function(){return console.log("Subscribe",ve.getState())}));var pe={firebase:me,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:ve.dispatch,createFirestoreInstance:se.createFirestoreInstance};l.a.render(r.a.createElement(m.a,{store:ve},r.a.createElement(v.ReactReduxFirebaseProvider,pe,r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[275,1,2]]]);
//# sourceMappingURL=main.7bee8b64.chunk.js.map