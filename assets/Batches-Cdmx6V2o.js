import{B as e,F as t,H as n,I as r,K as i,L as a,M as o,N as s,P as c,R as l,S as u,U as d,V as f,b as p,g as m,j as h,n as g,s as _,u as v,y,z as b}from"./firebase-BMmhno40.js";import{c as x}from"./index-S8OKmeE9.js";import{t as S}from"./dateFormat-Dd9Ct2cG.js";import{t as C}from"./AdminLayout-AfPn0RFH.js";var w=i(d(),1),T=n();function E({isOpen:e,onClose:t,batch:n,onSave:r}){let[i,a]=(0,w.useState)({startDate:``,maxStudents:5,isCompleted:!1});return(0,w.useEffect)(()=>{n&&a({startDate:n.startDate||``,maxStudents:n.maxStudents||5,isCompleted:n.isCompleted||!1})},[n]),!e||!n?null:(0,T.jsx)(`div`,{className:`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4`,children:(0,T.jsxs)(`div`,{className:`bg-white rounded-3xl w-full max-w-lg p-8`,children:[(0,T.jsxs)(`div`,{className:`flex justify-between items-center mb-6`,children:[(0,T.jsx)(`h2`,{className:`text-2xl font-bold`,children:`Edit Batch`}),(0,T.jsx)(`button`,{onClick:t,className:`text-2xl`,children:`✕`})]}),(0,T.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(n.id,i)},className:`space-y-5`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`block mb-2 font-medium`,children:`Start Date`}),(0,T.jsx)(`input`,{type:`date`,value:i.startDate,onChange:e=>a({...i,startDate:e.target.value}),min:`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,`0`)}-${String(new Date().getDate()).padStart(2,`0`)}`,className:`w-full border rounded-xl p-4`,required:!0})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`block mb-2 font-medium`,children:`Maximum Students`}),(0,T.jsx)(`input`,{type:`number`,min:`1`,value:i.maxStudents,onChange:e=>a({...i,maxStudents:Number(e.target.value)}),className:`w-full border rounded-xl p-4`,required:!0})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,T.jsx)(`input`,{type:`checkbox`,checked:i.isCompleted,onChange:e=>a({...i,isCompleted:e.target.checked})}),(0,T.jsx)(`label`,{children:`Mark Batch Completed`})]}),(0,T.jsx)(`button`,{type:`submit`,className:`
                        w-full
                        bg-[#273B09]
                        text-white
                        py-4
                        rounded-xl
                        font-semibold
                        `,children:`Update Batch`})]})]})})}var D=`type.googleapis.com/google.protobuf.Int64Value`,O=`type.googleapis.com/google.protobuf.UInt64Value`;function k(e,t){let n={};for(let r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function A(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e==`number`&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)===`[object String]`)return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>A(e));if(typeof e==`function`||typeof e==`object`)return k(e,e=>A(e));throw Error(`Data cannot be encoded in JSON: `+e)}function j(e){if(e==null)return e;if(e[`@type`])switch(e[`@type`]){case D:case O:{let t=Number(e.value);if(isNaN(t))throw Error(`Data cannot be decoded from JSON: `+e);return t}default:throw Error(`Data cannot be decoded from JSON: `+e)}return Array.isArray(e)?e.map(e=>j(e)):typeof e==`function`||typeof e==`object`?k(e,e=>j(e)):e}var M=`functions`,N={OK:`ok`,CANCELLED:`cancelled`,UNKNOWN:`unknown`,INVALID_ARGUMENT:`invalid-argument`,DEADLINE_EXCEEDED:`deadline-exceeded`,NOT_FOUND:`not-found`,ALREADY_EXISTS:`already-exists`,PERMISSION_DENIED:`permission-denied`,UNAUTHENTICATED:`unauthenticated`,RESOURCE_EXHAUSTED:`resource-exhausted`,FAILED_PRECONDITION:`failed-precondition`,ABORTED:`aborted`,OUT_OF_RANGE:`out-of-range`,UNIMPLEMENTED:`unimplemented`,INTERNAL:`internal`,UNAVAILABLE:`unavailable`,DATA_LOSS:`data-loss`},P=class e extends a{constructor(t,n,r){super(`${M}/${t}`,n||``),this.details=r,Object.setPrototypeOf(this,e.prototype)}};function F(e){if(e>=200&&e<300)return`ok`;switch(e){case 0:return`internal`;case 400:return`invalid-argument`;case 401:return`unauthenticated`;case 403:return`permission-denied`;case 404:return`not-found`;case 409:return`aborted`;case 429:return`resource-exhausted`;case 499:return`cancelled`;case 500:return`internal`;case 501:return`unimplemented`;case 503:return`unavailable`;case 504:return`deadline-exceeded`}return`unknown`}function I(e,t){let n=F(e),r=n,i;try{let e=t&&t.error;if(e){let t=e.status;if(typeof t==`string`){if(!N[t])return new P(`internal`,`internal`);n=N[t],r=t}let a=e.message;typeof a==`string`&&(r=a),i=e.details,i!==void 0&&(i=j(i))}}catch{}return n===`ok`?null:new P(n,r,i)}var L=class{constructor(e,t,n,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,o(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||n.get().then(e=>this.messaging=e,()=>{}),this.appCheck||r?.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!(`Notification`in self)||Notification.permission!==`granted`))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}},R=`us-central1`,z=/^data: (.*?)(?:\n|$)/;function ee(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new P(`deadline-exceeded`,`deadline-exceeded`))},e)}),cancel:()=>{t&&clearTimeout(t)}}}var B=class{constructor(e,t,n,r,i=R,a=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new L(e,t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(i);this.customDomain=e.origin+(e.pathname===`/`?``:e.pathname),this.region=R}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;return this.emulatorOrigin===null?this.customDomain===null?`https://${this.region}-${t}.cloudfunctions.net/${e}`:`${this.customDomain}/${e}`:`${this.emulatorOrigin}/${t}/${this.region}/${e}`}};function V(t,n,r){let i=e(n);t.emulatorOrigin=`http${i?`s`:``}://${n}:${r}`,i&&f(t.emulatorOrigin+`/backends`)}function H(e,t,n){let r=r=>K(e,t,r,n||{});return r.stream=(n,r)=>J(e,t,n,r),r}function U(t){return t.emulatorOrigin&&e(t.emulatorOrigin)?`include`:void 0}async function W(e,t,n,r,i){n[`Content-Type`]=`application/json`;let a;try{a=await r(e,{method:`POST`,body:JSON.stringify(t),headers:n,credentials:U(i)})}catch{return{status:0,json:null}}let o=null;try{o=await a.json()}catch{}return{status:a.status,json:o}}async function G(e,t){let n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization=`Bearer `+r.authToken),r.messagingToken&&(n[`Firebase-Instance-ID-Token`]=r.messagingToken),r.appCheckToken!==null&&(n[`X-Firebase-AppCheck`]=r.appCheckToken),n}function K(e,t,n,r){return q(e,e._url(t),n,r)}async function q(e,t,n,r){n=A(n);let i={data:n},a=await G(e,r),o=ee(r.timeout||7e4),s=await Promise.race([W(t,i,a,e.fetchImpl,e),o.promise,e.cancelAllRequests]);if(o.cancel(),!s)throw new P(`cancelled`,`Firebase Functions instance was deleted.`);let c=I(s.status,s.json);if(c)throw c;if(!s.json)throw new P(`internal`,`Response is not valid JSON object.`);let l=s.json.data;if(l===void 0&&(l=s.json.result),l===void 0)throw new P(`internal`,`Response is missing data field.`);return{data:j(l)}}function J(e,t,n,r){return Y(e,e._url(t),n,r||{})}async function Y(e,t,n,r){n=A(n);let i={data:n},a=await G(e,r);a[`Content-Type`]=`application/json`,a.Accept=`text/event-stream`;let o;try{o=await e.fetchImpl(t,{method:`POST`,body:JSON.stringify(i),headers:a,signal:r?.signal,credentials:U(e)})}catch(e){if(e instanceof Error&&e.name===`AbortError`){let e=new P(`cancelled`,`Request was cancelled.`);return{data:Promise.reject(e),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(e)}}}}}}let t=I(0,null);return{data:Promise.reject(t),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(t)}}}}}}let s,c,l=new Promise((e,t)=>{s=e,c=t});r?.signal?.addEventListener(`abort`,()=>{let e=new P(`cancelled`,`Request was cancelled.`);c(e)});let u=X(o.body.getReader(),s,c,r?.signal);return{stream:{[Symbol.asyncIterator](){let e=u.getReader();return{async next(){let{value:t,done:n}=await e.read();return{value:t,done:n}},async return(){return await e.cancel(),{done:!0,value:void 0}}}}},data:l}}function X(e,t,n,r){let i=(e,r)=>{let i=e.match(z);if(!i)return;let a=i[1];try{let e=JSON.parse(a);if(`result`in e){t(j(e.result));return}if(`message`in e){r.enqueue(j(e.message));return}if(`error`in e){let t=I(0,e);r.error(t),n(t);return}}catch(e){if(e instanceof P){r.error(e),n(e);return}}},a=new TextDecoder;return new ReadableStream({start(t){let o=``;return s();async function s(){if(r?.aborted){let e=new P(`cancelled`,`Request was cancelled`);return t.error(e),n(e),Promise.resolve()}try{let{value:c,done:l}=await e.read();if(l){o.trim()&&i(o.trim(),t),t.close();return}if(r?.aborted){let r=new P(`cancelled`,`Request was cancelled`);t.error(r),n(r),await e.cancel();return}o+=a.decode(c,{stream:!0});let u=o.split(`
`);o=u.pop()||``;for(let e of u)e.trim()&&i(e.trim(),t);return s()}catch(e){let r=e instanceof P?e:I(0,null);t.error(r),n(r)}}},cancel(){return e.cancel()}})}var Z=`@firebase/functions`,Q=`0.13.5`,te=`auth-internal`,ne=`app-check-internal`,re=`messaging-internal`;function ie(e){s(new r(M,(e,{instanceIdentifier:t})=>new B(e.getProvider(`app`).getImmediate(),e.getProvider(te),e.getProvider(re),e.getProvider(ne),t),`PUBLIC`).setMultipleInstances(!0)),t(Z,Q,e),t(Z,Q,`esm2020`)}function ae(e=c(),t=R){let n=h(b(e),M).getImmediate({identifier:t}),r=l(`functions`);return r&&oe(n,...r),n}function oe(e,t,n){V(b(e),t,n)}function se(e,t,n){return H(b(e),t,n)}ie();var $=y(g,`batches`),ce=async e=>{try{if(!e.courseId)throw Error(`Please select a course.`);if(!e.batchName?.trim())throw Error(`Batch name is required.`);if(!e.startDate)throw Error(`Batch start date is required.`);let t=new Date,n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;if(e.startDate<n)throw Error(`Batch start date cannot be in the past.`);if(e.endDate&&e.endDate<n)throw Error(`Batch end date cannot be in the past.`);if(!Number.isFinite(Number(e.maxStudents))||Number(e.maxStudents)<1)throw Error(`Maximum students must be at least 1.`);if(e.endDate&&e.endDate<e.startDate)throw Error(`Batch end date cannot be before start date.`);let r=Array.isArray(e.teachers)?e.teachers:[],i=Array.isArray(e.courseClasses)?e.courseClasses:[],a=await _($,{courseId:e.courseId,courseName:e.courseName||``,batchName:e.batchName.trim(),description:e.description||``,maxStudents:Number(e.maxStudents)||1,assignedStudents:0,teachers:r,courseClasses:i,startDate:e.startDate,endDate:e.endDate||``,status:`Upcoming`,isCompleted:!1,createdAt:u(),updatedAt:u()});for(let t of i)await _(y(g,`classes`),{batchId:a.id,courseId:e.courseId,courseName:e.courseName||``,classNumber:t.classNumber||1,courseClassId:t.id||t.classId||``,title:t.title||``,teacherId:t.teacherId||``,teacherName:t.teacherName||``,duration:Number(t.duration)||60,classDate:``,startTime:``,endTime:``,status:`Unscheduled`,meetingStatus:`Pending`,meetingId:``,meetingUrl:``,attendanceTaken:!1,createdAt:u(),updatedAt:u()});return{id:a.id,courseId:e.courseId,courseName:e.courseName||``,batchName:e.batchName.trim(),teachers:r,courseClasses:i}}catch(e){throw console.error(`Create batch error:`,e),e}},le=async()=>{try{return(await v($)).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error(`Get batches error:`,e),e}},ue=async(e,t)=>{try{if(!e)throw Error(`Batch ID is required.`);let n=new Date,r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`;if(t.startDate&&t.startDate<r)throw Error(`Batch start date cannot be in the past.`);if(t.endDate&&t.endDate<r)throw Error(`Batch end date cannot be in the past.`);if(t.startDate&&t.endDate&&t.endDate<t.startDate)throw Error(`Batch end date cannot be before start date.`);await m(p(g,`batches`,e),{...t,updatedAt:u()})}catch(e){throw console.error(`Update batch error:`,e),e}},de=async e=>(await se(ae(void 0,`asia-south1`),`createBatchMeeting`)({batchId:e})).data;function fe({isOpen:e,onClose:t,onSave:n}){let[r,i]=(0,w.useState)(!1),[a,o]=(0,w.useState)([]),[s,c]=(0,w.useState)(!1),[l,u]=(0,w.useState)(null),[d,f]=(0,w.useState)({courseId:``,courseName:``,batchName:``,description:``,maxStudents:30,startDate:``,endDate:``,teachers:[],courseClasses:[]});(0,w.useEffect)(()=>{e&&(p(),f({courseId:``,courseName:``,batchName:``,description:``,maxStudents:30,startDate:``,endDate:``,teachers:[],courseClasses:[]}),u(null))},[e]);let p=async()=>{try{c(!0),o((await v(y(g,`courses`))).docs.map(e=>({id:e.id,...e.data()})))}catch(e){console.error(`Failed to load courses:`,e),u({type:`error`,text:`Unable to load courses.`})}finally{c(!1)}},m=e=>{let t=e.target.value,n=a.find(e=>e.id===t);if(!n){f(e=>({...e,courseId:``,courseName:``,teachers:[],courseClasses:[]}));return}let r=Array.isArray(n.teachers)?n.teachers:[],i=Array.isArray(n.classes)?n.classes:[];f(e=>({...e,courseId:n.id,courseName:n.name||``,teachers:r,courseClasses:i}))},h=e=>{let{name:t,value:n}=e.target;f(e=>({...e,[t]:n}))};return e?(0,T.jsx)(`div`,{className:`
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-50
                p-4
            `,children:(0,T.jsxs)(`div`,{className:`
                    bg-white
                    rounded-3xl
                    w-full
                    max-w-4xl
                    max-h-[92vh]
                    overflow-y-auto
                    shadow-2xl
                `,children:[(0,T.jsxs)(`div`,{className:`
                        sticky
                        top-0
                        z-10
                        bg-white
                        border-b
                        px-8
                        py-6
                        flex
                        justify-between
                        items-center
                    `,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`p`,{className:`
                                text-sm
                                font-semibold
                                text-[#8A6A00]
                                uppercase
                                tracking-wider
                            `,children:`Batch Management`}),(0,T.jsx)(`h2`,{className:`
                                text-3xl
                                font-bold
                                text-[#0F2C23]
                                mt-1
                            `,children:`Create New Batch`}),(0,T.jsx)(`p`,{className:`
                                text-gray-500
                                mt-1
                            `,children:`Select a course and create a batch from its existing teachers and classes.`})]}),(0,T.jsx)(`button`,{type:`button`,onClick:t,disabled:r,className:`
                            w-10
                            h-10
                            rounded-full
                            bg-gray-100
                            text-gray-500
                            text-2xl
                            hover:bg-gray-200
                        `,children:`×`})]}),(0,T.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!r){if(u(null),!d.courseId){u({type:`error`,text:`Please select a course.`});return}if(!d.startDate){u({type:`error`,text:`Please select a batch start date.`});return}if(!Number.isFinite(Number(d.maxStudents))||Number(d.maxStudents)<1){u({type:`error`,text:`Maximum students must be at least 1.`});return}if(!d.batchName.trim()){u({type:`error`,text:`Please enter a batch name.`});return}if(d.endDate&&d.endDate<d.startDate){u({type:`error`,text:`End date cannot be before start date.`});return}try{i(!0),await n(d),u({type:`success`,text:`Batch created successfully.`}),setTimeout(()=>{t()},700)}catch(e){console.error(e),u({type:`error`,text:e?.message||`Failed to create batch.`})}finally{i(!1)}}},className:`
                        p-8
                        space-y-8
                    `,children:[l&&(0,T.jsx)(`div`,{className:`
                                rounded-2xl
                                p-4
                                border
                                ${l.type===`error`?`bg-red-50 border-red-200 text-red-700`:`bg-green-50 border-green-200 text-green-700`}
                            `,children:(0,T.jsxs)(`div`,{className:`
                                    flex
                                    items-start
                                    gap-3
                                `,children:[(0,T.jsx)(`span`,{className:`font-bold`,children:l.type===`error`?`!`:`✓`}),(0,T.jsx)(`p`,{children:l.text})]})}),(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`h3`,{className:`
                                text-xl
                                font-bold
                                text-[#0F2C23]
                                mb-4
                            `,children:`Course`}),(0,T.jsxs)(`select`,{disabled:r||s,value:d.courseId,onChange:m,required:!0,className:`
                                w-full
                                border
                                border-gray-200
                                p-4
                                rounded-2xl
                                outline-none
                                focus:ring-2
                                focus:ring-[#273B09]
                            `,children:[(0,T.jsx)(`option`,{value:``,children:s?`Loading courses...`:`Select Course`}),a.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]}),(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`h3`,{className:`
                                text-xl
                                font-bold
                                text-[#0F2C23]
                                mb-4
                            `,children:`Batch Details`}),(0,T.jsxs)(`div`,{className:`
                                grid
                                md:grid-cols-2
                                gap-5
                            `,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`
                                        block
                                        mb-2
                                        font-semibold
                                    `,children:`Batch Name`}),(0,T.jsx)(`input`,{disabled:r,type:`text`,name:`batchName`,value:d.batchName,onChange:h,placeholder:`Example: Morning Batch`,required:!0,className:`
                                        w-full
                                        border
                                        border-gray-200
                                        p-4
                                        rounded-2xl
                                    `})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`
                                        block
                                        mb-2
                                        font-semibold
                                    `,children:`Maximum Students`}),(0,T.jsx)(`input`,{disabled:r,type:`number`,min:`1`,name:`maxStudents`,value:d.maxStudents,onChange:h,required:!0,className:`
                                        w-full
                                        border
                                        border-gray-200
                                        p-4
                                        rounded-2xl
                                    `})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`
                                        block
                                        mb-2
                                        font-semibold
                                    `,children:`Batch Start Date`}),(0,T.jsx)(`input`,{disabled:r,type:`date`,name:`startDate`,value:d.startDate,onChange:h,required:!0,min:`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,`0`)}-${String(new Date().getDate()).padStart(2,`0`)}`,className:`
                                        w-full
                                        border
                                        border-gray-200
                                        p-4
                                        rounded-2xl
                                    `})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{className:`
                                        block
                                        mb-2
                                        font-semibold
                                    `,children:`Batch End Date`}),(0,T.jsx)(`input`,{disabled:r,type:`date`,name:`endDate`,value:d.endDate,onChange:h,required:!0,min:`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,`0`)}-${String(new Date().getDate()).padStart(2,`0`)}`,className:`
                                        w-full
                                        border
                                        border-gray-200
                                        p-4
                                        rounded-2xl
                                    `})]})]}),(0,T.jsxs)(`div`,{className:`mt-5`,children:[(0,T.jsx)(`label`,{className:`
                                    block
                                    mb-2
                                    font-semibold
                                `,children:`Description`}),(0,T.jsx)(`textarea`,{disabled:r,name:`description`,value:d.description,onChange:h,rows:4,placeholder:`Describe this batch...`,className:`
                                    w-full
                                    border
                                    border-gray-200
                                    p-4
                                    rounded-2xl
                                `})]})]}),(0,T.jsxs)(`section`,{children:[(0,T.jsxs)(`div`,{className:`
                                flex
                                justify-between
                                items-center
                                mb-4
                            `,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{className:`
                                        text-xl
                                        font-bold
                                        text-[#0F2C23]
                                    `,children:`Course Teachers`}),(0,T.jsx)(`p`,{className:`
                                        text-sm
                                        text-gray-500
                                        mt-1
                                    `,children:`These teachers come from the selected course.`})]}),(0,T.jsx)(`span`,{className:`
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-green-100
                                    text-green-700
                                    text-sm
                                    font-semibold
                                `,children:d.teachers.length})]}),d.teachers.length===0?(0,T.jsx)(`div`,{className:`
                                    border
                                    border-dashed
                                    rounded-2xl
                                    p-6
                                    text-center
                                    text-gray-500
                                `,children:`Select a course to load its teachers.`}):(0,T.jsx)(`div`,{className:`
                                    grid
                                    md:grid-cols-2
                                    gap-4
                                `,children:d.teachers.map((e,t)=>(0,T.jsxs)(`div`,{className:`
                                                border
                                                rounded-2xl
                                                p-5
                                                flex
                                                items-center
                                                gap-4
                                                bg-gray-50
                                            `,children:[(0,T.jsx)(`div`,{className:`
                                                    w-11
                                                    h-11
                                                    rounded-full
                                                    bg-[#273B09]
                                                    text-white
                                                    flex
                                                    items-center
                                                    justify-center
                                                    font-bold
                                                `,children:(e.name||`T`).charAt(0).toUpperCase()}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`p`,{className:`
                                                        font-bold
                                                        text-[#0F2C23]
                                                    `,children:e.name||`Unnamed Teacher`}),(0,T.jsx)(`p`,{className:`
                                                        text-xs
                                                        text-gray-500
                                                    `,children:`Available for this course`})]})]},e.id||t))})]}),(0,T.jsxs)(`section`,{children:[(0,T.jsxs)(`div`,{className:`
                                flex
                                justify-between
                                items-center
                                mb-4
                            `,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{className:`
                                        text-xl
                                        font-bold
                                        text-[#0F2C23]
                                    `,children:`Course Classes`}),(0,T.jsx)(`p`,{className:`
                                        text-sm
                                        text-gray-500
                                        mt-1
                                    `,children:`These classes will be copied into this batch.`})]}),(0,T.jsx)(`span`,{className:`
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-blue-100
                                    text-blue-700
                                    text-sm
                                    font-semibold
                                `,children:d.courseClasses.length})]}),d.courseClasses.length===0?(0,T.jsxs)(`div`,{className:`
                                    border
                                    border-dashed
                                    rounded-2xl
                                    p-6
                                    text-center
                                    text-gray-500
                                `,children:[`This course has no classes yet.`,(0,T.jsx)(`p`,{className:`text-sm mt-2`,children:`Add classes from Course Management first.`})]}):(0,T.jsx)(`div`,{className:`space-y-3`,children:d.courseClasses.map((e,t)=>(0,T.jsxs)(`div`,{className:`
                                                border
                                                rounded-2xl
                                                p-5
                                                flex
                                                flex-col
                                                md:flex-row
                                                md:items-center
                                                justify-between
                                                gap-4
                                            `,children:[(0,T.jsxs)(`div`,{className:`
                                                    flex
                                                    items-center
                                                    gap-4
                                                `,children:[(0,T.jsx)(`div`,{className:`
                                                        w-10
                                                        h-10
                                                        rounded-full
                                                        bg-[#273B09]
                                                        text-white
                                                        flex
                                                        items-center
                                                        justify-center
                                                        font-bold
                                                    `,children:e.classNumber||t+1}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`p`,{className:`
                                                            font-bold
                                                            text-[#0F2C23]
                                                        `,children:e.title||`Class ${t+1}`}),(0,T.jsxs)(`p`,{className:`
                                                            text-sm
                                                            text-gray-500
                                                        `,children:[`Teacher:`,` `,e.teacherName||`Not assigned`]})]})]}),(0,T.jsxs)(`div`,{className:`
                                                    flex
                                                    items-center
                                                    gap-3
                                                `,children:[(0,T.jsxs)(`span`,{className:`
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        bg-gray-100
                                                        text-gray-600
                                                        text-sm
                                                    `,children:[e.duration||60,` `,`min`]}),(0,T.jsx)(`span`,{className:`
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        bg-yellow-100
                                                        text-yellow-700
                                                        text-sm
                                                        font-semibold
                                                    `,children:`Schedule later`})]})]},e.id||e.classId||t))})]}),(0,T.jsxs)(`div`,{className:`
                            bg-blue-50
                            border
                            border-blue-100
                            rounded-2xl
                            p-5
                        `,children:[(0,T.jsx)(`p`,{className:`
                                font-semibold
                                text-blue-900
                            `,children:`What happens next?`}),(0,T.jsx)(`p`,{className:`
                                text-sm
                                text-blue-700
                                mt-2
                                leading-6
                            `,children:`After creating the batch, you can assign students and schedule each class with its date, time and teacher. Schedule conflicts and the required 5-minute gap will be checked automatically.`})]}),(0,T.jsxs)(`div`,{className:`
                            flex
                            justify-end
                            gap-4
                            pt-6
                            border-t
                        `,children:[(0,T.jsx)(`button`,{type:`button`,onClick:t,disabled:r,className:`
                                px-7
                                py-4
                                rounded-2xl
                                border
                                border-gray-300
                                font-semibold
                                hover:bg-gray-50
                            `,children:`Cancel`}),(0,T.jsx)(`button`,{type:`submit`,disabled:r,className:`
                                px-8
                                py-4
                                rounded-2xl
                                font-bold
                                text-white
                                transition
                                ${r?`bg-gray-400 cursor-not-allowed`:`bg-[#273B09] hover:bg-[#1d2a06]`}
                            `,children:r?`Creating Batch...`:`Create Batch`})]})]})]})}):null}function pe(){let e=x(),[t,n]=(0,w.useState)([]),[r,i]=(0,w.useState)(!0),[a,o]=(0,w.useState)(``),[s,c]=(0,w.useState)(`all`),[l,u]=(0,w.useState)(`all`),[d,f]=(0,w.useState)(null),[p,m]=(0,w.useState)(!1),[h,_]=(0,w.useState)(!1),[b,D]=(0,w.useState)(null),O=async()=>{try{i(!0);let[e,t]=await Promise.all([le(),v(y(g,`batchStudents`))]),r=new Map;t.docs.forEach(e=>{let t=e.data();!t.batchId||[`cancelled`,`removed`,`blocked`].includes(String(t.status||`Assigned`).toLowerCase())||r.set(t.batchId,(r.get(t.batchId)||0)+1)}),n(e.map(e=>({...e,assignedStudents:r.get(e.id)||0})))}catch(e){console.log(e)}finally{i(!1)}};(0,w.useEffect)(()=>{O()},[]);let k=e=>{if(e.isCompleted)return`completed`;let t=new Date,n=new Date(e.startDate),r=new Date(e.endDate);return t<n?`upcoming`:t>=n&&t<=r?`active`:`completed`},A=async(e,t)=>{try{await ue(e,t),await O(),m(!1)}catch(e){console.log(e)}},j=async e=>{try{D({type:`loading`,text:`Creating batch and setting up Zoom meeting...`});let t=await de((await ce(e)).id);console.log(`Zoom meeting result:`,t),_(!1),await O(),D({type:`success`,text:`Batch created successfully and Zoom meeting is ready.`}),setTimeout(()=>{D(null)},4e3)}catch(e){console.error(`Create batch / Zoom error:`,e),D({type:`error`,text:e?.message||`Failed to create batch or Zoom meeting.`})}},M=t.filter(e=>{let t=k(e),n=e.batchName?.toLowerCase().includes(a.toLowerCase())||e.courseName?.toLowerCase().includes(a.toLowerCase()),r=l===`all`?!0:e.courseName===l;return n&&r&&(s===`all`?!0:t===s)}),N=t.length,P=t.filter(e=>k(e)===`upcoming`).length,F=t.filter(e=>k(e)===`active`).length,I=t.filter(e=>k(e)===`completed`).length,L=[...new Set(t.map(e=>e.courseName))];return(0,T.jsxs)(C,{title:`Batches`,children:[(0,T.jsxs)(`div`,{className:`mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h2`,{className:`text-3xl font-bold text-[#0F2C23]`,children:`Batch Management`}),(0,T.jsx)(`p`,{className:`text-gray-500 mt-2`,children:`Create, assign and manage batches for every course.`})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,T.jsx)(`button`,{onClick:O,className:`
                px-5
                py-3
                rounded-xl
                border
                border-gray-300
                bg-white
                hover:bg-gray-100
                transition
                font-medium
            `,children:`🔄 Refresh`}),(0,T.jsxs)(`button`,{onClick:()=>_(!0),className:`
                flex
                items-center
                gap-2
                bg-[#273B09]
                hover:bg-[#1b2b07]
                transition
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                shadow-lg
            `,children:[(0,T.jsx)(`span`,{className:`text-xl leading-none`,children:`+`}),(0,T.jsx)(`span`,{children:`Create Batch`})]})]})]}),b&&(0,T.jsxs)(`div`,{className:`
                mb-6
                rounded-2xl
                border
                px-5
                py-4
                flex
                items-center
                gap-3
                ${b.type===`loading`?`bg-blue-50 border-blue-200 text-blue-700`:b.type===`success`?`bg-green-50 border-green-200 text-green-700`:`bg-red-50 border-red-200 text-red-700`}
            `,children:[(0,T.jsx)(`span`,{className:`text-xl`,children:b.type===`loading`?`⏳`:b.type===`success`?`✓`:`!`}),(0,T.jsx)(`span`,{className:`font-medium`,children:b.text})]}),(0,T.jsxs)(`div`,{className:`grid md:grid-cols-4 gap-6 mb-8`,children:[(0,T.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,T.jsx)(`p`,{className:`text-gray-500`,children:`Total Batches`}),(0,T.jsx)(`h2`,{className:`text-4xl font-bold mt-3`,children:N})]}),(0,T.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,T.jsx)(`p`,{className:`text-gray-500`,children:`Upcoming`}),(0,T.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-blue-600`,children:P})]}),(0,T.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,T.jsx)(`p`,{className:`text-gray-500`,children:`Active`}),(0,T.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-green-600`,children:F})]}),(0,T.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,T.jsx)(`p`,{className:`text-gray-500`,children:`Completed`}),(0,T.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-orange-500`,children:I})]})]}),(0,T.jsx)(`div`,{className:`bg-white rounded-3xl p-6 shadow mb-8`,children:(0,T.jsxs)(`div`,{className:`grid md:grid-cols-3 gap-4`,children:[(0,T.jsx)(`input`,{type:`text`,placeholder:`Search batch or course...`,value:a,onChange:e=>o(e.target.value),className:`border rounded-xl p-4`}),(0,T.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),className:`border rounded-xl p-4`,children:[(0,T.jsx)(`option`,{value:`all`,children:`All Courses`}),L.map(e=>(0,T.jsx)(`option`,{value:e,children:e},e))]}),(0,T.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),className:`border rounded-xl p-4`,children:[(0,T.jsx)(`option`,{value:`all`,children:`All Status`}),(0,T.jsx)(`option`,{value:`upcoming`,children:`Upcoming`}),(0,T.jsx)(`option`,{value:`active`,children:`Active`}),(0,T.jsx)(`option`,{value:`full`,children:`Full`}),(0,T.jsx)(`option`,{value:`completed`,children:`Completed`})]})]})}),(0,T.jsx)(`div`,{className:`bg-white rounded-3xl shadow overflow-hidden`,children:(0,T.jsx)(`div`,{className:`overflow-x-auto`,children:(0,T.jsxs)(`table`,{className:`w-full`,children:[(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{className:`bg-[#273B09] text-white`,children:[(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Batch`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Course`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Start Date`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Students`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Remaining`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Status`}),(0,T.jsx)(`th`,{className:`p-4 text-left`,children:`Actions`})]})}),(0,T.jsx)(`tbody`,{children:r?(0,T.jsx)(`tr`,{children:(0,T.jsx)(`td`,{colSpan:`7`,className:`p-10 text-center`,children:`Loading...`})}):M.length===0?(0,T.jsx)(`tr`,{children:(0,T.jsx)(`td`,{colSpan:`7`,className:`p-10 text-center`,children:`No batches found`})}):M.map(t=>{let n=k(t),r=Number(t.maxStudents)-Number(t.assignedStudents||0);return(0,T.jsxs)(`tr`,{className:`border-b`,children:[(0,T.jsx)(`td`,{className:`p-4 font-semibold`,children:t.batchName}),(0,T.jsx)(`td`,{className:`p-4`,children:t.courseName}),(0,T.jsx)(`td`,{className:`p-4`,children:S(t.startDate)}),(0,T.jsxs)(`td`,{className:`p-4`,children:[t.assignedStudents||0,`/`,t.maxStudents]}),(0,T.jsx)(`td`,{className:`p-4`,children:r}),(0,T.jsx)(`td`,{className:`p-4`,children:(0,T.jsx)(`span`,{className:`px-3 py-1 rounded-full text-sm
                                                        ${n===`upcoming`?`bg-blue-100 text-blue-700`:n===`active`?`bg-green-100 text-green-700`:n===`full`?`bg-red-100 text-red-700`:`bg-gray-100 text-gray-700`}`,children:n})}),(0,T.jsx)(`td`,{className:`p-4`,children:(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(`button`,{onClick:()=>e(`/admin/batches/${t.id}`),className:`
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-4
                py-2
                rounded-lg
                transition
            `,children:`Manage`}),t.zoom?.meetingId&&(0,T.jsx)(`span`,{className:`
                        px-3
                        py-2
                        rounded-lg
                        bg-green-100
                        text-green-700
                        text-sm
                        font-medium
                    `,children:`✓ Zoom Ready`})]})})]},t.id)})})]})})}),(0,T.jsx)(fe,{isOpen:h,onClose:()=>_(!1),onSave:j}),(0,T.jsx)(E,{isOpen:p,onClose:()=>m(!1),batch:d,onSave:A})]})}export{pe as default};