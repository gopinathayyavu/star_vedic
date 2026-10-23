import{B as e,F as t,H as n,I as r,K as i,L as a,M as o,N as s,P as c,R as l,S as u,U as d,V as f,b as p,g as m,j as h,n as g,s as _,u as v,y,z as b}from"./firebase-BMmhno40.js";import{c as ee}from"./index-2qX9Z7y3.js";import{t as x}from"./AdminLayout-3-7Q-2jT.js";var S=i(d(),1),C=n();function w({isOpen:e,onClose:t,batch:n,onSave:r}){let[i,a]=(0,S.useState)({startDate:``,maxStudents:5,isCompleted:!1});return(0,S.useEffect)(()=>{n&&a({startDate:n.startDate||``,maxStudents:n.maxStudents||5,isCompleted:n.isCompleted||!1})},[n]),!e||!n?null:(0,C.jsx)(`div`,{className:`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4`,children:(0,C.jsxs)(`div`,{className:`bg-white rounded-3xl w-full max-w-lg p-8`,children:[(0,C.jsxs)(`div`,{className:`flex justify-between items-center mb-6`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold`,children:`Edit Batch`}),(0,C.jsx)(`button`,{onClick:t,className:`text-2xl`,children:`✕`})]}),(0,C.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(n.id,i)},className:`space-y-5`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`block mb-2 font-medium`,children:`Start Date`}),(0,C.jsx)(`input`,{type:`date`,value:i.startDate,onChange:e=>a({...i,startDate:e.target.value}),className:`w-full border rounded-xl p-4`,required:!0})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`block mb-2 font-medium`,children:`Maximum Students`}),(0,C.jsx)(`input`,{type:`number`,min:`1`,value:i.maxStudents,onChange:e=>a({...i,maxStudents:Number(e.target.value)}),className:`w-full border rounded-xl p-4`,required:!0})]}),(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsx)(`input`,{type:`checkbox`,checked:i.isCompleted,onChange:e=>a({...i,isCompleted:e.target.checked})}),(0,C.jsx)(`label`,{children:`Mark Batch Completed`})]}),(0,C.jsx)(`button`,{type:`submit`,className:`\r
                        w-full\r
                        bg-[#273B09]\r
                        text-white\r
                        py-4\r
                        rounded-xl\r
                        font-semibold\r
                        `,children:`Update Batch`})]})]})})}var T=`type.googleapis.com/google.protobuf.Int64Value`,E=`type.googleapis.com/google.protobuf.UInt64Value`;function D(e,t){let n={};for(let r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function O(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e==`number`&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)===`[object String]`)return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>O(e));if(typeof e==`function`||typeof e==`object`)return D(e,e=>O(e));throw Error(`Data cannot be encoded in JSON: `+e)}function k(e){if(e==null)return e;if(e[`@type`])switch(e[`@type`]){case T:case E:{let t=Number(e.value);if(isNaN(t))throw Error(`Data cannot be decoded from JSON: `+e);return t}default:throw Error(`Data cannot be decoded from JSON: `+e)}return Array.isArray(e)?e.map(e=>k(e)):typeof e==`function`||typeof e==`object`?D(e,e=>k(e)):e}var A=`functions`,j={OK:`ok`,CANCELLED:`cancelled`,UNKNOWN:`unknown`,INVALID_ARGUMENT:`invalid-argument`,DEADLINE_EXCEEDED:`deadline-exceeded`,NOT_FOUND:`not-found`,ALREADY_EXISTS:`already-exists`,PERMISSION_DENIED:`permission-denied`,UNAUTHENTICATED:`unauthenticated`,RESOURCE_EXHAUSTED:`resource-exhausted`,FAILED_PRECONDITION:`failed-precondition`,ABORTED:`aborted`,OUT_OF_RANGE:`out-of-range`,UNIMPLEMENTED:`unimplemented`,INTERNAL:`internal`,UNAVAILABLE:`unavailable`,DATA_LOSS:`data-loss`},M=class e extends a{constructor(t,n,r){super(`${A}/${t}`,n||``),this.details=r,Object.setPrototypeOf(this,e.prototype)}};function N(e){if(e>=200&&e<300)return`ok`;switch(e){case 0:return`internal`;case 400:return`invalid-argument`;case 401:return`unauthenticated`;case 403:return`permission-denied`;case 404:return`not-found`;case 409:return`aborted`;case 429:return`resource-exhausted`;case 499:return`cancelled`;case 500:return`internal`;case 501:return`unimplemented`;case 503:return`unavailable`;case 504:return`deadline-exceeded`}return`unknown`}function P(e,t){let n=N(e),r=n,i;try{let e=t&&t.error;if(e){let t=e.status;if(typeof t==`string`){if(!j[t])return new M(`internal`,`internal`);n=j[t],r=t}let a=e.message;typeof a==`string`&&(r=a),i=e.details,i!==void 0&&(i=k(i))}}catch{}return n===`ok`?null:new M(n,r,i)}var F=class{constructor(e,t,n,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,o(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||n.get().then(e=>this.messaging=e,()=>{}),this.appCheck||r?.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!(`Notification`in self)||Notification.permission!==`granted`))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}},I=`us-central1`,te=/^data: (.*?)(?:\n|$)/;function L(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new M(`deadline-exceeded`,`deadline-exceeded`))},e)}),cancel:()=>{t&&clearTimeout(t)}}}var R=class{constructor(e,t,n,r,i=I,a=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new F(e,t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(i);this.customDomain=e.origin+(e.pathname===`/`?``:e.pathname),this.region=I}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;return this.emulatorOrigin===null?this.customDomain===null?`https://${this.region}-${t}.cloudfunctions.net/${e}`:`${this.customDomain}/${e}`:`${this.emulatorOrigin}/${t}/${this.region}/${e}`}};function z(t,n,r){let i=e(n);t.emulatorOrigin=`http${i?`s`:``}://${n}:${r}`,i&&f(t.emulatorOrigin+`/backends`)}function B(e,t,n){let r=r=>W(e,t,r,n||{});return r.stream=(n,r)=>K(e,t,n,r),r}function V(t){return t.emulatorOrigin&&e(t.emulatorOrigin)?`include`:void 0}async function H(e,t,n,r,i){n[`Content-Type`]=`application/json`;let a;try{a=await r(e,{method:`POST`,body:JSON.stringify(t),headers:n,credentials:V(i)})}catch{return{status:0,json:null}}let o=null;try{o=await a.json()}catch{}return{status:a.status,json:o}}async function U(e,t){let n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization=`Bearer `+r.authToken),r.messagingToken&&(n[`Firebase-Instance-ID-Token`]=r.messagingToken),r.appCheckToken!==null&&(n[`X-Firebase-AppCheck`]=r.appCheckToken),n}function W(e,t,n,r){return G(e,e._url(t),n,r)}async function G(e,t,n,r){n=O(n);let i={data:n},a=await U(e,r),o=L(r.timeout||7e4),s=await Promise.race([H(t,i,a,e.fetchImpl,e),o.promise,e.cancelAllRequests]);if(o.cancel(),!s)throw new M(`cancelled`,`Firebase Functions instance was deleted.`);let c=P(s.status,s.json);if(c)throw c;if(!s.json)throw new M(`internal`,`Response is not valid JSON object.`);let l=s.json.data;if(l===void 0&&(l=s.json.result),l===void 0)throw new M(`internal`,`Response is missing data field.`);return{data:k(l)}}function K(e,t,n,r){return q(e,e._url(t),n,r||{})}async function q(e,t,n,r){n=O(n);let i={data:n},a=await U(e,r);a[`Content-Type`]=`application/json`,a.Accept=`text/event-stream`;let o;try{o=await e.fetchImpl(t,{method:`POST`,body:JSON.stringify(i),headers:a,signal:r?.signal,credentials:V(e)})}catch(e){if(e instanceof Error&&e.name===`AbortError`){let e=new M(`cancelled`,`Request was cancelled.`);return{data:Promise.reject(e),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(e)}}}}}}let t=P(0,null);return{data:Promise.reject(t),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(t)}}}}}}let s,c,l=new Promise((e,t)=>{s=e,c=t});r?.signal?.addEventListener(`abort`,()=>{let e=new M(`cancelled`,`Request was cancelled.`);c(e)});let u=J(o.body.getReader(),s,c,r?.signal);return{stream:{[Symbol.asyncIterator](){let e=u.getReader();return{async next(){let{value:t,done:n}=await e.read();return{value:t,done:n}},async return(){return await e.cancel(),{done:!0,value:void 0}}}}},data:l}}function J(e,t,n,r){let i=(e,r)=>{let i=e.match(te);if(!i)return;let a=i[1];try{let e=JSON.parse(a);if(`result`in e){t(k(e.result));return}if(`message`in e){r.enqueue(k(e.message));return}if(`error`in e){let t=P(0,e);r.error(t),n(t);return}}catch(e){if(e instanceof M){r.error(e),n(e);return}}},a=new TextDecoder;return new ReadableStream({start(t){let o=``;return s();async function s(){if(r?.aborted){let e=new M(`cancelled`,`Request was cancelled`);return t.error(e),n(e),Promise.resolve()}try{let{value:c,done:l}=await e.read();if(l){o.trim()&&i(o.trim(),t),t.close();return}if(r?.aborted){let r=new M(`cancelled`,`Request was cancelled`);t.error(r),n(r),await e.cancel();return}o+=a.decode(c,{stream:!0});let u=o.split(`
`);o=u.pop()||``;for(let e of u)e.trim()&&i(e.trim(),t);return s()}catch(e){let r=e instanceof M?e:P(0,null);t.error(r),n(r)}}},cancel(){return e.cancel()}})}var Y=`@firebase/functions`,X=`0.13.5`,Z=`auth-internal`,ne=`app-check-internal`,re=`messaging-internal`;function ie(e){s(new r(A,(e,{instanceIdentifier:t})=>new R(e.getProvider(`app`).getImmediate(),e.getProvider(Z),e.getProvider(re),e.getProvider(ne),t),`PUBLIC`).setMultipleInstances(!0)),t(Y,X,e),t(Y,X,`esm2020`)}function ae(e=c(),t=I){let n=h(b(e),A).getImmediate({identifier:t}),r=l(`functions`);return r&&oe(n,...r),n}function oe(e,t,n){z(b(e),t,n)}function se(e,t,n){return B(b(e),t,n)}ie();var Q=y(g,`batches`),ce=async e=>{try{if(!e.courseId)throw Error(`Please select a course.`);if(!e.batchName?.trim())throw Error(`Batch name is required.`);if(!e.startDate)throw Error(`Batch start date is required.`);if(e.endDate&&e.endDate<e.startDate)throw Error(`Batch end date cannot be before start date.`);let t=Array.isArray(e.teachers)?e.teachers:[],n=Array.isArray(e.courseClasses)?e.courseClasses:[],r=await _(Q,{courseId:e.courseId,courseName:e.courseName||``,batchName:e.batchName.trim(),description:e.description||``,maxStudents:Number(e.maxStudents)||1,assignedStudents:0,teachers:t,courseClasses:n,startDate:e.startDate,endDate:e.endDate||``,status:`Upcoming`,isCompleted:!1,createdAt:u(),updatedAt:u()});for(let t of n)await _(y(g,`classes`),{batchId:r.id,courseId:e.courseId,courseName:e.courseName||``,classNumber:t.classNumber||1,courseClassId:t.id||t.classId||``,title:t.title||``,teacherId:t.teacherId||``,teacherName:t.teacherName||``,duration:Number(t.duration)||60,classDate:``,startTime:``,endTime:``,status:`Unscheduled`,meetingStatus:`Pending`,meetingId:``,meetingUrl:``,attendanceTaken:!1,createdAt:u(),updatedAt:u()});return{id:r.id,courseId:e.courseId,courseName:e.courseName||``,batchName:e.batchName.trim(),teachers:t,courseClasses:n}}catch(e){throw console.error(`Create batch error:`,e),e}},le=async()=>{try{return(await v(Q)).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error(`Get batches error:`,e),e}},$=async(e,t)=>{try{if(!e)throw Error(`Batch ID is required.`);await m(p(g,`batches`,e),{...t,updatedAt:u()})}catch(e){throw console.error(`Update batch error:`,e),e}},ue=async e=>(await se(ae(void 0,`asia-south1`),`createBatchMeeting`)({batchId:e})).data;function de({isOpen:e,onClose:t,onSave:n}){let[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)([]),[s,c]=(0,S.useState)(!1),[l,u]=(0,S.useState)(null),[d,f]=(0,S.useState)({courseId:``,courseName:``,batchName:``,description:``,maxStudents:30,startDate:``,endDate:``,teachers:[],courseClasses:[]});(0,S.useEffect)(()=>{e&&(p(),f({courseId:``,courseName:``,batchName:``,description:``,maxStudents:30,startDate:``,endDate:``,teachers:[],courseClasses:[]}),u(null))},[e]);let p=async()=>{try{c(!0),o((await v(y(g,`courses`))).docs.map(e=>({id:e.id,...e.data()})))}catch(e){console.error(`Failed to load courses:`,e),u({type:`error`,text:`Unable to load courses.`})}finally{c(!1)}},m=e=>{let t=e.target.value,n=a.find(e=>e.id===t);if(!n){f(e=>({...e,courseId:``,courseName:``,teachers:[],courseClasses:[]}));return}let r=Array.isArray(n.teachers)?n.teachers:[],i=Array.isArray(n.classes)?n.classes:[];f(e=>({...e,courseId:n.id,courseName:n.name||``,teachers:r,courseClasses:i}))},h=e=>{let{name:t,value:n}=e.target;f(e=>({...e,[t]:n}))};return e?(0,C.jsx)(`div`,{className:`\r
                fixed\r
                inset-0\r
                bg-black/60\r
                backdrop-blur-sm\r
                flex\r
                items-center\r
                justify-center\r
                z-50\r
                p-4\r
            `,children:(0,C.jsxs)(`div`,{className:`\r
                    bg-white\r
                    rounded-3xl\r
                    w-full\r
                    max-w-4xl\r
                    max-h-[92vh]\r
                    overflow-y-auto\r
                    shadow-2xl\r
                `,children:[(0,C.jsxs)(`div`,{className:`\r
                        sticky\r
                        top-0\r
                        z-10\r
                        bg-white\r
                        border-b\r
                        px-8\r
                        py-6\r
                        flex\r
                        justify-between\r
                        items-center\r
                    `,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-[#8A6A00]\r
                                uppercase\r
                                tracking-wider\r
                            `,children:`Batch Management`}),(0,C.jsx)(`h2`,{className:`\r
                                text-3xl\r
                                font-bold\r
                                text-[#0F2C23]\r
                                mt-1\r
                            `,children:`Create New Batch`}),(0,C.jsx)(`p`,{className:`\r
                                text-gray-500\r
                                mt-1\r
                            `,children:`Select a course and create a batch from its existing teachers and classes.`})]}),(0,C.jsx)(`button`,{type:`button`,onClick:t,disabled:r,className:`\r
                            w-10\r
                            h-10\r
                            rounded-full\r
                            bg-gray-100\r
                            text-gray-500\r
                            text-2xl\r
                            hover:bg-gray-200\r
                        `,children:`×`})]}),(0,C.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!r){if(u(null),!d.courseId){u({type:`error`,text:`Please select a course.`});return}if(!d.batchName.trim()){u({type:`error`,text:`Please enter a batch name.`});return}if(d.endDate&&d.endDate<d.startDate){u({type:`error`,text:`End date cannot be before start date.`});return}try{i(!0),await n(d),u({type:`success`,text:`Batch created successfully.`}),setTimeout(()=>{t()},700)}catch(e){console.error(e),u({type:`error`,text:e?.message||`Failed to create batch.`})}finally{i(!1)}}},className:`\r
                        p-8\r
                        space-y-8\r
                    `,children:[l&&(0,C.jsx)(`div`,{className:`
                                rounded-2xl
                                p-4
                                border
                                ${l.type===`error`?`bg-red-50 border-red-200 text-red-700`:`bg-green-50 border-green-200 text-green-700`}
                            `,children:(0,C.jsxs)(`div`,{className:`\r
                                    flex\r
                                    items-start\r
                                    gap-3\r
                                `,children:[(0,C.jsx)(`span`,{className:`font-bold`,children:l.type===`error`?`!`:`✓`}),(0,C.jsx)(`p`,{children:l.text})]})}),(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{className:`\r
                                text-xl\r
                                font-bold\r
                                text-[#0F2C23]\r
                                mb-4\r
                            `,children:`Course`}),(0,C.jsxs)(`select`,{disabled:r||s,value:d.courseId,onChange:m,required:!0,className:`\r
                                w-full\r
                                border\r
                                border-gray-200\r
                                p-4\r
                                rounded-2xl\r
                                outline-none\r
                                focus:ring-2\r
                                focus:ring-[#273B09]\r
                            `,children:[(0,C.jsx)(`option`,{value:``,children:s?`Loading courses...`:`Select Course`}),a.map(e=>(0,C.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]}),(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{className:`\r
                                text-xl\r
                                font-bold\r
                                text-[#0F2C23]\r
                                mb-4\r
                            `,children:`Batch Details`}),(0,C.jsxs)(`div`,{className:`\r
                                grid\r
                                md:grid-cols-2\r
                                gap-5\r
                            `,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`\r
                                        block\r
                                        mb-2\r
                                        font-semibold\r
                                    `,children:`Batch Name`}),(0,C.jsx)(`input`,{disabled:r,type:`text`,name:`batchName`,value:d.batchName,onChange:h,placeholder:`Example: Morning Batch`,required:!0,className:`\r
                                        w-full\r
                                        border\r
                                        border-gray-200\r
                                        p-4\r
                                        rounded-2xl\r
                                    `})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`\r
                                        block\r
                                        mb-2\r
                                        font-semibold\r
                                    `,children:`Maximum Students`}),(0,C.jsx)(`input`,{disabled:r,type:`number`,min:`1`,name:`maxStudents`,value:d.maxStudents,onChange:h,required:!0,className:`\r
                                        w-full\r
                                        border\r
                                        border-gray-200\r
                                        p-4\r
                                        rounded-2xl\r
                                    `})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`\r
                                        block\r
                                        mb-2\r
                                        font-semibold\r
                                    `,children:`Batch Start Date`}),(0,C.jsx)(`input`,{disabled:r,type:`date`,name:`startDate`,value:d.startDate,onChange:h,required:!0,className:`\r
                                        w-full\r
                                        border\r
                                        border-gray-200\r
                                        p-4\r
                                        rounded-2xl\r
                                    `})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`\r
                                        block\r
                                        mb-2\r
                                        font-semibold\r
                                    `,children:`Batch End Date`}),(0,C.jsx)(`input`,{disabled:r,type:`date`,name:`endDate`,value:d.endDate,onChange:h,required:!0,className:`\r
                                        w-full\r
                                        border\r
                                        border-gray-200\r
                                        p-4\r
                                        rounded-2xl\r
                                    `})]})]}),(0,C.jsxs)(`div`,{className:`mt-5`,children:[(0,C.jsx)(`label`,{className:`\r
                                    block\r
                                    mb-2\r
                                    font-semibold\r
                                `,children:`Description`}),(0,C.jsx)(`textarea`,{disabled:r,name:`description`,value:d.description,onChange:h,rows:4,placeholder:`Describe this batch...`,className:`\r
                                    w-full\r
                                    border\r
                                    border-gray-200\r
                                    p-4\r
                                    rounded-2xl\r
                                `})]})]}),(0,C.jsxs)(`section`,{children:[(0,C.jsxs)(`div`,{className:`\r
                                flex\r
                                justify-between\r
                                items-center\r
                                mb-4\r
                            `,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`\r
                                        text-xl\r
                                        font-bold\r
                                        text-[#0F2C23]\r
                                    `,children:`Course Teachers`}),(0,C.jsx)(`p`,{className:`\r
                                        text-sm\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:`These teachers come from the selected course.`})]}),(0,C.jsx)(`span`,{className:`\r
                                    px-3\r
                                    py-1\r
                                    rounded-full\r
                                    bg-green-100\r
                                    text-green-700\r
                                    text-sm\r
                                    font-semibold\r
                                `,children:d.teachers.length})]}),d.teachers.length===0?(0,C.jsx)(`div`,{className:`\r
                                    border\r
                                    border-dashed\r
                                    rounded-2xl\r
                                    p-6\r
                                    text-center\r
                                    text-gray-500\r
                                `,children:`Select a course to load its teachers.`}):(0,C.jsx)(`div`,{className:`\r
                                    grid\r
                                    md:grid-cols-2\r
                                    gap-4\r
                                `,children:d.teachers.map((e,t)=>(0,C.jsxs)(`div`,{className:`\r
                                                border\r
                                                rounded-2xl\r
                                                p-5\r
                                                flex\r
                                                items-center\r
                                                gap-4\r
                                                bg-gray-50\r
                                            `,children:[(0,C.jsx)(`div`,{className:`\r
                                                    w-11\r
                                                    h-11\r
                                                    rounded-full\r
                                                    bg-[#273B09]\r
                                                    text-white\r
                                                    flex\r
                                                    items-center\r
                                                    justify-center\r
                                                    font-bold\r
                                                `,children:(e.name||`T`).charAt(0).toUpperCase()}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`\r
                                                        font-bold\r
                                                        text-[#0F2C23]\r
                                                    `,children:e.name||`Unnamed Teacher`}),(0,C.jsx)(`p`,{className:`\r
                                                        text-xs\r
                                                        text-gray-500\r
                                                    `,children:`Available for this course`})]})]},e.id||t))})]}),(0,C.jsxs)(`section`,{children:[(0,C.jsxs)(`div`,{className:`\r
                                flex\r
                                justify-between\r
                                items-center\r
                                mb-4\r
                            `,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`\r
                                        text-xl\r
                                        font-bold\r
                                        text-[#0F2C23]\r
                                    `,children:`Course Classes`}),(0,C.jsx)(`p`,{className:`\r
                                        text-sm\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:`These classes will be copied into this batch.`})]}),(0,C.jsx)(`span`,{className:`\r
                                    px-3\r
                                    py-1\r
                                    rounded-full\r
                                    bg-blue-100\r
                                    text-blue-700\r
                                    text-sm\r
                                    font-semibold\r
                                `,children:d.courseClasses.length})]}),d.courseClasses.length===0?(0,C.jsxs)(`div`,{className:`\r
                                    border\r
                                    border-dashed\r
                                    rounded-2xl\r
                                    p-6\r
                                    text-center\r
                                    text-gray-500\r
                                `,children:[`This course has no classes yet.`,(0,C.jsx)(`p`,{className:`text-sm mt-2`,children:`Add classes from Course Management first.`})]}):(0,C.jsx)(`div`,{className:`space-y-3`,children:d.courseClasses.map((e,t)=>(0,C.jsxs)(`div`,{className:`\r
                                                border\r
                                                rounded-2xl\r
                                                p-5\r
                                                flex\r
                                                flex-col\r
                                                md:flex-row\r
                                                md:items-center\r
                                                justify-between\r
                                                gap-4\r
                                            `,children:[(0,C.jsxs)(`div`,{className:`\r
                                                    flex\r
                                                    items-center\r
                                                    gap-4\r
                                                `,children:[(0,C.jsx)(`div`,{className:`\r
                                                        w-10\r
                                                        h-10\r
                                                        rounded-full\r
                                                        bg-[#273B09]\r
                                                        text-white\r
                                                        flex\r
                                                        items-center\r
                                                        justify-center\r
                                                        font-bold\r
                                                    `,children:e.classNumber||t+1}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`\r
                                                            font-bold\r
                                                            text-[#0F2C23]\r
                                                        `,children:e.title||`Class ${t+1}`}),(0,C.jsxs)(`p`,{className:`\r
                                                            text-sm\r
                                                            text-gray-500\r
                                                        `,children:[`Teacher:`,` `,e.teacherName||`Not assigned`]})]})]}),(0,C.jsxs)(`div`,{className:`\r
                                                    flex\r
                                                    items-center\r
                                                    gap-3\r
                                                `,children:[(0,C.jsxs)(`span`,{className:`\r
                                                        px-3\r
                                                        py-1\r
                                                        rounded-full\r
                                                        bg-gray-100\r
                                                        text-gray-600\r
                                                        text-sm\r
                                                    `,children:[e.duration||60,` `,`min`]}),(0,C.jsx)(`span`,{className:`\r
                                                        px-3\r
                                                        py-1\r
                                                        rounded-full\r
                                                        bg-yellow-100\r
                                                        text-yellow-700\r
                                                        text-sm\r
                                                        font-semibold\r
                                                    `,children:`Schedule later`})]})]},e.id||e.classId||t))})]}),(0,C.jsxs)(`div`,{className:`\r
                            bg-blue-50\r
                            border\r
                            border-blue-100\r
                            rounded-2xl\r
                            p-5\r
                        `,children:[(0,C.jsx)(`p`,{className:`\r
                                font-semibold\r
                                text-blue-900\r
                            `,children:`What happens next?`}),(0,C.jsx)(`p`,{className:`\r
                                text-sm\r
                                text-blue-700\r
                                mt-2\r
                                leading-6\r
                            `,children:`After creating the batch, you can assign students and schedule each class with its date, time and teacher. Schedule conflicts and the required 5-minute gap will be checked automatically.`})]}),(0,C.jsxs)(`div`,{className:`\r
                            flex\r
                            justify-end\r
                            gap-4\r
                            pt-6\r
                            border-t\r
                        `,children:[(0,C.jsx)(`button`,{type:`button`,onClick:t,disabled:r,className:`\r
                                px-7\r
                                py-4\r
                                rounded-2xl\r
                                border\r
                                border-gray-300\r
                                font-semibold\r
                                hover:bg-gray-50\r
                            `,children:`Cancel`}),(0,C.jsx)(`button`,{type:`submit`,disabled:r,className:`
                                px-8
                                py-4
                                rounded-2xl
                                font-bold
                                text-white
                                transition
                                ${r?`bg-gray-400 cursor-not-allowed`:`bg-[#273B09] hover:bg-[#1d2a06]`}
                            `,children:r?`Creating Batch...`:`Create Batch`})]})]})]})}):null}function fe(){let e=ee(),[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(!0),[a,o]=(0,S.useState)(``),[s,c]=(0,S.useState)(`all`),[l,u]=(0,S.useState)(`all`),[d,f]=(0,S.useState)(null),[p,m]=(0,S.useState)(!1),[h,g]=(0,S.useState)(!1),[_,v]=(0,S.useState)(null),y=async()=>{try{i(!0),n(await le())}catch(e){console.log(e)}finally{i(!1)}};(0,S.useEffect)(()=>{y()},[]);let b=e=>{if(e.isCompleted)return`completed`;let t=new Date,n=new Date(e.startDate),r=new Date(e.endDate);return t<n?`upcoming`:t>=n&&t<=r?`active`:`completed`},T=async(e,t)=>{try{await $(e,t),await y(),m(!1)}catch(e){console.log(e)}},E=async e=>{try{v({type:`loading`,text:`Creating batch and setting up Zoom meeting...`});let t=await ue((await ce(e)).id);console.log(`Zoom meeting result:`,t),g(!1),await y(),v({type:`success`,text:`Batch created successfully and Zoom meeting is ready.`}),setTimeout(()=>{v(null)},4e3)}catch(e){console.error(`Create batch / Zoom error:`,e),v({type:`error`,text:e?.message||`Failed to create batch or Zoom meeting.`})}},D=t.filter(e=>{let t=b(e),n=e.batchName?.toLowerCase().includes(a.toLowerCase())||e.courseName?.toLowerCase().includes(a.toLowerCase()),r=l===`all`?!0:e.courseName===l;return n&&r&&(s===`all`?!0:t===s)}),O=t.length,k=t.filter(e=>b(e)===`upcoming`).length,A=t.filter(e=>b(e)===`active`).length,j=t.filter(e=>b(e)===`completed`).length,M=[...new Set(t.map(e=>e.courseName))];return(0,C.jsxs)(x,{title:`Batches`,children:[(0,C.jsxs)(`div`,{className:`mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h2`,{className:`text-3xl font-bold text-[#0F2C23]`,children:`Batch Management`}),(0,C.jsx)(`p`,{className:`text-gray-500 mt-2`,children:`Create, assign and manage batches for every course.`})]}),(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsx)(`button`,{onClick:y,className:`\r
                px-5\r
                py-3\r
                rounded-xl\r
                border\r
                border-gray-300\r
                bg-white\r
                hover:bg-gray-100\r
                transition\r
                font-medium\r
            `,children:`🔄 Refresh`}),(0,C.jsxs)(`button`,{onClick:()=>g(!0),className:`\r
                flex\r
                items-center\r
                gap-2\r
                bg-[#273B09]\r
                hover:bg-[#1b2b07]\r
                transition\r
                text-white\r
                px-6\r
                py-3\r
                rounded-xl\r
                font-semibold\r
                shadow-lg\r
            `,children:[(0,C.jsx)(`span`,{className:`text-xl leading-none`,children:`+`}),(0,C.jsx)(`span`,{children:`Create Batch`})]})]})]}),_&&(0,C.jsxs)(`div`,{className:`
                mb-6
                rounded-2xl
                border
                px-5
                py-4
                flex
                items-center
                gap-3
                ${_.type===`loading`?`bg-blue-50 border-blue-200 text-blue-700`:_.type===`success`?`bg-green-50 border-green-200 text-green-700`:`bg-red-50 border-red-200 text-red-700`}
            `,children:[(0,C.jsx)(`span`,{className:`text-xl`,children:_.type===`loading`?`⏳`:_.type===`success`?`✓`:`!`}),(0,C.jsx)(`span`,{className:`font-medium`,children:_.text})]}),(0,C.jsxs)(`div`,{className:`grid md:grid-cols-4 gap-6 mb-8`,children:[(0,C.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,C.jsx)(`p`,{className:`text-gray-500`,children:`Total Batches`}),(0,C.jsx)(`h2`,{className:`text-4xl font-bold mt-3`,children:O})]}),(0,C.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,C.jsx)(`p`,{className:`text-gray-500`,children:`Upcoming`}),(0,C.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-blue-600`,children:k})]}),(0,C.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,C.jsx)(`p`,{className:`text-gray-500`,children:`Active`}),(0,C.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-green-600`,children:A})]}),(0,C.jsxs)(`div`,{className:`bg-white rounded-3xl p-6 shadow`,children:[(0,C.jsx)(`p`,{className:`text-gray-500`,children:`Completed`}),(0,C.jsx)(`h2`,{className:`text-4xl font-bold mt-3 text-orange-500`,children:j})]})]}),(0,C.jsx)(`div`,{className:`bg-white rounded-3xl p-6 shadow mb-8`,children:(0,C.jsxs)(`div`,{className:`grid md:grid-cols-3 gap-4`,children:[(0,C.jsx)(`input`,{type:`text`,placeholder:`Search batch or course...`,value:a,onChange:e=>o(e.target.value),className:`border rounded-xl p-4`}),(0,C.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),className:`border rounded-xl p-4`,children:[(0,C.jsx)(`option`,{value:`all`,children:`All Courses`}),M.map(e=>(0,C.jsx)(`option`,{value:e,children:e},e))]}),(0,C.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),className:`border rounded-xl p-4`,children:[(0,C.jsx)(`option`,{value:`all`,children:`All Status`}),(0,C.jsx)(`option`,{value:`upcoming`,children:`Upcoming`}),(0,C.jsx)(`option`,{value:`active`,children:`Active`}),(0,C.jsx)(`option`,{value:`full`,children:`Full`}),(0,C.jsx)(`option`,{value:`completed`,children:`Completed`})]})]})}),(0,C.jsx)(`div`,{className:`bg-white rounded-3xl shadow overflow-hidden`,children:(0,C.jsx)(`div`,{className:`overflow-x-auto`,children:(0,C.jsxs)(`table`,{className:`w-full`,children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{className:`bg-[#273B09] text-white`,children:[(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Batch`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Course`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Start Date`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Students`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Remaining`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Status`}),(0,C.jsx)(`th`,{className:`p-4 text-left`,children:`Actions`})]})}),(0,C.jsx)(`tbody`,{children:r?(0,C.jsx)(`tr`,{children:(0,C.jsx)(`td`,{colSpan:`7`,className:`p-10 text-center`,children:`Loading...`})}):D.length===0?(0,C.jsx)(`tr`,{children:(0,C.jsx)(`td`,{colSpan:`7`,className:`p-10 text-center`,children:`No batches found`})}):D.map(t=>{let n=b(t),r=Number(t.maxStudents)-Number(t.assignedStudents||0);return(0,C.jsxs)(`tr`,{className:`border-b`,children:[(0,C.jsx)(`td`,{className:`p-4 font-semibold`,children:t.batchName}),(0,C.jsx)(`td`,{className:`p-4`,children:t.courseName}),(0,C.jsx)(`td`,{className:`p-4`,children:t.startDate}),(0,C.jsxs)(`td`,{className:`p-4`,children:[t.assignedStudents||0,`/`,t.maxStudents]}),(0,C.jsx)(`td`,{className:`p-4`,children:r}),(0,C.jsx)(`td`,{className:`p-4`,children:(0,C.jsx)(`span`,{className:`px-3 py-1 rounded-full text-sm
                                                        ${n===`upcoming`?`bg-blue-100 text-blue-700`:n===`active`?`bg-green-100 text-green-700`:n===`full`?`bg-red-100 text-red-700`:`bg-gray-100 text-gray-700`}`,children:n})}),(0,C.jsx)(`td`,{className:`p-4`,children:(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(`button`,{onClick:()=>e(`/admin/batches/${t.id}`),className:`\r
                bg-blue-600\r
                hover:bg-blue-700\r
                text-white\r
                px-4\r
                py-2\r
                rounded-lg\r
                transition\r
            `,children:`Manage`}),t.zoom?.meetingId&&(0,C.jsx)(`span`,{className:`\r
                        px-3\r
                        py-2\r
                        rounded-lg\r
                        bg-green-100\r
                        text-green-700\r
                        text-sm\r
                        font-medium\r
                    `,children:`✓ Zoom Ready`})]})})]},t.id)})})]})})}),(0,C.jsx)(de,{isOpen:h,onClose:()=>g(!1),onSave:E}),(0,C.jsx)(w,{isOpen:p,onClose:()=>m(!1),batch:d,onSave:T})]})}export{fe as default};