_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"0TkR":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("dhJC"),r=a("cpVT"),i=(a("q1tI"),a("7ljp")),o=a("aArQ");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,l={__resourcePath:"docs/server/iw5/setting-up-a-server.md",__scans:{},title:"Setting up a server",layout:"index"},s=(p="Alert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",c({},e))}),m={frontMatter:l},u=o.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(u,c(c(c({},m),a),{},{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",c({},{id:"setting-up-a-server"}),"Setting up a server",Object(i.b)("a",c({parentName:"h1"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#setting-up-a-server"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("h2",c({},{id:"requirements"}),"Requirements",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#requirements"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A PC/VPS, running either Windows 10 or Windows Server 2019."),Object(i.b)("li",{parentName:"ul"},"The ability to port forward"),Object(i.b)("li",{parentName:"ul"},"A Plutonium forum account"),Object(i.b)("li",{parentName:"ul"},"Notepad++/Any other code editor"),Object(i.b)("li",{parentName:"ul"},"A Copy of the game installed in ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\gameserver\\IW5"),".")),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/PdotY2c.png",alt:"img"}))),Object(i.b)("h2",c({},{id:"1-preparation"}),"1. Preparation",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#1-preparation"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the ",Object(i.b)("a",c({parentName:"p"},{href:"https://cdn.plutonium.pw/updater/plutonium.exe"}),"Plutonium Launcher"),", and place it in your server folder.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"plutonium"),", so it can download the required files.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the ",Object(i.b)("a",c({parentName:"p"},{href:"https://github.com/xerxes-at/IW5ServerConfig/archive/refs/heads/master.zip"}),"IW5 Config Files"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Save/Extract the configs to ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\gameserver\\IW5")))),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/wCu3KiR.png",alt:"img"}))),Object(i.b)("h3",c({},{id:"12-creating-a-server-key"}),"1.2 Creating a server key",Object(i.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#12-creating-a-server-key"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("a",c({parentName:"p"},{href:"https://platform.plutonium.pw/serverkeys"}),"Plutonium Server Key page"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fill in the name of the server and select the correct game.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on create, then copy the server key.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Paste the key into the start bat under ",Object(i.b)("inlineCode",{parentName:"p"},"set key=xxxx"),", replace ",Object(i.b)("inlineCode",{parentName:"p"},"xxxx")," with your key."))),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/Z63M36I.png",alt:"img"}))),Object(i.b)("h2",c({},{id:"2-basic-server-configuration"}),"2. Basic server configuration",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#2-basic-server-configuration"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("p",null,"1","."," Edit your ",Object(i.b)("inlineCode",{parentName:"p"},"server.cfg")," file with whatever changes you want (i.e. RCON Password/Map Rotation/etc/etc).",Object(i.b)("br",{parentName:"p"}),"\n","2","."," Double click the bat file.",Object(i.b)("br",{parentName:"p"}),"\n","3","."," Wait for the server to finish loading.  "),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/0BaYCo6.png",alt:"img"}))),Object(i.b)("h2",c({},{id:"3-optional-advanced-configuration"}),"3. (Optional) Advanced configuration",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#3-optional-advanced-configuration"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("p",null,"1","."," Make a copy of the base game's ",Object(i.b)("inlineCode",{parentName:"p"},".dsr")," file of the gametype you want to modify.",Object(i.b)("br",{parentName:"p"}),"\n","2","."," Open that new dsr file and modify it to your liking.  "),Object(i.b)(s,{variant:"tip",mdxType:"Alert"},Object(i.b)("p",null,"You can open your game and make a gametype under Private Match, and save it to your disk, and copy it into this folder to more easily understand your settings/choices.")),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/rIomHuu.gif",alt:"gif"}))),Object(i.b)("p",null,"3","."," Modify your map rotation to include your new gametype."),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/l6Y1g1B.png",alt:"img"}))),Object(i.b)("h2",c({},{id:"4-optional-install-a-server-management-tool-iw4madmin"}),"4. (Optional) Install a server management tool (IW4MAdmin)",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#4-optional-install-a-server-management-tool-iw4madmin"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("p",null,"Verify ",Object(i.b)("inlineCode",{parentName:"p"},'g_log "games_mp.log"')," is unique (in your server.cfg file)"),Object(i.b)(s,{variant:"tip",mdxType:"Alert"},Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},"g_log")," to your server name for example if you are hosting a TDM and a Search and Destroy server your ",Object(i.b)("inlineCode",{parentName:"p"},"g_log"),"'s might look like this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'g_log "tdm_server.log"'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},'g_log "sd_server.log"'),"  ")),Object(i.b)("p",null,"Verify ",Object(i.b)("inlineCode",{parentName:"p"},"g_logSync")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"1"),".",Object(i.b)("br",{parentName:"p"}),"\n","Verify ",Object(i.b)("inlineCode",{parentName:"p"},"logfile")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"2"),".  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download .NET Core 3.1.x Runtime or newer [",Object(i.b)("a",c({parentName:"li"},{href:"https://dotnet.microsoft.com/download/dotnet-core/thank-you/runtime-aspnetcore-3.1.4-windows-hosting-bundle-installer"}),"Windows"),"]/[",Object(i.b)("a",c({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1910"}),"Linux"),"]."),Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("a",c({parentName:"li"},{href:"https://github.com/RaidMax/IW4M-Admin/releases"}),"IW4MAdmin"),"."),Object(i.b)("li",{parentName:"ol"},"Follow the IW4MAdmin ",Object(i.b)("a",c({parentName:"li"},{href:"https://github.com/RaidMax/IW4M-Admin/wiki/Getting-Started"}),"setup guide"),".")),Object(i.b)("h2",c({},{id:"5-optional-hosting-a-second-server"}),"5. (Optional) Hosting a second server",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#5-optional-hosting-a-second-server"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("p",null,"Make a copy of the start.bat file and the ",Object(i.b)("inlineCode",{parentName:"p"},"server.cfg")," file and rename them.",Object(i.b)("br",{parentName:"p"}),"\n","Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"server.cfg")," to meet your needs.",Object(i.b)("br",{parentName:"p"}),"\n","Edit the copy of the bat file to: use your new server key, use a new port, and use your new config file.",Object(i.b)("br",{parentName:"p"}),"\n","(You must forward the second port as well)",Object(i.b)("br",{parentName:"p"}),"\n","Start the server through the new .bat file.  "),Object(i.b)("h2",c({},{id:"faq"}),"FAQ",Object(i.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#faq"}),Object(i.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(i.b)("p",null,"Q: Why can't I find my server hosted at home while others can?",Object(i.b)("br",{parentName:"p"}),"\n","A: Your router probably doesn't support NAT-Loopback (aka. NAT-Reflection) and that's why it doesn't know how to forward the network traffic. In order to connect it use your internal IP or 127.0.0.1 if its hosted on the same machine.  "),Object(i.b)("p",null,"Q: Why can't I see my server when I have my game open?",Object(i.b)("br",{parentName:"p"}),"\n","A: If you start your client first, and your server is running on ",Object(i.b)("inlineCode",{parentName:"p"},"27016"),", your server will automatically take the port ",Object(i.b)("inlineCode",{parentName:"p"},"27017")," as your client uses ",Object(i.b)("inlineCode",{parentName:"p"},"27016"),", so make sure to just change the port if you are going to be running it on the same machine.  "))}d.isMDXComponent=!0},"7krC":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/server/iw5/setting-up-a-server",function(){return a("0TkR")}])}},[["7krC",0,1,2,3,4,5]]]);