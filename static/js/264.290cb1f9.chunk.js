"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{264:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(9434),a="ContactForm_form__dhl+T",c="ContactForm_formButton__TN6Jq",o=function(e){return e.contactsStore.contacts.items},s=function(e){return e.contactsStore.filter},i=function(e){return e.contactsStore.contacts.isLoading},u=function(e){return e.contactsStore.contacts.error},l=n(3329),m=function(e){var t=e.addNewContact,n=(0,r.v9)(o);return(0,l.jsxs)("form",{className:a,onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.name.value,r=e.currentTarget.elements.phone.value;t({name:n,phone:r}),e.currentTarget.reset()},children:[(0,l.jsxs)("label",{htmlFor:"",children:[(0,l.jsx)("p",{children:"Name"}),(0,l.jsx)("input",{type:"text",name:"name",value:n.name,required:!0})]}),(0,l.jsxs)("label",{htmlFor:"",children:[(0,l.jsx)("p",{children:"Number"}),(0,l.jsx)("input",{type:"tel",name:"phone",value:n.phone,required:!0})]}),(0,l.jsx)("button",{className:c,type:"submit",children:"Add contact"})]})},d="ContactItem_buttonDelete__icmIc",h=function(e){var t=e.id,n=e.name,r=e.phone,a=e.onDeleteContact;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("span",{children:[n,":"]}),(0,l.jsxs)("span",{children:[" ",r]}),(0,l.jsx)("button",{className:d,type:"button",onClick:function(){return a(t)},children:"Delete"})]},t)},f="ContactList_list__csErn",x=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,l.jsx)("ul",{className:f,children:t.map((function(e){var t=e.id,r=e.name,a=e.phone;return(0,l.jsx)(h,{id:t,name:r,phone:a,onDeleteContact:n},t)}))})},v=n(2791),p="Filter_filter__vxThR",j=function(e){var t=e.value,n=e.handleFilterContacts;return(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("p",{children:"Find contacts by name"}),(0,l.jsx)("input",{value:t,type:"text",onChange:function(e){return n(e.target.value)}})]})},C=n(8959),_=n(2067),b=n(1686),N=function(e){var t=e.message;return(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:b.Notify.failure(t)})})},y=function(){var e=(0,r.I0)();(0,v.useEffect)((function(){e((0,C.yF)())}),[e]);var t=(0,r.v9)(o),n=(0,r.v9)(s),a=(0,r.v9)(i),c=(0,r.v9)(u);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(m,{addNewContact:function(n){t.some((function(e){return e.name===n.name}))?alert("".concat(n.name," is already in contacts")):e((0,C.uK)(n))}}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(j,{value:n,handleFilterContacts:function(t){e((0,C.xO)(t))}}),a&&!c&&(0,l.jsx)(_.Z,{}),c&&(0,l.jsx)(N,{message:c}),(0,l.jsx)(x,{contacts:function(){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(t){e((0,C.GK)(t))}})]})}}}]);
//# sourceMappingURL=264.290cb1f9.chunk.js.map