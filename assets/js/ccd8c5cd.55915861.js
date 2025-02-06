"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[36],{5653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Blueprints/Solana","title":"Solana","description":"","source":"@site/docs/Blueprints/Solana.md","sourceDirName":"Blueprints","slug":"/Blueprints/Solana","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Solana","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/Solana.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Solana"},"sidebar":"sidebar","previous":{"title":"Scroll","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Scroll"},"next":{"title":"Stacks","permalink":"/aws-blockchain-node-runners/docs/Blueprints/Stacks"}}');var l=t(4848),o=t(8453);function i(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"sample-aws-blockchain-node-runner-app-for-solana-nodes",children:"Sample AWS Blockchain Node Runner app for Solana Nodes"})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Contributed by"})})}),(0,l.jsx)(n.tbody,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.a,{href:"https://github.com/frbrkoala",children:"@frbrkoala"})})})})]}),"\n",(0,l.jsx)(n.p,{children:"Solana nodes on AWS can be deployed in 2 different configurations: base RPC and extended RPC with secondary indexes. In addition, you can choose to deploy those configurations as a single node or a highly available (HA) nodes setup and use x86- or ARM-powered EC2 instances. See below the details on single node and HA deployment setups."}),"\n",(0,l.jsx)(n.h2,{id:"overview-of-deployment-architectures-for-single-and-ha-setups",children:"Overview of Deployment Architectures for Single and HA setups"}),"\n",(0,l.jsx)(n.h3,{id:"single-node-setup",children:"Single node setup"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Single Node Deployment",src:t(2064).A+"",width:"911",height:"311"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["A Solana node deployed in the ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on ",(0,l.jsx)(n.a,{href:"https://docs.solana.com/clusters",children:"Solana Clusters"})," through ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"The Solana node is used by dApps or development tools internally from within the Default VPC. JSON RPC API is not exposed to the Internet directly to protect nodes from unauthorized access."}),"\n",(0,l.jsxs)(n.li,{children:["The Solana node uses all required secrets locally, but optionally can store a copy in ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"})," as secure backup."]}),"\n",(0,l.jsx)(n.li,{children:"The Solana node sends various monitoring metrics for both EC2 and Solana nodes to Amazon CloudWatch. It also updates the dashboard with correct storage device names to display respective metrics properly."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"ha-setup",children:"HA setup"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Highly Available Nodes Deployment",src:t(3158).A+"",width:"1001",height:"571"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["A set of Base or Extended RPC Solana nodes are deployed within the ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html",children:"Auto Scaling Group"})," in the ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on ",(0,l.jsx)(n.a,{href:"https://docs.solana.com/clusters",children:"Solana Clusters"})," through ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),". ",(0,l.jsx)(n.strong,{children:"Note that HA setup is not suitable for Consensus nodes."})]}),"\n",(0,l.jsxs)(n.li,{children:["The Solana nodes are accessed by dApps or development tools internally through ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",children:"Application Load Balancer"}),". JSON RPC API is not exposed to the Internet to protect nodes from unauthorized access. dApps need to handle user authentication and API protection, like ",(0,l.jsx)(n.a,{href:"https://aws.amazon.com/blogs/architecture/dapp-authentication-with-amazon-cognito-and-web3-proxy-with-amazon-api-gateway/",children:"in this example for dApps on AWS"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["The Solana nodes use all required secrets locally, but optionally can store a copy in ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"})," as secure backup."]}),"\n",(0,l.jsx)(n.li,{children:"The Solana nodes send various monitoring metrics for both EC2 and Solana nodes to Amazon CloudWatch."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"additional-materials",children:"Additional materials"}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Managing Secrets"}),(0,l.jsx)(n.p,{children:"Upon initialization, if a node fails to locate the requisite identity file on the associated Root EBS volume, it automatically generates a new one. We no longer store secrets in AWS Secrets Manager by default. In the case of a single-node deployment, the Amazon Resource Name (ARN) of the secret can be specified within the .env configuration file. The node will then retrieve and utilize this information during its startup process."}),(0,l.jsx)(n.p,{children:"Base RPC and Extended RPC nodes use only 1 secret:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Solana Node Identity Secret"}),": The identity key pair for a Solana node."]}),"\n"]}),(0,l.jsx)(n.p,{children:"Consensus node uses up to 3 more identity secrets:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Vote Account Secret"}),": The ",(0,l.jsx)(n.a,{href:"https://docs.solana.com/running-validator/vote-accounts#validator-identity",children:"Validator Identity's key pair"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Authorized Withdrawer Account Secret"}),": The ",(0,l.jsx)(n.a,{href:"https://docs.solana.com/running-validator/vote-accounts#authorized-withdrawer",children:"Authorized Withdrawer key pair"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Registration Transaction Funding Account Secret"}),": An account that has sufficient SOL to pay for on-chain validator creation transaction. If not present, the node provisioning script assumes the on-chain validator creation transaction was issued elsewhere and will skip it."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Well-Architected Checklist"}),(0,l.jsxs)(n.p,{children:["This is the Well-Architected checklist for Solana nodes implementation of the AWS Blockchain Node Runner app. This checklist takes into account questions from the ",(0,l.jsx)(n.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected Framework"})," which are relevant to this workload. Please feel free to add more checks from the framework if required for your workload."]}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Pillar"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Control"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Question/Check"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Security"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Network protection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Are there unnecessary open ports in security groups?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Please note that ports 8801 to 8814 (TCP/UDP) for Solana are open to public to support P2P protocols. We have to rely on the protection mechanisms built into the Solana validators software to protect those ports."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Traffic inspection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Traffic protection is not used in the solution. AWS Web Applications Firewall (WAF) could be implemented for traffic inspection. Additional charges will apply."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Compute protection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Reduce attack surface"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution uses Ubuntu 24.04 AMI. You may choose to run hardening scripts on it."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Enable people to perform actions at a distance"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution uses AWS Systems Manager for terminal session, not ssh ports."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Data protection at rest"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Simple Storage Service (Amazon S3) buckets"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution does not uses Amazon S3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Data protection in transit"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Use TLS"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The AWS Application Load balancer currently uses HTTP listener. Create HTTPS listener with self signed certificate if TLS is desired."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Authorization and access control"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Following principle of least privilege access"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:'In all node types, root user is not used (using special user "solana" instead).'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Application security"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Security focused development practices"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"cdk-nag is being used with appropriate suppressions."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Cost optimization"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Service selection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Use cost effective resources"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"1/ AMD-based instances are used for Consensus and RPC node to save the costs. Consider compiling Graviton-based binaries to improve costs for compute. 2/ Cost-effective EBS gp3 are preferred instead of io2. 3/ Solana nodes generate a substantial amount of outgoing data traffic, which deeds to be addressed with non-technical means like getting private agreements with AWS."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Cost awareness"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Estimate costs"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Single RPC node with ",(0,l.jsx)(n.code,{children:"r7a.12xlarge"})," EBS gp3 volumes about 2549 GB with On-Demand pricing will cost around US$2,665.67 per month in the US East (N. Virginia) region. More cost-optimal option with 3 year Compute Savings plan the cost goes down to $1,643.52 USD. Additionally, the data transfer costs can be about $1,356.80 USD per month for 15TB of outgoing traffic. Check pricing with ",(0,l.jsx)(n.a,{href:"https://calculator.aws/",children:"AWS Calculator"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Reliability"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Resiliency implementation"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Withstand component failures"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This solution uses AWS Application Load Balancer with RPC nodes for high availability. Newly provisioned Solana nodes triggered by Auto Scaling get up and running in about 30-50 minutes."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Data backup"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How is data backed up?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Considering blockchain data is replicated by nodes automatically and Solana nodes sync from start within an hour, we don't use any additional mechanisms to backup the data."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Resource monitoring"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How are workload resources monitored?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Resources are being monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are being pushed via CloudWatch Agent."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Performance efficiency"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Compute selection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How is compute solution selected?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Compute solution is selected based on best price-performance, i.e. AWS AMD-based Amazon EC2 instances."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Storage selection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How is storage solution selected?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Storage solution is selected based on best price-performance, i.e. gp3 Amazon EBS volumes with optimal IOPS and throughput."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Architecture selection"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How is the best performance architecture selected?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"We used a combination of recommendations from the Solana community and our own testing."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Operational excellence"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Workload health"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"How is health of workload determined?"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Health of workload is determined via AWS Application Load Balancer Target Group Health Checks, on port 8899."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Sustainability"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Hardware & services"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Select most efficient hardware for your workload"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The solution uses AMD- and ARM-powered instances. You can choose to use AWS Graviton-based Amazon EC2 instances offer the best performance per watt of energy use in Amazon EC2."})]})]})]})]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Recommended Infrastructure"}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Usage pattern"}),(0,l.jsx)(n.th,{children:"Ideal configuration"}),(0,l.jsx)(n.th,{children:"Primary option on AWS"}),(0,l.jsx)(n.th,{children:"Data Transfer Estimates"}),(0,l.jsx)(n.th,{children:"Config reference"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1/ Base RPC node (no secondary indexes)"}),(0,l.jsx)(n.td,{children:"48 vCPU, 384 GiB RAM, Accounts volume: EBS gp3, 500GiB, 7K IOPS, 700 MB/s throughput, Data volume: EBS gp3, 2TB, 9K IOPS, 700 MB/s throughput"}),(0,l.jsx)(n.td,{children:"r7a.12xlarge, Accounts volume: EBS gp3, 500GiB, 7K IOPS, 700 MB/s throughput, Data volume: EBS gp3, 2TB, 9K IOPS, 700 MB/s throughput"}),(0,l.jsx)(n.td,{children:"13-15TB/month (no staking)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"./sample-configs/.env-sample-baserpc-x86",children:".env-sample-baserpc-x86"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2/ Extended RPC node (with all secondary indexes)"}),(0,l.jsx)(n.td,{children:"96 vCPU, 768 GiB RAM, Accounts volume: 500GiB, 7K IOPS, 700 MB/s throughput, Data volume: 2TB, 9K IOPS, 700 MB/s throughput"}),(0,l.jsx)(n.td,{children:"I8g.18xlarge, Accounts volume: Instance Store, Data volume: Instance Store"}),(0,l.jsx)(n.td,{children:"20-38TB/month (no staking)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"./sample-configs/.env-sample-extendedrpc-arm",children:".env-sample-extendedrpc-arm"})})]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,l.jsx)(n.h3,{id:"open-aws-cloudshell",children:"Open AWS CloudShell"}),"\n",(0,l.jsx)(n.p,{children:"To begin, ensure you login to your AWS account with permissions to create and modify resources in IAM, EC2, EBS, VPC, S3, KMS, and Secrets Manager."}),"\n",(0,l.jsxs)(n.p,{children:["From the AWS Management Console, open the ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html",children:"AWS CloudShell"}),", a web-based shell environment. If unfamiliar, review the ",(0,l.jsx)(n.a,{href:"https://youtu.be/fz4rbjRaiQM",children:"2-minute YouTube video"})," for an overview and check out ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell with VPC environment"})," that we'll use to test nodes API from internal IP address space."]}),"\n",(0,l.jsx)(n.p,{children:"Once ready, you can run the commands to deploy and test blueprints in the CloudShell."}),"\n",(0,l.jsx)(n.h3,{id:"clone-this-repository-and-install-dependencies",children:"Clone this repository and install dependencies"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/aws-samples/aws-blockchain-node-runners.git\ncd aws-blockchain-node-runners\nnpm install\n"})}),"\n",(0,l.jsx)(n.h3,{id:"configure-your-setup",children:"Configure your setup"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Make sure you are in the root directory of the cloned repository"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If you have deleted or don't have the default VPC, create default VPC"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-default-vpc\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE:"})," ",(0,l.jsxs)(n.em,{children:["You may see the following error if the default VPC already exists: ",(0,l.jsx)(n.code,{children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region."}),". That means you can just continue with the following steps."]})]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Configure  your setup"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Create your own copy of ",(0,l.jsx)(n.code,{children:".env"})," file and edit it to update with your AWS Account ID and Region:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd lib/solana\ncp ./sample-configs/.env-sample-baserpc-arm .env\nnano .env\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE:"})," ",(0,l.jsxs)(n.em,{children:["You can find more examples inside ",(0,l.jsx)(n.code,{children:"sample-configs"})," directory: ARM-powered and x86-powered setups, base and extended RPC configurations."]})]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Deploy common components such as IAM role:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx cdk deploy solana-common\n"})}),"\n",(0,l.jsx)(n.h3,{id:"deploy-a-single-node",children:"Deploy a Single Node"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Deploy the node"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx cdk deploy solana-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["After starting the node you need to wait for the initial synchronization process to finish. It may take from 1 to 4 hours and you can use Amazon CloudWatch to track the progress. There is a script that publishes CloudWatch metrics every 5 minutes, where you can watch ",(0,l.jsx)(n.code,{children:"current block"})," and ",(0,l.jsx)(n.code,{children:"slots behind"})," metrics. When the node is fully synced the ",(0,l.jsx)(n.code,{children:"slots behind"})," metric should go to 0. To see them:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to ",(0,l.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are in the region you have specified for ",(0,l.jsx)(n.code,{children:"AWS_REGION"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.code,{children:"Dashboards"})," and select ",(0,l.jsx)(n.code,{children:"solana-single-node"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Connect with the RPC API exposed by the node:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.nodeinstanceid? | select(. != null)')\nNODE_INTERNAL_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[*].Instances[*].PrivateIpAddress' --output text)\necho \"NODE_INTERNAL_IP=$NODE_INTERNAL_IP\"\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Copy output from the last ",(0,l.jsx)(n.code,{children:"echo"})," command with ",(0,l.jsx)(n.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," and open ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell tab with VPC environment"})," to access internal IP address space. Paste ",(0,l.jsx)(n.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," into the new CloudShell tab. Then query the API:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'# IMPORTANT: Run from CloudShell VPC environment tab\n# We query token balance this account: https://solanabeach.io/address/9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM\ncurl http://$NODE_INTERNAL_IP:8899 -X POST -H "Content-Type: application/json" \\\n --data \'{ "jsonrpc": "2.0", "id": 1, "method": "getBalance", "params": ["9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}\'\n'})}),"\n",(0,l.jsx)(n.h3,{id:"deploy-ha-nodes",children:"Deploy HA Nodes"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Deploy multiple HA Nodes"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/solana\nnpx cdk deploy solana-ha-nodes --json --outputs-file ha-nodes-deploy.json\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Give the new RPC nodes 1 to 4 hours to initialize and then run the following query against the load balancer behind the RPC node created"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export RPC_ABL_URL=$(cat ha-nodes-deploy.json | jq -r '..|.ALBURL? | select(. != null)')\necho RPC_ABL_URL=$RPC_ABL_URL\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Copy output from the last ",(0,l.jsx)(n.code,{children:"echo"})," command with ",(0,l.jsx)(n.code,{children:"RPC_ABL_URL=<internal_IP>"})," and open ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell tab with VPC environment"})," to access internal IP address space. Paste ",(0,l.jsx)(n.code,{children:"RPC_ABL_URL=<internal_IP>"})," into the new CloudShell tab. Then query the API:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl http://$RPC_ABL_URL:8899 -X POST -H "Content-Type: application/json" \\\n --data \'{ "jsonrpc": "2.0", "id": 1, "method": "getBalance", "params": ["9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}\'\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The result should be like this (the actual balance might change):"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'// We query token balance this account: https://solanabeach.io/address/9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM\n{"jsonrpc":"2.0","result":{"context":{"apiVersion":"1.16.15","slot":221433176},"value":12870473061872488},"id":1}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If the nodes are still starting and catching up with the chain, you will see the following response:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-HTML",children:"   <html>\n   <head><title>503 Service Temporarily Unavailable</title></head>\n   <body>\n   <center><h1>503 Service Temporarily Unavailable</h1></center>\n   </body>\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE:"})," ",(0,l.jsx)(n.em,{children:"By default and for security reasons the load balancer is available only from within the default VPC in the region where it is deployed. It is not available from the Internet and is not open for external connections. Before opening it up please make sure you protect your RPC APIs."})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clearing-up-and-undeploy-everything",children:"Clearing up and undeploy everything"}),"\n",(0,l.jsx)(n.p,{children:"Destroy HA Nodes, Single Nodes and Common stacks"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Setting the AWS account id and region in case local .env file is lost\n export AWS_ACCOUNT_ID=<your_target_AWS_account_id>\n export AWS_REGION=<your_target_AWS_region>\n\npwd\n# Make sure you are in aws-blockchain-node-runners/lib/solana\n\n# Destroy HA Nodes\ncdk destroy solana-ha-nodes\n\n# Destroy Single Node\ncdk destroy sync-single-node\n\n# Delete all common components like IAM role and Security Group\ncdk destroy solana-common\n"})}),"\n",(0,l.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"How to check the logs of the clients running on my sync node?"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE:"})," ",(0,l.jsxs)(n.em,{children:["In this tutorial we chose not to use SSH and use Session Manager instead. That allows you to log all sessions in AWS CloudTrail to see who logged into the server and when. If you receive an error similar to ",(0,l.jsx)(n.code,{children:"SessionManagerPlugin is not found"}),", ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",children:"install Session Manager plugin for AWS CLI"})]})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/solana\n\nexport INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo su bcuser\nsudo journalctl -o cat -fu node\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"How to check the logs from the EC2 user-data script?"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/solana\n\nexport INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo cat /var/log/cloud-init-output.log\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"How can I restart the Solana service?"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo systemctl status node\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"How to upload a secret to AWS Secrets Manager?"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'# Create key pair\nsudo ./solana-keygen new --no-passphrase -o /tmp/keypair.json\nSOLANA_ADDRESS=$(sudo ./solana-keygen pubkey /tmp/keypair.json)\n# Upload key pair to AWS Secrets Manager"\nexport AWS_REGION=<your_region>\nsudo aws secretsmanager create-secret --name "solana/"$SOLANA_ADDRESS --description "Solana secret key pair" --secret-string file:///tmp/keypair.json --region $AWS_REGION\n#Delete key pair from the local file system\nrm -rf /tmp/keypair.json\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"How can I add swap space to the instance if my Solana node runs out of RAM during the initial sync?"}),"\n",(0,l.jsx)(n.p,{children:"There are two ways. Using the existing volume or using a new one. If your instance has Instance Store volume attached, it is better to keep your swap on it."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Option 1: Dedicated Instance Store volume"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo mkswap /dev/nvme3n1\nsudo swapon /dev/nvme3n1\n# Check the memory space is updated\nfree -g\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Option 2: Existing volume (using Data directory as example):"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /data/data/swapfile\nsudo dd if=/dev/zero of=/data/data/swapfile bs=1MiB count=250KiB\nsudo chmod 0600 /data/data/swapfile\nsudo mkswap /data/data/swapfile\nsudo swapon /data/data/swapfile\nfree -g\nsudo sysctl vm.swappiness=10\n"})}),"\n",(0,l.jsx)(n.h2,{id:"upgrades",children:"Upgrades"}),"\n",(0,l.jsxs)(n.p,{children:["When nodes need to be upgraded or downgraded, ",(0,l.jsx)(n.a,{href:"https://aws.amazon.com/blogs/devops/performing-bluegreen-deployments-with-aws-codedeploy-and-auto-scaling-groups/",children:"use blue/green pattern to do it"}),". This is not yet automated and contributions are welcome!"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}const r={sidebar_label:"Solana"},d="",c={},h=[{value:"Overview of Deployment Architectures for Single and HA setups",id:"overview-of-deployment-architectures-for-single-and-ha-setups",level:2},{value:"Single node setup",id:"single-node-setup",level:3},{value:"HA setup",id:"ha-setup",level:3},{value:"Additional materials",id:"additional-materials",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Open AWS CloudShell",id:"open-aws-cloudshell",level:3},{value:"Clone this repository and install dependencies",id:"clone-this-repository-and-install-dependencies",level:3},{value:"Configure your setup",id:"configure-your-setup",level:3},{value:"Deploy a Single Node",id:"deploy-a-single-node",level:3},{value:"Deploy HA Nodes",id:"deploy-ha-nodes",level:3},{value:"Clearing up and undeploy everything",id:"clearing-up-and-undeploy-everything",level:3},{value:"FAQ",id:"faq",level:3},{value:"Upgrades",id:"upgrades",level:2}];function u(e){const n={h1:"h1",header:"header",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:""})}),"\n","\n",(0,l.jsx)(a,{})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},3158:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Architecture-HANodes.drawio-9cfe37132933c8300db9226249bc3789.png"},2064:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Architecture-SingleNode.drawio-03ff1d25c56cd75623d659620d255c2f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);