import{H as e,K as t,U as n,n as r,u as i,y as a}from"./firebase-BMmhno40.js";import{i as o}from"./index-2qX9Z7y3.js";import{t as s}from"./AdminLayout-3-7Q-2jT.js";var c=t(n(),1),l=e();function u(){let[e,t]=(0,c.useState)([]),[n,u]=(0,c.useState)(!0),[d,f]=(0,c.useState)(``),[p,m]=(0,c.useState)(`all`);(0,c.useEffect)(()=>{(async()=>{try{u(!0);let e=await i(a(r,`users`)),n=[];e.forEach(e=>{let t=e.data();t.role===`student`&&n.push({id:e.id,...t})}),t(n)}catch(e){console.error(`Failed to load students:`,e)}finally{u(!1)}})()},[]);let h=(0,c.useMemo)(()=>e.filter(e=>{let t=String(e.name||e.displayName||``).toLowerCase(),n=String(e.email||``).toLowerCase(),r=d.toLowerCase().trim(),i=!r||t.includes(r)||n.includes(r),a=e.blocked===!0||e.status===`blocked`||e.accountStatus===`blocked`,o=!0;return p===`active`&&(o=!a),p===`blocked`&&(o=a),i&&o}),[e,d,p]),g=e.length,_=e.filter(e=>e.blocked===!0||e.status===`blocked`||e.accountStatus===`blocked`).length,v=g-_;return(0,l.jsx)(s,{title:`Students`,children:(0,l.jsxs)(`div`,{className:`space-y-6`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h2`,{className:`text-3xl font-bold text-[#0F2C23]`,children:`Students`}),(0,l.jsx)(`p`,{className:`mt-1 text-gray-500`,children:`Manage students, courses and account access.`})]}),(0,l.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[(0,l.jsxs)(`div`,{className:`bg-white p-6 rounded-xl shadow`,children:[(0,l.jsx)(`p`,{className:`text-gray-500`,children:`Total Students`}),(0,l.jsx)(`h3`,{className:`mt-2 text-3xl font-bold text-[#0F2C23]`,children:g})]}),(0,l.jsxs)(`div`,{className:`bg-white p-6 rounded-xl shadow`,children:[(0,l.jsx)(`p`,{className:`text-gray-500`,children:`Active Students`}),(0,l.jsx)(`h3`,{className:`mt-2 text-3xl font-bold text-green-600`,children:v})]}),(0,l.jsxs)(`div`,{className:`bg-white p-6 rounded-xl shadow`,children:[(0,l.jsx)(`p`,{className:`text-gray-500`,children:`Blocked Students`}),(0,l.jsx)(`h3`,{className:`mt-2 text-3xl font-bold text-red-600`,children:_})]})]}),(0,l.jsx)(`div`,{className:`bg-white p-5 rounded-xl shadow`,children:(0,l.jsxs)(`div`,{className:`flex flex-col md:flex-row gap-4`,children:[(0,l.jsx)(`input`,{type:`text`,value:d,onChange:e=>f(e.target.value),placeholder:`Search student by name or email...`,className:`\r
                                flex-1\r
                                border\r
                                border-gray-200\r
                                rounded-xl\r
                                px-4\r
                                py-3\r
                                outline-none\r
                                focus:ring-2\r
                                focus:ring-yellow-400\r
                            `}),(0,l.jsxs)(`select`,{value:p,onChange:e=>m(e.target.value),className:`\r
                                border\r
                                border-gray-200\r
                                rounded-xl\r
                                px-4\r
                                py-3\r
                                bg-white\r
                                outline-none\r
                            `,children:[(0,l.jsx)(`option`,{value:`all`,children:`All Students`}),(0,l.jsx)(`option`,{value:`active`,children:`Active Students`}),(0,l.jsx)(`option`,{value:`blocked`,children:`Blocked Students`})]})]})}),(0,l.jsxs)(`div`,{className:`bg-white rounded-xl shadow overflow-hidden`,children:[(0,l.jsxs)(`div`,{className:`px-6 py-4 border-b`,children:[(0,l.jsx)(`h3`,{className:`text-lg font-bold text-[#0F2C23]`,children:`Students`}),(0,l.jsxs)(`p`,{className:`text-sm text-gray-500 mt-1`,children:[`Showing`,` `,(0,l.jsx)(`span`,{className:`font-semibold`,children:h.length}),` `,`of`,` `,(0,l.jsx)(`span`,{className:`font-semibold`,children:e.length}),` `,`students`]})]}),n&&(0,l.jsx)(`div`,{className:`p-10 text-center text-gray-500`,children:`Loading students...`}),!n&&h.length===0&&(0,l.jsx)(`div`,{className:`p-10 text-center`,children:(0,l.jsx)(`p`,{className:`text-gray-500`,children:`No students found.`})}),!n&&h.length>0&&(0,l.jsx)(`div`,{className:`divide-y`,children:h.map(e=>{let t=e.blocked===!0||e.status===`blocked`||e.accountStatus===`blocked`,n=e.name||e.displayName||`Unnamed Student`,r=e.email||`No email`;return(0,l.jsxs)(`div`,{className:`\r
                                                    px-6\r
                                                    py-5\r
                                                    flex\r
                                                    flex-col\r
                                                    md:flex-row\r
                                                    md:items-center\r
                                                    md:justify-between\r
                                                    gap-4\r
                                                    hover:bg-gray-50\r
                                                `,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{className:`font-semibold text-lg text-[#0F2C23]`,children:n}),(0,l.jsx)(`p`,{className:`text-gray-500`,children:r})]}),(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsx)(`span`,{className:`
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                            font-semibold

                                                            ${t?`bg-red-100 text-red-600`:`bg-green-100 text-green-600`}
                                                        `,children:t?`Blocked`:`Active`}),(0,l.jsx)(o,{to:`/admin/students/${e.id}`,className:`\r
                                                            text-[#0F2C23]\r
                                                            font-semibold\r
                                                            hover:text-orange-500\r
                                                            transition\r
                                                        `,children:`View →`})]})]},e.id)})})]})]})})}export{u as default};