var P={
 bowl:'<path d="M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z"/><path d="M8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3"/>',
 basket:'<path d="M3 9h18l-2 10H5z"/><path d="M8 9l4-6 4 6"/>',
 cloud:'<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1A4.5 4.5 0 0 1 17 18z"/>',
 cup:'<path d="M6 6h12l-1.5 14h-9z"/><path d="M13 6l2-4"/><path d="M7 11h10"/>',
 scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 18M8.5 16.5L20 6"/>',
 sparkle:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M19 3v4M17 5h4"/>',
 book:'<path d="M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3zM21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z"/>',
 cross:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
 wrench:'<path d="M20 7.5a5 5 0 0 1-6.5 5L6 20a2 2 0 0 1-2-2l7.5-7.5a5 5 0 0 1 5-6.5l-3 3 2.5 2.5z"/>',
 tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 pin:'<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
 moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
 alert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 truck:'<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
 tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
 chat:'<path d="M4 20l1.4-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.9.6a4 4 0 0 1-1.8-1.8l.6-.9-1-2z"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 shop:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 12v8h14v-8"/>'
};
function I(n){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">'+P[n]+'</svg>'}

var SHOPS=[
 {id:"khan-food-point",name:"Khan Food Point",cat:"Food & Grocery",hue:24,ic:"bowl",kind:"product",
  blurb:"Fresh dairy and desi breakfast items.",address:"Jhang Mor",area:"Jhang Mor",
  items:[["Milk","Dhoodh"],["Yogurt","Dahi"],["Shon Halwa",""],["Paratha Chana",""],["Desi Ghee",""],["Butter","Makhan"],["Honey","Shehad"]]},
 {id:"khan-karyana-store",name:"Khan Karyana Store",cat:"Food & Grocery",hue:350,ic:"basket",kind:"product",
  blurb:"Confectionery, stationery and everyday karyana goods.",address:"Purani Ghass Mandi Chowk, Tabakhiyan",area:"Purani Ghass Mandi Chowk",
  items:[["Confectionery","Sweets and candy"],["Stationery","Copies, pens, school items"],["Karyana products","Daily grocery items"]]},
 {id:"smoke-bar",name:"Smoke Bar",cat:"Drinks & Smoke",hue:262,ic:"cloud",kind:"product",
  blurb:"Pods, vapes and flavours.",address:"Opposite Suhail Petroleum Pump, Makkah Plaza",area:"Makkah Plaza",
  note:"Sold to adults 18 and over only.",
  items:[["Pods",""],["Vapes",""],["Flavours",""]]},
 {id:"warda-drink-corner",name:"Warda Drink Corner",cat:"Drinks & Smoke",hue:190,ic:"cup",kind:"product",
  blurb:"Cold drinks and snacks.",address:"Purani Ghass Mandi Chowk, Tabakhiyan",area:"Purani Ghass Mandi Chowk",
  note:"Cigarettes are sold to adults 18 and over only.",
  items:[["Cold drinks","Thandi bottle"],["Cigarettes",""],["Snacks",""]]},
 {id:"ali-tailors",name:"Ali Tailor's",cat:"Tailor & Beauty",hue:212,ic:"scissors",kind:"service",
  blurb:"Stitching for men and women.",address:"Near the water plant",area:"Water plant",
  items:[["Gents suits","Stitching"],["Ladies suits","Stitching"],["Waistcoat stitching",""],["Coat stitching",""],["Shirt stitching",""]]},
 {id:"shades-beauty-parlour",name:"Shade's Beauty Parlour",cat:"Tailor & Beauty",hue:326,ic:"sparkle",kind:"service",
  blurb:"Bridal, party and everyday makeup, plus skin and nail care.",address:"Muhalla Bukhari Wala",area:"Muhalla Bukhari Wala",
  items:[["Bridal makeup",""],["Party makeup",""],["Simple makeup",""],["Facial",""],["Pedicure",""],["Manicure",""]]},
 {id:"kashmiri-tuition-center",name:"Kashmiri Tuition Center",cat:"Health & Learning",hue:150,ic:"book",kind:"service",
  blurb:"Tuition classes for girls and boys.",address:"Near Kashmiri Chowk",area:"Kashmiri Chowk",
  items:[["Girls classes","Prep Group (PG) to Matric"],["Boys classes","Prep Group (PG) to 5th"]]},
 {id:"al-nasir-homeo-clinic",name:"Al-Nasir Homeo Clinic",cat:"Health & Learning",hue:172,ic:"cross",kind:"product",
  blurb:"A 12-hour doctor and a full range of medicines.",address:"Tida, Karimabad",area:"Tida, Karimabad",
  items:[["All varieties of medicine",""],["Homeopathic medicine",""],["Doctor visit","Doctor available 12 hours"]]},
 {id:"abbas-electronics-workshop",name:"Abbas Electronics Workshop",cat:"Electronics",hue:38,ic:"wrench",kind:"service",
  blurb:"Repair and installation for TVs, appliances and audio.",address:"Kashmiri Chowk",area:"Kashmiri Chowk",
  items:[["LED / LCD repairing",""],["Microwave oven repairing",""],["Beauty equipment repairing",""],["Professional LED installation",""],["Audio speaker and mic repairing",""]]},
 {id:"hashmi-electronics",name:"Hashmi Electronics",cat:"Electronics",hue:232,ic:"tv",kind:"product",
  blurb:"LED TVs, Q-LED TVs and Audionic speakers.",address:"Qinwan Chowk",area:"Qinwan Chowk",
  items:[["LED TV","All varieties"],["Q-LED TV","All varieties"],["Audionic speakers","All varieties"]]}
];
var DEL=[["truck","Delivery on orders of Rs. 500 or more. Delivery charges depend on distance."],["tag","For product prices, contact the shop."]];
var INFO={
 "khan-food-point":{tags:["Delivery from Rs. 500"],facts:DEL,close:"Please tell me the prices and the delivery charge.",msg:"Hello Khan Food Point, I found you on Markezo. I want to place an order. Please tell me the prices and the delivery charge."},
 "khan-karyana-store":{phone:"923012846162",disp:"0301-2846162",tags:["Delivery from Rs. 500"],facts:DEL,close:"Please tell me the prices and the delivery charge.",msg:"Hello Khan Karyana Store, I found you on Markezo. I want to place an order. Please tell me the prices and the delivery charge."},
 "smoke-bar":{phone:"923236255683",disp:"0323-6255683",tags:["No delivery","18+"],
  items:[["Pods",""],["Vapes",""],["Flavours","Tokyo, Oxwa, Crush"],["Accessories",""]],
  facts:[["alert","No delivery."],["clock","Contact the shop to know if it is open or closed."],["tag","For pods and vapes prices, contact the shop."]],
  rates:[["Tokyo","Rs. 150 per 1 ml"],["Oxwa","Rs. 100 per 1 ml"],["Crush","Rs. 100 per 1 ml"]],
  close:"Is the shop open now? Please tell me the price.",msg:"Hello Smoke Bar, I found you on Markezo. Is the shop open now? I want to ask about pods, vapes, flavours and accessories."},
 "warda-drink-corner":{phone:"923083731216",disp:"0308-3731216",tags:["No delivery"],facts:[["alert","No delivery."],["clock","Contact the shop to know if it is open or closed."]],close:"Is the shop open now?",msg:"Hello Warda Drink Corner, I found you on Markezo. Is the shop open now?"},
 "ali-tailors":{phone:"923003908941",disp:"0300-3908941",tags:["Price on contact"],facts:[["tag","For stitching, contact the shop. The price is confirmed when you contact."]],close:"Please tell me the stitching price and when I can bring the cloth.",msg:"Hello Ali Tailor, I found you on Markezo. I want to get stitching done. Please tell me the price."},
 "shades-beauty-parlour":{phone:"923024264499",disp:"0302-4264499",tags:["Ladies only"],facts:[["alert","This parlour is only for ladies."]],close:"Please tell me the price and the appointment time.",msg:"Hello Shades Beauty Parlour, I found you on Markezo. I would like to book an appointment."},
 "kashmiri-tuition-center":{tags:["Admission on contact"],facts:[["book","For admission, contact the center."]],close:"Please tell me about admission and fees.",msg:"Hello Kashmiri Tuition Center, I found you on Markezo. I want to ask about admission."},
 "al-nasir-homeo-clinic":{phone:"923094658416",disp:"0309-4658416",tags:["12-hour doctor"],facts:[["clock","A doctor is available for 12 hours."],["phone","For an appointment, contact the clinic."]],close:"Please tell me about the appointment time.",msg:"Hello Al-Nasir Homeo Clinic, I found you on Markezo. I want to book an appointment."},
 "abbas-electronics-workshop":{tags:["Appointment on contact"],facts:[["phone","For an appointment, contact the workshop."]],close:"Please tell me about the appointment time.",msg:"Hello Abbas Electronics Workshop, I found you on Markezo. I want to book an appointment for a repair."},
 "hashmi-electronics":{close:"Please tell me the price.",msg:"Hello Hashmi Electronics, I found you on Markezo. I want to ask about LED TVs and speakers."}
};
SHOPS.forEach(function(s){var x=INFO[s.id]||{};for(var k in x)s[k]=x[k]});
var CATS=["All"].concat(SHOPS.map(function(s){return s.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));
var CATIC={"All":"grid","Food & Grocery":"basket","Drinks & Smoke":"cup","Tailor & Beauty":"scissors","Health & Learning":"book","Electronics":"tv"};
var cart={}, cat="All", q="", toastT=null;

function $(s){return document.querySelector(s)}
function byId(id){return SHOPS.filter(function(s){return s.id===id})[0]}
function mapUrl(s){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.name+", "+s.address)}
function total(){var n=0;for(var k in cart)n+=cart[k];return n}
function st(s){return '--h:'+s.hue}

function tagsHtml(s){return (s.tags&&s.tags.length)?'<div class="bd">'+s.tags.map(function(t){return '<span>'+t+'</span>'}).join("")+'</div>':''}
function hasCart(id){for(var k in cart){if(k.split("|")[0]===id)return true}return false}
function waUrl(s,text){return "https://wa.me/"+s.phone+"?text="+encodeURIComponent(text)}
function waText(s){return hasCart(s.id)?requestText(s.id):(s.msg||("Hello "+s.name+", I found you on Markezo."))}
function waBtn(s,cls){return s.phone?'<a class="'+cls+'" data-wa="'+s.id+'" target="_blank" rel="noopener" href="'+waUrl(s,waText(s))+'">'+I("chat")+'Message on WhatsApp</a>':''}
function factsHtml(s){
  var h='';
  if(s.facts&&s.facts.length)h+='<div class="facts">'+s.facts.map(function(f){return '<div class="fact"><span class="fi">'+I(f[0])+'</span><p>'+f[1]+'</p></div>'}).join("")+'</div>';
  if(s.rates)h+='<div class="rates"><h3>Flavour prices</h3>'+s.rates.map(function(r){return '<div class="rr"><span>'+r[0]+'</span><span>'+r[1]+'</span></div>'}).join("")+'</div>';
  return h;
}
function contactHtml(s){
  if(!s.phone)return '<div class="contact"><h2>Contact</h2><p class="addr">Phone number coming soon.</p></div>';
  return '<div class="contact"><h2>Contact</h2><p class="num">'+s.disp+'</p><div class="btns">'+waBtn(s,"btn wa")+'<button class="btn" type="button" data-num="'+s.disp+'">'+I("copy")+'Copy number</button></div></div>';
}
function syncWa(){var a=document.querySelectorAll("a[data-wa]");for(var i=0;i<a.length;i++){var s=byId(a[i].dataset.wa);a[i].href=waUrl(s,waText(s))}}
function logoBox(s,cls){
  var c=(s.id==="khan-food-point")?" contain":"";
  return '<div class="'+cls+c+'"><span class="fb">'+I(s.ic)+'</span><img src="logos/'+s.id+'.webp" alt="'+s.name+' logo"></div>';
}
function shopCard(s,big){
  var pv=big?'<div class="pv">'+s.items.slice(0,4).map(function(i){return '<span>'+i[0]+'</span>'}).join("")+'</div>':'';
  return '<a class="card sg'+(big?' big':'')+'" href="#shop-'+s.id+'" style="'+st(s)+'">'+logoBox(s,"lg")+'<div class="cb">'+
    '<span class="tag">'+s.cat+'</span><h3>'+s.name+'</h3>'+pv+tagsHtml(s)+
    '<span class="where">'+I("pin")+s.address+'</span></div><span class="go">'+I("arrow")+'</span></a>';
}
function areaBlocks(){
  var areas=[];SHOPS.forEach(function(s){if(areas.indexOf(s.area)<0)areas.push(s.area)});
  return areas.map(function(a){
    var list=SHOPS.filter(function(s){return s.area===a});
    return '<div class="area"><h3>'+I("pin")+a+'</h3>'+list.map(function(s){return '<a href="#shop-'+s.id+'">'+s.name+'<span>'+s.cat+'</span></a>'}).join("")+'</div>';
  }).join("");
}
function homeView(){
  var stack=[SHOPS[0],SHOPS[9],SHOPS[5]].map(function(s,i){
    return '<a class="mini sg" href="#shop-'+s.id+'" style="'+st(s)+';background:linear-gradient(145deg,var(--c1),var(--c2))"><span class="ic">'+I(s.ic)+'</span><span><b>'+s.name+'</b><span>'+s.address+'</span></span></a>';
  }).join("");
  $("#view").innerHTML=
   '<div class="wrap"><section class="hero"><div><span class="eyebrow"><i></i>10 local shops are open</span>'+
   '<h1>Your whole <em>bazaar</em>, in one place.</h1>'+
   '<p>Browse each shop\'s store, see what they sell, and find exactly where they are.</p>'+
   '<label class="search">'+I("search")+'<input id="q" type="search" placeholder="Search a shop, product or area" aria-label="Search shops"></label>'+
   '<div class="stats"><div><b>10</b><span>Shops</span></div><div><b>8</b><span>Areas</span></div><div><b>40+</b><span>Products and services</span></div></div></div>'+
   '<div class="stack">'+stack+'</div></section>'+
   '<div class="cats" id="cats"></div>'+
   '<div class="head"><h2 id="gt">All stores</h2><span class="count" id="count"></span></div>'+
   '<div class="grid" id="grid"></div>'+
   '<section class="sec"><h2>How Markezo works</h2><p>Three steps from browsing to your order.</p><div class="steps">'+
   '<div class="stp"><span class="n">1</span><h3>Pick a shop</h3><p>Open any store to see its products or services and its address.</p></div>'+
   '<div class="stp"><span class="n">2</span><h3>Build your list</h3><p>Tap Add on what you need. Change quantities any time.</p></div>'+
   '<div class="stp"><span class="n">3</span><h3>Send or visit</h3><p>Tap Send on WhatsApp. A chat with the shop opens with your request already typed. Or open the location in Maps and visit.</p></div></div></section>'+
   '<section class="sec"><h2>Shops by area</h2><p>Find stores that are close to each other.</p><div class="areas">'+areaBlocks()+'</div></section></div>';
  $("#cats").innerHTML=CATS.map(function(c){return '<button class="chip" type="button" data-cat="'+c+'" aria-pressed="'+(c===cat)+'">'+I(CATIC[c])+c+'</button>'}).join("");
  $("#q").value=q;
  $("#q").addEventListener("input",function(e){q=e.target.value;filterGrid()});
  filterGrid();
}
function filterGrid(){
  var t=q.trim().toLowerCase(), plain=(cat==="All"&&!t);
  var list=SHOPS.filter(function(s){
    if(cat!=="All"&&s.cat!==cat)return false;
    if(!t)return true;
    var hay=(s.name+" "+s.cat+" "+s.address+" "+s.blurb+" "+s.items.map(function(i){return i[0]+" "+i[1]}).join(" ")).toLowerCase();
    return hay.indexOf(t)>-1;
  });
  var bigAt=plain?{0:1,5:1}:{};
  $("#grid").innerHTML=list.length?list.map(function(s,i){return shopCard(s,!!bigAt[i])}).join(""):'<p class="empty">No shop matches that search. Try another word.</p>';
  $("#count").textContent=list.length+(list.length===1?" shop":" shops");
  $("#gt").textContent=cat==="All"?"All stores":cat;
}
function prodControl(s,i){
  var k=s.id+"|"+i,n=cart[k]||0;
  if(!n)return '<button class="add" type="button" data-add="'+k+'">'+I("plus")+(s.kind==="service"?"Request":"Add to list")+'</button>';
  return '<div class="step"><button type="button" data-dec="'+k+'" aria-label="Less">−</button><span>'+n+'</span><button type="button" data-add="'+k+'" aria-label="More">+</button></div>';
}
function shopView(s){
  var near=SHOPS.filter(function(o){return o.id!==s.id&&o.area===s.area});
  var map='<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="currentColor" stroke-width="10" fill="none" stroke-linecap="round"><path d="M-10 110 L120 80 L200 100 L340 40"/><path d="M90 -10 L120 80 L100 160"/><path d="M230 -10 L200 100 L250 160"/></g><g stroke="currentColor" stroke-width="3" fill="none" opacity=".7"><path d="M-10 40 L340 70"/><path d="M160 -10 L170 160"/><path d="M-10 140 L340 120"/></g></svg>';
  $("#view").innerHTML=
   '<div class="wrap"><a class="crumb" href="#home">'+I("back")+'All shops</a>'+
   '<div class="sh sg" style="'+st(s)+'">'+logoBox(s,"big")+'<div><span class="tag">'+s.cat+'</span><h1>'+s.name+'</h1><p>'+s.blurb+'</p>'+
   '<div class="pills"><span>'+I("bag")+s.items.length+(s.kind==="service"?' services':' items')+'</span><span>'+I("pin")+s.area+'</span>'+(s.tags||[]).map(function(t){return '<span>'+t+'</span>'}).join("")+'</div>'+waBtn(s,"wabig")+'</div></div>'+
   '<div class="layout sg" style="'+st(s)+'"><div>'+(s.note?'<div class="note">'+I("alert")+s.note+'</div>':'')+factsHtml(s)+
   '<h2 class="sec2">'+(s.kind==="service"?"Services":"Products")+'</h2><div class="plist" id="plist"></div></div>'+
   '<aside class="loc"><div class="map">'+map+'<span class="pin"><i></i></span></div><div class="in"><h2>Location</h2><p class="addr">'+s.address+'</p><div class="btns">'+
   '<a class="btn pri" href="'+mapUrl(s)+'" target="_blank" rel="noopener">'+I("pin")+'Open in Maps</a>'+
   '<button class="btn" type="button" id="copyAddr">'+I("copy")+'Copy address</button></div>'+
   contactHtml(s)+(near.length?'<div class="near">Also in this area'+near.map(function(o){return '<a href="#shop-'+o.id+'">'+o.name+'</a>'}).join("")+'</div>':'')+
   '</div></aside></div></div>';
  drawProducts(s);
  $("#copyAddr").addEventListener("click",function(e){copyText(s.name+", "+s.address,e.currentTarget)});
}
function drawProducts(s){
  syncWa();var el=$("#plist"); if(!el)return;
  el.innerHTML=s.items.map(function(it,i){
    return '<div class="prod"><div class="top"><span class="b">'+I(s.ic)+'</span><div><h3>'+it[0]+'</h3>'+(it[1]?'<small>'+it[1]+'</small>':'')+'</div></div>'+prodControl(s,i)+'</div>';
  }).join("");
}
function route(){
  var h=location.hash.replace("#","");
  window.scrollTo(0,0);
  if(h.indexOf("shop-")===0&&byId(h.slice(5)))shopView(byId(h.slice(5)));
  else homeView();
}
function copyText(text,btn){
  var o=btn.innerHTML;
  var done=function(){btn.textContent="Copied";setTimeout(function(){btn.innerHTML=o},1500)};
  var fallback=function(){
    var ta=btn.parentNode.querySelector("textarea")||document.createElement("textarea");
    ta.readOnly=true;ta.value=text;
    if(!ta.parentNode)btn.parentNode.appendChild(ta);
    ta.select();
  };
  try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
}
function renderCart(){
  var n=total();
  $("#cartCount").textContent=n;$("#fabCount").textContent=n;
  $("#fab").hidden=(n===0)||!$("#panel").hidden;
  var groups={};
  Object.keys(cart).forEach(function(k){var p=k.split("|");(groups[p[0]]=groups[p[0]]||[]).push([+p[1],cart[k]])});
  var ids=Object.keys(groups);
  if(!ids.length){$("#cartBody").innerHTML='<p class="hint">Your list is empty. Open a shop and tap "Add to list".</p>';return}
  $("#cartBody").innerHTML=ids.map(function(id){
    var s=byId(id);
    var rows=groups[id].map(function(r){var it=s.items[r[0]],k=id+"|"+r[0];
      return '<div class="row"><span>'+it[0]+'</span><div class="step"><button type="button" data-dec="'+k+'" aria-label="Less">−</button><span>'+r[1]+'</span><button type="button" data-add="'+k+'" aria-label="More">+</button></div></div>'}).join("");
    return '<div class="grp"><h3>'+s.name+'</h3>'+rows+'<div class="btns" style="margin-top:10px">'+(s.phone?'<a class="btn wa" target="_blank" rel="noopener" href="'+waUrl(s,requestText(id))+'">'+I("chat")+'Send on WhatsApp</a>':'')+'<button class="btn" type="button" data-copy="'+id+'">'+I("copy")+'Copy request</button></div>'+(s.phone?'':'<p class="hint" style="margin:8px 0 0">This shop has no number yet. Copy the request and send it later.</p>')+'</div>';
  }).join("");
}
function requestText(id){
  var s=byId(id),lines=["Hello "+s.name+", I found you on Markezo. I would like:"];
  Object.keys(cart).forEach(function(k){var p=k.split("|");if(p[0]===id)lines.push("- "+s.items[+p[1]][0]+" x"+cart[k])});
  lines.push(s.close||"Please tell me the price and when I can come.");
  return lines.join("\n");
}
function openCart(o){$("#panel").hidden=!o;$("#veil").hidden=!o;if(o)$("#closeCart").focus();renderCart()}
function toast(msg){
  var t=$("#toast");t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(function(){t.hidden=true},1400);
}
function refresh(){
  renderCart();
  var h=location.hash.replace("#","");
  if(h.indexOf("shop-")===0&&byId(h.slice(5)))drawProducts(byId(h.slice(5)));
}
function isDark(){
  var a=document.documentElement.getAttribute("data-theme");
  if(a)return a==="dark";
  return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function themeIcon(){$("#themeBtn").innerHTML=I(isDark()?"sun":"moon")}
document.addEventListener("click",function(e){
  var t=e.target.closest("button");if(!t)return;
  if(t.dataset.add){cart[t.dataset.add]=(cart[t.dataset.add]||0)+1;refresh();if(cart[t.dataset.add]===1)toast("Added to your list")}
  else if(t.dataset.dec){var k=t.dataset.dec;cart[k]=(cart[k]||0)-1;if(cart[k]<=0)delete cart[k];refresh()}
  else if(t.dataset.copy){copyText(requestText(t.dataset.copy),t)}
  else if(t.dataset.num){copyText(t.dataset.num,t)}
  else if(t.dataset.cat){cat=t.dataset.cat;var c=document.querySelectorAll(".chip");for(var i=0;i<c.length;i++)c[i].setAttribute("aria-pressed",c[i].dataset.cat===cat);filterGrid()}
});
$("#cartBtn").addEventListener("click",function(){openCart(true)});
$("#fab").addEventListener("click",function(){openCart(true)});
$("#closeCart").addEventListener("click",function(){openCart(false)});
$("#veil").addEventListener("click",function(){openCart(false)});
$("#themeBtn").addEventListener("click",function(){document.documentElement.setAttribute("data-theme",isDark()?"light":"dark");themeIcon()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")openCart(false)});
window.addEventListener("hashchange",route);
$("#logoIc").innerHTML=I("shop");
$("#closeCart").innerHTML=I("x");
themeIcon();route();renderCart();
