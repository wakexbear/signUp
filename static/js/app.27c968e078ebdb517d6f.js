webpackJsonp([1],{"+E9z":function(t,e){},"+skl":function(t,e){},"1/tN":function(t,e){},"1xs+":function(t,e){},LAlP:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),n=i.n(a),s=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"app"},r,!1,function(t){i("NtSe")},null,null).exports,l=i("/ocq"),c=i("mw3O"),u=i.n(c),d={data:function(){return{isLoading:!1,username:"",form:{Username:"",Password:""}}},methods:{login:function(){var t=this;console.log(this.form),function(t){for(var e in t)if(!t[e]&&0!==t[e])return!1;return!0}(this.form)?(this.isLoading=!0,this.$http.post("/api/admin/login",u.a.stringify(this.form)).then(function(e){t.isLoading=!1;var i=e.data;t.form.captcha_code="",10301===i.status?t.$Message.error("验证码错误，请重新填写"):10001===i.status?t.$Message.error("账号或密码错误"):1e4===i.status?(t.$Message.success("登录成功"),t.$router.push({path:"/admin/main/activity"})):t.$Message.error("登录错误，请稍候再试")}).catch(function(){t.isLoading=!1,t.$Message.error("通讯失败，请重试")})):this.$Message.error("内容填写不完整")}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"log"}},[i("div",{staticClass:"login"},[i("div",{staticClass:"header"},[t._v("\n      报名系统管理后台\n    ")]),t._v(" "),i("div",{staticClass:"form"},[i("Input",{staticClass:"username",staticStyle:{width:"300px"},attrs:{icon:"ios-person-outline",placeholder:"请输入账号",size:"large"},model:{value:t.form.Username,callback:function(e){t.$set(t.form,"Username",e)},expression:"form.Username"}}),t._v(" "),i("Input",{staticClass:"password",staticStyle:{width:"300px"},attrs:{icon:"ios-locked-outline",type:"password",placeholder:"请输入密码",size:"large"},model:{value:t.form.Password,callback:function(e){t.$set(t.form,"Password",e)},expression:"form.Password"}})],1),t._v(" "),i("div",{staticClass:"button"},[i("Button",{staticStyle:{width:"300px",height:"50px","font-size":"16px"},attrs:{type:"primary",loading:t.isLoading},on:{click:t.login}},[t._v("登录\n      ")])],1)])])},staticRenderFns:[]};var h=i("VU/8")(d,m,!1,function(t){i("+E9z")},null,null).exports,p={data:function(){return{active:"1",nav:{1:{path:"/admin/main/activity",title:"活动管理"},2:{path:"/admin/main/user",title:"用户管理"},3:{path:"/admin/main/audit",title:"活动审核"}}}},methods:{menuSelect:function(t){this.$router.push({path:this.nav[""+t].path}),document.title=this.nav[""+t].title},logout:function(){var t=this;this.$http.post("/api/admin/logout").then(function(e){1e4===e.data.status?(t.$Message.success("退出成功"),t.$router.push({path:"/admin"})):t.$Message.error("退出失败，请重试")}).catch(function(){t.$Message.error("通讯失败，请重试")})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{staticClass:"main-layout"},[i("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":"1"}},[i("div",{staticClass:"main-layout-logo"},[i("img",{attrs:{src:"/static/images/logo.png",width:"160px"}})]),t._v(" "),i("div",{staticClass:"main-layout-nav"}),t._v(" "),i("div",{staticClass:"main-layout-signOut"},[i("Button",{attrs:{type:"primary"},on:{click:t.logout}},[t._v("退出登录")])],1)]),t._v(" "),i("div",{staticClass:"main-layout-content"},[i("Row",[i("i-Col",{attrs:{span:"4"}},[i("Menu",{attrs:{"active-name":"active","open-names":["1","2"],width:"auto"},on:{"on-select":t.menuSelect}},[i("Submenu",{attrs:{name:"1"}},[i("MenuItem",{attrs:{name:"1"}},[t._v("活动管理")]),t._v(" "),i("MenuItem",{attrs:{name:"2"}},[t._v("用户管理")]),t._v(" "),i("MenuItem",{attrs:{name:"3"}},[t._v("活动审核")])],1)],1)],1),t._v(" "),i("i-col",{attrs:{span:"20"}},[i("div",{staticClass:"main-layout-content-main"},[i("router-view")],1)])],1)],1),t._v(" "),i("div",{staticClass:"main-layout-copy"},[t._v("\n      2018 © 熊俊祥\n    ")])],1)])},staticRenderFns:[]};var f=i("VU/8")(p,v,!1,function(t){i("TDey")},null,null).exports,g={data:function(){return{showModal:!1,modalTitle:"",item:{id:"",title:"",introduction:"",startTime:"",endTime:"",imgUrl:""},imgList:[],professions:[]}},methods:{clearItem:function(){this.item.id="",this.item.title="",this.item.introduction="",this.item.startTime="",this.item.endTime="",this.item.imgUrl="",this.imgList=[]},show:function(){this.modalTitle="新增活动",this.clearItem(),this.showModal=!0},showDetail:function(t){this.item.id=t.ID,this.item.name=t.Name,this.item.signature=t.Signature,this.item.image_url=t.ImageUrl,this.item.category_id=t.CategoryID,this.addPlayer=!0,this.showImg=!0},handleSuccess:function(t){1e4===t.status?(this.imgList.push(t.filepath),this.$Message.success("上传成功")):this.$Message.error("上传失败,请重试")},handleErr:function(){this.$Message.error("通讯错误，请重试")},beforeUpload:function(){},handleFormatError:function(){this.$Message.error("文件格式不正确,请上传 jpg 或 png 格式的图片")},submit:function(){var t=this;this.item.imgUrl="",this.item.title&&this.item.introduction&&this.item.startTime&&this.imgList?(this.imgList.forEach(function(e){t.item.imgUrl+=e+","}),this.item.imgUrl=this.item.imgUrl.substring(0,this.item.imgUrl.length-1),this.$http.post("/api/admin/activity/save",u.a.stringify(this.item)).then(function(e){1e4===e.data.status?(t.$Message.success("操作成功"),t.$loadingHide()):(t.$loadingHide(),t.$Message.error("获取失败，请重试")),t.$emit("refresh"),t.showModal=!1,t.clearItem()}).catch(function(e){console.log(e),t.$emit("refresh"),t.showModal=!1,t.clearItem(),t.$loadingHide(),t.$Message.error("通讯失败，请重试")})):this.$Message.error("内容填写不完整")},handleDateChange:function(t){this.item.startTime=t[0]+" 00:00:00",this.item.endTime=t[1]+" 00:00:00"},handleDateClear:function(){this.item.startTime="",this.item.endTime=""}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{staticStyle:{"text-align":"center"},attrs:{footerHide:!0,title:t.modalTitle,width:"700px"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("Form",{attrs:{model:t.item,"label-width":80}},[i("FormItem",{attrs:{label:"活动名称"}},[i("Input",{attrs:{type:"text",placeholder:"请输入活动名称"},model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}})],1),t._v(" "),i("FormItem",{attrs:{label:"活动简介"}},[i("Input",{attrs:{rows:4,type:"textarea",placeholder:"请输入活动简介"},model:{value:t.item.introduction,callback:function(e){t.$set(t.item,"introduction",e)},expression:"item.introduction"}})],1),t._v(" "),i("FormItem",{staticStyle:{"text-align":"left !important"},attrs:{label:"活动日期"}},[i("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placement:"right-start",placeholder:"请选择活动日期"},on:{"on-change":t.handleDateChange,"on-clear":t.handleDateClear}})],1),t._v(" "),i("Form-item",{attrs:{label:"活动图片"}},[i("Row",[i("Col",{attrs:{span:"3"}},[i("Upload",{attrs:{action:"/api/admin/file/upload","show-upload-list":!1,"on-success":t.handleSuccess,"on-error":t.handleErr,"before-upload":t.beforeUpload,"on-format-error":t.handleFormatError,format:["jpg","jpeg","png"]}},[i("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传")]),t._v(" "),i("div",{staticStyle:{"line-height":"20px","margin-top":"5px"}},[t._v("（请上传小于500kb的图片）")])],1)],1),t._v(" "),i("Col",{staticStyle:{"margin-left":"50px"},attrs:{span:"6"}},[i("div",{staticClass:"image-upload"},t._l(t.imgList,function(t){return i("div",[i("img",{staticStyle:{"max-height":"240px"},attrs:{src:t}})])}))])],1)],1),t._v(" "),i("Button",{staticStyle:{width:"120px","margin-bottom":"24px"},attrs:{type:"primary"},on:{click:function(e){t.submit()}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var _={components:{edit:i("VU/8")(g,y,!1,function(t){i("PlqS")},"data-v-6f461ac7",null).exports},data:function(){var t=this;return{columns:[{title:"ID",key:"ID"},{title:"活动名称",key:"Title"},{title:"创建时间",key:"CreatedTime"},{title:"活动日期",render:function(t,e){return t("span",e.row.StartTime+e.row.EndTime)}},{title:"操作",width:200,render:function(e,i){return e("div",[e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.$refs.edit.show(i.row)}}},"编辑"),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.removeShow(i.row.ID)}}},"删除")])}}],data:[],count:0,query:{page:1,per:10},removeWrapper:!1,removeID:0}},created:function(){this.reList()},methods:{getList:function(){var t=this;this.$http.post("/api/admin/activity/list",u.a.stringify(this.query)).then(function(e){t.data=e.data.activity,t.count=e.data.count,t.query.page=e.data.page,t.query.per=e.data.per,t.$loadingHide()}).catch(function(){t.$loadingHide(),t.$Message.error("通讯失败，请重试")})},reList:function(){this.$loading(),this.query.page=1,this.query.per=10,this.getList()},pageChange:function(t){this.$loading(),this.query.page=t,this.getList()},removeShow:function(t){this.removeWrapper=!0,this.removeID=t},remove:function(){var t=this;this.$loading(),this.$http.post("/api/admin/activity/delete?ID="+this.removeID).then(function(e){1e4===e.data.status?(t.getList(),t.removeWrapper=!1,t.removeID=0,t.$Message.success("删除成功")):(t.$loadingHide(),t.$Message.error("提交失败，请重试"),t.reList())}).catch(function(){t.$loadingHide(),t.removeWrapper=!1,t.$Message.error("通讯失败，请重试"),t.reList()})}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Table",{attrs:{stripe:"",columns:t.columns,data:t.data}}),t._v(" "),i("div",{staticClass:"add"},[i("Button",{attrs:{type:"info",icon:"plus"},on:{click:function(e){t.$refs.edit.show()}}},[t._v("新增活动")])],1),t._v(" "),i("div",{staticClass:"pagesWrapper"},[i("Page",{attrs:{total:t.count,"show-total":"",current:t.query.page},on:{"on-change":t.pageChange}})],1),t._v(" "),i("Modal",{staticStyle:{"text-align":"center"},attrs:{footerHide:!0,title:"删除活动"},model:{value:t.removeWrapper,callback:function(e){t.removeWrapper=e},expression:"removeWrapper"}},[i("div",{staticStyle:{"font-size":"15px"}},[t._v("\n      确认删除此活动？\n    ")]),t._v(" "),i("Button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:t.remove}},[t._v("确定")])],1),t._v(" "),i("edit",{ref:"edit",on:{refresh:function(e){t.reList()}}})],1)},staticRenderFns:[]};var w=i("VU/8")(_,$,!1,function(t){i("WUbW")},"data-v-ad51b852",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  123123\n")])},staticRenderFns:[]};var M=i("VU/8")({data:function(){return{}},methods:{}},x,!1,function(t){i("LAlP")},"data-v-0abefc60",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  123123\n")])},staticRenderFns:[]};var C=i("VU/8")({data:function(){return{}},methods:{}},b,!1,function(t){i("1xs+")},"data-v-791159b0",null).exports;s.default.use(l.a);var I=new l.a({mode:"history",routes:[{path:"/admin",name:"login",component:h},{path:"/admin/main",name:"main",component:f,children:[{path:"/admin/main/activity",component:w},{path:"/admin/main/user",component:M},{path:"/admin/main/audit",component:C}]}]}),S=i("BTaQ"),U=i.n(S),k=(i("+skl"),i("mtWM")),T=i.n(k),L=i("Rf8U"),D=i.n(L),E={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},hide:function(){console.log("close"),this.visible=!1}}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"loadingWrapper"},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mikepad-loading"},[e("div",{staticClass:"binding"}),this._v(" "),e("div",{staticClass:"pad"},[e("div",{staticClass:"line line1"}),this._v(" "),e("div",{staticClass:"line line2"}),this._v(" "),e("div",{staticClass:"line line3"})]),this._v(" "),e("div",{staticClass:"text"},[this._v("\n      加载中...\n    ")])])}]};var W=i("VU/8")(E,F,!1,function(t){i("1/tN")},null,null).exports,q={install:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=t.extend(W),i=null;t.loading=t.prototype.$loading=function(){return new n.a(function(t){i||((i=new e).$mount(),document.querySelector("body").appendChild(i.$el)),i.show(),t()})},t.loading=t.prototype.$loadingHide=function(){return new n.a(function(t){i.hide(),t()})}}};s.default.use(U.a),s.default.use(D.a,T.a),s.default.config.productionTip=!1,s.default.use(q,{container:".app"}),T.a.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 403:self.deployTimeOutId=setTimeout(function(){I.replace({path:"/admin"})},1e3)}return n.a.reject(t.response.data)}),new s.default({el:"#app",router:I,components:{App:o},template:"<App/>"})},NtSe:function(t,e){},PlqS:function(t,e){},TDey:function(t,e){},WUbW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.27c968e078ebdb517d6f.js.map