(this.webpackJsonpbasicprojects=this.webpackJsonpbasicprojects||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),s=n.n(c),l=(n(14),n(4)),i=n(8),o=n(2),d=n(0);var r=function(e){var t=Object(a.useState)("Add A Task"),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(c),s("")},children:[Object(d.jsx)("h2",{className:"label-wrapper",children:Object(d.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What needs to be done?"})}),Object(d.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:c,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})};var b=function(e){return Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsxs)("span",{children:[e.name," "]}),Object(d.jsx)("span",{className:"visually-hidden",children:" tasks"})]})};function j(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),r=i[0],b=i[1];var j=Object(d.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,r),b(""),s(!1)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(d.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:r,onChange:function(e){b(e.target.value)}})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(d.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(d.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(d.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),u=Object(d.jsxs)("div",{className:"stack-small",children:[Object(d.jsxs)("div",{className:"c-cb",children:[Object(d.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(d.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},children:["Edit ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(d.jsx)("li",{className:"todo",children:c?j:u})}var u=n(9),m={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(m);var h=function(e){var t=Object(a.useState)(e.tasks),n=Object(o.a)(t,2),c=n[0],s=n[1],h=Object(a.useState)("All"),O=Object(o.a)(h,2),x=O[0],f=O[1];function v(e,t){var n=c.map((function(n){return e===n.id?Object(l.a)(Object(l.a)({},n),{},{name:t}):n}));s(n)}function g(e){var t=c.map((function(t){return e===t.id?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));s(t)}function N(e){var t=c.filter((function(t){return e!==t.id}));s(t)}var k=c.filter(m[x]).map((function(e){return Object(d.jsx)(j,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:g,deleteTask:N,editTask:v},e.id)})),y=p.map((function(e){return Object(d.jsx)(b,{name:e,isPressed:e===x,setFilter:f},e)})),C="".concat(k.length," tasks remaining");return Object(d.jsxs)("div",{className:"todoapp stack-large",children:[Object(d.jsx)("h1",{children:"To Do List"}),Object(d.jsx)(r,{onSubmit:function(e){var t={id:"todo-"+Object(u.a)(),name:e,completed:!1};s([].concat(Object(i.a)(c),[t]))}}),Object(d.jsx)("div",{className:"filters btn-group stack-exception",children:y}),Object(d.jsx)("h2",{id:"list-heading",children:C}),Object(d.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:Object(d.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:k})})]})};s.a.render(Object(d.jsx)(h,{tasks:[{id:"todo-0",name:"To-Do List",completed:!0},{id:"todo-1",name:"Portfolio Page",completed:!1},{id:"todo-2",name:"Weather Forecast App",completed:!1},{id:"todo-3",name:"Valorant Tactical Maps",completed:!1},{id:"todo-4",name:"Frontend/Backend",completed:!1}]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.49a19734.chunk.js.map