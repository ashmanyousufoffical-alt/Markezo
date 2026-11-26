/* ===== Settings ===== */
/* To show the "List your shop" button, put the owner's WhatsApp number here, digits only with country code, e.g. "923001234567". */
var CONFIG={ownerPhone:""};

/* ===== Logos (optimised WebP) ===== */

var LOGO_DIM={"al-khair-pharmacy":[560,280],"al-nasir-homeo-clinic":[560,313],"ali-tailors":[560,373],"hashmi-electronics":[560,306],"kashmiri-tuition-center":[560,373],"khan-food-point":[560,448],"khan-karyana-store":[560,373],"mamas-bake":[560,548],"shades-beauty-parlour":[560,373],"smoke-bar":[560,373],"warda-drink-corner":[560,373]};
var LOGO={};for(var k in LOGO_DIM)LOGO[k]="logos/"+k+".webp";

/* ===== Shop data (unchanged from the original) ===== */
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
 speaker:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
 truck:'<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
 tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
 chat:'<path d="M4 20l1.4-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.9.6a4 4 0 0 1-1.8-1.8l.6-.9-1-2z"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 cake:'<path d="M4 20h16v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15c2 1.4 3.5 1.4 5 0s3-1.4 5 0 3.5 1.4 5 0"/><path d="M12 10V7"/><path d="M12 5.5c.8-1 .8-1.6 0-2.5-.8.9-.8 1.5 0 2.5z"/>',
 shop:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 12v8h14v-8"/>'
};
function I(n){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">'+P[n]+'</svg>'}

function G(g,list){return list.map(function(x){return [x[0],x[1],g]})}
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
 {id:"warda-drink-corner",name:"Warda Drink Corner",cat:"Drinks & Smoke",hue:175,ic:"cup",kind:"product",
  blurb:"Cold drinks and snacks.",address:"Purani Ghass Mandi Chowk, Tabakhiyan",area:"Purani Ghass Mandi Chowk",
  note:"Cigarettes are sold to adults 18 and over only.",
  items:[["Cold drinks","Thandi bottle"],["Cigarettes",""],["Snacks",""]]},
 {id:"ali-tailors",name:"Ali Tailor's",cat:"Tailor & Beauty",hue:250,ic:"scissors",kind:"service",
  blurb:"Stitching for men and women.",address:"Near the water plant",area:"Water plant",
  items:[["Gents suits","Stitching"],["Ladies suits","Stitching"],["Waistcoat stitching",""],["Coat stitching",""],["Shirt stitching",""]]},
 {id:"shades-beauty-parlour",name:"Shade's Beauty Parlour",cat:"Tailor & Beauty",hue:326,ic:"sparkle",kind:"service",
  blurb:"Bridal, party and everyday makeup, plus skin and nail care.",address:"Muhalla Bukhari Wala",area:"Muhalla Bukhari Wala",
  items:[["Bridal makeup",""],["Party makeup",""],["Simple makeup",""],["Facial",""],["Pedicure",""],["Manicure",""]]},
 {id:"kashmiri-tuition-center",name:"Kashmiri Tuition Center",cat:"Health & Learning",hue:150,ic:"book",kind:"service",
  blurb:"Tuition classes for girls and boys.",address:"Near Kashmiri Chowk",area:"Kashmiri Chowk",
  items:[["Girls classes","Prep Group (PG) to Matric"],["Boys classes","Prep Group (PG) to 5th"]]},
 {id:"al-nasir-homeo-clinic",name:"Al-Nasir Homeo Clinic",cat:"Health & Learning",hue:205,ic:"cross",kind:"product",
  blurb:"A 12-hour doctor and a full range of medicines.",address:"Tida, Karimabad",area:"Tida, Karimabad",
  items:[["All varieties of medicine",""],["Homeopathic medicine",""],["Doctor visit","Doctor available 12 hours"]]},
 {id:"hashmi-electronics",name:"Hashmi Electronics",cat:"Electronics",hue:215,ic:"tv",kind:"product",
  blurb:"LED TVs, Q-LED TVs and Audionic speakers.",address:"Qinwan Chowk",area:"Qinwan Chowk",
  items:[["LED TV","All varieties"],["Q-LED TV","All varieties"],["Audionic speakers","All varieties"]]},
 {id:"mamas-bake",name:"Mama's Bake",cat:"Food & Grocery",hue:295,ic:"cake",kind:"product",
  blurb:"Fresh and tasty cakes, cupcakes, brownies, donuts and gluten-free bakes.",address:"Opposite Police Welfare Petrol Pump, Jhang Mor, Muzaffargarh",area:"Jhang Mor",
  items:G("Cakes",[["Simple vanilla cake","Rs. 800"],["Pineapple cake","Rs. 800"],["Vanilla strawberry cake","Rs. 800"],["Vanilla pineapple cake","Rs. 800"],["Vanilla careem","Rs. 800"],["Vanilla caramel cake","Rs. 1,000"],["Vanilla and chocolate 2 in 1 cake","Rs. 1,200"],["Vanilla butterfly theme cake","Rs. 1,000"],["Vintage cake","Rs. 800"],["Simple fruit cake","Rs. 700"],["Marble tea cake","Rs. 800"],["Almond cake","Rs. 800"],["Almond macron cake","Rs. 1,000"],["Three milk cake","Rs. 1,500"],["Three milk lotus spread cake","Rs. 2,000"],["Simple vanilla pineapple cake, 3 pound","Rs. 2,500"],["Two tier cake","Rs. 1,000"],["Banto cake","Rs. 500"],["Event cake","Rs. 1,200"],["Anniversary theme cake","Rs. 1,200"],["Umrah mubarak cake","Rs. 1,200"],["Umrah theme cake","Rs. 1,200"],["Chocolate hajj cake","Rs. 1,200"],["White chocolate decorate cake","Rs. 1,500"]])
   .concat(G("Chocolate cakes",[["Simple chocolate cream cake","Rs. 1,000"],["Chocolate mud cake","Rs. 1,200"],["Chocolate ganash cake","Rs. 1,200"],["Chocolate fudge cake","Rs. 1,500"],["Death by chocolate cake","Rs. 1,500"],["Chocolate chip cake","Rs. 1,000"],["Fudge cake","Rs. 2,000 per pound"]]))
   .concat(G("Brownies",[["Fudge brownie","Rs. 150"],["Cakie brownie","Rs. 100"]]))
   .concat(G("Cupcakes",[["Chocolate fudge + filling cupcake","Rs. 200"],["Chocolate fudge simple","Rs. 150"],["Chocolate filling cupcakes","Rs. 120"],["Chocolate cream cupcake","Rs. 100"],["Vanilla cupcakes with caramel filling","Rs. 120"],["Vanilla cream + filling","Rs. 100"],["Vanilla simple","Rs. 80"]]))
   .concat(G("Donuts",[["Baked donut sprinkle","Rs. 80"],["Drizzling baked donut","Rs. 100"]]))
   .concat(G("Gluten-free items",[["Gluten free muffins","Rs. 120"],["Gluten free homemade buttercream cupcakes","Rs. 150"],["Gluten free homemade buttercream cake","Rs. 1,500"],["Gluten free tea cake","Rs. 1,000"]]))},
 {id:"al-khair-pharmacy",name:"Al-Khair Pharmacy",cat:"Health & Learning",hue:105,ic:"cross",kind:"product",
  blurb:"Pharmacy with delivery.",address:"Committee Chowk, Muzaffargarh",area:"Committee Chowk",
  items:[["Medicines","Ask the shop for price and stock"]]}
];
var DEL=[["truck","Delivery on orders of Rs. 500 or more. Delivery charges depend on distance."],["tag","For product prices, contact the shop."]];
var INFO={
 "khan-food-point":{tags:["Delivery from Rs. 500"],facts:[DEL[0],["tag","Prices are given by the shop and can change. Please confirm when you order."]],
  items:[["Honey","Rs. 5,000 per kg"],["Desi Ghee","Rs. 3,200 per kg"],["Milk","Rs. 200 per litre"],["Butter","Rs. 1,800 per kg"],["Yogurt","Rs. 240 per kg"],["Shon Halwa","Rs. 1,400 per kg"],["Paratha Chana",""]],close:"Please tell me the prices and the delivery charge.",msg:"Hello Khan Food Point, I found you on Markezo. I want to place an order. Please tell me the prices and the delivery charge."},
 "khan-karyana-store":{phone:"923012846162",disp:"0301-2846162",tags:["Delivery from Rs. 500"],facts:[DEL[0],["tag","Prices are given by the shop and can change. Please confirm when you order."]],
  items:G("Karyana products",[["Ata","Rs. 170 per kg"],["Maida","Rs. 170 per kg"],["Baisan","Rs. 210 per kg"],["Sugar","Rs. 130 per kg"],["Salt","Rs. 20 per kg"],["Cooking oil","Rs. 500 to 600 per litre"],["Ghee","Rs. 500 to 580 per kg"]])
   .concat(G("Spices",[["Mirch powder (red chilli powder)","Rs. 600 per kg"],["Mirch danadar (whole red chilli)","Rs. 600 per kg"],["Haldi (turmeric)","Rs. 600 per kg"],["Zira (cumin)","Rs. 1,000 per kg"]]))
   .concat(G("Home care",[["Soap","From Rs. 130"],["Tooth paste","From Rs. 50"],["Surf (detergent) 1/2 kg","Rs. 300"],["Surf (detergent) 1 kg","Rs. 600"]]))
   .concat(G("Also available",[["Confectionery","Sweets and candy"],["Stationery","Copies, pens, school items"]])),close:"Please tell me the prices and the delivery charge.",msg:"Hello Khan Karyana Store, I found you on Markezo. I want to place an order. Please tell me the prices and the delivery charge."},
 "smoke-bar":{maplink:"https://www.google.com/maps/search/?api=1&query=30.0701085,71.1965805",phone:"923236255683",disp:"0323-6255683",tags:["No delivery","18+"],
  items:[["Pods",""],["Vapes",""],["Flavours","Tokyo, Oxwa, Crush"],["Accessories",""]],
  facts:[["alert","No delivery."],["clock","Contact the shop to know if it is open or closed."],["tag","For pods and vapes prices, contact the shop."]],
  rates:[["Tokyo","Rs. 150 per 1 ml"],["Oxwa","Rs. 100 per 1 ml"],["Crush","Rs. 100 per 1 ml"]],
  close:"Is the shop open now? Please tell me the price.",msg:"Hello Smoke Bar, I found you on Markezo. Is the shop open now? I want to ask about pods, vapes, flavours and accessories."},
 "warda-drink-corner":{maplink:"https://www.google.com/maps/search/?api=1&query=30.0681897,71.1946228",phone:"923083731216",disp:"0308-3731216",tags:["No delivery"],facts:[["alert","No delivery."],["clock","Contact the shop to know if it is open or closed."]],close:"Is the shop open now?",msg:"Hello Warda Drink Corner, I found you on Markezo. Is the shop open now?"},
 "ali-tailors":{phone:"923003908941",disp:"0300-3908941",tags:["Price on contact"],facts:[["tag","For stitching, contact the shop. The price is confirmed when you contact."]],close:"Please tell me the stitching price and when I can bring the cloth.",msg:"Hello Ali Tailor, I found you on Markezo. I want to get stitching done. Please tell me the price."},
 "shades-beauty-parlour":{phone:"923024264499",disp:"0302-4264499",tags:["Ladies only"],facts:[["alert","This parlour is only for ladies."]],close:"Please tell me the price and the appointment time.",msg:"Hello Shades Beauty Parlour, I found you on Markezo. I would like to book an appointment."},
 "kashmiri-tuition-center":{tags:["Admission on contact"],facts:[["book","For admission, contact the center."]],close:"Please tell me about admission and fees.",msg:"Hello Kashmiri Tuition Center, I found you on Markezo. I want to ask about admission."},
 "al-nasir-homeo-clinic":{phone:"923094658416",disp:"0309-4658416",tags:["12-hour doctor"],facts:[["clock","A doctor is available for 12 hours."],["phone","For an appointment, contact the clinic."]],close:"Please tell me about the appointment time.",msg:"Hello Al-Nasir Homeo Clinic, I found you on Markezo. I want to book an appointment."},
 "hashmi-electronics":{close:"Please tell me the price.",msg:"Hello Hashmi Electronics, I found you on Markezo. I want to ask about LED TVs and speakers."},
 "mamas-bake":{phone:"923318811235",disp:"0331-8811235",tags:["Home delivery","Pay first"],
  facts:[["truck","Home delivery is available."],["alert","Payment is taken first, before delivery."],["tag","Prices are from the shop's WhatsApp catalogue. Please confirm with the shop."]],
  close:"Please tell me the total price, the delivery charge and how to pay.",msg:"Hello Mama's Bake, I found you on Markezo. I want to order. Please tell me about delivery and payment."},
 "al-khair-pharmacy":{phone:"923028551000",disp:"0302-8551000",tags:["Delivery"],facts:[["truck","Delivery is available."],["tag","Please ask the shop for medicine prices and stock."]],close:"Please tell me the price and the delivery details.",msg:"Hello Al-Khair Pharmacy, I found you on Markezo. I want to ask about a medicine and delivery."}
};
SHOPS.forEach(function(s){var x=INFO[s.id]||{};for(var k in x)s[k]=x[k]});
var CATS=["All"].concat(SHOPS.map(function(s){return s.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));
var CATIC={"All":"grid","Food & Grocery":"basket","Drinks & Smoke":"cup","Tailor & Beauty":"scissors","Health & Learning":"book","Electronics":"tv"};

P.share='<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/>';
P.up='<path d="M12 19V5M6 11l6-6 6 6"/>';
P.check='<path d="M5 12.5l4.5 4.5L19 7.5"/>';

var cart={}, cat="All", q="", toastT=null, ps="", booted=false, lastFocus=null;

/* ===== Helpers ===== */
function $(s){return document.querySelector(s)}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function byId(id){return SHOPS.filter(function(s){return s.id===id})[0]}
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function mapUrl(s){
  if(s.maplink)return s.maplink;
  var t=s.name+", "+s.address;if(!/muzaffargarh/i.test(t))t+=", Muzaffargarh";
  return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(t+", Pakistan");
}
function total(){var n=0;for(var k in cart)n+=cart[k];return n}
var THEME={"khan-food-point": [30, "hsl(30 78% 36%)", "hsl(20 72% 15%)"], "khan-karyana-store": [140, "hsl(140 58% 29%)", "hsl(156 66% 13%)"], "smoke-bar": [268, "hsl(268 70% 42%)", "hsl(280 76% 20%)"], "warda-drink-corner": [42, "hsl(41 82% 31%)", "hsl(33 78% 13%)"], "ali-tailors": [42, "hsl(36 12% 27%)", "hsl(30 16% 9%)"], "shades-beauty-parlour": [336, "hsl(336 62% 41%)", "hsl(326 64% 20%)"], "kashmiri-tuition-center": [228, "hsl(228 62% 38%)", "hsl(234 70% 16%)"], "al-nasir-homeo-clinic": [84, "hsl(80 48% 29%)", "hsl(88 52% 13%)"], "hashmi-electronics": [24, "hsl(214 14% 34%)", "hsl(220 24% 12%)"], "mamas-bake": [16, "hsl(16 82% 42%)", "hsl(350 66% 26%)"], "al-khair-pharmacy": [192, "hsl(192 82% 31%)", "hsl(212 80% 17%)"]};
SHOPS.forEach(function(s){var t=THEME[s.id];if(t){s.hue=t[0];s.c1=t[1];s.c2=t[2]}});
function st(s){return '--h:'+s.hue+(s.c1?';--c1:'+s.c1+';--c2:'+s.c2:'')}
function realCount(s){return s.items.filter(function(it){return it[2]!=="Design ideas"}).length}
function itemLabel(s){var n=realCount(s);return n+(s.kind==="service"?(n===1?" service":" services"):(n===1?" item":" items"))}
function areaList(){var a=[];SHOPS.forEach(function(s){if(a.indexOf(s.area)<0)a.push(s.area)});return a}
function hasCart(id){for(var k in cart){if(k.split("|")[0]===id)return true}return false}
function waUrl(s,text){return "https://wa.me/"+s.phone+"?text="+encodeURIComponent(text)}
function waText(s){return hasCart(s.id)?requestText(s.id):(s.msg||("Hello "+s.name+", I found you on Markezo."))}
function waBtn(s,cls){return s.phone?'<a class="'+cls+'" data-wa="'+s.id+'" target="_blank" rel="noopener noreferrer" href="'+waUrl(s,waText(s))+'">'+I("chat")+'Message on WhatsApp</a>':''}
function syncWa(){var a=document.querySelectorAll("a[data-wa]");for(var i=0;i<a.length;i++){var s=byId(a[i].dataset.wa);a[i].href=waUrl(s,waText(s))}}
function toast(msg){var t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove("show")},1600)}
function setMeta(title,desc){
  document.title=title;
  var m=$('meta[name="description"]');if(m)m.setAttribute("content",desc);
  var o=$('meta[property="og:title"]');if(o)o.setAttribute("content",title);
  var d=$('meta[property="og:description"]');if(d)d.setAttribute("content",desc);
}
function ld(s){
  var o={"@type":"LocalBusiness","name":s.name,"description":s.blurb,"address":{"@type":"PostalAddress","streetAddress":s.address,"addressLocality":"Muzaffargarh","addressCountry":"PK"}};
  if(s.phone)o.telephone="+"+s.phone;return o;
}
function setLd(obj){
  var el=$("#ld");if(!el){el=document.createElement("script");el.type="application/ld+json";el.id="ld";document.head.appendChild(el)}
  obj["@context"]="https://schema.org";el.textContent=JSON.stringify(obj);
}


