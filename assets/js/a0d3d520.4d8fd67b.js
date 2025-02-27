"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[948],{5171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Blueprints/XRP","title":"XRP","description":"","source":"@site/docs/Blueprints/XRP.md","sourceDirName":"Blueprints","slug":"/Blueprints/XRP","permalink":"/aws-blockchain-node-runners/docs/Blueprints/XRP","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/XRP.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"XRP"},"sidebar":"sidebar","previous":{"title":"WAX","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Wax"}}');var l=n(4848),i=n(8453);function r(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"sample-aws-blockchain-node-runner-app-for-xrp-nodes",children:"Sample AWS Blockchain Node Runner app for XRP Nodes"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsx)(t.tr,{children:(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Contributed by"})})}),(0,l.jsx)(t.tbody,{children:(0,l.jsx)(t.tr,{children:(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["Pedro Aceves ",(0,l.jsx)("br",{}),(0,l.jsx)(t.a,{href:"mailto:acevespa@amazon.com",children:"acevespa@amazon.com"})]})})})]}),"\n",(0,l.jsxs)(t.p,{children:["XRP node deployment on AWS. All nodes are configure as ",(0,l.jsx)(t.a,{href:"https://xrpl.org/docs/infrastructure/configuration/server-modes/run-rippled-as-a-stock-server",children:'"Stock Servers"'})]}),"\n",(0,l.jsx)(t.h2,{id:"overview-of-deployment-architectures-for-single-and-ha-setups",children:"Overview of Deployment Architectures for Single and HA setups"}),"\n",(0,l.jsx)(t.h3,{id:"single-node-setup",children:"Single node setup"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Single Node Deployment",src:n(6730).A+"",width:"911",height:"311"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["A XRP node deployed in the ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on the configured xrp network through ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),"."]}),"\n",(0,l.jsx)(t.li,{children:"The XRP node is used by dApps or development tools internally from within the Default VPC. RPC API is not exposed to the Internet directly to protect nodes from unauthorized access."}),"\n",(0,l.jsx)(t.li,{children:"The XRP node sends various monitoring metrics for both EC2 and current XRP ledger sequence to Amazon CloudWatch. It also updates the dashboard with correct storage device names to display respective metrics properly."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"ha-setup",children:"HA setup"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Highly Available Nodes Deployment",src:n(9486).A+"",width:"1001",height:"571"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["A set of XRP nodes are deployed within an ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html",children:"Auto Scaling Group"})," in the ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizing with the rest of nodes on the configured xrp network through ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["The XRP nodes are accessed by dApps or development tools internally through ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",children:"Application Load Balancer"}),". RPC API is not exposed to the Internet to protect nodes from unauthorized access."]}),"\n",(0,l.jsx)(t.li,{children:"The XRP nodes send various monitoring metrics for EC2 to Amazon CloudWatch."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"well-architected",children:"Well-Architected"}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Review the for pros and cons of this solution."}),(0,l.jsx)(t.h3,{id:"well-architected-checklist",children:"Well-Architected Checklist"}),(0,l.jsxs)(t.p,{children:["This is the Well-Architected checklist for XRP nodes implementation of the AWS Blockchain Node Runner app. This checklist takes into account questions from the ",(0,l.jsx)(t.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected Framework"})," which are relevant to this workload. Please feel free to add more checks from the framework if required for your workload."]}),(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Pillar"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Control"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Question/Check"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Security"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Network protection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Are there unnecessary open ports in security groups?"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Please note that XRP sync ports remain open for outbound connections; Port 2459 and 51235 (TCP/UDP)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Traffic inspection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"AWS WAF could be implemented for traffic inspection. Additional charges will apply."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Compute protection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reduce attack surface"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon Linux 2 AMI. You may choose to run hardening scripts on it."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enable people to perform actions at a distance"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Systems Manager for terminal session, not ssh ports."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection at rest"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Simple Storage Service (Amazon S3) buckets"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon S3 managed keys (SSE-S3) encryption."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection in transit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Use TLS"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The AWS Application Load balancer currently uses HTTP listener. Create HTTPS listener with self signed certificate if TLS is desired."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization and access control"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Following principle of least privilege access"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Privileges are scoped down."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Application security"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Security focused development practices"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"cdk-nag is being used with appropriate suppressions."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Cost optimization"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Service selection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Use cost effective resources"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Cost efficient R7a instances are being used, which are ideal for high transaction and low latecy workloads."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reliability"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Resiliency implementation"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Withstand component failures"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Application Load Balancer with RPC nodes for high availability."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Resource monitoring"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"How are workload resources monitored?"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Resources are being monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are being pushed via CloudWatch Agent."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Performance efficiency"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Compute selection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"How is compute solution selected?"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Compute solution is selected based on best price-performance."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Storage selection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"How is storage solution selected?"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Storage solution is selected based on best price-performance."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Operational excellence"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Workload health"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"How is health of workload determined?"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Health of workload is determined via AWS Application Load Balancer Target Group Health Checks, on port 8545."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sustainability"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Hardware & services"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Select most efficient hardware for your workload"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Amazon EC2 R7a instances support the Sustainability Pillar of the AWS Well-Architected Framework by offering memory optimization that enables more efficient resource utilization, potentially reducing overall energy consumption and hardware requirements for data-intensive workloads."})]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,l.jsx)(t.h3,{id:"open-aws-cloudshell",children:"Open AWS CloudShell"}),"\n",(0,l.jsx)(t.p,{children:"To begin, ensure you login to your AWS account with permissions to create and modify resources in IAM, EC2, EBS, VPC, S3, KMS, and Secrets Manager."}),"\n",(0,l.jsxs)(t.p,{children:["From the AWS Management Console, open the ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html",children:"AWS CloudShell"}),", a web-based shell environment. If unfamiliar, review the ",(0,l.jsx)(t.a,{href:"https://youtu.be/fz4rbjRaiQM",children:"2-minute YouTube video"})," for an overview and check out ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell with VPC environment"})," that we'll use to test nodes API from internal IP address space."]}),"\n",(0,l.jsx)(t.p,{children:"Once ready, you can run the commands to deploy and test blueprints in the CloudShell."}),"\n",(0,l.jsx)(t.h3,{id:"clone-this-repository-and-install-dependencies",children:"Clone this repository and install dependencies"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/aws-samples/aws-blockchain-node-runners.git\ncd aws-blockchain-node-runners\nnpm install\n"})}),"\n",(0,l.jsx)(t.h3,{id:"configure-your-setup",children:"Configure your setup"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Make sure you are in the root directory of the cloned repository"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If you have deleted or don't have the default VPC, create default VPC"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"aws ec2 create-default-vpc\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"NOTE:"})," ",(0,l.jsxs)(t.em,{children:["You may see the following error if the default VPC already exists: ",(0,l.jsx)(t.code,{children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region."}),". That means you can just continue with the following steps."]})]}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsx)(t.li,{children:"Configure  your setup"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Create your own copy of ",(0,l.jsx)(t.code,{children:".env"})," file and edit it to update with your AWS Account ID and Region:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"cd lib/xrp\ncp ./sample-configs/.env-sample-testnet .env\nnano .env\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"NOTE:"})," *You can find more examples inside ",(0,l.jsx)(t.code,{children:"sample-configs"})," *"]}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"Deploy common components such as IAM role:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npx cdk deploy XRP-common\n"})}),"\n",(0,l.jsx)(t.h3,{id:"deploy-a-single-node",children:"Deploy a Single Node"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Deploy the node"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npx cdk deploy XRP-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["After starting the node you need to wait for the initial synchronization process to finish. You can use Amazon CloudWatch to track the progress. There is a script that publishes CloudWatch metrics every 5 minutes, where you can watch ",(0,l.jsx)(t.code,{children:"XRP Sequence"})," metrics. When the node is fully synced the sequence should match that of the configured xrp network (testnet, mainnet, etc). To see them:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Navigate to ",(0,l.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are in the region you have specified for ",(0,l.jsx)(t.code,{children:"AWS_REGION"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["Open ",(0,l.jsx)(t.code,{children:"Dashboards"})," and select dashboard that starts with ",(0,l.jsx)(t.code,{children:"XRP-single-node"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Once the initial synchronization is done, you should be able to access the RPC API of that node from within the same VPC. The RPC port is not exposed to the Internet. Run the following query against the private IP of the single RPC node you deployed:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '.[\"XRP-single-node\"].nodeinstanceid')\n NODE_INTERNAL_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[*].Instances[*].PrivateIpAddress' --output text)\necho \"NODE_INTERNAL_IP=$NODE_INTERNAL_IP\"\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Copy output from the last ",(0,l.jsx)(t.code,{children:"echo"})," command with ",(0,l.jsx)(t.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," and open ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell tab with VPC environment"})," to access internal IP address space. Paste ",(0,l.jsx)(t.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," into the new CloudShell tab."]}),"\n",(0,l.jsx)(t.p,{children:"Then query the RPC API to receive the latest block height:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'# IMPORTANT: Run from CloudShell VPC environment tab\ncurl -X POST -H "Content-Type: application/json" http://$NODE_INTERNAL_IP:6005/ -d \'{\n "method": "ledger_current",\n "params": [{}]\n}\'\n'})}),"\n",(0,l.jsx)(t.p,{children:"You will get a response similar to this:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{"result":{"ledger_current_index":5147254,"status":"success"}}\n'})}),"\n",(0,l.jsx)(t.p,{children:"Note: If the node is still syncing, you will receive the following response:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{"result":{"error":"noNetwork","error_code":17,"error_message":"Not synced to the network.","request":{"command":"ledger_current"},"status":"error"}}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"deploy-ha-nodes",children:"Deploy HA Nodes"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Deploy multiple HA Nodes"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/xrp\nnpx cdk deploy XRP-ha-nodes --json --outputs-file ha-nodes-deploy.json\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Give the new nodes time to initialize"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"To perform an RPC request to your load balancer, run the following command to retrieve the ALB URL:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"export XRP_RPC_ALB_URL=$(cat ha-nodes-deploy.json | jq -r '..|.alburl? | select(. != null)')\necho XRP_RPC_ALB_URL=$XRP_RPC_ALB_URL\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Copy output from the last ",(0,l.jsx)(t.code,{children:"echo"})," command with ",(0,l.jsx)(t.code,{children:"XRP_RPC_ALB_URL=<alb_url>"})," and open ",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell tab with VPC environment"})," to access internal IP address space. Paste ",(0,l.jsx)(t.code,{children:"XRP_RPC_ALB_URL=<alb_url>"})," into the VPC CloudShell tab."]}),"\n",(0,l.jsx)(t.p,{children:"Then query the load balancer to retrieve the current block height:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" http://$XRP_RPC_ALB_URL:6005/ -d \'{\n  "method": "ledger_current",\n  "params": [{}]\n  }\'\n'})}),"\n",(0,l.jsx)(t.p,{children:"You will get a response similar to this:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{"result":{"ledger_current_index":5147300,"status":"success"}}\n'})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"NOTE:"})," ",(0,l.jsx)(t.em,{children:"By default and for security reasons the load balancer is available only from within the default VPC in the region where it is deployed. It is not available from the Internet and is not open for external connections. Before opening it up please make sure you protect your RPC APIs."})]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"cleaning-up-and-undeploying-everything",children:"Cleaning up and undeploying everything"}),"\n",(0,l.jsx)(t.p,{children:"Destroy HA Nodes, Single Nodes and Common stacks"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"# Setting the AWS account id and region in case local .env file is lost\n export AWS_ACCOUNT_ID=<your_target_AWS_account_id>\n export AWS_REGION=<your_target_AWS_region>\n\npwd\n# Make sure you are in aws-blockchain-node-runners/lib/xrp\n\n# Destroy HA Nodes\ncdk destroy XRP-ha-nodes\n\n# Destroy Single Node\ncdk destroy XRP-single-node\n\n# Delete all common components like IAM role and Security Group\ncdk destroy XRP-common\n"})}),"\n",(0,l.jsx)(t.h3,{id:"faq",children:"FAQ"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"How to check the logs from the EC2 user-data script?"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'pwd\n# Make sure you are in aws-blockchain-node-runners/lib/xrp\n\nexport INSTANCE_ID=$(cat single-node-deploy.json | jq -r \'.["XRP-single-node"].nodeinstanceid\')\necho "INSTANCE_ID=" $INSTANCE_ID\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo cat /var/log/cloud-init-output.log\nsudo cat /var/log/user-data.log\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["How can I change rippled (XRP) configuration?",(0,l.jsx)(t.br,{}),"\n","There are two places of configuration for the xrp nodes:"]}),"\n",(0,l.jsxs)(t.p,{children:["a. ",(0,l.jsx)(t.code,{children:".env"})," file. Here is where you specify the xrp network you want. This is the key for the config in part b"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'HUB_NETWORK_ID="testnet"\n'})}),"\n",(0,l.jsxs)(t.p,{children:["b. ",(0,l.jsx)(t.code,{children:"lib/xrp/lib/assets/rippled/rippledconfig.py"}),' file. Here you can setup listeners and network configuration for the network specified in part "a"']}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}const d={sidebar_label:"XRP"},c="",a={},h=[{value:"Overview of Deployment Architectures for Single and HA setups",id:"overview-of-deployment-architectures-for-single-and-ha-setups",level:2},{value:"Single node setup",id:"single-node-setup",level:3},{value:"HA setup",id:"ha-setup",level:3},{value:"Well-Architected",id:"well-architected",level:2},{value:"Well-Architected Checklist",id:"well-architected-checklist",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Open AWS CloudShell",id:"open-aws-cloudshell",level:3},{value:"Clone this repository and install dependencies",id:"clone-this-repository-and-install-dependencies",level:3},{value:"Configure your setup",id:"configure-your-setup",level:3},{value:"Deploy a Single Node",id:"deploy-a-single-node",level:3},{value:"Deploy HA Nodes",id:"deploy-ha-nodes",level:3},{value:"Cleaning up and undeploying everything",id:"cleaning-up-and-undeploying-everything",level:3},{value:"FAQ",id:"faq",level:3}];function u(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:""})}),"\n","\n",(0,l.jsx)(o,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},9486:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Architecture-HA Nodes.drawio-f487da08d83ff14402db6fde82139dc5.png"},6730:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Architecture-Single node.drawio-af3ee88ee23dba1fef65dabd59d4bca7.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);