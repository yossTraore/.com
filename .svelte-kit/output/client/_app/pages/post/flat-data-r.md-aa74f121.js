import{S as sn,i as on,s as nn,B as Xs,j as Q,m as X,o as ee,p as ln,q as Xo,x as te,u as ae,v as se,ak as en,e as l,t as s,k as h,c as r,a as i,g as o,d as a,n as d,b as u,ae as rn,aa as pn,f as c,L as t,D as ta}from"../../chunks/vendor-dfb9df3e.js";import cn from"./layout.svelte-b65b887a.js";import{C as aa}from"../../chunks/Code-46ee5f1b.js";import{I as tn}from"../../chunks/Image-4d50732f.js";import{I as un}from"../../chunks/Info-a85e8c05.js";import"../../chunks/BackTo-f09ad798.js";import"../../chunks/global-164a8ca5.js";import"../../chunks/utils-419e8671.js";import"../../chunks/CornerTitle-3a53cda1.js";import"../../chunks/store-b0ba4c19.js";/* empty css                                                       *//* empty css                                                      */function fn(v){let p,w,f,g,m,k,b;return{c(){p=l("p"),w=l("strong"),f=s("Note:"),g=s(" If you want to follow along, the GitHub repo can be found "),m=l("a"),k=s("here"),b=s("."),this.h()},l(G){p=r(G,"P",{});var x=i(p);w=r(x,"STRONG",{});var A=i(w);f=o(A,"Note:"),A.forEach(a),g=o(x," If you want to follow along, the GitHub repo can be found "),m=r(x,"A",{href:!0,rel:!0});var xe=i(m);k=o(xe,"here"),xe.forEach(a),b=o(x,"."),x.forEach(a),this.h()},h(){u(m,"href","https://github.com/connorrothschild/flat-demo-r-processing/"),u(m,"rel","nofollow")},m(G,x){c(G,p,x),t(p,w),t(w,f),t(p,g),t(p,m),t(m,k),t(p,b)},d(G){G&&a(p)}}}function hn(v){let p,w=`<code class="language-undefined">name: Update data
on:
  schedule:
    - cron: 0 0 * * * # Runs daily. See https://crontab.cronhub.io/
  workflow_dispatch: &#123;&#125;
  push:
    branches:
      - main # Or master, or whatever branch you&#39;d like to &#39;watch&#39;
jobs:
  scheduled:
    runs-on: ubuntu-latest
    steps:
      # This step installs Deno, which is a Javascript runtime
      - name: Setup deno
        uses: denoland/setup-deno@main
        with:
          deno-version: v1.x
      # Check out the repository so it can read the files inside of it and do other operations
      - name: Check out repo
        uses: actions/checkout@v2
      # The Flat Action step. We fetch the data in the http_url and save it as downloaded_filename
      - name: Fetch data
        uses: githubocto/flat@v2
        with:
          http_url: https://mappingpoliceviolence.org/s/MPVDatasetDownload.xlsx # File to download
          downloaded_filename: raw.xlsx # Name of downloaded file
          postprocess: ./postprocess.ts # Script to run upon download completion</code>`;return{c(){p=l("pre"),this.h()},l(f){p=r(f,"PRE",{class:!0});var g=i(p);g.forEach(a),this.h()},h(){u(p,"class","language-undefined")},m(f,g){c(f,p,g),p.innerHTML=w},p:ta,d(f){f&&a(p)}}}function dn(v){let p,w='<code class="language-yaml"><span class="token key atrule">postprocess</span><span class="token punctuation">:</span> ./postprocess.ts </code>';return{c(){p=l("pre"),this.h()},l(f){p=r(f,"PRE",{class:!0});var g=i(p);g.forEach(a),this.h()},h(){u(p,"class","language-yaml")},m(f,g){c(f,p,g),p.innerHTML=w},p:ta,d(f){f&&a(p)}}}function mn(v){let p,w=`<code class="language-js"><span class="token comment">// 1. Install necessary packages</span>
<span class="token keyword">const</span> r_install <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    cmd<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sudo'</span><span class="token punctuation">,</span> <span class="token string">'Rscript'</span><span class="token punctuation">,</span> <span class="token string">'-e'</span><span class="token punctuation">,</span> <span class="token string">"install.packages(c('dplyr', 'readxl', 'readr', 'lubridate', 'stringr'))"</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> r_install<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Forward the execution to the R script</span>
<span class="token keyword">const</span> r_run <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    cmd<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Rscript'</span><span class="token punctuation">,</span> <span class="token string">'./clean.R'</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> r_run<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`;return{c(){p=l("pre"),this.h()},l(f){p=r(f,"PRE",{class:!0});var g=i(p);g.forEach(a),this.h()},h(){u(p,"class","language-js")},m(f,g){c(f,p,g),p.innerHTML=w},p:ta,d(f){f&&a(p)}}}function gn(v){let p,w=`<code class="language-r"><span class="token comment"># Load libraries</span>
library<span class="token punctuation">(</span>dplyr<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>stringr<span class="token punctuation">)</span>

<span class="token comment"># Read in data, with the same name that we specified in &#96;flat.yml&#96;</span>
raw_data <span class="token operator">&lt;-</span> readxl<span class="token operator">::</span>read_excel<span class="token punctuation">(</span><span class="token string">"./raw.xlsx"</span><span class="token punctuation">)</span>

<span class="token comment"># All the processing!</span>
clean_data <span class="token operator">&lt;-</span> raw_data <span class="token percent-operator operator">%>%</span> 
  mutate<span class="token punctuation">(</span>Zipcode <span class="token operator">=</span> as.character<span class="token punctuation">(</span>Zipcode<span class="token punctuation">)</span><span class="token punctuation">,</span>
         Year <span class="token operator">=</span> lubridate<span class="token operator">::</span>year<span class="token punctuation">(</span>Date<span class="token punctuation">)</span><span class="token punctuation">,</span>
         Sex <span class="token operator">=</span> ifelse<span class="token punctuation">(</span>is.na<span class="token punctuation">(</span>Sex<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'Unknown'</span><span class="token punctuation">,</span> Sex<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">### Additional processing goes here...</span>

<span class="token comment"># Output data</span>
readr<span class="token operator">::</span>write_csv<span class="token punctuation">(</span>clean_data<span class="token punctuation">,</span> <span class="token string">"./output.csv"</span><span class="token punctuation">)</span></code>`;return{c(){p=l("pre"),this.h()},l(f){p=r(f,"PRE",{class:!0});var g=i(p);g.forEach(a),this.h()},h(){u(p,"class","language-r")},m(f,g){c(f,p,g),p.innerHTML=w},p:ta,d(f){f&&a(p)}}}function wn(v){let p,w,f,g,m,k,b,G,x,A,xe,sa,vt,Y,_t,oe,je,oa,yt,M,ne,na,la,le,ra,ia,bt,re,Et,E,pa,Le,ca,ua,Ne,fa,ha,We,da,ma,$t,ie,Ae,ga,Tt,_,wa,Je,ka,va,qe,_a,ya,Ue,ba,Ea,pe,$a,Ta,ce,Ra,Da,Rt,ue,Ve,xa,ja,Dt,H,Aa,fe,Ha,Ia,he,Oa,Fa,xt,j,eo,jt,de,me,Sa,Be,Ca,At,$,Pa,ze,Ga,Ma,ge,Ya,La,we,Na,Wa,Ht,L,It,T,Ja,Ze,qa,Ua,Ke,Va,Ba,ke,za,Za,Ot,ve,He,Ka,Ft,Ie,Qa,St,N,Ct,y,Xa,Qe,es,ts,Xe,as,ss,et,os,ns,tt,ls,rs,Pt,W,is,at,ps,cs,Gt,I,us,st,fs,hs,_e,ds,ms,Mt,J,Yt,q,gs,ot,ws,ks,Lt,R,vs,nt,_s,ys,lt,bs,Es,rt,$s,Ts,Nt,O,Rs,it,Ds,xs,ye,js,As,Wt,be,Oe,Hs,Jt,F,Is,pt,Os,Fs,ct,Ss,Cs,qt,U,Ut,S,Ps,ut,Gs,Ms,Ee,Ys,Ls,Vt,$e,Fe,Ns,Bt,V,Ws,ft,Js,qs,zt,Te,Zt,C,Us,Re,Vs,Bs,De,zs,Zs,Kt;return Y=new un({props:{$$slots:{default:[fn]},$$scope:{ctx:v}}}),re=new tn({props:{src:"../images/post/flat-data-r/flat-diagram.png",alt:"A diagram showcasing a common Flat Data workflow"}}),L=new aa({props:{language:"yaml",filename:"flat.yml",$$slots:{default:[hn]},$$scope:{ctx:v}}}),N=new aa({props:{language:"yaml",filename:"flat.yml",$$slots:{default:[dn]},$$scope:{ctx:v}}}),J=new aa({props:{language:"javascript",filename:"postprocess.ts",$$slots:{default:[mn]},$$scope:{ctx:v}}}),U=new aa({props:{language:"r",filename:"clean.R",$$slots:{default:[gn]},$$scope:{ctx:v}}}),Te=new tn({props:{src:"../images/post/flat-data-r/header.png",alt:"Diagram of flat data processing in R"}}),{c(){p=l("p"),w=s("The "),f=l("a"),g=s("GitHub OCTO team"),m=s(" recently released their first project: "),k=l("a"),b=l("strong"),G=s("Flat Data"),x=s(". The project aims to offer \u201Ca simple pattern for bringing working datasets into your repositories and versioning them.\u201D And it succeeds in doing so! I recently incorporated Flat Data into "),A=l("a"),xe=s("one of my projects"),sa=s(", allowing me to finally stop manually updating the data on a semiregular basis (yikes!). While working, I couldn\u2019t find any documentation on using R with Flat Data. Here, I\u2019ll explain the steps I took to incorporate R scripts into a Flat Data pipeline."),vt=h(),Q(Y.$$.fragment),_t=h(),oe=l("h2"),je=l("a"),oa=s("What\u2019s Flat Data?"),yt=h(),M=l("p"),ne=l("a"),na=s("Flat Data"),la=s(" solves the problem of carrying out the same repetitive tasks\u2014retrieving, cleaning, and then republishing data\u2014that commonly affects developers who want to present rapidly updating data (for example, COVID-19 data that updates daily). And although alternative solutions exist, Flat Data is easy, intuitive, and integrated directly with your GitHub repository (via "),le=l("a"),ra=s("GitHub"),ia=s("):"),bt=h(),Q(re.$$.fragment),Et=h(),E=l("p"),pa=s("The idea, as seen above, is essentially to read in data ("),Le=l("em"),ca=s("data.json"),ua=s("), conduct some postprocessing ("),Ne=l("em"),fa=s("process.js"),ha=s("), and output some better data ("),We=l("em"),da=s("processed-data.json"),ma=s(")."),$t=h(),ie=l("h2"),Ae=l("a"),ga=s("Doing it in R"),Tt=h(),_=l("p"),wa=s("The most essential step of a Flat Data project is "),Je=l("em"),ka=s("postprocessing"),va=s(". This occurs "),qe=l("strong"),_a=s("after data retrieval"),ya=s(" and "),Ue=l("strong"),ba=s("before data output"),Ea=s(", and it can be done in a few different languages. By default, the OCTO team\u2019s "),pe=l("a"),$a=s("examples"),Ta=s(" are done in JavaScript/TypeScript, and one user has given an example of postprocessing in "),ce=l("a"),Ra=s("Python"),Da=s(". To the best of my knowledge, though, there aren\u2019t any examples of including R in the postprocessing stage, hence the reason for this post!"),Rt=h(),ue=l("p"),Ve=l("strong"),xa=s("Using R in a Flat Data pipeline is as simple as installing the necessary packages and then sourcing your R cleaning script from a postprocessing TypeScript file."),ja=s(" Let\u2019s explore how that works."),Dt=h(),H=l("p"),Aa=s("We\u2019ll be grabbing data from the "),fe=l("a"),Ha=s("Mapping Police Violence"),Ia=s(" homepage, tidying it up, and then republishing it. (This cleaned data is the source for my "),he=l("a"),Oa=s("visualization"),Fa=s(" on police violence.)  Here\u2019s a sample of the final data output:"),xt=h(),j=l("iframe"),jt=h(),de=l("h3"),me=l("a"),Sa=s("01. Setup "),Be=l("code"),Ca=s("flat.yml"),At=h(),$=l("p"),Pa=s("The first step in any Flat Data pipeline is to create "),ze=l("code"),Ga=s(".github/workflows/flat.yml"),Ma=s(", which will include the configuration for your project. You can do so by using GitHub\u2019s "),ge=l("a"),Ya=s("VSCode extension"),La=s(", or by creating your own YAML file manually. The YAML file we use in this project is remarkably similar to the "),we=l("a"),Na=s("boilerplate"),Wa=s(" file, with a few differences:"),Ht=h(),Q(L.$$.fragment),It=h(),T=l("p"),Ja=s("The tweaks you would make to this workflow are most likely in "),Ze=l("code"),qa=s("http_url"),Ua=s(" and "),Ke=l("code"),Va=s("schedule"),Ba=s(". To confirm, visit GitHub\u2019s "),ke=l("a"),za=s("documentation"),Za=s("."),Ot=h(),ve=l("h2"),He=l("a"),Ka=s("02. Postprocess"),Ft=h(),Ie=l("p"),Qa=s("We pick up at the last line of code in the previous chunk:"),St=h(),Q(N.$$.fragment),Ct=h(),y=l("p"),Xa=s("Here, we reference a TypeScript file titled "),Qe=l("code"),es=s("postprocess.ts"),ts=s(". Upon completion of the data download, GitHub will run "),Xe=l("em"),as=s("this script"),ss=s(" for any additional processing steps. This file must be a "),et=l("code"),os=s(".js"),ns=s(" or "),tt=l("code"),ls=s(".ts"),rs=s(" file."),Pt=h(),W=l("p"),is=s("Those who are skilled in data wrangling with JavaScript might be able to write their additional processing "),at=l("em"),ps=s("in JavaScript itself"),cs=s(", but few of us are skilled in data wrangling with JavaScript. Moreover, some users want to migrate their existing projects and workflows to Flat Data, and so including languages other than JavaScript (in this case, R) is essential."),Gt=h(),I=l("p"),us=s("The "),st=l("code"),fs=s("postprocess.ts"),hs=s(" file I use in my workflow looks like this (it might help to see how "),_e=l("a"),ds=s("Deno works"),ms=s("):"),Mt=h(),Q(J.$$.fragment),Yt=h(),q=l("p"),gs=s("The above script is rather simple: it 1) installs packages, and 2) runs the processing script, titled "),ot=l("code"),ws=s("clean.R"),ks=s("."),Lt=h(),R=l("p"),vs=s("The first step is important.  "),nt=l("strong"),_s=s("Package management was the biggest issue I ran into while setting up this workflow; if you\u2019re having issues, pay attention to this step."),ys=s(" You\u2019ll need to identify all the packages that are required in your R processing script, but you can\u2019t install those packages "),lt=l("em"),bs=s("in the script itself"),Es=s(", due to virtual machine permissions. You instead have to run them via the command line, using "),rt=l("code"),$s=s("sudo Rscript -e"),Ts=s(", as I do above (in step 1)."),Nt=h(),O=l("p"),Rs=s("The command "),it=l("code"),Ds=s("sudo Rscript -e"),xs=s(" precedes any regular function or command that you would run in an R script. It executes those commands via the command line, rather than within a script. (We add sudo to overcome system user permission problems.) For more, see "),ye=l("a"),js=s("this page"),As=s("."),Wt=h(),be=l("h2"),Oe=l("a"),Hs=s("03. Clean the data!"),Jt=h(),F=l("p"),Is=s("My "),pt=l("code"),Os=s("clean.R"),Fs=s(" script, which I reference at the bottom of "),ct=l("code"),Ss=s("postprocess.ts"),Cs=s(" looks like this:"),qt=h(),Q(U.$$.fragment),Ut=h(),S=l("p"),Ps=s("Obviously, the content in the above cleaning script is irrelevant. It functions as any other R script would: it reads in data (based on the data we downloaded in "),ut=l("code"),Gs=s("postprocess.ts"),Ms=s("), does some cleaning, and then outputs the new data. The "),Ee=l("a"),Ys=s("real script"),Ls=s(" is around 55 lines. Now you know why keeping the postprocessing in R was preferable!"),Vt=h(),$e=l("h2"),Fe=l("a"),Ns=s("In sum"),Bt=h(),V=l("p"),Ws=s("Upon completing these steps and pushing the above to a repository, GitHub will automatically set up the action and run it on a daily basis. You can then examine the logs for each run in the "),ft=l("strong"),Js=s("Actions"),qs=s(" tab. This tab will be helpful for debugging, and you can force workflow executions manually here as well. In sum, the process of carrying out a GitHub Flat Data workflow, with the addition of an R postprocessing script, looks something like this:"),zt=h(),Q(Te.$$.fragment),Zt=h(),C=l("p"),Us=s("Thanks for reading! You might learn more by perusing the "),Re=l("a"),Vs=s("GitHub repository"),Bs=s(" that accompanies this post; otherwise, please send any questions via "),De=l("a"),zs=s("Twitter"),Zs=s(" \u{1F642}"),this.h()},l(e){p=r(e,"P",{});var n=i(p);w=o(n,"The "),f=r(n,"A",{href:!0,rel:!0});var ht=i(f);g=o(ht,"GitHub OCTO team"),ht.forEach(a),m=o(n," recently released their first project: "),k=r(n,"A",{href:!0,rel:!0});var dt=i(k);b=r(dt,"STRONG",{});var mt=i(b);G=o(mt,"Flat Data"),mt.forEach(a),dt.forEach(a),x=o(n,". The project aims to offer \u201Ca simple pattern for bringing working datasets into your repositories and versioning them.\u201D And it succeeds in doing so! I recently incorporated Flat Data into "),A=r(n,"A",{href:!0,rel:!0});var gt=i(A);xe=o(gt,"one of my projects"),gt.forEach(a),sa=o(n,", allowing me to finally stop manually updating the data on a semiregular basis (yikes!). While working, I couldn\u2019t find any documentation on using R with Flat Data. Here, I\u2019ll explain the steps I took to incorporate R scripts into a Flat Data pipeline."),n.forEach(a),vt=d(e),X(Y.$$.fragment,e),_t=d(e),oe=r(e,"H2",{id:!0});var wt=i(oe);je=r(wt,"A",{href:!0});var to=i(je);oa=o(to,"What\u2019s Flat Data?"),to.forEach(a),wt.forEach(a),yt=d(e),M=r(e,"P",{});var kt=i(M);ne=r(kt,"A",{href:!0,rel:!0});var ao=i(ne);na=o(ao,"Flat Data"),ao.forEach(a),la=o(kt," solves the problem of carrying out the same repetitive tasks\u2014retrieving, cleaning, and then republishing data\u2014that commonly affects developers who want to present rapidly updating data (for example, COVID-19 data that updates daily). And although alternative solutions exist, Flat Data is easy, intuitive, and integrated directly with your GitHub repository (via "),le=r(kt,"A",{href:!0,rel:!0});var so=i(le);ra=o(so,"GitHub"),so.forEach(a),ia=o(kt,"):"),kt.forEach(a),bt=d(e),X(re.$$.fragment,e),Et=d(e),E=r(e,"P",{});var B=i(E);pa=o(B,"The idea, as seen above, is essentially to read in data ("),Le=r(B,"EM",{});var oo=i(Le);ca=o(oo,"data.json"),oo.forEach(a),ua=o(B,"), conduct some postprocessing ("),Ne=r(B,"EM",{});var no=i(Ne);fa=o(no,"process.js"),no.forEach(a),ha=o(B,"), and output some better data ("),We=r(B,"EM",{});var lo=i(We);da=o(lo,"processed-data.json"),lo.forEach(a),ma=o(B,")."),B.forEach(a),$t=d(e),ie=r(e,"H2",{id:!0});var ro=i(ie);Ae=r(ro,"A",{href:!0});var io=i(Ae);ga=o(io,"Doing it in R"),io.forEach(a),ro.forEach(a),Tt=d(e),_=r(e,"P",{});var D=i(_);wa=o(D,"The most essential step of a Flat Data project is "),Je=r(D,"EM",{});var po=i(Je);ka=o(po,"postprocessing"),po.forEach(a),va=o(D,". This occurs "),qe=r(D,"STRONG",{});var co=i(qe);_a=o(co,"after data retrieval"),co.forEach(a),ya=o(D," and "),Ue=r(D,"STRONG",{});var uo=i(Ue);ba=o(uo,"before data output"),uo.forEach(a),Ea=o(D,", and it can be done in a few different languages. By default, the OCTO team\u2019s "),pe=r(D,"A",{href:!0,rel:!0});var fo=i(pe);$a=o(fo,"examples"),fo.forEach(a),Ta=o(D," are done in JavaScript/TypeScript, and one user has given an example of postprocessing in "),ce=r(D,"A",{href:!0,rel:!0});var ho=i(ce);Ra=o(ho,"Python"),ho.forEach(a),Da=o(D,". To the best of my knowledge, though, there aren\u2019t any examples of including R in the postprocessing stage, hence the reason for this post!"),D.forEach(a),Rt=d(e),ue=r(e,"P",{});var Ks=i(ue);Ve=r(Ks,"STRONG",{});var mo=i(Ve);xa=o(mo,"Using R in a Flat Data pipeline is as simple as installing the necessary packages and then sourcing your R cleaning script from a postprocessing TypeScript file."),mo.forEach(a),ja=o(Ks," Let\u2019s explore how that works."),Ks.forEach(a),Dt=d(e),H=r(e,"P",{});var Se=i(H);Aa=o(Se,"We\u2019ll be grabbing data from the "),fe=r(Se,"A",{href:!0,rel:!0});var go=i(fe);Ha=o(go,"Mapping Police Violence"),go.forEach(a),Ia=o(Se," homepage, tidying it up, and then republishing it. (This cleaned data is the source for my "),he=r(Se,"A",{href:!0,rel:!0});var wo=i(he);Oa=o(wo,"visualization"),wo.forEach(a),Fa=o(Se," on police violence.)  Here\u2019s a sample of the final data output:"),Se.forEach(a),xt=d(e),j=r(e,"IFRAME",{title:!0,src:!0,loading:!0,style:!0,width:!0}),i(j).forEach(a),jt=d(e),de=r(e,"H3",{id:!0});var ko=i(de);me=r(ko,"A",{href:!0});var Qs=i(me);Sa=o(Qs,"01. Setup "),Be=r(Qs,"CODE",{});var vo=i(Be);Ca=o(vo,"flat.yml"),vo.forEach(a),Qs.forEach(a),ko.forEach(a),At=d(e),$=r(e,"P",{});var z=i($);Pa=o(z,"The first step in any Flat Data pipeline is to create "),ze=r(z,"CODE",{});var _o=i(ze);Ga=o(_o,".github/workflows/flat.yml"),_o.forEach(a),Ma=o(z,", which will include the configuration for your project. You can do so by using GitHub\u2019s "),ge=r(z,"A",{href:!0,rel:!0});var yo=i(ge);Ya=o(yo,"VSCode extension"),yo.forEach(a),La=o(z,", or by creating your own YAML file manually. The YAML file we use in this project is remarkably similar to the "),we=r(z,"A",{href:!0,rel:!0});var bo=i(we);Na=o(bo,"boilerplate"),bo.forEach(a),Wa=o(z," file, with a few differences:"),z.forEach(a),Ht=d(e),X(L.$$.fragment,e),It=d(e),T=r(e,"P",{});var Z=i(T);Ja=o(Z,"The tweaks you would make to this workflow are most likely in "),Ze=r(Z,"CODE",{});var Eo=i(Ze);qa=o(Eo,"http_url"),Eo.forEach(a),Ua=o(Z," and "),Ke=r(Z,"CODE",{});var $o=i(Ke);Va=o($o,"schedule"),$o.forEach(a),Ba=o(Z,". To confirm, visit GitHub\u2019s "),ke=r(Z,"A",{href:!0,rel:!0});var To=i(ke);za=o(To,"documentation"),To.forEach(a),Za=o(Z,"."),Z.forEach(a),Ot=d(e),ve=r(e,"H2",{id:!0});var Ro=i(ve);He=r(Ro,"A",{href:!0});var Do=i(He);Ka=o(Do,"02. Postprocess"),Do.forEach(a),Ro.forEach(a),Ft=d(e),Ie=r(e,"P",{});var xo=i(Ie);Qa=o(xo,"We pick up at the last line of code in the previous chunk:"),xo.forEach(a),St=d(e),X(N.$$.fragment,e),Ct=d(e),y=r(e,"P",{});var P=i(y);Xa=o(P,"Here, we reference a TypeScript file titled "),Qe=r(P,"CODE",{});var jo=i(Qe);es=o(jo,"postprocess.ts"),jo.forEach(a),ts=o(P,". Upon completion of the data download, GitHub will run "),Xe=r(P,"EM",{});var Ao=i(Xe);as=o(Ao,"this script"),Ao.forEach(a),ss=o(P," for any additional processing steps. This file must be a "),et=r(P,"CODE",{});var Ho=i(et);os=o(Ho,".js"),Ho.forEach(a),ns=o(P," or "),tt=r(P,"CODE",{});var Io=i(tt);ls=o(Io,".ts"),Io.forEach(a),rs=o(P," file."),P.forEach(a),Pt=d(e),W=r(e,"P",{});var Qt=i(W);is=o(Qt,"Those who are skilled in data wrangling with JavaScript might be able to write their additional processing "),at=r(Qt,"EM",{});var Oo=i(at);ps=o(Oo,"in JavaScript itself"),Oo.forEach(a),cs=o(Qt,", but few of us are skilled in data wrangling with JavaScript. Moreover, some users want to migrate their existing projects and workflows to Flat Data, and so including languages other than JavaScript (in this case, R) is essential."),Qt.forEach(a),Gt=d(e),I=r(e,"P",{});var Ce=i(I);us=o(Ce,"The "),st=r(Ce,"CODE",{});var Fo=i(st);fs=o(Fo,"postprocess.ts"),Fo.forEach(a),hs=o(Ce," file I use in my workflow looks like this (it might help to see how "),_e=r(Ce,"A",{href:!0,rel:!0});var So=i(_e);ds=o(So,"Deno works"),So.forEach(a),ms=o(Ce,"):"),Ce.forEach(a),Mt=d(e),X(J.$$.fragment,e),Yt=d(e),q=r(e,"P",{});var Xt=i(q);gs=o(Xt,"The above script is rather simple: it 1) installs packages, and 2) runs the processing script, titled "),ot=r(Xt,"CODE",{});var Co=i(ot);ws=o(Co,"clean.R"),Co.forEach(a),ks=o(Xt,"."),Xt.forEach(a),Lt=d(e),R=r(e,"P",{});var K=i(R);vs=o(K,"The first step is important.  "),nt=r(K,"STRONG",{});var Po=i(nt);_s=o(Po,"Package management was the biggest issue I ran into while setting up this workflow; if you\u2019re having issues, pay attention to this step."),Po.forEach(a),ys=o(K," You\u2019ll need to identify all the packages that are required in your R processing script, but you can\u2019t install those packages "),lt=r(K,"EM",{});var Go=i(lt);bs=o(Go,"in the script itself"),Go.forEach(a),Es=o(K,", due to virtual machine permissions. You instead have to run them via the command line, using "),rt=r(K,"CODE",{});var Mo=i(rt);$s=o(Mo,"sudo Rscript -e"),Mo.forEach(a),Ts=o(K,", as I do above (in step 1)."),K.forEach(a),Nt=d(e),O=r(e,"P",{});var Pe=i(O);Rs=o(Pe,"The command "),it=r(Pe,"CODE",{});var Yo=i(it);Ds=o(Yo,"sudo Rscript -e"),Yo.forEach(a),xs=o(Pe," precedes any regular function or command that you would run in an R script. It executes those commands via the command line, rather than within a script. (We add sudo to overcome system user permission problems.) For more, see "),ye=r(Pe,"A",{href:!0,rel:!0});var Lo=i(ye);js=o(Lo,"this page"),Lo.forEach(a),As=o(Pe,"."),Pe.forEach(a),Wt=d(e),be=r(e,"H2",{id:!0});var No=i(be);Oe=r(No,"A",{href:!0});var Wo=i(Oe);Hs=o(Wo,"03. Clean the data!"),Wo.forEach(a),No.forEach(a),Jt=d(e),F=r(e,"P",{});var Ge=i(F);Is=o(Ge,"My "),pt=r(Ge,"CODE",{});var Jo=i(pt);Os=o(Jo,"clean.R"),Jo.forEach(a),Fs=o(Ge," script, which I reference at the bottom of "),ct=r(Ge,"CODE",{});var qo=i(ct);Ss=o(qo,"postprocess.ts"),qo.forEach(a),Cs=o(Ge," looks like this:"),Ge.forEach(a),qt=d(e),X(U.$$.fragment,e),Ut=d(e),S=r(e,"P",{});var Me=i(S);Ps=o(Me,"Obviously, the content in the above cleaning script is irrelevant. It functions as any other R script would: it reads in data (based on the data we downloaded in "),ut=r(Me,"CODE",{});var Uo=i(ut);Gs=o(Uo,"postprocess.ts"),Uo.forEach(a),Ms=o(Me,"), does some cleaning, and then outputs the new data. The "),Ee=r(Me,"A",{href:!0,rel:!0});var Vo=i(Ee);Ys=o(Vo,"real script"),Vo.forEach(a),Ls=o(Me," is around 55 lines. Now you know why keeping the postprocessing in R was preferable!"),Me.forEach(a),Vt=d(e),$e=r(e,"H2",{id:!0});var Bo=i($e);Fe=r(Bo,"A",{href:!0});var zo=i(Fe);Ns=o(zo,"In sum"),zo.forEach(a),Bo.forEach(a),Bt=d(e),V=r(e,"P",{});var ea=i(V);Ws=o(ea,"Upon completing these steps and pushing the above to a repository, GitHub will automatically set up the action and run it on a daily basis. You can then examine the logs for each run in the "),ft=r(ea,"STRONG",{});var Zo=i(ft);Js=o(Zo,"Actions"),Zo.forEach(a),qs=o(ea," tab. This tab will be helpful for debugging, and you can force workflow executions manually here as well. In sum, the process of carrying out a GitHub Flat Data workflow, with the addition of an R postprocessing script, looks something like this:"),ea.forEach(a),zt=d(e),X(Te.$$.fragment,e),Zt=d(e),C=r(e,"P",{});var Ye=i(C);Us=o(Ye,"Thanks for reading! You might learn more by perusing the "),Re=r(Ye,"A",{href:!0,rel:!0});var Ko=i(Re);Vs=o(Ko,"GitHub repository"),Ko.forEach(a),Bs=o(Ye," that accompanies this post; otherwise, please send any questions via "),De=r(Ye,"A",{href:!0,rel:!0});var Qo=i(De);zs=o(Qo,"Twitter"),Qo.forEach(a),Zs=o(Ye," \u{1F642}"),Ye.forEach(a),this.h()},h(){u(f,"href","https://octo.github.com/"),u(f,"rel","nofollow"),u(k,"href","https://octo.github.com/project/flat-data"),u(k,"rel","nofollow"),u(A,"href","https://github.com/connorrothschild/police-killings"),u(A,"rel","nofollow"),u(je,"href","#whats-flat-data"),u(oe,"id","whats-flat-data"),u(ne,"href","https://octo.github.com/project/flat-data"),u(ne,"rel","nofollow"),u(le,"href","https://octo.github.com/project/flat-data"),u(le,"rel","nofollow"),u(Ae,"href","#doing-it-in-r"),u(ie,"id","doing-it-in-r"),u(pe,"href","https://github.com/githubocto/flat-postprocessing/tree/main/examples"),u(pe,"rel","nofollow"),u(ce,"href","https://github.com/pierrotsmnrd/flat_data_py_example"),u(ce,"rel","nofollow"),u(fe,"href","https://mappingpoliceviolence.org/"),u(fe,"rel","nofollow"),u(he,"href","https://connorrothschild.github.io/police-killings/"),u(he,"rel","nofollow"),u(j,"title","Flat GitHub data table"),rn(j.src,eo="https://flatgithub.com/connorrothschild/flat-demo-r-processing?filename=sample.csv&sha=585d7221d2712494195dea616bac68dc864025b1")||u(j,"src",eo),u(j,"loading","lazy"),pn(j,"height","90vh"),u(j,"width","100%"),u(me,"href","#01-setup-flatyml"),u(de,"id","01-setup-flatyml"),u(ge,"href","https://marketplace.visualstudio.com/items?itemName=GitHubOCTO.flat"),u(ge,"rel","nofollow"),u(we,"href","https://github.com/marketplace/actions/flat-data"),u(we,"rel","nofollow"),u(ke,"href","https://github.com/marketplace/actions/flat-data"),u(ke,"rel","nofollow"),u(He,"href","#02-postprocess"),u(ve,"id","02-postprocess"),u(_e,"href","https://deno.land/manual@v1.10.2/examples/subprocess"),u(_e,"rel","nofollow"),u(ye,"href","https://stackoverflow.com/questions/18306362/run-r-script-from-command-line"),u(ye,"rel","nofollow"),u(Oe,"href","#03-clean-the-data"),u(be,"id","03-clean-the-data"),u(Ee,"href","https://github.com/connorrothschild/flat-demo-r-processing/blob/master/clean.R"),u(Ee,"rel","nofollow"),u(Fe,"href","#in-sum"),u($e,"id","in-sum"),u(Re,"href","https://github.com/connorrothschild/flat-demo-r-processing"),u(Re,"rel","nofollow"),u(De,"href","https://twitter.com/CL_Rothschild"),u(De,"rel","nofollow")},m(e,n){c(e,p,n),t(p,w),t(p,f),t(f,g),t(p,m),t(p,k),t(k,b),t(b,G),t(p,x),t(p,A),t(A,xe),t(p,sa),c(e,vt,n),ee(Y,e,n),c(e,_t,n),c(e,oe,n),t(oe,je),t(je,oa),c(e,yt,n),c(e,M,n),t(M,ne),t(ne,na),t(M,la),t(M,le),t(le,ra),t(M,ia),c(e,bt,n),ee(re,e,n),c(e,Et,n),c(e,E,n),t(E,pa),t(E,Le),t(Le,ca),t(E,ua),t(E,Ne),t(Ne,fa),t(E,ha),t(E,We),t(We,da),t(E,ma),c(e,$t,n),c(e,ie,n),t(ie,Ae),t(Ae,ga),c(e,Tt,n),c(e,_,n),t(_,wa),t(_,Je),t(Je,ka),t(_,va),t(_,qe),t(qe,_a),t(_,ya),t(_,Ue),t(Ue,ba),t(_,Ea),t(_,pe),t(pe,$a),t(_,Ta),t(_,ce),t(ce,Ra),t(_,Da),c(e,Rt,n),c(e,ue,n),t(ue,Ve),t(Ve,xa),t(ue,ja),c(e,Dt,n),c(e,H,n),t(H,Aa),t(H,fe),t(fe,Ha),t(H,Ia),t(H,he),t(he,Oa),t(H,Fa),c(e,xt,n),c(e,j,n),c(e,jt,n),c(e,de,n),t(de,me),t(me,Sa),t(me,Be),t(Be,Ca),c(e,At,n),c(e,$,n),t($,Pa),t($,ze),t(ze,Ga),t($,Ma),t($,ge),t(ge,Ya),t($,La),t($,we),t(we,Na),t($,Wa),c(e,Ht,n),ee(L,e,n),c(e,It,n),c(e,T,n),t(T,Ja),t(T,Ze),t(Ze,qa),t(T,Ua),t(T,Ke),t(Ke,Va),t(T,Ba),t(T,ke),t(ke,za),t(T,Za),c(e,Ot,n),c(e,ve,n),t(ve,He),t(He,Ka),c(e,Ft,n),c(e,Ie,n),t(Ie,Qa),c(e,St,n),ee(N,e,n),c(e,Ct,n),c(e,y,n),t(y,Xa),t(y,Qe),t(Qe,es),t(y,ts),t(y,Xe),t(Xe,as),t(y,ss),t(y,et),t(et,os),t(y,ns),t(y,tt),t(tt,ls),t(y,rs),c(e,Pt,n),c(e,W,n),t(W,is),t(W,at),t(at,ps),t(W,cs),c(e,Gt,n),c(e,I,n),t(I,us),t(I,st),t(st,fs),t(I,hs),t(I,_e),t(_e,ds),t(I,ms),c(e,Mt,n),ee(J,e,n),c(e,Yt,n),c(e,q,n),t(q,gs),t(q,ot),t(ot,ws),t(q,ks),c(e,Lt,n),c(e,R,n),t(R,vs),t(R,nt),t(nt,_s),t(R,ys),t(R,lt),t(lt,bs),t(R,Es),t(R,rt),t(rt,$s),t(R,Ts),c(e,Nt,n),c(e,O,n),t(O,Rs),t(O,it),t(it,Ds),t(O,xs),t(O,ye),t(ye,js),t(O,As),c(e,Wt,n),c(e,be,n),t(be,Oe),t(Oe,Hs),c(e,Jt,n),c(e,F,n),t(F,Is),t(F,pt),t(pt,Os),t(F,Fs),t(F,ct),t(ct,Ss),t(F,Cs),c(e,qt,n),ee(U,e,n),c(e,Ut,n),c(e,S,n),t(S,Ps),t(S,ut),t(ut,Gs),t(S,Ms),t(S,Ee),t(Ee,Ys),t(S,Ls),c(e,Vt,n),c(e,$e,n),t($e,Fe),t(Fe,Ns),c(e,Bt,n),c(e,V,n),t(V,Ws),t(V,ft),t(ft,Js),t(V,qs),c(e,zt,n),ee(Te,e,n),c(e,Zt,n),c(e,C,n),t(C,Us),t(C,Re),t(Re,Vs),t(C,Bs),t(C,De),t(De,zs),t(C,Zs),Kt=!0},p(e,n){const ht={};n&2&&(ht.$$scope={dirty:n,ctx:e}),Y.$set(ht);const dt={};n&2&&(dt.$$scope={dirty:n,ctx:e}),L.$set(dt);const mt={};n&2&&(mt.$$scope={dirty:n,ctx:e}),N.$set(mt);const gt={};n&2&&(gt.$$scope={dirty:n,ctx:e}),J.$set(gt);const wt={};n&2&&(wt.$$scope={dirty:n,ctx:e}),U.$set(wt)},i(e){Kt||(te(Y.$$.fragment,e),te(re.$$.fragment,e),te(L.$$.fragment,e),te(N.$$.fragment,e),te(J.$$.fragment,e),te(U.$$.fragment,e),te(Te.$$.fragment,e),Kt=!0)},o(e){ae(Y.$$.fragment,e),ae(re.$$.fragment,e),ae(L.$$.fragment,e),ae(N.$$.fragment,e),ae(J.$$.fragment,e),ae(U.$$.fragment,e),ae(Te.$$.fragment,e),Kt=!1},d(e){e&&a(p),e&&a(vt),se(Y,e),e&&a(_t),e&&a(oe),e&&a(yt),e&&a(M),e&&a(bt),se(re,e),e&&a(Et),e&&a(E),e&&a($t),e&&a(ie),e&&a(Tt),e&&a(_),e&&a(Rt),e&&a(ue),e&&a(Dt),e&&a(H),e&&a(xt),e&&a(j),e&&a(jt),e&&a(de),e&&a(At),e&&a($),e&&a(Ht),se(L,e),e&&a(It),e&&a(T),e&&a(Ot),e&&a(ve),e&&a(Ft),e&&a(Ie),e&&a(St),se(N,e),e&&a(Ct),e&&a(y),e&&a(Pt),e&&a(W),e&&a(Gt),e&&a(I),e&&a(Mt),se(J,e),e&&a(Yt),e&&a(q),e&&a(Lt),e&&a(R),e&&a(Nt),e&&a(O),e&&a(Wt),e&&a(be),e&&a(Jt),e&&a(F),e&&a(qt),se(U,e),e&&a(Ut),e&&a(S),e&&a(Vt),e&&a($e),e&&a(Bt),e&&a(V),e&&a(zt),se(Te,e),e&&a(Zt),e&&a(C)}}}function kn(v){let p,w;const f=[v[0],an];let g={$$slots:{default:[wn]},$$scope:{ctx:v}};for(let m=0;m<f.length;m+=1)g=Xs(g,f[m]);return p=new cn({props:g}),{c(){Q(p.$$.fragment)},l(m){X(p.$$.fragment,m)},m(m,k){ee(p,m,k),w=!0},p(m,[k]){const b=k&1?ln(f,[k&1&&Xo(m[0]),k&0&&Xo(an)]):{};k&2&&(b.$$scope={dirty:k,ctx:m}),p.$set(b)},i(m){w||(te(p.$$.fragment,m),w=!0)},o(m){ae(p.$$.fragment,m),w=!1},d(m){se(p,m)}}}const an={layout:"blog",title:"Including R in your Flat Data Workflow",description:"Fetch and clean data automatically with GitHub Actions + R",image:"flat-data-r/header.png",date:"2021-05-02",featured:!0,tags:["r","github","tutorial"]};function vn(v,p,w){return v.$$set=f=>{w(0,p=Xs(Xs({},p),en(f)))},p=en(p),[p]}class In extends sn{constructor(p){super();on(this,p,vn,kn,nn,{})}}export{In as default,an as metadata};