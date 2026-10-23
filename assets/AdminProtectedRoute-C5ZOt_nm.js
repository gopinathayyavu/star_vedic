import{H as e}from"./firebase-BMmhno40.js";import{o as t,r as n}from"./index-2qX9Z7y3.js";var r=e();function i({children:e}){let{currentUser:i,userData:a,loading:o}=n();return o?(0,r.jsx)(`div`,{className:`\r
                    min-h-screen\r
                    flex\r
                    items-center\r
                    justify-center\r
                `,children:`Loading...`}):i?!a||a.role!==`admin`?(0,r.jsx)(t,{to:`/`,replace:!0}):e:(0,r.jsx)(t,{to:`/admin/login`,replace:!0})}export{i as default};