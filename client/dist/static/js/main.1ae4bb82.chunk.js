(this.webpackJsonpdiplom=this.webpackJsonpdiplom||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},70:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(30),i=c.n(n),r=(c(59),c(60),c(61),c(62),c(31)),l=c(28),o=c(24),j=c(1);function h(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)(r.a,{className:"head",expand:"lg",children:[Object(j.jsx)(r.a.Brand,{children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:"/img/Logo.png"})})}),Object(j.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsxs)(r.a.Collapse,{id:"basic-navbar-nav",children:[Object(j.jsxs)(l.a,{className:"mr-auto",children:[Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/complain",children:"New Complaint"})}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/about",children:"About us"})}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/profile",children:"My Profile"})}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/doctor",children:"Doctor List"})})]}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/login",children:"Login"})}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(o.b,{className:"link",to:"/signin",children:"Sign in"})})]})]})})}var d=c(3),b=c(23),x=c(21),O=c(8),m=c(12);function u(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsx)(b.a,{children:Object(j.jsxs)(x.a,{xl:"2",children:[Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-donald-faison.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Doctor 1"}),Object(j.jsx)(d.a.Text,{children:"Name: Christopher Turk"}),Object(j.jsx)(d.a.Text,{children:"Age:30"}),Object(j.jsx)(d.a.Text,{children:"Expirience:9"}),Object(j.jsx)(m.a,{variant:"primary",href:"1",children:"Read more"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://pbs.twimg.com/profile_images/1148519824055853057/Gu-a7LHu_400x400.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Doctor 2"}),Object(j.jsx)(d.a.Text,{children:"Name: Bob Kelso"}),Object(j.jsx)(d.a.Text,{children:"Age:65"}),Object(j.jsx)(d.a.Text,{children:"Expirience:30"}),Object(j.jsx)(m.a,{variant:"primary",href:"2",children:"Read more"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-sarah-chalke.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Doctor 3"}),Object(j.jsx)(d.a.Text,{children:"Name: Elliot Reid"}),Object(j.jsx)(d.a.Text,{children:"Age:34"}),Object(j.jsx)(d.a.Text,{children:"Expirience:9"}),Object(j.jsx)(m.a,{variant:"primary",href:"3",children:"Read more"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-judy-reyes.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Doctor 4"}),Object(j.jsx)(d.a.Text,{children:"Name: Carla Espinosa"}),Object(j.jsx)(d.a.Text,{children:"Age:37"}),Object(j.jsx)(d.a.Text,{children:"Expirience:12"}),Object(j.jsx)(m.a,{variant:"primary",href:"4",children:"Read more"})]})]})})]})})})]})}var p=c(29),g=c(13),f=c(14),v=c(16),y=c(15),T=(c(70),c(7)),w=c(18),k=c.n(w),C=function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={symptom:[]},s}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:3000/api/v1/symptom").then((function(t){console.log(t),e.setState({symptom:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.symptom;return Object(j.jsx)("div",{children:Object(j.jsx)("form",{children:e.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox"}),e.name]},e._id)}))})})}}]),c}(s.Component),N=function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(p.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t={headers:{Authorization:localStorage.getItem("Authorization")}};console.log(t),k.a.post("http://localhost:3000/api/v1/posts",s.state,t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},s.state={title:"",text:""},s}return Object(f.a)(c,[{key:"render",value:function(){var e=this.state,t=e.title,c=e.text;return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsx)("div",{className:"information",children:Object(j.jsxs)(T.a,{onSubmit:this.submitHandler,children:[Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(j.jsx)(T.a.Label,{children:"Title"}),Object(j.jsx)(T.a.Control,{name:"title",rows:1})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(j.jsx)(T.a.Label,{children:"Describe your complain"}),Object(j.jsx)(T.a.Control,{name:"text",rows:3})]}),Object(j.jsx)(C,{}),Object(j.jsx)(m.a,{variant:"primary",type:"submit",children:"Send"})]})})})]})}}]),c}(s.Component);c(89);function E(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsxs)(b.a,{children:[Object(j.jsxs)(x.a,{xl:"2",children:[Object(j.jsx)(O.a,{children:Object(j.jsx)(d.a,{className:"ccol",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Christopher Turk"}),Object(j.jsx)(d.a.Text,{children:Object(j.jsx)("a",{children:"Instagram"})}),Object(j.jsx)(d.a.Text,{children:"+380662354848"}),Object(j.jsx)(d.a.Text,{children:"doctorturk@gmail.com"})]})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(d.a,{className:"ccol",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Bob Kelso"}),Object(j.jsx)(d.a.Text,{children:Object(j.jsx)("a",{children:"Instagram"})}),Object(j.jsx)(d.a.Text,{children:"+380112459848"}),Object(j.jsx)(d.a.Text,{children:"doctorkelso@gmail.com"})]})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(d.a,{className:"ccol",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Elliot Reid"}),Object(j.jsx)(d.a.Text,{children:Object(j.jsx)("a",{children:"Instagram"})}),Object(j.jsx)(d.a.Text,{children:"+380442658898"}),Object(j.jsx)(d.a.Text,{children:"doctorreid@gmail.com"})]})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(d.a,{className:"ccol",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Carla Espinosa"}),Object(j.jsx)(d.a.Text,{children:Object(j.jsx)("a",{children:"Instagram"})}),Object(j.jsx)(d.a.Text,{children:"+380992655848"}),Object(j.jsx)(d.a.Text,{children:"doctorcarla@gmail.com"})]})})})]}),Object(j.jsxs)(x.a,{children:[Object(j.jsx)(d.a,{className:"ccol",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"About us"}),Object(j.jsx)(d.a.Text,{children:"The first clinic the London Dispensary, was founded in 1696 as a central means of dispensing medicines to the sick poor whom the physicians were treating in the patients\u2019 homes. The New York City, Philadelphia, and Boston dispensaries, founded in 1771, 1786, and 1796, respectively, had the same objective. Later, for the sake of convenience, physicians began to treat their free patients at the dispensary. The number of such clinics did not increase rapidly, and as late as 1890 only 132 were operating in the United States. The impetus for the mushroomlike growth that has occurred since that time came with the rapid growth of hospitals and also from the public health movement. Also we work with many clinics all around the globe to help people to take care of their health"})]})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(d.a,{className:"csup",children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Support"}),Object(j.jsx)(d.a.Text,{children:Object(j.jsx)("a",{children:"Instagram"})}),Object(j.jsx)(d.a.Text,{children:"+380992355848"}),Object(j.jsx)(d.a.Text,{children:"doctormail@gmail.com"})]})})})]})]})})]})}c(90);var L=c(54),F=c(43),B=function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={posts:[]},s}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:3000/api/v1/posts/user/"+localStorage.getItem("User")).then((function(t){console.log(t),e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return Object(j.jsxs)("div",{children:[e.map((function(e){return Object(j.jsx)("div",{children:e.text},e.id)})),Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u2116"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Title"})]})})]})}}]),c}(s.Component),Q=function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={user:[]},s}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:3000/api/v1/users/"+localStorage.getItem("User")).then((function(t){console.log(t),e.setState({user:t.data}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.user;return Object(j.jsx)("div",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:e.firstName})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Last name"}),Object(j.jsx)("td",{children:e.lastName})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Username"}),Object(j.jsx)("td",{children:e.userName})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"E-mail"}),Object(j.jsx)("td",{children:e.email})]})]})})}}]),c}(s.Component),U=function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(){return Object(g.a)(this,c),t.apply(this,arguments)}return Object(f.a)(c,[{key:"render",value:function(){var e="http://localhost:3000/api/v1/users/"+localStorage.getItem("User");return console.log(e),Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"boxing",children:[Object(j.jsxs)(b.a,{children:[Object(j.jsxs)(x.a,{xl:"4",children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("div",{className:"photo",children:Object(j.jsx)(L.a,{class:"img-fluid",src:"https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png",fluid:!0})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(F.a,{striped:!0,bordered:!0,hover:!0,children:Object(j.jsx)(Q,{})})})]}),Object(j.jsx)(x.a,{children:Object(j.jsx)(F.a,{striped:!0,bordered:!0,hover:!0,size:"sm"})})]}),Object(j.jsx)(B,{})]})]})}}]),c}(s.Component),S=(c(91),function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(p.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state),k.a.post("http://localhost:3000/api/v1/users/login",s.state).then((function(e){console.log(e),console.log(e.data.token),console.log(e.data._id),localStorage.setItem("User",e.data._id),localStorage.setItem("Authorization",e.data.token),window.location.replace("http://localhost:3000/")})).catch((function(e){console.log(e)}))},s.state={email:"",password:""},s}return Object(f.a)(c,[{key:"render",value:function(){var e=this.state,t=e.email,c=e.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsx)(b.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)(O.a,{children:Object(j.jsxs)(T.a,{onSubmit:this.submitHandler,children:[Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(j.jsx)(T.a.Label,{children:"E-mail"}),Object(j.jsx)(T.a.Control,{name:"email",placeholder:"Email"})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(j.jsx)(T.a.Label,{children:"Password"}),Object(j.jsx)(T.a.Control,{name:"password",placeholder:"Password"})]}),Object(j.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})})]})}}]),c}(s.Component)),D=(c(92),function(e){Object(v.a)(c,e);var t=Object(y.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).ChangeHandler=function(e){s.setState(Object(p.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state),k.a.post("http://localhost:3000/api/v1/users/signup",s.state).then((function(e){console.log(e),window.location.replace("http://localhost:3000/")})).catch((function(e){console.log(e)}))},s.state={email:"",password:"",firstName:"",lastName:"",userName:""},s}return Object(f.a)(c,[{key:"render",value:function(){var e=this.state,t=e.email,c=e.password,s=e.firstName,a=e.lastName,n=e.userName;return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsx)("div",{className:"format",children:Object(j.jsxs)(T.a,{onSubmit:this.submitHandler,children:[Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:t,children:[Object(j.jsx)(T.a.Label,{children:"Email"}),Object(j.jsx)(T.a.Control,{name:"email",placeholder:"Email"})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:c,children:[Object(j.jsx)(T.a.Label,{children:"Password"}),Object(j.jsx)(T.a.Control,{name:"password",placeholder:"Password"})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:s,children:[Object(j.jsx)(T.a.Label,{children:"Name"}),Object(j.jsx)(T.a.Control,{name:"firstName",placeholder:"Name"})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:a,children:[Object(j.jsx)(T.a.Label,{children:"Last name"}),Object(j.jsx)(T.a.Control,{name:"lastName",placeholder:"Last name"})]}),Object(j.jsxs)(T.a.Group,{onChange:this.ChangeHandler,value:n,children:[Object(j.jsx)(T.a.Label,{children:"Login"}),Object(j.jsx)(T.a.Control,{name:"userName",placeholder:"Login"})]}),Object(j.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})})]})}}]),c}(s.Component));c(93);function P(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossorigin:"anonymous"}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"boxing",children:Object(j.jsx)("div",{children:Object(j.jsx)(b.a,{fluid:"true",children:Object(j.jsxs)(x.a,{xl:"5",children:[Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{style:{width:"18rem"},children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"See our doctors"}),Object(j.jsx)(m.a,{variant:"primary",href:"doctor",children:"Go"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{style:{width:"18rem"},children:[Object(j.jsx)(d.a.Img,{class:"img-fluid  ",src:"https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/infectious-diseases/illustration-common-cold.ashx?h=360&la=en&mh=360&mw=520&w=360&hash=5DD284D4DE908BD6F9833600DFBDB619989FB956"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Make your first complain"}),Object(j.jsx)(m.a,{variant:"primary",href:"complain",children:"Go"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{style:{width:"18rem"},children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Check your profile"}),Object(j.jsx)(m.a,{variant:"primary",href:"profile",children:"Go"})]})]})}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(d.a,{style:{width:"18rem"},children:[Object(j.jsx)(d.a.Img,{class:"img-fluid",src:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fmayo-clinic_416x416.jpg"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Read about us"}),Object(j.jsx)(m.a,{variant:"primary",href:"about",children:"Go"})]})]})})]})})})})]})}var I=c(9);var R=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(I.c,{children:[Object(j.jsx)(I.a,{exact:!0,path:"/",component:P}),Object(j.jsx)(I.a,{path:"/complain",component:N}),Object(j.jsx)(I.a,{path:"/about",component:E}),Object(j.jsx)(I.a,{path:"/profile",component:U}),Object(j.jsx)(I.a,{path:"/doctor",component:u}),Object(j.jsx)(I.a,{path:"/login",component:S}),Object(j.jsx)(I.a,{path:"/signin",component:D})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),A()}},[[94,1,2]]]);
//# sourceMappingURL=main.1ae4bb82.chunk.js.map