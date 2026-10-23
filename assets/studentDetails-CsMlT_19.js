import{H as e,K as t,S as n,U as r,_ as i,b as a,g as o,l as s,m as c,n as l,s as u,u as d,y as f}from"./firebase-BMmhno40.js";import{i as p,l as m}from"./index-2qX9Z7y3.js";import{t as h}from"./AdminLayout-3-7Q-2jT.js";import{t as g}from"./notificationService-DLkHPP4W.js";var _=t(r(),1),v=e();function y(){let{studentId:e}=m(),[t,r]=(0,_.useState)(null),[y,b]=(0,_.useState)([]),[x,S]=(0,_.useState)([]),[C,w]=(0,_.useState)([]),[T,E]=(0,_.useState)([]),[D,O]=(0,_.useState)([]),[k,A]=(0,_.useState)(!0),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(``),[F,I]=(0,_.useState)(``),[L,R]=(0,_.useState)(!1),[z,B]=(0,_.useState)(``);(0,_.useEffect)(()=>{V()},[e]);let V=async()=>{try{A(!0),P(``),I(``);let t=await s(a(l,`users`,e));if(!t.exists()){P(`Student not found.`);return}r({id:t.id,...t.data()});let n=[];try{(await d(c(f(l,`enrollments`),i(`studentId`,`==`,e)))).forEach(e=>{n.push({id:e.id,...e.data()})})}catch(e){console.error(`enrollments error:`,e)}b(n);let o=[];try{(await d(c(f(l,`studentCourses`),i(`studentId`,`==`,e)))).forEach(e=>{o.push({id:e.id,...e.data()})})}catch(e){console.error(`studentCourses error:`,e)}S(o);let u=[];try{(await d(c(f(l,`batchStudents`),i(`studentId`,`==`,e)))).forEach(e=>{u.push({id:e.id,...e.data()})})}catch(e){console.error(`batchStudents error:`,e)}w(u);let p=[];try{(await d(f(l,`courses`))).forEach(e=>{p.push({id:e.id,...e.data()})})}catch(e){console.error(`courses error:`,e)}E(p);let m=[];try{(await d(f(l,`batches`))).forEach(e=>{m.push({id:e.id,...e.data()})})}catch(e){console.error(`batches error:`,e)}O(m)}catch(e){console.error(`Student details error:`,e),P(`Failed to load student details.`)}finally{A(!1)}},H=e=>T.find(t=>t.id===e),U=e=>D.find(t=>t.id===e),W=(0,_.useMemo)(()=>{let e=new Set;return y.forEach(t=>{t.courseId&&e.add(t.courseId)}),x.forEach(t=>{t.courseId&&e.add(t.courseId)}),e},[y,x]),G=(0,_.useMemo)(()=>T.filter(e=>!W.has(e.id)),[T,W]),K=(0,_.useMemo)(()=>{let e={};return y.forEach(t=>{let n=t.courseId;n&&(e[n]?e[n].accessStatus===`blocked`&&t.status!==`blocked`&&(e[n].accessStatus=t.status||`active`,e[n].paidEnrollment=t):e[n]={courseId:n,course:H(n),accessType:`paid`,accessStatus:t.status||`active`,paidEnrollment:t,freeCourse:null,batches:[]})}),x.forEach(t=>{let n=t.courseId;n&&(e[n]?(e[n].accessStatus===`blocked`&&t.status!==`blocked`&&(e[n].accessStatus=t.status||`active`),e[n].freeCourse=t):e[n]={courseId:n,course:H(n),accessType:`free`,accessStatus:t.status||`active`,paidEnrollment:null,freeCourse:t,batches:[]})}),C.forEach(t=>{let n=U(t.batchId),r=t.courseId||n?.courseId;r&&e[r]&&e[r].batches.push({...t,batch:n})}),Object.values(e)},[y,x,C,T,D]),q=t?.accountStatus===`blocked`,J=async()=>{if(!t)return;let n=q?`Are you sure you want to unblock this student's account?`:`Are you sure you want to block this student's account?`;if(window.confirm(n))try{M(!0),I(``);let t=q?`active`:`blocked`;await o(a(l,`users`,e),{accountStatus:t}),r(e=>({...e,accountStatus:t})),I(q?`Student account unblocked successfully.`:`Student account blocked successfully.`)}catch(e){console.error(`Account status error:`,e),I(`Unable to update account status.`)}finally{M(!1)}},Y=async e=>{if(!e?.id)return;let t=e.status===`blocked`,r=t?`Unblock this student's access to this course?`:`Block this student's access to this course?`;if(window.confirm(r))try{M(!0),I(``);let r=t?`active`:`blocked`;await o(a(l,`enrollments`,e.id),{status:r,updatedAt:n()}),b(t=>t.map(t=>t.id===e.id?{...t,status:r}:t)),I(t?`Course access unblocked successfully.`:`Course access blocked successfully.`)}catch(e){console.error(`Paid course status error:`,e),I(`Unable to update course access.`)}finally{M(!1)}},X=async e=>{if(!e?.id)return;let t=e.status===`blocked`,r=t?`Unblock this student's access to this course?`:`Block this student's access to this course?`;if(window.confirm(r))try{M(!0),I(``);let r=t?`active`:`blocked`;await o(a(l,`studentCourses`,e.id),{status:r,updatedAt:n()}),S(t=>t.map(t=>t.id===e.id?{...t,status:r}:t)),I(t?`Course access unblocked successfully.`:`Course access blocked successfully.`)}catch(e){console.error(`Free course status error:`,e),I(`Unable to update free course.`)}finally{M(!1)}},Z=async()=>{if(!z){I(`Please select a course.`);return}if(W.has(z)){I(`This student already has this course.`);return}try{M(!0),I(``),await u(f(l,`studentCourses`),{studentId:e,courseId:z,accessType:`free`,status:`active`,createdAt:n(),updatedAt:n()});try{await g({userId:e,type:`courseAssigned`,title:`📚 Course Added`,message:`You have been given access to ${T.find(e=>e.id===z)?.name||`a new course`}.`,courseId:z})}catch(e){console.error(`Free course notification error:`,e)}await V(),R(!1),B(``),I(`Free course given successfully.`)}catch(e){console.error(`Give free course error:`,e),I(`Unable to give free course.`)}finally{M(!1)}};if(k)return(0,v.jsx)(h,{title:`Student Details`,children:(0,v.jsx)(`div`,{className:`
                        min-h-[500px]
                        flex
                        items-center
                        justify-center
                    `,children:(0,v.jsxs)(`div`,{className:`text-center`,children:[(0,v.jsx)(`div`,{className:`
                                w-12
                                h-12
                                mx-auto
                                rounded-full
                                border-4
                                border-orange-400
                                border-t-transparent
                                animate-spin
                            `}),(0,v.jsx)(`p`,{className:`
                                mt-4
                                text-gray-500
                            `,children:`Loading student...`})]})})});if(N||!t)return(0,v.jsx)(h,{title:`Student Details`,children:(0,v.jsxs)(`div`,{className:`
                        bg-white
                        rounded-xl
                        shadow
                        p-10
                        text-center
                    `,children:[(0,v.jsx)(`div`,{className:`text-5xl`,children:`⚠️`}),(0,v.jsx)(`h2`,{className:`
                            mt-4
                            text-2xl
                            font-bold
                            text-[#0F2C23]
                        `,children:`Student Not Found`}),(0,v.jsx)(`p`,{className:`
                            mt-2
                            text-gray-500
                        `,children:N}),(0,v.jsx)(p,{to:`/admin/students`,className:`
                            inline-block
                            mt-6
                            px-6
                            py-3
                            rounded-xl
                            bg-gradient-to-r
                            from-yellow-500
                            to-orange-500
                            text-[#0F2C23]
                            font-bold
                        `,children:`← Back to Students`})]})});let Q=t.name||t.displayName||`Unnamed Student`,$=t.email||`No email`;return(0,v.jsxs)(h,{title:`Student Details`,children:[(0,v.jsxs)(`div`,{className:`space-y-6`,children:[(0,v.jsx)(p,{to:`/admin/students`,className:`
                        inline-block
                        text-gray-500
                        hover:text-orange-500
                        font-medium
                    `,children:`← Back to Students`}),F&&(0,v.jsx)(`div`,{className:`
                            bg-blue-50
                            border
                            border-blue-200
                            text-blue-700
                            px-5
                            py-4
                            rounded-xl
                        `,children:F}),(0,v.jsx)(`div`,{className:`
                        bg-white
                        rounded-xl
                        shadow
                        p-6
                    `,children:(0,v.jsxs)(`div`,{className:`
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-6
                        `,children:[(0,v.jsxs)(`div`,{className:`
                                flex
                                items-center
                                gap-5
                            `,children:[(0,v.jsx)(`div`,{className:`
                                    w-20
                                    h-20
                                    rounded-full
                                    bg-yellow-500
                                    flex
                                    items-center
                                    justify-center
                                    text-[#0F2C23]
                                    text-2xl
                                    font-bold
                                `,children:Q.charAt(0).toUpperCase()}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{className:`
                                        text-2xl
                                        font-bold
                                        text-[#0F2C23]
                                    `,children:Q}),(0,v.jsx)(`p`,{className:`
                                        text-gray-500
                                        mt-1
                                    `,children:$})]})]}),(0,v.jsx)(`span`,{className:`
                                inline-flex
                                px-4
                                py-2
                                rounded-full
                                font-semibold

                                ${q?`bg-red-100 text-red-600`:`bg-green-100 text-green-600`}
                            `,children:q?`Blocked`:`Active`})]})}),(0,v.jsxs)(`div`,{className:`
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-4
                    `,children:[(0,v.jsxs)(`div`,{className:`
                            bg-white
                            rounded-xl
                            shadow
                            p-6
                        `,children:[(0,v.jsx)(`p`,{className:`text-gray-500`,children:`Account Status`}),(0,v.jsx)(`p`,{className:`
                                mt-2
                                text-xl
                                font-bold

                                ${q?`text-red-600`:`text-green-600`}
                            `,children:q?`Blocked`:`Active`})]}),(0,v.jsxs)(`div`,{className:`
                            bg-white
                            rounded-xl
                            shadow
                            p-6
                        `,children:[(0,v.jsx)(`p`,{className:`text-gray-500`,children:`Courses`}),(0,v.jsx)(`p`,{className:`
                                mt-2
                                text-2xl
                                font-bold
                                text-[#0F2C23]
                            `,children:K.length})]}),(0,v.jsxs)(`div`,{className:`
                            bg-white
                            rounded-xl
                            shadow
                            p-6
                        `,children:[(0,v.jsx)(`p`,{className:`text-gray-500`,children:`Batches`}),(0,v.jsx)(`p`,{className:`
                                mt-2
                                text-2xl
                                font-bold
                                text-[#0F2C23]
                            `,children:C.length})]})]}),(0,v.jsxs)(`div`,{className:`
                        bg-white
                        rounded-xl
                        shadow
                        overflow-hidden
                    `,children:[(0,v.jsxs)(`div`,{className:`
                            px-6
                            py-5
                            border-b
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-4
                        `,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:`
                                    text-xl
                                    font-bold
                                    text-[#0F2C23]
                                `,children:`Courses & Batches`}),(0,v.jsx)(`p`,{className:`
                                    mt-1
                                    text-gray-500
                                `,children:`Course access is independent from batch assignment.`})]}),(0,v.jsx)(`button`,{type:`button`,onClick:()=>{B(``),R(!0)},disabled:G.length===0,className:`
                                px-5
                                py-3
                                rounded-xl
                                bg-gradient-to-r
                                from-yellow-500
                                to-orange-500
                                text-[#0F2C23]
                                font-bold
                                hover:opacity-90
                                disabled:opacity-40
                                disabled:cursor-not-allowed
                            `,children:`+ Give Free Course`})]}),K.length===0?(0,v.jsxs)(`div`,{className:`
                                p-10
                                text-center
                                text-gray-500
                            `,children:[(0,v.jsx)(`p`,{children:`This student does not have any courses yet.`}),G.length>0&&(0,v.jsx)(`button`,{type:`button`,onClick:()=>R(!0),className:`
                                        mt-4
                                        text-orange-600
                                        font-semibold
                                    `,children:`Give a free course`})]}):(0,v.jsx)(`div`,{className:`
                                p-5
                                space-y-5
                            `,children:K.map(e=>{let t=e.course,n=t?.name||t?.title||`Unknown Course`,r=!!e.paidEnrollment,i=!!e.freeCourse,a=e.paidEnrollment,o=e.freeCourse,s=e.accessStatus===`blocked`;return(0,v.jsxs)(`div`,{className:`
                                                border
                                                border-gray-200
                                                rounded-2xl
                                                overflow-hidden
                                            `,children:[(0,v.jsxs)(`div`,{className:`
                                                    bg-[#F8F6F2]
                                                    px-6
                                                    py-5
                                                    flex
                                                    flex-col
                                                    lg:flex-row
                                                    lg:items-center
                                                    lg:justify-between
                                                    gap-4
                                                `,children:[(0,v.jsx)(`div`,{children:(0,v.jsxs)(`div`,{className:`
                                                            flex
                                                            flex-wrap
                                                            items-center
                                                            gap-3
                                                        `,children:[(0,v.jsx)(`h4`,{className:`
                                                                text-xl
                                                                font-bold
                                                                text-[#0F2C23]
                                                            `,children:n}),(0,v.jsx)(`span`,{className:`
                                                                px-3
                                                                py-1
                                                                rounded-full
                                                                text-xs
                                                                font-semibold

                                                                ${r?`bg-blue-100 text-blue-700`:`bg-yellow-100 text-yellow-700`}
                                                            `,children:r?`Purchased`:`Free Course`}),(0,v.jsx)(`span`,{className:`
                                                                px-3
                                                                py-1
                                                                rounded-full
                                                                text-xs
                                                                font-semibold

                                                                ${s?`bg-red-100 text-red-700`:`bg-green-100 text-green-700`}
                                                            `,children:s?`Access Blocked`:`Access Active`})]})}),r&&a&&(0,v.jsx)(`button`,{type:`button`,disabled:j,onClick:()=>Y(a),className:`
                                                                px-5
                                                                py-2.5
                                                                rounded-xl
                                                                font-semibold
                                                                text-white

                                                                ${a.status===`blocked`?`bg-green-600 hover:bg-green-700`:`bg-red-600 hover:bg-red-700`}
                                                            `,children:a.status===`blocked`?`Unblock Course`:`Block Course`}),i&&o&&(0,v.jsx)(`button`,{type:`button`,disabled:j,onClick:()=>X(o),className:`
                                                                px-5
                                                                py-2.5
                                                                rounded-xl
                                                                font-semibold
                                                                text-white

                                                                ${o.status===`blocked`?`bg-green-600 hover:bg-green-700`:`bg-red-600 hover:bg-red-700`}
                                                            `,children:o.status===`blocked`?`Unblock Course`:`Block Course`})]}),(0,v.jsxs)(`div`,{className:`
                                                    px-6
                                                    py-5
                                                `,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`div`,{className:`
                                                            flex
                                                            items-center
                                                            justify-between
                                                            mb-3
                                                        `,children:(0,v.jsx)(`h5`,{className:`
                                                                font-bold
                                                                text-[#0F2C23]
                                                            `,children:`Batch`})}),e.batches.length===0?(0,v.jsx)(`div`,{className:`
                                                                border
                                                                border-dashed
                                                                border-gray-300
                                                                rounded-xl
                                                                px-5
                                                                py-4
                                                                text-gray-500
                                                            `,children:`No batch assigned.`}):(0,v.jsx)(`div`,{className:`
                                                                space-y-3
                                                            `,children:e.batches.map(e=>{let t=e.batch||U(e.batchId);return(0,v.jsxs)(`div`,{className:`
                                                                                border
                                                                                border-gray-200
                                                                                rounded-xl
                                                                                px-5
                                                                                py-4
                                                                                flex
                                                                                flex-col
                                                                                md:flex-row
                                                                                md:items-center
                                                                                md:justify-between
                                                                                gap-3
                                                                            `,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`
                                                                                        font-semibold
                                                                                        text-[#0F2C23]
                                                                                    `,children:e.batchName||t?.batchName||t?.name||t?.title||`Unknown Batch`}),(0,v.jsx)(`p`,{className:`
                                                                                        text-sm
                                                                                        text-gray-500
                                                                                        mt-1
                                                                                    `,children:`Batch assigned`})]}),(0,v.jsx)(`span`,{className:`
                                                                                    inline-flex
                                                                                    px-3
                                                                                    py-1
                                                                                    rounded-full
                                                                                    bg-green-100
                                                                                    text-green-700
                                                                                    text-xs
                                                                                    font-semibold
                                                                                `,children:`Assigned`})]},e.id)})})]}),t?.description&&(0,v.jsx)(`div`,{className:`
                                                            mt-5
                                                            pt-5
                                                            border-t
                                                            border-gray-100
                                                        `,children:(0,v.jsx)(`p`,{className:`
                                                                text-sm
                                                                text-gray-500
                                                            `,children:t.description})})]})]},e.courseId)})})]}),(0,v.jsx)(`div`,{className:`
                        bg-white
                        rounded-xl
                        shadow
                        p-6
                    `,children:(0,v.jsxs)(`div`,{className:`
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-5
                        `,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:`
                                    text-xl
                                    font-bold
                                    text-[#0F2C23]
                                `,children:`Account Management`}),(0,v.jsx)(`p`,{className:`
                                    mt-1
                                    text-gray-500
                                `,children:`Manage this student's complete account access.`})]}),(0,v.jsx)(`button`,{type:`button`,disabled:j,onClick:J,className:`
                                px-6
                                py-3
                                rounded-xl
                                font-semibold
                                text-white

                                ${q?`bg-green-600 hover:bg-green-700`:`bg-red-600 hover:bg-red-700`}
                            `,children:j?`Updating...`:q?`Unblock Account`:`Block Account`})]})})]}),L&&(0,v.jsx)(`div`,{className:`
                        fixed
                        inset-0
                        z-[100]
                        bg-black/50
                        flex
                        items-center
                        justify-center
                        p-4
                    `,children:(0,v.jsxs)(`div`,{className:`
                            bg-white
                            w-full
                            max-w-lg
                            rounded-2xl
                            shadow-2xl
                            p-6
                        `,children:[(0,v.jsxs)(`div`,{className:`
                                flex
                                items-center
                                justify-between
                                mb-6
                            `,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:`
                                        text-xl
                                        font-bold
                                        text-[#0F2C23]
                                    `,children:`Give Free Course`}),(0,v.jsx)(`p`,{className:`
                                        text-sm
                                        text-gray-500
                                        mt-1
                                    `,children:`Select a course to give free access.`})]}),(0,v.jsx)(`button`,{type:`button`,onClick:()=>{R(!1),B(``)},className:`
                                    text-gray-500
                                    hover:text-black
                                    text-xl
                                `,children:`✕`})]}),(0,v.jsxs)(`div`,{className:`mb-6`,children:[(0,v.jsx)(`label`,{className:`
                                    block
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                    mb-2
                                `,children:`Course`}),(0,v.jsxs)(`select`,{value:z,onChange:e=>B(e.target.value),className:`
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-xl
                                    px-4
                                    py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-orange-400
                                `,children:[(0,v.jsx)(`option`,{value:``,children:`Select Course`}),G.map(e=>(0,v.jsx)(`option`,{value:e.id,children:e.name||e.title||`Unnamed Course`},e.id))]}),G.length===0&&(0,v.jsx)(`p`,{className:`
                                            mt-3
                                            text-sm
                                            text-gray-500
                                        `,children:`This student already has access to all available courses.`})]}),(0,v.jsxs)(`div`,{className:`
                                flex
                                justify-end
                                gap-3
                            `,children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>{R(!1),B(``)},className:`
                                    px-5
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-300
                                    text-gray-700
                                    font-semibold
                                    hover:bg-gray-50
                                `,children:`Cancel`}),(0,v.jsx)(`button`,{type:`button`,disabled:j||!z,onClick:Z,className:`
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-yellow-500
                                    to-orange-500
                                    text-[#0F2C23]
                                    font-bold
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                `,children:j?`Giving...`:`Give Free Course`})]})]})})]})}export{y as default};