/* ===== Mama's Bake cake design photos ===== */

var PHOTO_CAP=["Chocolate fault-line cake","Congrats marble cake with flowers","Ribbon bows and pearls cake","Buttercream roses cake","Chick face fondant cake","Chocolate drip cake with biscuits and wafers","Buttercream flower bouquet cake","Vintage piped cake with pearls","Giant decorated cupcake","Peony and basket-weave cake","Anniversary cake with black bows","Graduation cake with books and cap","Red hearts cake","Ocean blue ombre cake","Birthday cake with rose and name tag","Birthday cake with calendar plaque","Chocolate drip cake with coin biscuits","Chocolate cake with white flowers","Engagement ring cake with mehndi plate","Birthday chocolate cake with gold balls",
"Pink and yellow buttercream roses cake","Brown ribbon cake with piped border","Bento box cartoon birthday cake","Pink sprinkle hearts cake","Two-tier pink cake with gold butterflies","Chocolate peanut butter donuts","Anniversary couple silhouette cake","Chocolate donuts with rainbow sprinkles","Chocolate chip muffins","Chocolate rosette cake","Fudgy brownies","Chocolate cupcakes with chocolate swirl","Chocolate chip brownies","Two-tier birthday cake with chocolate wafer","Chocolate drip cake with pretzels","Chocolate drip cake with walnuts","Chocolate cake with cookie pieces","Chocolate drip cake with wafer rolls and biscuits","Vanilla frosted chocolate cupcake","Chocolate chip sided cake","Umrah Mubarak cake with gold balls","Vanilla layer cake slice","Chocolate cupcakes with swirl frosting","Stacked sprinkle donuts","Vanilla cupcakes with buttercream swirl","Colourful buttercream cupcakes","Strawberry chocolate drip cake"];
(function(){var s=byId("mamas-bake");if(!s)return;PHOTO_CAP.forEach(function(c,i){s.items.push(i<20?[c,"Custom design. Ask the shop for the price.","Cake designs",i]:[c,"Design idea. Ask the shop if it can make this.","Design ideas",i])})})();
var KF_PHOTOS={"Milk":47,"Shon Halwa":48,"Desi Ghee":49,"Butter":50,"Honey":51,"Yogurt":52,"Paratha Chana":53};
(function(){
  var s=byId("khan-food-point");if(!s)return;
  s.items.forEach(function(it){if(KF_PHOTOS[it[0]]!==undefined){it[2]="";it[3]=KF_PHOTOS[it[0]]}});
  s.facts=(s.facts||[]).concat([["tag","Product photos are for illustration. The actual product may look a little different."]]);
})();
var WARDA_PHOTOS={"Cold drinks":54,"Snacks":55};
(function(){
  var s=byId("warda-drink-corner");if(!s)return;
  s.items.forEach(function(it){if(WARDA_PHOTOS[it[0]]!==undefined){it[2]="";it[3]=WARDA_PHOTOS[it[0]]}});
  s.facts=(s.facts||[]).concat([["tag","Product pictures are illustrations. Brands and prices are confirmed by the shop."]]);
})();
var ALI_PHOTOS={"Ladies suits":56,"Gents suits":57,"Waistcoat stitching":58,"Coat stitching":59,"Shirt stitching":60};
(function(){
  var s=byId("ali-tailors");if(!s)return;
  s.items.forEach(function(it){if(ALI_PHOTOS[it[0]]!==undefined){it[2]="";it[3]=ALI_PHOTOS[it[0]]}});
  s.facts=(s.facts||[]).concat([["tag","Photos show example styles. Your stitching is made to your own measurements."]]);
})();
var KAR_PHOTOS={"Ata": 61, "Maida": 62, "Baisan": 63, "Sugar": 64, "Salt": 65, "Cooking oil": 66, "Ghee": 67, "Mirch powder (red chilli powder)": 68, "Mirch danadar (whole red chilli)": 69, "Haldi (turmeric)": 70, "Zira (cumin)": 71, "Soap": 72, "Tooth paste": 73, "Surf (detergent) 1/2 kg": 74, "Surf (detergent) 1 kg": 75, "Confectionery": 76, "Stationery": 77};
(function(){
  var s=byId("khan-karyana-store");if(!s)return;
  s.items.forEach(function(it){if(KAR_PHOTOS[it[0]]!==undefined)it[3]=KAR_PHOTOS[it[0]]});
  s.facts=(s.facts||[]).concat([["tag","Product pictures are illustrations. Brands, sizes and prices are confirmed by the shop."]]);
})();
function photoUrl(i){return "photos/"+i+".webp"}

