"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[650],{9544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Blueprints/Wax","title":"Wax","description":"","source":"@site/docs/Blueprints/Wax.md","sourceDirName":"Blueprints","slug":"/Blueprints/Wax","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Wax","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/Wax.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"WAX"},"sidebar":"sidebar","previous":{"title":"Theta","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Theta"},"next":{"title":"XRP","permalink":"/aws-blockchain-node-runners/docs/Blueprints/XRP"}}');var r=t(4848),o=t(8453);function i(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sample-cdk-app-for-wax-nodes",children:"Sample CDK app for WAX Nodes"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Contributed by"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://github.com/worldwide-asset-exchange/",children:"worldwide-asset-exchange"})})})})]}),"\n",(0,r.jsxs)(n.p,{children:["WAX is a blockchain-based system designed for gaming industry. It provides high transaction throughput and near-instant block finality. The WAX team has created a AWS Cloud Development Kit (CDK) application to deploy WAX nodes on AWS for development, testing, or Proof of Concept purposes. See the application along with deployment instructions at ",(0,r.jsx)(n.a,{href:"https://github.com/worldwide-asset-exchange/wax-aws-cdk",children:"WAX-AWS-CDK"}),". You can see the deployment architecture blow and for a deep dive look at ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/blogs/database/run-a-wax-blockchain-node-using-aws-cdk/",children:"Run a WAX Blockchain node using AWS CDK"})]}),"\n",(0,r.jsx)(n.h2,{id:"overview-of-deployment-architecture",children:"Overview of Deployment Architecture"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Single Nodes Deployment",src:t(1198).A+"",width:"1111",height:"421"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/worldwide-asset-exchange/wax-aws-cdk",children:"AWS CDK stack"})," has the following features:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Only peer-to-peer connections are allowed with the Internet to synchronize with other WAX nodes"}),"\n",(0,r.jsxs)(n.li,{children:["Multiple processes run on a single Amazon Elastic Compute Cloud (Amazon EC2) instance:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://www.docker.com/resources/what-container/",children:"Docker container"})," with the WAX node in one of two possible configurations (API or Ship node)"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://www.influxdata.com/time-series-platform/telegraf/",children:"Telegraf agent"})," to collect CPU, disk, I/O, and networking metrics for internal monitoring tools"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://victoriametrics.com/",children:"Victoria Metrics"}),", a time series database for storing the metrics from Telegraf and WAX nodes"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana dashboard"})," to display key system and blockchain metrics from CPU and disc usage to synced blocks and sync difference"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"By default, all API ports, including the one for the Grafana web user interface, are available only to IP addresses from within the same VPC."}),"\n",(0,r.jsx)(n.li,{children:"The logs of the WAX node are published to Amazon CloudWatch."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={sidebar_label:"WAX"},l="",d={},h=[{value:"Overview of Deployment Architecture",id:"overview-of-deployment-architecture",level:2}];function p(e){const n={h1:"h1",header:"header",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:""})}),"\n","\n",(0,r.jsx)(a,{})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1198:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Architecture-SingleNode.drawio-f3f15326638fb156bdda983bfbd5d9cd.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);