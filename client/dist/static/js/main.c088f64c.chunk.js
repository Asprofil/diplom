(this.webpackJsonpdiplom=this.webpackJsonpdiplom||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(30),r=c.n(n),i=(c(59),c(60),c(61),c(11)),l=c(12),o=c(14),j=c(13),d=(c(62),c(31)),h=c(28),b=c(24),x=c(17),O=c.n(x),m=c(0),u=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={user:[]},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:3000/api/v1/users/"+localStorage.getItem("User")).then((function(t){console.log(t),e.setState({user:t.data}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.user;return Object(m.jsx)("div",{className:"header",children:Object(m.jsxs)(d.a,{className:"head",expand:"lg",children:[Object(m.jsx)(d.a.Brand,{children:Object(m.jsx)(b.b,{to:"/",children:Object(m.jsx)("img",{src:"/img/Logo.png"})})}),Object(m.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(h.a,{className:"mr-auto",children:[Object(m.jsx)(h.a.Link,{children:Object(m.jsx)(b.b,{className:"link",to:"/complain",children:"New Complaint"})}),Object(m.jsx)(h.a.Link,{children:Object(m.jsx)(b.b,{className:"link",to:"/about",children:"About us"})}),Object(m.jsx)(h.a.Link,{children:Object(m.jsx)(b.b,{className:"link",to:"/profile",children:"My Profile"})}),Object(m.jsx)(h.a.Link,{children:Object(m.jsx)(b.b,{className:"link",to:"/doctor",children:"Doctor List"})})]}),localStorage.getItem("User")?Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"link",children:e.userName})}),Object(m.jsx)("div",{children:Object(m.jsxs)(h.a.Link,{className:"link",children:[localStorage.removeItem("User"),"Log out"]})})]}):Object(m.jsxs)(h.a.Link,{children:[Object(m.jsx)(b.b,{className:"link",to:"/login",children:"Login"}),Object(m.jsx)(b.b,{className:"link",to:"/signin",children:"Sign in"})]})]})]})})}}]),c}(s.Component),p=c(3),g=c(23),f=c(21),v=c(8),y=c(16);function T(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsx)(g.a,{children:Object(m.jsxs)(f.a,{xl:"2",children:[Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-donald-faison.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Doctor 1"}),Object(m.jsx)(p.a.Text,{children:"Name: Christopher Turk"}),Object(m.jsx)(p.a.Text,{children:"Age:30"}),Object(m.jsx)(p.a.Text,{children:"Expirience:9"}),Object(m.jsx)(y.a,{variant:"primary",href:"1",children:"Read more"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://pbs.twimg.com/profile_images/1148519824055853057/Gu-a7LHu_400x400.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Doctor 2"}),Object(m.jsx)(p.a.Text,{children:"Name: Bob Kelso"}),Object(m.jsx)(p.a.Text,{children:"Age:65"}),Object(m.jsx)(p.a.Text,{children:"Expirience:30"}),Object(m.jsx)(y.a,{variant:"primary",href:"2",children:"Read more"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-sarah-chalke.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Doctor 3"}),Object(m.jsx)(p.a.Text,{children:"Name: Elliot Reid"}),Object(m.jsx)(p.a.Text,{children:"Age:34"}),Object(m.jsx)(p.a.Text,{children:"Expirience:9"}),Object(m.jsx)(y.a,{variant:"primary",href:"3",children:"Read more"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-judy-reyes.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Doctor 4"}),Object(m.jsx)(p.a.Text,{children:"Name: Carla Espinosa"}),Object(m.jsx)(p.a.Text,{children:"Age:37"}),Object(m.jsx)(p.a.Text,{children:"Expirience:12"}),Object(m.jsx)(y.a,{variant:"primary",href:"4",children:"Read more"})]})]})})]})})})]})}var k=c(29),w=(c(88),c(7)),C=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={symptom:[]},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:3000/api/v1/symptom").then((function(t){console.log(t),e.setState({symptom:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.symptom;return Object(m.jsx)("div",{children:Object(m.jsx)("form",{children:e.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox"}),e.name]},e._id)}))})})}}]),c}(s.Component),N=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(k.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t={headers:{Authorization:localStorage.getItem("Authorization")}};console.log(t),O.a.post("http://localhost:3000/api/v1/posts",s.state,t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},s.state={title:"",text:""},s}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.title,c=e.text;return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsx)("div",{className:"information",children:Object(m.jsxs)(w.a,{onSubmit:this.submitHandler,children:[Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(m.jsx)(w.a.Label,{children:"Title"}),Object(m.jsx)(w.a.Control,{name:"title",rows:1})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(m.jsx)(w.a.Label,{children:"Describe your complain"}),Object(m.jsx)(w.a.Control,{as:"textarea",name:"text",rows:3})]}),Object(m.jsx)(C,{}),Object(m.jsx)(y.a,{variant:"primary",type:"submit",children:"Send"})]})})})]})}}]),c}(s.Component);c(89);function E(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(f.a,{xl:"2",children:[Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{className:"ccol",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Christopher Turk"}),Object(m.jsx)(p.a.Text,{children:Object(m.jsx)("a",{children:"Instagram"})}),Object(m.jsx)(p.a.Text,{children:"+380662354848"}),Object(m.jsx)(p.a.Text,{children:"doctorturk@gmail.com"})]})})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{className:"ccol",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Bob Kelso"}),Object(m.jsx)(p.a.Text,{children:Object(m.jsx)("a",{children:"Instagram"})}),Object(m.jsx)(p.a.Text,{children:"+380112459848"}),Object(m.jsx)(p.a.Text,{children:"doctorkelso@gmail.com"})]})})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{className:"ccol",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Elliot Reid"}),Object(m.jsx)(p.a.Text,{children:Object(m.jsx)("a",{children:"Instagram"})}),Object(m.jsx)(p.a.Text,{children:"+380442658898"}),Object(m.jsx)(p.a.Text,{children:"doctorreid@gmail.com"})]})})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{className:"ccol",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Carla Espinosa"}),Object(m.jsx)(p.a.Text,{children:Object(m.jsx)("a",{children:"Instagram"})}),Object(m.jsx)(p.a.Text,{children:"+380992655848"}),Object(m.jsx)(p.a.Text,{children:"doctorcarla@gmail.com"})]})})})]}),Object(m.jsxs)(f.a,{children:[Object(m.jsx)(p.a,{className:"ccol",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"About us"}),Object(m.jsx)(p.a.Text,{children:"The first clinic the London Dispensary, was founded in 1696 as a central means of dispensing medicines to the sick poor whom the physicians were treating in the patients\u2019 homes. The New York City, Philadelphia, and Boston dispensaries, founded in 1771, 1786, and 1796, respectively, had the same objective. Later, for the sake of convenience, physicians began to treat their free patients at the dispensary. The number of such clinics did not increase rapidly, and as late as 1890 only 132 were operating in the United States. The impetus for the mushroomlike growth that has occurred since that time came with the rapid growth of hospitals and also from the public health movement. Also we work with many clinics all around the globe to help people to take care of their health"})]})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{className:"csup",children:Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Support"}),Object(m.jsx)(p.a.Text,{children:Object(m.jsx)("a",{children:"Instagram"})}),Object(m.jsx)(p.a.Text,{children:"+380992355848"}),Object(m.jsx)(p.a.Text,{children:"doctormail@gmail.com"})]})})})]})]})})]})}c(90);var L=c(54),F=c(43),B=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={posts:[]},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:3000/api/v1/posts/user/"+localStorage.getItem("User")).then((function(t){console.log(t),e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return Object(m.jsxs)("div",{className:"postt",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"posts",children:"Date"}),Object(m.jsx)("th",{className:"posts",children:"Title"}),Object(m.jsx)("th",{className:"posts",children:"Text"})]})}),Object(m.jsx)("tbody",{children:e.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[e.createdAt[0],e.createdAt[1],e.createdAt[2],e.createdAt[3],e.createdAt[4],e.createdAt[5],e.createdAt[6],e.createdAt[7],e.createdAt[8],e.createdAt[9]]}),Object(m.jsx)("td",{children:e.title}),Object(m.jsx)("td",{children:e.text})]})}))})]})}}]),c}(s.Component),A=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={user:[]},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:3000/api/v1/users/"+localStorage.getItem("User")).then((function(t){console.log(t),e.setState({user:t.data}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.user;return Object(m.jsx)("div",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Name"}),Object(m.jsx)("td",{children:e.firstName})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Last name"}),Object(m.jsx)("td",{children:e.lastName})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Username"}),Object(m.jsx)("td",{children:e.userName})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"E-mail"}),Object(m.jsx)("td",{children:e.email})]})]})})}}]),c}(s.Component),U=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e="http://localhost:3000/api/v1/users/"+localStorage.getItem("User");return console.log(e),Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(f.a,{sm:"2",children:[Object(m.jsx)(v.a,{children:Object(m.jsx)("div",{className:"photo",children:Object(m.jsx)(L.a,{class:"img-fluid",src:"https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png",fluid:!0})})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(F.a,{striped:!0,bordered:!0,hover:!0,children:Object(m.jsx)(A,{})})})]}),Object(m.jsx)(f.a,{children:Object(m.jsx)(F.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:Object(m.jsx)(B,{className:"posts"})})})]})})]})}}]),c}(s.Component),Q=(c(91),function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(k.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state),O.a.post("http://localhost:3000/api/v1/users/login",s.state).then((function(e){console.log(e),console.log(e.data.token),console.log(e.data._id),localStorage.setItem("User",e.data._id),localStorage.setItem("Authorization",e.data.token),window.location.replace("http://localhost:3000/")})).catch((function(e){console.log(e)}))},s.state={email:"",password:""},s}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.email,c=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsx)(g.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsxs)(w.a,{onSubmit:this.submitHandler,children:[Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(m.jsx)(w.a.Label,{children:"E-mail"}),Object(m.jsx)(w.a.Control,{name:"email",placeholder:"Email"})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,{name:"password",placeholder:"Password"})]}),Object(m.jsx)(y.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})})]})}}]),c}(s.Component)),S=(c(92),function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(k.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state),O.a.post("http://localhost:3000/api/v1/users/signup",s.state).then((function(e){console.log(e),window.location.replace("http://localhost:3000/")})).catch((function(e){console.log(e)}))},s.state={email:"",password:"",firstName:"",lastName:"",userName:""},s}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.email,c=e.password,s=e.firstName,a=e.lastName,n=e.userName;return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsx)("div",{className:"format",children:Object(m.jsxs)(w.a,{onSubmit:this.submitHandler,children:[Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(m.jsx)(w.a.Label,{children:"Email"}),Object(m.jsx)(w.a.Control,{name:"email",placeholder:"Email"})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,{name:"password",placeholder:"Password"})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:s,children:[Object(m.jsx)(w.a.Label,{children:"Name"}),Object(m.jsx)(w.a.Control,{name:"firstName",placeholder:"Name"})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:a,children:[Object(m.jsx)(w.a.Label,{children:"Last name"}),Object(m.jsx)(w.a.Control,{name:"lastName",placeholder:"Last name"})]}),Object(m.jsxs)(w.a.Group,{onChange:this.ChangeHandler,value:n,children:[Object(m.jsx)(w.a.Label,{children:"Login"}),Object(m.jsx)(w.a.Control,{name:"userName",placeholder:"Login"})]}),Object(m.jsx)(y.a,{variant:"primary",type:"submit",children:"Submit"})]})})})]})}}]),c}(s.Component));c(93);function I(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(m.jsx)(u,{}),Object(m.jsx)("div",{className:"boxing",children:Object(m.jsx)("div",{children:Object(m.jsx)(g.a,{fluid:"true",children:Object(m.jsxs)(f.a,{xl:"5",children:[Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{style:{width:"18rem"},children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"See our doctors"}),Object(m.jsx)(y.a,{variant:"primary",href:"doctor",children:"Go"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{style:{width:"18rem"},children:[Object(m.jsx)(p.a.Img,{class:"img-fluid  ",src:"https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/infectious-diseases/illustration-common-cold.ashx?h=360&la=en&mh=360&mw=520&w=360&hash=5DD284D4DE908BD6F9833600DFBDB619989FB956"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Make your first complain"}),Object(m.jsx)(y.a,{variant:"primary",href:"complain",children:"Go"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{style:{width:"18rem"},children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Check your profile"}),Object(m.jsx)(y.a,{variant:"primary",href:"profile",children:"Go"})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsxs)(p.a,{style:{width:"18rem"},children:[Object(m.jsx)(p.a.Img,{class:"img-fluid",src:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fmayo-clinic_416x416.jpg"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{children:"Read about us"}),Object(m.jsx)(y.a,{variant:"primary",href:"about",children:"Go"})]})]})})]})})})})]})}var D=c(9);var P=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(D.c,{children:[Object(m.jsx)(D.a,{exact:!0,path:"/",component:I}),Object(m.jsx)(D.a,{path:"/complain",component:N}),Object(m.jsx)(D.a,{path:"/about",component:E}),Object(m.jsx)(D.a,{path:"/profile",component:U}),Object(m.jsx)(D.a,{path:"/doctor",component:T}),Object(m.jsx)(D.a,{path:"/login",component:Q}),Object(m.jsx)(D.a,{path:"/signin",component:S})]})})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),R()}},[[94,1,2]]]);
//# sourceMappingURL=main.c088f64c.chunk.js.map