/* ===== Small components ===== */
function tagsHtml(s,cls){return (s.tags&&s.tags.length)?'<div class="'+cls+'">'+s.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join("")+'</div>':''}
function factsHtml(s){
  var h='';
  if(s.facts&&s.facts.length)h+='<div class="facts">'+s.facts.map(function(f){return '<div class="fact"><span class="fi">'+I(f[0])+'</span><p>'+esc(f[1])+'</p></div>'}).join("")+'</div>';
  if(s.rates)h+='<div class="rates"><h3>Flavour prices</h3>'+s.rates.map(function(r){return '<div class="rr"><span>'+esc(r[0])+'</span><span>'+esc(r[1])+'</span></div>'}).join("")+'</div>';
  return h;
}
function telNum(s){return "+"+s.phone}
function contactHtml(s){
  if(!s.phone)return '<div class="contact"><h2>Contact</h2><p class="addr">Phone number coming soon.</p></div>';
  return '<div class="contact"><h2>Contact</h2><p class="num">'+esc(s.disp)+'</p><div class="btns">'+waBtn(s,"btn wa")+
    '<a class="btn" href="tel:'+telNum(s)+'">'+I("phone")+'Call</a>'+
    '<button class="btn" type="button" data-num="'+esc(s.disp)+'">'+I("copy")+'Copy number</button></div></div>';
}
var CONTAIN={"khan-food-point":1,"mamas-bake":1,"al-khair-pharmacy":1,"al-nasir-homeo-clinic":1,"hashmi-electronics":1};
function imgTag(s,eager){var d=LOGO_DIM[s.id]||[560,373];return '<img src="'+LOGO[s.id]+'" alt="'+esc(s.name)+' logo" width="'+d[0]+'" height="'+d[1]+'" decoding="async"'+(eager?'':' loading="lazy"')+'>'}
function logoBox(s){return '<div class="big'+(CONTAIN[s.id]?' contain':'')+'">'+imgTag(s,true)+'</div>'}
function storeCard(s,i){
  return '<a class="card sg" href="#shop-'+s.id+'" style="'+st(s)+';--i:'+i+'" aria-label="'+esc(s.name)+', '+esc(s.cat)+'. Open store">'+
    '<div class="lg2" style="--logo:url('+LOGO[s.id]+')">'+imgTag(s,i<3)+'<span class="cbadge">'+I(s.ic)+'</span></div>'+
    '<div class="cbody"><div class="crow"><span class="ccat">'+esc(s.cat)+'</span><span class="cn">'+itemLabel(s)+'</span></div>'+
    '<h3>'+esc(s.name)+'</h3><p class="cdesc">'+esc(s.blurb)+'</p>'+tagsHtml(s,"ctags")+
    '<div class="cloc">'+I("pin")+'<span>'+esc(s.address)+'</span></div>'+
    '<span class="visit">Visit store<i class="va" aria-hidden="true" style="font-style:normal">'+I("arrow")+'</i></span></div></a>';
}
function areaBlocks(){
  return areaList().map(function(a){
    var list=SHOPS.filter(function(s){return s.area===a});
    return '<div class="area"><h3>'+I("pin")+esc(a)+'</h3>'+list.map(function(s){return '<a href="#shop-'+s.id+'">'+esc(s.name)+'<span>'+esc(s.cat)+'</span></a>'}).join("")+'</div>';
  }).join("");
}
function faqHtml(){
  var dl=SHOPS.filter(botHasDel).map(function(s){return s.name}).join(", ");
  var qa=[
    ["How do I order?","Open a shop, tap Add to list on what you need, then tap Send on WhatsApp. A chat with the shop opens with your request already typed. You can also open the shop's location in Maps and visit."],
    ["Do I pay on Markezo?","No. Markezo does not take payments. Each shop confirms the final price, delivery charge and payment method when you message it. Some shops, such as Mama's Bake, take payment before delivery."],
    ["Are the prices final?","Prices are given by the shops and can change. Please confirm the price with the shop when you order."],
    ["Which shops deliver?","Delivery is offered by: "+dl+". Delivery rules and charges are different for each shop, so open the shop page to read them."],
    ["Are there age limits?","Yes. Smoke Bar and the cigarettes at Warda Drink Corner are sold to adults 18 and over only."]
  ];
  if(CONFIG.ownerPhone)qa.push(["How can my shop be listed?","Tap List your shop and send us a WhatsApp message with your shop name, address and what you sell."]);
  return qa.map(function(x){return '<details><summary>'+esc(x[0])+'</summary><p>'+esc(x[1])+'</p></details>'}).join("");
}
function pick3(){var a=SHOPS.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a.slice(0,3)}

