_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"76XO":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n("dhJC"),i=n("cpVT"),o=(n("q1tI"),n("7ljp")),r=n("aArQ");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,s={__resourcePath:"docs/modding/creating-textures.md",__scans:{},title:"Creating custom textures for Plutonium",layout:"index"},b=(p="Alert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",c({},e))}),d={frontMatter:s},u=r.a;function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,c(c(c({},d),n),{},{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",c({},{id:"creating-custom-textures-for-plutonium"}),"Creating custom textures for Plutonium",Object(o.b)("a",c({parentName:"h1"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#creating-custom-textures-for-plutonium"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("h2",c({},{id:"requirements"}),"Requirements",Object(o.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#requirements"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",c({parentName:"li"},{href:"https://drive.google.com/file/d/1NEEvbvLOatItpMIyWyQ9ytkk1bvgKQMD/view?usp=sharing"}),"Texture Toolkit")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",c({parentName:"li"},{href:"https://www.getpaint.net/download.html"}),"Paint.NET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",c({parentName:"li"},{href:"https://7-zip.org/"}),"7Zip")," or ",Object(o.b)("a",c({parentName:"li"},{href:"https://www.rarlab.com/download.htm"}),"WinRAR"))),Object(o.b)(b,{variant:"tip",mdxType:"Alert"},Object(o.b)("p",null,"Photoshop can be used as an alternative to Paint.NET but since it's not free we're not going to provide a download link here. When using Photoshop you need the ",Object(o.b)("a",c({parentName:"p"},{href:"https://software.intel.com/content/www/us/en/develop/articles/intel-texture-works-plugin.html"}),"Intel Texture Works Plugin")," installed to be able to load and save .dds textures.")),Object(o.b)("h3",c({},{id:"getting-started"}),"Getting Started",Object(o.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#getting-started"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," Create a new folder anywhere on your pc, this is going to be used to store files while creating your custom texture."),Object(o.b)("p",null,"2","."," Download and extract the Texture Toolkit into the folder you created, your folder should now look like this:"),Object(o.b)("p",null,Object(o.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/wPdsCNN.png",alt:"CustomCamosFolder"}))),Object(o.b)("p",null,"3","."," Install Paint.NET or install Photoshop and the Intel Texture Works Plugin."),Object(o.b)("p",null,"4","."," Locate the folder of the game you want to create a custom texture/camo for."),Object(o.b)("h2",c({},{id:"exporting-the-texture-you-want-to-modify"}),"Exporting the Texture you want to modify",Object(o.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#exporting-the-texture-you-want-to-modify"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"To modify a texture we first have to export it from the corresponding game files. This works pretty much the same for T4 and IW5 but works differently for T6."),Object(o.b)("h3",c({},{id:"t4-and-iw5"}),"T4 and IW5",Object(o.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#t4-and-iw5"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," Navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," folder in your game folder."),Object(o.b)("p",null,"2","."," Open one or more of the .iwd files (iw_xx.iwd) with 7Zip or WinRAR (right click the file -> open with... -> select 7Zip or WinRAR)."),Object(o.b)("p",null,"3","."," Locate the texture you want to modify inside the .iwd file and extract it to the folder you created earlier (simply drag and drop it out of the 7Zip/WinRAR window)."),Object(o.b)("p",null,"4","."," Open the folder that contains the files from the Texture Toolkit in a new explorer window."),Object(o.b)("p",null,"5","."," Open ",Object(o.b)("inlineCode",{parentName:"p"},"IWI_X_DDS.exe")," and Drag and drop the previously extracted .iwi file onto the IWI_X_DDS window, this will convert the .iwi file to .dds"),Object(o.b)(b,{variant:"warning",mdxType:"Alert"},Object(o.b)("p",null,"If the filename of the .iwi file contains ",Object(o.b)("inlineCode",{parentName:"p"},"~")," or similar symbols the converter will replace those with ",Object(o.b)("inlineCode",{parentName:"p"},"_"),", this means you need to change the name of the .dds so the filename is exactly the same as the one of the original .iwi file.")),Object(o.b)("h3",c({},{id:"t6"}),"T6",Object(o.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#t6"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," Navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"all")," folder located inside the ",Object(o.b)("inlineCode",{parentName:"p"},"zone")," folder in your T6 game folder."),Object(o.b)("p",null,"2","."," Open the ",Object(o.b)("inlineCode",{parentName:"p"},"T6 iPak Exporter")," folder included in the Texture Toolkit in a new explorer window."),Object(o.b)("p",null,"3","."," Drag and drop an .ipak file from the ",Object(o.b)("inlineCode",{parentName:"p"},"all")," folder onto ",Object(o.b)("inlineCode",{parentName:"p"},"Tom_BO2_iPak.exe"),", this will export all textures from the .ipak directly to .dds."),Object(o.b)(b,{variant:"tip",mdxType:"Alert"},Object(o.b)("p",null,"Most game textures are located in base.ipak, the dlc-specific ones are located in dlc0/1/2/3/4.ipak.")),Object(o.b)(b,{variant:"tip",mdxType:"Alert"},Object(o.b)("p",null,"Finding the correct texture can be tedious, you may have to convert and look at multiple textures before you find the one you're looking for. The best way is to simply look at the filenames and filesizes of the .iwi's, weapon camos usually start with ",Object(o.b)("inlineCode",{parentName:"p"},"weapon_")," or ",Object(o.b)("inlineCode",{parentName:"p"},"wpn_")," and are >1MB in size.")),Object(o.b)("h2",c({},{id:"modifying-your-texture"}),"Modifying your Texture",Object(o.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#modifying-your-texture"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," Open the .dds file with Paint.NET or Photoshop and edit it to your liking"),Object(o.b)("p",null,"2","."," As soon as you're done editing it save the file:"),Object(o.b)("h3",c({},{id:"exportingsaving-the-file-in-paintnet"}),"Exporting/Saving the file in Paint.NET",Object(o.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#exportingsaving-the-file-in-paintnet"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"In Paint.NET simply click ",Object(o.b)("inlineCode",{parentName:"p"},"File -> save as")," and save the file in the folder you created earlier, you can overwrite the original .dds file."),Object(o.b)("h3",c({},{id:"exportingsaving-the-file-in-photoshop"}),"Exporting/Saving the file in Photoshop",Object(o.b)("a",c({parentName:"h3"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#exportingsaving-the-file-in-photoshop"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," In Photoshop check if the texture contains an alpha channel, you can check in the menu on the right, switch to the ",Object(o.b)("inlineCode",{parentName:"p"},"Channels")," tab."),Object(o.b)("p",null,Object(o.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/XLu1OXu.png",alt:"PhotoshopChannels"}))),Object(o.b)("p",null,"2","."," Go to ",Object(o.b)("inlineCode",{parentName:"p"},"file -> save as")," and select ",Object(o.b)("inlineCode",{parentName:"p"},'Intel Texture Works (*.DDS, *,DDS)" Format')," (below ",Object(o.b)("inlineCode",{parentName:"p"},"File Name"),"), select the previously created folder as your destination and hit save (you can overwrite the original .dds file)."),Object(o.b)("p",null,"3","."," A dialogue should pop up that lets you define different compression settings, depending on if your texture contains an alpha channel, no alpha channel or is a normal map select the texture type and compression like so:"),Object(o.b)("p",null,Object(o.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/pl2Yl5A.png",alt:"PhotoshopIntelTextureWorks"}))),Object(o.b)("p",null,"4","."," Hit ",Object(o.b)("inlineCode",{parentName:"p"},"Ok")," to save the file."),Object(o.b)("h2",c({},{id:"converting-the-texture-back-to-iwi-and-loading-it-in-game"}),"Converting the Texture back to iwi and loading it in-game",Object(o.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#converting-the-texture-back-to-iwi-and-loading-it-in-game"}),Object(o.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(o.b)("p",null,"1","."," Drag and drop your modified .dds file onto ",Object(o.b)("inlineCode",{parentName:"p"},"iwi_dds_fast_converter.exe")," which also comes with the Texture Toolkit."),Object(o.b)("p",null,"2","."," Type in the number that corresponds to the game you're creating a texture for and hit enter."),Object(o.b)("p",null,Object(o.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/lbpMNSK.png",alt:"IwiDDSConverter"}))),Object(o.b)("p",null,"3","."," The converter will create an .iwi file next to your .dds file, now you can ",Object(o.b)("a",c({parentName:"p"},{href:"/docs/modding/loading-textures"}),"learn how load your modified texture in-game"),"."),Object(o.b)(b,{variant:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Do not attempt to load your modified textures by putting them back into the original .iwd file, use our designated folders which is explained in the link above.")))}h.isMDXComponent=!0},VLsy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/modding/creating-textures",function(){return n("76XO")}])}},[["VLsy",0,1,2,3,4,5]]]);