/* ===== Views ===== */
function homeView(){
  var items=SHOPS.reduce(function(n,s){return n+realCount(s)},0), rounded=Math.floor(items/10)*10;
  var stack=pick3().map(function(s){
    return '<a class="mini sg" href="#shop-'+s.id+'" style="'+st(s)+';background:linear-gradient(145deg,var(--c1),var(--c2))"><span class="ic">'+I(s.ic)+'</span><span><b>'+esc(s.name)+'</b><span>'+esc(s.address)+'</span></span></a>';
  }).join("");
  $("#view").innerHTML=
   '<div class="wrap"><section class="hero" aria-labelledby="h1"><div><span class="eyebrow"><i></i>'+SHOPS.length+' local shops, one bazaar</span>'+
   '<h1 id="h1">Your whole <em>bazaar</em>, in one place.</h1>'+
   '<p>Browse each shop\'s store, see what they sell, and find exactly where they are.</p>'+
   '<form class="search" role="search" id="sform"><label class="sr" for="q">Search shops, products or areas</label>'+I("search")+'<input id="q" type="search" placeholder="Search a shop, product or area" autocomplete="off" enterkeyhint="search"><kbd aria-hidden="true">/</kbd><button class="clr" id="qclr" type="button" aria-label="Clear search" hidden>'+I("x")+'</button></form>'+
   '<div class="stats"><div><b>'+SHOPS.length+'</b><span>Shops</span></div><div><b>'+areaList().length+'</b><span>Areas</span></div><div><b>'+rounded+'+</b><span>Products and services</span></div></div></div>'+
   '<div class="stack" aria-hidden="true">'+stack+'</div></section>'+
   '<div class="tstrip" aria-label="Why Markezo"><span>'+I("check")+'Free to browse, no sign-up</span><span>'+I("chat")+'Order on WhatsApp</span><span>'+I("tag")+'Prices confirmed by each shop</span><span>'+I("pin")+'Real local shops with addresses</span></div>'+
   '<div id="stores" class="sec" style="padding-top:0;content-visibility:visible"><div class="cats" id="cats" role="group" aria-label="Filter by category"></div>'+
   '<div class="head"><h2 id="gt">All stores</h2><span class="count" id="count" aria-live="polite"></span></div>'+
   '<div class="grid" id="grid"></div></div>'+
   '<section class="sec" id="how"><h2>How Markezo works</h2><p>Three steps from browsing to your order.</p><div class="steps">'+
   '<div class="stp"><span class="n">1</span><h3>Pick a shop</h3><p>Open any store to see its products or services and its address.</p></div>'+
   '<div class="stp"><span class="n">2</span><h3>Build your list</h3><p>Tap Add on what you need. Change quantities any time.</p></div>'+
   '<div class="stp"><span class="n">3</span><h3>Send or visit</h3><p>Tap Send on WhatsApp. A chat with the shop opens with your request already typed. Or open the location in Maps and visit.</p></div></div></section>'+
   '<section class="sec" id="areas"><h2>Shops by area</h2><p>Find stores that are close to each other.</p><div class="areas">'+areaBlocks()+'</div></section>'+
   '<section class="sec" id="faq"><h2>Questions</h2><p>Quick answers before you order.</p><div class="faq">'+faqHtml()+'</div></section>'+
   (CONFIG.ownerPhone?'<div class="cta"><div><h2>Own a shop in Muzaffargarh?</h2><p>Get your store on Markezo and let customers find you and message you on WhatsApp.</p></div><a href="https://wa.me/'+CONFIG.ownerPhone+'?text='+encodeURIComponent("Hello Markezo, I want to list my shop.")+'" target="_blank" rel="noopener noreferrer">'+I("chat")+'List your shop</a></div>':'')+
   '</div>';
  var cats=["All"].concat(SHOPS.map(function(s){return s.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));
  $("#cats").innerHTML=cats.map(function(c){
    var n=c==="All"?SHOPS.length:SHOPS.filter(function(s){return s.cat===c}).length;
    return '<button class="chip" type="button" data-cat="'+esc(c)+'" aria-pressed="'+(c===cat)+'">'+I(CATIC[c]||"grid")+esc(c)+'<small>'+n+'</small></button>';
  }).join("");
  var inp=$("#q");inp.value=q;$("#qclr").hidden=!q;
  var tm;inp.addEventListener("input",function(e){q=e.target.value;$("#qclr").hidden=!q;clearTimeout(tm);tm=setTimeout(filterGrid,120)});
  $("#sform").addEventListener("submit",function(e){e.preventDefault();filterGrid();inp.blur();var g=$("#stores");if(g&&q)g.scrollIntoView({behavior:"smooth"})});
  $("#qclr").addEventListener("click",function(){q="";inp.value="";$("#qclr").hidden=true;filterGrid();inp.focus()});
  filterGrid();
  setMeta("Markezo | Local shops of Muzaffargarh in one online bazaar","Markezo: "+SHOPS.length+" local shops in one online bazaar. Browse each store, see products, prices and location, and message the shop on WhatsApp.");
  setLd({"@type":"ItemList","name":"Markezo shops","creator":[{"@type":"Person","name":"Shahzaib Arshad Khagga"},{"@type":"Person","name":"Muhammad Ashman"}],"itemListElement":SHOPS.map(function(s,i){return {"@type":"ListItem","position":i+1,"item":ld(s)}})});
}
function filterGrid(){
  var t=q.trim().toLowerCase();
  var list=SHOPS.filter(function(s){
    if(cat!=="All"&&s.cat!==cat)return false;
    if(!t)return true;
    var hay=(s.name+" "+s.cat+" "+s.address+" "+s.blurb+" "+s.items.map(function(i){return i[0]+" "+i[1]}).join(" ")).toLowerCase();
    return hay.indexOf(t)>-1;
  });
  $("#grid").innerHTML=list.length?list.map(storeCard).join(""):'<div class="empty"><p>No shop matches that search. Try another word.</p>'+((t||cat!=="All")?'<button type="button" data-reset="1">Show all stores</button>':'')+'</div>';
  $("#count").textContent=list.length+(list.length===1?" shop":" shops");
  $("#gt").textContent=cat==="All"?"All stores":cat;
  botSay(homeText(list.length));
}
function prodControl(s,i){
  var k=s.id+"|"+i,n=cart[k]||0;
  if(!n)return '<button class="add" type="button" data-add="'+k+'">'+I("plus")+(s.kind==="service"?"Request":"Add to list")+'</button>';
  return '<div class="step"><button type="button" data-dec="'+k+'" aria-label="Less">&minus;</button><span aria-live="polite">'+n+'</span><button type="button" data-add="'+k+'" aria-label="More">+</button></div>';
}
function ordered(s){var a=[];s.items.forEach(function(it,i){if(it[3]!==undefined)a.push(i)});s.items.forEach(function(it,i){if(it[3]===undefined)a.push(i)});return a}
function groupsOf(s){var g=[];ordered(s).forEach(function(i){var x=s.items[i][2];if(x&&g.indexOf(x)<0)g.push(x)});return g}
function shopView(s){
  var near=SHOPS.filter(function(o){return o.id!==s.id&&o.area===s.area});
  var groups=groupsOf(s);
  var map='<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="currentColor" stroke-width="10" fill="none" stroke-linecap="round"><path d="M-10 110 L120 80 L200 100 L340 40"/><path d="M90 -10 L120 80 L100 160"/><path d="M230 -10 L200 100 L250 160"/></g><g stroke="currentColor" stroke-width="3" fill="none" opacity=".7"><path d="M-10 40 L340 70"/><path d="M160 -10 L170 160"/><path d="M-10 140 L340 120"/></g></svg>';
  ps="";
  $("#view").innerHTML=
   '<div class="wrap"><a class="crumb" href="#home">'+I("back")+'All shops</a>'+
   '<section class="sh sg'+(CONTAIN[s.id]?' lite':'')+'" style="'+st(s)+';--logo:url('+LOGO[s.id]+')">'+logoBox(s)+'<div><span class="tag">'+esc(s.cat)+'</span><h1>'+esc(s.name)+'</h1><p>'+esc(s.blurb)+'</p>'+
   '<div class="pills"><span>'+I("bag")+itemLabel(s)+'</span><span>'+I("pin")+esc(s.area)+'</span>'+(s.tags||[]).map(function(t){return '<span>'+esc(t)+'</span>'}).join("")+'</div>'+waBtn(s,"wabig")+'</div></section>'+
   '<div class="layout sg" style="'+st(s)+'"><div>'+(s.note?'<div class="note">'+I("alert")+esc(s.note)+'</div>':'')+factsHtml(s)+
   '<div class="phead"><h2 class="sec2">'+(s.kind==="service"?"Services":"Products")+'</h2>'+
   (s.items.length>8?'<label class="pfind">'+I("search")+'<span class="sr">Search in '+esc(s.name)+'</span><input id="ps" type="search" placeholder="Search this shop" autocomplete="off"></label>':'')+'</div>'+
   (groups.length>1?'<div class="gchips" role="group" aria-label="Jump to section">'+groups.map(function(g,i){return '<button type="button" data-g="'+i+'">'+esc(g)+'</button>'}).join("")+'</div>':'')+
   '<div class="plist" id="plist"></div></div>'+
   '<aside class="loc" aria-label="Location and contact"><div class="map">'+map+'<span class="pin"><i></i></span></div><div class="in"><h2>Location</h2><p class="addr">'+esc(s.address)+'</p><div class="btns">'+
   '<a class="btn pri" href="'+mapUrl(s)+'" target="_blank" rel="noopener noreferrer">'+I("pin")+'Open in Maps</a>'+
   '<button class="btn" type="button" id="copyAddr">'+I("copy")+'Copy address</button>'+
   '<button class="btn" type="button" id="shareBtn">'+I("share")+'Share</button></div>'+
   contactHtml(s)+(near.length?'<div class="near">Also in this area'+near.map(function(o){return '<a href="#shop-'+o.id+'">'+esc(o.name)+'</a>'}).join("")+'</div>':'')+
   '</div></aside></div></div>';
  drawProducts(s);
  var pi=$("#ps");if(pi){var tm;pi.addEventListener("input",function(e){ps=e.target.value;clearTimeout(tm);tm=setTimeout(function(){drawProducts(s)},100)})}
  $("#copyAddr").addEventListener("click",function(e){copyText(s.name+", "+s.address,e.currentTarget)});
  $("#shareBtn").addEventListener("click",function(){shareShop(s)});
  botCur=s;botSay(shopText(s));
  setMeta(s.name+" | Markezo",s.blurb+" "+s.address+". See products and message the shop on WhatsApp.");
  setLd(ld(s));
}
function drawProducts(s){
  syncWa();var el=$("#plist");if(!el)return;
  var t=ps.trim().toLowerCase(),lastG="",html="",n=0,gs=groupsOf(s);
  ordered(s).forEach(function(i){
    var it=s.items[i];
    if(t&&(it[0]+" "+(it[1]||"")+" "+(it[2]||"")).toLowerCase().indexOf(t)<0)return;
    n++;
    if(it[2]&&it[2]!==lastG){lastG=it[2];html+='<h3 class="gh" id="g-'+gs.indexOf(lastG)+'">'+esc(lastG)+'</h3>';if(lastG==="Design ideas")html+='<p class="ghn">Reference photos that show styles you can ask for. These are not the shop\'s own work. Ask the shop if it can make something similar.</p>'}
    var sub=it[1]||"",priceHtml="",small="";
    if(/\bRs\./.test(sub))priceHtml='<span class="price">'+esc(sub)+'</span>';else if(sub)small='<small>'+esc(sub)+'</small>';
    if(it[3]!==undefined){
      html+='<div class="prod photo"><button class="pphoto" type="button" data-lb="'+i+'" aria-label="View photo: '+esc(it[0])+'"><img src="'+photoUrl(it[3])+'" alt="'+esc(it[0])+'" width="480" height="640" loading="lazy" decoding="async"><span>'+I("search")+'View</span></button><div class="pbody"><div><h3>'+esc(it[0])+'</h3>'+small+priceHtml+'</div>'+prodControl(s,i)+'</div></div>';
    }else{
      html+='<div class="prod"><div class="top"><span class="b">'+I(s.ic)+'</span><div><h3>'+esc(it[0])+'</h3>'+small+priceHtml+'</div></div>'+prodControl(s,i)+'</div>';
    }
  });
  el.innerHTML=n?html:'<p class="empty">No products match "'+esc(ps)+'".</p>';
}
/* Lightbox for photo products */
var lbShop=null,lbPos=0,lbList=[];
function openLb(s,i){
  lbShop=s;lbList=ordered(s).filter(function(x){return s.items[x][3]!==undefined});lbPos=lbList.indexOf(i);if(lbPos<0)return;
  lastFocus=document.activeElement;$("#lb").hidden=false;document.body.style.overflow="hidden";renderLb();$("#lbClose").focus();
}
function closeLb(){
  $("#lb").hidden=true;if($("#panel").hidden)document.body.style.overflow="";
  if(lastFocus&&lastFocus.focus){try{lastFocus.focus()}catch(e){}}
}
function stepLb(d){if(!lbList.length)return;lbPos=(lbPos+d+lbList.length)%lbList.length;renderLb()}
function renderLb(){
  var s=lbShop,i=lbList[lbPos],it=s.items[i],k=s.id+"|"+i,n=cart[k]||0;
  var im=$("#lbImg");im.src=photoUrl(it[3]);im.alt=it[0];
  $("#lbCap").textContent=it[0];$("#lbCount").textContent="Photo "+(lbPos+1)+" of "+lbList.length+(it[1]?" · "+it[1]:"");
  var idea=it[2]==="Design ideas";
  var cake=s.id==="mamas-bake";
  var msg="Hello "+s.name+", I found you on Markezo. "+(cake?(idea?"Can you make something like this design idea: ":"I like this cake design: ")+it[0]+". Please tell me the price, the delivery charge and how to pay.":"I want to order: "+it[0]+". "+(s.close||"Please tell me the price and the delivery charge."));
  $("#lbActs").innerHTML=(s.phone?'<a class="btn wa" target="_blank" rel="noopener noreferrer" href="'+waUrl(s,msg)+'">'+I("chat")+'Ask on WhatsApp</a>':'')+
    '<button class="btn pri" type="button" data-add="'+k+'">'+I("plus")+(n?"Added x"+n+" · add more":"Add to list")+'</button>';
}
function shareShop(s){
  var data={title:s.name+" on Markezo",text:s.name+": "+s.blurb,url:location.href};
  if(navigator.share){navigator.share(data).catch(function(){})}
  else{var b=$("#shareBtn");copyText(location.href,b)}
}

/* ===== Helper bot (original logic) ===== */
var botMsg="",botCur=null;
function homeText(n){
  var t=q.trim();
  if(cat==="All"&&!t)return "Hi, I am Marky. You are on the Markezo home page. Here are "+SHOPS.length+" local shops. Tap a shop card to open its store.";
  if(t)return 'You searched for "'+t+'". I found '+n+(n===1?" shop":" shops")+(n?". Tap a card to open it.":". Try another word.");
  return "You are looking at "+cat+". There "+(n===1?"is 1 shop":"are "+n+" shops")+" here. Tap a card to open its store.";
}
function shopText(s){
  return "You are in "+s.name+" ("+s.cat+"), at "+s.area+". "+s.blurb+" It has "+itemLabel(s)+". "+(s.facts&&s.facts[0]?s.facts[0][1]+" ":"")+(s.phone?"Tap Message on WhatsApp to chat with the shop.":"The phone number is coming soon.");
}
function botSay(msg){botMsg=msg;var t=$("#botText");if(t)t.textContent=msg;var a=$("#botActs");if(a)a.innerHTML="";botChips()}
function botListen(){
  try{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(botMsg);u.lang="en-US";u.rate=0.95;window.speechSynthesis.speak(u)}catch(e){}
}

/* the bot code above has its own itemLabel; keep ours (real products only) */
function itemLabel(s){var n=realCount(s);return n+(s.kind==="service"?(n===1?" service":" services"):(n===1?" item":" items"))}
var botSeen=false;
function botReveal(){
  var b=$("#bot"),u=$("#botBubble");if(!b)return;
  if(botSeen)return;botSeen=true;
  b.classList.remove("quiet");u.classList.remove("pop");void u.offsetWidth;u.classList.add("pop");
  setTimeout(function(){if(!b.classList.contains("ask"))b.classList.add("quiet")},8000);
}

/* ===== Router ===== */
var SECTIONS={stores:1,how:1,areas:1,faq:1};
function route(){
  botCur=null;if(!$("#lb").hidden){$("#lb").hidden=true;document.body.style.overflow=""}
  var h=location.hash.replace("#","");
  if(SECTIONS[h]){
    if(!$("#grid"))homeView();
    var el=document.getElementById(h);if(el)el.scrollIntoView();
    return;
  }
  window.scrollTo(0,0);
  if(h.indexOf("shop-")===0&&byId(h.slice(5)))shopView(byId(h.slice(5)));
  else homeView();
  botReveal();
}

/* ===== Clipboard ===== */
function copyText(text,btn){
  var o=btn.innerHTML;
  var done=function(){btn.textContent="Copied";toast("Copied");setTimeout(function(){btn.innerHTML=o},1500)};
  var fallback=function(){
    var ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;opacity:0";
    document.body.appendChild(ta);ta.select();try{document.execCommand("copy");done()}catch(e){}document.body.removeChild(ta);
  };
  try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
}

/* ===== Request list ===== */
function saveCart(){lsSet("mzCart",JSON.stringify(cart))}
function loadCart(){
  try{var c=JSON.parse(lsGet("mzCart")||"{}");for(var k in c){var p=k.split("|"),s=byId(p[0]);if(s&&s.items[+p[1]]&&c[k]>0&&c[k]<100)cart[k]=Math.floor(c[k])}}catch(e){cart={}}
}
function renderCart(){
  var n=total();
  $("#cartCount").textContent=n;$("#fabCount").textContent=n;
  $("#fab").hidden=(n===0)||!$("#panel").hidden;
  $("#clearCart").hidden=!n;
  var groups={};
  Object.keys(cart).forEach(function(k){var p=k.split("|");(groups[p[0]]=groups[p[0]]||[]).push([+p[1],cart[k]])});
  var ids=Object.keys(groups);
  if(!ids.length){$("#cartBody").innerHTML='<p class="hint">Your list is empty. Open a shop and tap "Add to list".</p>';return}
  $("#cartBody").innerHTML=ids.map(function(id){
    var s=byId(id);
    var rows=groups[id].map(function(r){var it=s.items[r[0]],k=id+"|"+r[0];
      return '<div class="row"><span>'+esc(it[0])+'</span><div class="step"><button type="button" data-dec="'+k+'" aria-label="Less '+esc(it[0])+'">&minus;</button><span>'+r[1]+'</span><button type="button" data-add="'+k+'" aria-label="More '+esc(it[0])+'">+</button></div></div>'}).join("");
    return '<div class="grp"><h3>'+esc(s.name)+'</h3>'+rows+'<div class="btns" style="margin-top:10px">'+(s.phone?'<a class="btn wa" target="_blank" rel="noopener noreferrer" href="'+waUrl(s,requestText(id))+'">'+I("chat")+'Send on WhatsApp</a>':'')+'<button class="btn" type="button" data-copy="'+id+'">'+I("copy")+'Copy request</button></div>'+(s.phone?'':'<p class="hint" style="margin:8px 0 0">This shop has no number yet. Copy the request and send it later.</p>')+'</div>';
  }).join("");
}
function requestText(id){
  var s=byId(id),lines=["Hello "+s.name+", I found you on Markezo. I would like:"];
  Object.keys(cart).forEach(function(k){var p=k.split("|");if(p[0]===id)lines.push("- "+s.items[+p[1]][0]+" x"+cart[k])});
  lines.push(s.close||"Please tell me the price and when I can come.");
  return lines.join("\n");
}
function openCart(o){
  var panel=$("#panel");
  if(o){lastFocus=document.activeElement}
  panel.hidden=!o;$("#veil").hidden=!o;
  document.body.style.overflow=o?"hidden":"";
  renderCart();
  if(o)$("#closeCart").focus();else if(lastFocus&&lastFocus.focus){try{lastFocus.focus()}catch(e){}}
}
function refresh(){
  saveCart();renderCart();if(!$("#lb").hidden)renderLb();
  var h=location.hash.replace("#","");
  if(h.indexOf("shop-")===0&&byId(h.slice(5)))drawProducts(byId(h.slice(5)));
}

/* ===== Theme ===== */
function isDark(){
  var a=document.documentElement.getAttribute("data-theme");
  if(a)return a==="dark";
  return !!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
}
function themeIcon(){$("#themeBtn").innerHTML=I(isDark()?"sun":"moon")}

/* ===== Events ===== */
document.addEventListener("click",function(e){
  var t=e.target.closest("button");if(!t)return;
  var d=t.dataset;
  if(d.add){cart[d.add]=(cart[d.add]||0)+1;refresh();if(cart[d.add]===1)toast("Added to your list")}
  else if(d.dec){var k=d.dec;cart[k]=(cart[k]||0)-1;if(cart[k]<=0)delete cart[k];refresh()}
  else if(d.copy){copyText(requestText(d.copy),t)}
  else if(d.num){copyText(d.num,t)}
  else if(d.reset){cat="All";q="";var i=$("#q");if(i)i.value="";var c=$("#qclr");if(c)c.hidden=true;syncChips();filterGrid()}
  else if(d.cat){cat=d.cat;syncChips();filterGrid()}
  else if(d.lb!==undefined){var sh=byId(location.hash.replace("#shop-",""));if(sh)openLb(sh,+d.lb)}
  else if(d.g!==undefined){var el=document.getElementById("g-"+d.g);if(el)el.scrollIntoView({behavior:"smooth"})}
});
function syncChips(){var c=document.querySelectorAll(".chip");for(var i=0;i<c.length;i++)c[i].setAttribute("aria-pressed",c[i].dataset.cat===cat)}
$("#cartBtn").addEventListener("click",function(){openCart(true)});
$("#fab").addEventListener("click",function(){openCart(true)});
$("#closeCart").addEventListener("click",function(){openCart(false)});
$("#veil").addEventListener("click",function(){openCart(false)});
$("#lbClose").addEventListener("click",closeLb);$("#lbPrev").addEventListener("click",function(){stepLb(-1)});$("#lbNext").addEventListener("click",function(){stepLb(1)});
$("#lb").addEventListener("click",function(e){if(e.target.id==="lb")closeLb()});
$("#clearCart").addEventListener("click",function(){cart={};refresh();toast("List cleared")});
$("#themeBtn").addEventListener("click",function(){var v=isDark()?"light":"dark";document.documentElement.setAttribute("data-theme",v);lsSet("mzTheme",v);themeIcon()});
$("#skip").addEventListener("click",function(e){e.preventDefault();$("#view").focus()});
$("#toTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
(function(){var tick=false;addEventListener("scroll",function(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;$("#toTop").hidden=window.scrollY<900})},{passive:true})})();
document.addEventListener("keydown",function(e){
  if(!$("#lb").hidden){if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")stepLb(-1);else if(e.key==="ArrowRight")stepLb(1);return}
  if(e.key==="Escape"&&!$("#panel").hidden){openCart(false);return}
  if(e.key==="Tab"&&!$("#panel").hidden){
    var f=$("#panel").querySelectorAll("a[href],button:not([hidden]),textarea,input");if(!f.length)return;
    var first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
  if(e.key==="/"&&!/^(INPUT|TEXTAREA)$/.test((document.activeElement||{}).tagName||"")){var i=$("#q");if(i){e.preventDefault();i.focus()}}
});
window.addEventListener("hashchange",route);

/* ===== Init ===== */
$("#logoIc").innerHTML=I("shop");
$("#closeCart").innerHTML=I("x");$("#lbClose").innerHTML=I("x");
$("#toTop").innerHTML=I("up");
$("#botListen").innerHTML=I("speaker")+"Listen";
$("#botHide").innerHTML=I("x")+"Hide";
$("#copy").textContent="© "+new Date().getFullYear()+" Markezo. Shop details and prices are provided by each shop.";
if(!window.speechSynthesis)$("#botListen").hidden=true;
$("#botListen").addEventListener("click",botListen);
$("#botHide").addEventListener("click",function(){$("#bot").classList.add("quiet")});
/* Question box: answers come from the shop data on this page (no server needed) */
var BOT_KEYS={"khan-food-point":["khan","food"],"khan-karyana-store":["khan","karyana","kariyana"],"smoke-bar":["smoke"],"warda-drink-corner":["warda"],"ali-tailors":["ali","tailor","tailors","tayler","tailer"],"shades-beauty-parlour":["shade","shades","parlour","parlor","beauty"],"kashmiri-tuition-center":["kashmiri","tuition","tution"],"al-nasir-homeo-clinic":["nasir","homeo","clinic"],"hashmi-electronics":["hashmi"],"mamas-bake":["mama","mamas","bake"],"al-khair-pharmacy":["khair","pharmacy"]};
var BOT_STOP={};
"a an the is are am i me my you we it its this that there here of in on at to for from with and or do does did can could will would should have has had any some want need get buy find looking look show tell please pls about what which who how much many where when why shop shops store stores near nearby local muzaffargarh markezo phone number contact call whatsapp address location map deliver delivery home price prices rate cost open close closed time timing hours sell sells menu list item items product products service services offer offers kya hai hain ka ki ke ko se mein mujhe chahiye available free good best cheap thanks thank hello hey salam".split(" ").forEach(function(w){BOT_STOP[w]=1});
var BOT_SYN={medicine:"pharmacy",medicines:"pharmacy",dawai:"pharmacy",dawa:"pharmacy",tablet:"pharmacy",tablets:"pharmacy",doctor:"clinic",school:"tuition",admission:"tuition",study:"tuition",tv:"led",television:"led",makeup:"makeup",dress:"stitching",suit:"stitching",suits:"stitching",clothes:"stitching",cloth:"stitching",cold:"drinks",pepsi:"drinks",coke:"drinks",vape:"vapes",pod:"pods",grocery:"karyana",birthday:"cake",sweet:"cake",bakery:"cake"};
function botVariants(t){var v=[t,t.replace(/ies$/,"ie"),t.replace(/es$/,""),t.replace(/s$/,"")];if(BOT_SYN[t])v=v.concat(BOT_SYN[t].split(" "));return v.filter(function(x,i){return x.length>=3&&v.indexOf(x)===i})}
function botHay(s){return (s.name+" "+s.cat+" "+s.blurb+" "+s.items.map(function(i){return i[0]+" "+(i[1]||"")+" "+(i[2]||"")}).join(" ")).toLowerCase()}
function botFind(toks){var best=0,list=[];SHOPS.forEach(function(s){var k=BOT_KEYS[s.id]||[],n=0;toks.forEach(function(t){if(k.indexOf(t)>-1)n++});if(n>best){best=n;list=[s]}else if(n&&n===best)list.push(s)});return list}
function botSearch(toks){
  var ts=toks.filter(function(t){return t.length>=3&&!BOT_STOP[t]});
  if(!ts.length)return [];
  var res=[];
  SHOPS.forEach(function(s){
    var h=botHay(s),n=0,hits=[];
    ts.forEach(function(t){
      var v=botVariants(t);
      if(v.some(function(x){return h.indexOf(x)>-1})){
        n++;
        s.items.forEach(function(it){var nm=it[0].toLowerCase();if(hits.length<3&&hits.indexOf(it)<0&&v.some(function(x){return nm.indexOf(x)>-1}))hits.push(it)});
      }
    });
    if(n)res.push({s:s,n:n,hits:hits});
  });
  res.sort(function(a,b){return b.n-a.n});
  var top=res.length?res[0].n:0;
  return res.filter(function(r){return r.n===top}).slice(0,4);
}
function botFacts(s,re){return (s.facts||[]).map(function(f){return f[1]}).filter(function(t){return re.test(t)})}
function botHasDel(s){var t=(s.facts||[]).map(function(f){return f[1]}).join(" ")+" "+(s.tags||[]).join(" ");return /deliver/i.test(t)&&!/no delivery/i.test(t)}
function botOpenAct(s){return {l:"Open "+s.name,h:"#shop-"+s.id}}
function botShopAns(s,intent){
  var a=[botOpenAct(s)],t="";
  if(intent==="phone"){
    if(s.phone){t=s.name+": "+s.disp+". Tap WhatsApp to message the shop.";a=[{l:"WhatsApp",h:waUrl(s,s.msg||("Hello "+s.name+", I found you on Markezo.")),x:1},a[0]]}
    else t=s.name+": the phone number is coming soon.";
  }else if(intent==="where"){
    t=s.name+" is at "+s.address+".";a=[{l:"Open map",h:mapUrl(s),x:1},a[0]];
  }else if(intent==="delivery"){
    var d=botFacts(s,/deliver/i);t=s.name+": "+(d.length?d.join(" "):"delivery is not mentioned. Please ask the shop.");
  }else if(intent==="open"){
    var o=botFacts(s,/open|clos|appointment|admission/i);t=s.name+": "+(o.length?o.join(" ")+" ":"")+"I do not have exact timings, so please message the shop.";
  }else if(intent==="price"){
    var p=[];
    if(s.rates)p.push("Flavours: "+s.rates.map(function(r){return r[0]+" "+r[1]}).join(", ")+".");
    var pr=s.items.filter(function(i){return /\bRs/.test(i[1]||"")});
    if(pr.length)p.push("Some prices: "+pr.slice(0,5).map(function(i){return i[0]+" "+i[1]}).join(", ")+(pr.length>5?" and more on the shop page.":"."));
    var f=botFacts(s,/price|cost/i);if(f.length)p.push(f.join(" "));
    t=s.name+": "+(p.length?p.join(" "):"please ask the shop for prices.");
  }else if(intent==="items"){
    var n=s.items.length;t=s.name+" has: "+s.items.slice(0,8).map(function(i){return i[0]}).join(", ")+(n>8?" and "+(n-8)+" more.":".");
  }else t=shopText(s);
  return {text:t,acts:a};
}
function botAnswer(raw){
  var q=raw.toLowerCase().replace(/['’]/g,""),toks=q.replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(Boolean);
  if(!toks.length)return {text:"Type a question, for example: Which shops deliver?",acts:[]};
  if(/^(hi|hello|hey|salam|assalam)/.test(q)&&toks.length<4)return {text:"Hello! I am Marky. Ask me about any shop: phone number, address, delivery or prices.",acts:[]};
  if(/\b(thanks|thank|shukriya|bye)\b/.test(q))return {text:"You are welcome! Ask me anything about the shops.",acts:[]};
  var intent=/\b(phone|number|contact|call|whatsapp|nambar|raabta)\b/.test(q)?"phone":/\b(address|where|location|map|kahan|kidhar|pata|direction|directions)\b/.test(q)?"where":/deliver|dilivery|ghar/.test(q)?"delivery":/\b(open|opened|close|closed|timing|timings|time|hours|khula|band)\b/.test(q)?"open":/price|rate|cost|how much|kitna|kitne|qeemat|kimat|charges|\brs\b/.test(q)?"price":/\b(sell|sells|menu|list|item|items|product|products|service|services|offer|offers|kya)\b/.test(q)?"items":"";
  var named=botFind(toks),target=null;
  if(named.length>1)return {text:"Which shop do you mean? "+named.map(function(s){return s.name}).join(" or ")+"?",acts:named.map(botOpenAct)};
  if(named.length===1)target=named[0];
  if(!target){
    if(/how many|all shops|shop list|list of shops|every shop/.test(q))return {text:"Markezo has "+SHOPS.length+" shops: "+SHOPS.map(function(s){return s.name}).join(", ")+".",acts:[]};
    if(/how (does (it|this|markezo)|it works)|how to order|kaise order/.test(q))return {text:"Pick a shop, add items to your request list, then send the list to the shop on WhatsApp. The shop confirms the price.",acts:[]};
    var found=botSearch(toks);
    if(found.length===1&&(intent==="price"||intent==="phone"||intent==="open"||intent==="delivery"))return botShopAns(found[0].s,intent);
    if(intent==="delivery"&&!found.length&&(!botCur||/\bshops\b/.test(q))){
      var dl=SHOPS.filter(botHasDel);
      return {text:"Shops with delivery: "+dl.map(function(s){return s.name}).join(", ")+". The rules are different for each shop, so open the shop to read them.",acts:dl.slice(0,4).map(botOpenAct)};
    }
    if(found.length){
      var top=found[0],t=found.length===1?"Try "+top.s.name+" ("+top.s.area+").":"These shops match: "+found.map(function(r){return r.s.name}).join(", ")+".";
      if(top.hits.length)t+=" "+(found.length===1?"It has ":top.s.name+" has ")+top.hits.map(function(i){return i[0]+(i[1]?" ("+i[1]+")":"")}).join(", ")+".";
      return {text:t,acts:found.map(function(r){return botOpenAct(r.s)})};
    }
    if(botCur&&(intent||/\b(this|it|here)\b/.test(q)))target=botCur;
  }
  if(target)return botShopAns(target,intent);
  if(intent)return {text:"Which shop? Tell me the shop name, for example: Smoke Bar phone number.",acts:[]};
  return {text:"Sorry, I did not find that. Try a shop name or a thing, like cake, medicine or tailor.",acts:[]};
}
function botActs(list){
  var c=$("#botActs");if(!c)return;c.innerHTML="";
  (list||[]).forEach(function(x){var a=document.createElement("a");a.href=x.h;a.textContent=x.l;if(x.x){a.target="_blank";a.rel="noopener"}c.appendChild(a)});
}
function botChips(){
  var c=$("#botChips");if(!c)return;c.innerHTML="";
  var l=botCur?["Phone number","Where is it?","Delivery?","Prices?"]:["Which shops deliver?","Where can I buy a cake?","I need medicine","How does it work?"];
  l.forEach(function(t){var b=document.createElement("button");b.type="button";b.textContent=t;b.addEventListener("click",function(){$("#botQ").value=t;botSubmit()});c.appendChild(b)});
}
function botSubmit(){
  var i=$("#botQ"),q=i.value.trim();if(!q)return;
  var a=botAnswer(q);botSay(a.text);botActs(a.acts);i.value="";$("#botBubble").scrollTop=0;
}
$("#botForm").addEventListener("submit",function(e){e.preventDefault();botSubmit()});
var botMoved=false,botPos=null;
function botPlace(x,y){
  var b=$("#bot"),w=b.offsetWidth,h=b.offsetHeight;
  x=Math.max(4,Math.min(innerWidth-w-4,x));y=Math.max(4,Math.min(innerHeight-h-4,y));
  b.style.left=x+"px";b.style.top=y+"px";b.style.bottom="auto";
  b.classList.toggle("right",x+w/2>innerWidth/2);
  var bh=$("#botBubble").offsetHeight||120;
  b.classList.toggle("low",y<bh-20);
  botPos={x:x,y:y};
}
try{var sp=JSON.parse(localStorage.getItem("mzBot")||"null");if(sp&&typeof sp.x==="number")botPlace(sp.x,sp.y)}catch(e){}
(function(){
  var f=$("#botFace"),b=$("#bot"),sx,sy,ox,oy,down=false;
  f.addEventListener("pointerdown",function(e){
    down=true;botMoved=false;sx=e.clientX;sy=e.clientY;
    var r=b.getBoundingClientRect();ox=r.left;oy=r.top;
    try{f.setPointerCapture(e.pointerId)}catch(x){}
  });
  f.addEventListener("pointermove",function(e){
    if(!down)return;
    var dx=e.clientX-sx,dy=e.clientY-sy;
    if(!botMoved&&Math.abs(dx)+Math.abs(dy)<6)return;
    botMoved=true;b.classList.add("drag");
    botPlace(ox+dx,oy+dy);
  });
  function end(){
    if(!down)return;down=false;b.classList.remove("drag");
    if(botMoved&&botPos){try{localStorage.setItem("mzBot",JSON.stringify(botPos))}catch(e){}}
  }
  f.addEventListener("pointerup",end);
  f.addEventListener("pointercancel",end);
  f.addEventListener("click",function(){
    if(botMoved){botMoved=false;return}
    if(b.classList.contains("quiet")){b.classList.remove("quiet");b.classList.add("ask")}
    else b.classList.toggle("ask");
    if(botPos)botPlace(botPos.x,botPos.y);
    if(b.classList.contains("ask"))setTimeout(function(){var i=$("#botQ");if(i)i.focus({preventScroll:true})},60);
  });
  f.addEventListener("keydown",function(e){
    var k={ArrowLeft:[-20,0],ArrowRight:[20,0],ArrowUp:[0,-20],ArrowDown:[0,20]}[e.key];
    if(!k)return;e.preventDefault();
    var r=b.getBoundingClientRect();botPlace(r.left+k[0],r.top+k[1]);
    try{localStorage.setItem("mzBot",JSON.stringify(botPos))}catch(x){}
  });
  addEventListener("resize",function(){if(botPos)botPlace(botPos.x,botPos.y)});
})();

loadCart();themeIcon();route();renderCart();
