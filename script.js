
/* ===== Settings ===== */
/* To show the "List your shop" button, put the owner's WhatsApp number here, digits only with country code, e.g. "923001234567". */
var CONFIG={ownerPhone:""};

/* ===== Logos (optimised WebP) ===== */
var LOGO_DIM={"alizay-baking":[560,560],"al-khair-pharmacy":[560,280],"al-nasir-homeo-clinic":[560,313],"ali-tailors":[560,373],"hashmi-electronics":[560,306],"kashmiri-tuition-center":[560,373],"khan-food-point":[560,448],"khan-karyana-store":[560,373],"mamas-bake":[560,548],"shades-beauty-parlour":[560,373],"smoke-bar":[560,373],"warda-drink-corner":[560,373]};
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
 {id:"alizay-baking",name:"Alizay Baking",cat:"Food & Grocery",hue:310,ic:"cake",kind:"product",
  blurb:"Home bakery with custom cakes, cupcakes, muffins, brownies and donuts.",address:"Muzaffargarh",area:"Muzaffargarh",
  items:[["Bon voyage cake with cupcakes","Custom design. Ask the shop for the price.","Cakes",79],["Oreo chocolate drip cake","Custom design. Ask the shop for the price.","Cakes",80],["Pink cartoon theme cake","Custom design. Ask the shop for the price.","Cakes",81],["Boss baby theme cake","Custom design. Ask the shop for the price.","Cakes",82],["Space theme cake with astronaut and rocket","Custom design. Ask the shop for the price.","Cakes",83],["Frozen theme cake","Custom design. Ask the shop for the price.","Cakes",84],["Teddy bear baby boy cake","Custom design. Ask the shop for the price.","Cakes",85],["Doctor theme cake with stethoscope","Custom design. Ask the shop for the price.","Cakes",86],["Doctor theme cake with pills","Custom design. Ask the shop for the price.","Cakes",87],["Doctor to be cake","Custom design. Ask the shop for the price.","Cakes",88],["Bride to be dress cake","Custom design. Ask the shop for the price.","Cakes",89],["Photo print cake with gold balls","Custom design. Ask the shop for the price.","Cakes",90],["Chocolate chip muffins","Ask the shop for the price.","Cupcakes and muffins",91],["Vanilla cupcakes with cream roses","Ask the shop for the price.","Cupcakes and muffins",92],["Oreo cupcakes","Ask the shop for the price.","Cupcakes and muffins",93],["Fudgy chocolate brownies","Ask the shop for the price.","Brownies and donuts",94],["Chocolate donuts with white drizzle","Ask the shop for the price.","Brownies and donuts",95],["Glazed donuts","Ask the shop for the price.","Brownies and donuts",96]]},
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
 "alizay-baking":{phone:"923061919029",disp:"0306-1919029",tags:["Home bakery","Custom cakes"],
  facts:[["tag","Prices are not listed here. Please ask the shop for the price of your design."],["chat","See more cake designs and updates on the shop's WhatsApp catalogue and channel."]],
  links:[["WhatsApp catalogue","https://wa.me/c/923061919029"],["WhatsApp channel","https://whatsapp.com/channel/0029VavXITxJP21AbPL9xo2z"]],
  close:"Please tell me the price, the delivery details and how to pay.",msg:"Hello Alizay Baking, I found you on Markezo. I want to order a cake. Please tell me about the designs, price and delivery."},
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
var THEME={"khan-food-point": [30, "hsl(30 78% 36%)", "hsl(20 72% 15%)"], "khan-karyana-store": [140, "hsl(140 58% 29%)", "hsl(156 66% 13%)"], "smoke-bar": [268, "hsl(268 70% 42%)", "hsl(280 76% 20%)"], "warda-drink-corner": [42, "hsl(41 82% 31%)", "hsl(33 78% 13%)"], "ali-tailors": [42, "hsl(36 12% 27%)", "hsl(30 16% 9%)"], "shades-beauty-parlour": [336, "hsl(336 62% 41%)", "hsl(326 64% 20%)"], "kashmiri-tuition-center": [228, "hsl(228 62% 38%)", "hsl(234 70% 16%)"], "al-nasir-homeo-clinic": [84, "hsl(80 48% 29%)", "hsl(88 52% 13%)"], "hashmi-electronics": [24, "hsl(214 14% 34%)", "hsl(220 24% 12%)"], "mamas-bake": [16, "hsl(16 82% 42%)", "hsl(350 66% 26%)"], "alizay-baking": [310, "hsl(310 52% 40%)", "hsl(290 56% 20%)"], "al-khair-pharmacy": [192, "hsl(192 82% 31%)", "hsl(212 80% 17%)"]};
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
var WARDA_PHOTOS={"Cold drinks":54,"Snacks":55,"Cigarettes":78};
(function(){
  var s=byId("warda-drink-corner");if(!s)return;
  s.items.forEach(function(it){if(WARDA_PHOTOS[it[0]]!==undefined){it[2]="";it[3]=WARDA_PHOTOS[it[0]]}});
  s.facts=(s.facts||[]).concat([["tag","Product pictures are for illustration. Brands and prices are confirmed by the shop."]]);
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
  s.facts=(s.facts||[]).concat([["tag","Product pictures are for illustration. Brands, sizes and prices are confirmed by the shop."]]);
})();
var STOCK_ITEMS={
 "shades-beauty-parlour":{"Bridal makeup":"https://images.pexels.com/photos/29368877/pexels-photo-29368877.jpeg?auto=compress&cs=tinysrgb&w=520","Party makeup":"https://images.pexels.com/photos/7290123/pexels-photo-7290123.jpeg?auto=compress&cs=tinysrgb&w=520","Simple makeup":"https://images.pexels.com/photos/13469411/pexels-photo-13469411.jpeg?auto=compress&cs=tinysrgb&w=520","Facial":"https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?auto=compress&cs=tinysrgb&w=520","Pedicure":"https://images.pexels.com/photos/34930123/pexels-photo-34930123.jpeg?auto=compress&cs=tinysrgb&w=520","Manicure":"https://images.pexels.com/photos/2281695/pexels-photo-2281695.jpeg?auto=compress&cs=tinysrgb&w=520"},
 "kashmiri-tuition-center":{"Girls classes":"https://images.pexels.com/photos/8423011/pexels-photo-8423011.jpeg?auto=compress&cs=tinysrgb&w=520","Boys classes":"https://images.pexels.com/photos/29659894/pexels-photo-29659894.jpeg?auto=compress&cs=tinysrgb&w=520"},
 "al-nasir-homeo-clinic":{"All varieties of medicine":"https://images.pexels.com/photos/3873150/pexels-photo-3873150.jpeg?auto=compress&cs=tinysrgb&w=520","Homeopathic medicine":"https://images.pexels.com/photos/40557468/pexels-photo-40557468.jpeg?auto=compress&cs=tinysrgb&w=520","Doctor visit":"https://images.pexels.com/photos/7578798/pexels-photo-7578798.jpeg?auto=compress&cs=tinysrgb&w=520"},
 "hashmi-electronics":{"LED TV":"https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=520","Q-LED TV":"https://images.pexels.com/photos/38975400/pexels-photo-38975400.jpeg?auto=compress&cs=tinysrgb&w=520","Audionic speakers":"https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=520"},
 "al-khair-pharmacy":{"Medicines":"https://images.pexels.com/photos/31406906/pexels-photo-31406906.jpeg?auto=compress&cs=tinysrgb&w=520"}
};
var STOCK_NOTE={
 "shades-beauty-parlour":"Photos show example looks. The price and appointment time are confirmed by the parlour.",
 "kashmiri-tuition-center":"Photos are for illustration. Admission and fees are confirmed by the center.",
 "al-nasir-homeo-clinic":"Photos are for illustration. Please contact the clinic for the appointment time.",
 "hashmi-electronics":"Photos are for illustration. Models, sizes and prices are confirmed by the shop.",
 "al-khair-pharmacy":"The photo is for illustration. Please ask the shop for the price and stock."
};
(function(){
  Object.keys(STOCK_ITEMS).forEach(function(id){
    var s=byId(id);if(!s)return;var m=STOCK_ITEMS[id];
    s.items.forEach(function(it){if(m[it[0]]){it[2]="";it[3]=m[it[0]]}});
    s.facts=(s.facts||[]).concat([["tag",STOCK_NOTE[id]]]);
  });
})();
var CUTD=null;
function CUTS(){if(!CUTD){try{CUTD=JSON.parse($("#cutData").textContent)}catch(e){CUTD={}}}return CUTD}
function cutUrl(k){return CUTS()[k]?"cuts/"+k+".webp":""}
function photoUrl(i){if(typeof i==="string")return i;return "photos/"+i+".webp"}

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
    '<button class="btn" type="button" data-num="'+esc(s.disp)+'">'+I("copy")+'Copy number</button></div>'+
    (s.links?'<div class="btns">'+s.links.map(function(l){return '<a class="btn" href="'+esc(l[1])+'" target="_blank" rel="noopener noreferrer">'+I("bag")+esc(l[0])+'</a>'}).join("")+'</div>':'')+'</div>';
}
var CONTAIN={"alizay-baking":1,"khan-food-point":1,"mamas-bake":1,"al-khair-pharmacy":1,"al-nasir-homeo-clinic":1,"hashmi-electronics":1};
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
   '<div class="wrap"><section class="hero" aria-labelledby="h1"><i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i><div><span class="eyebrow"><i></i>'+SHOPS.length+' local shops, one bazaar</span>'+
   '<h1 id="h1"><span class="w" style="--i:0">Your</span> <span class="w" style="--i:1">whole</span> <span class="w" style="--i:2"><em>bazaar</em>,</span> <span class="w" style="--i:3">in</span> <span class="w" style="--i:4">one</span> <span class="w" style="--i:5">place.</span></h1>'+
   '<p>Browse each shop\'s store, see what they sell, and find exactly where they are.</p>'+
   '<form class="search" role="search" id="sform"><label class="sr" for="q">Search shops, products or areas</label>'+I("search")+'<input id="q" type="search" placeholder="Search a shop, product or area" autocomplete="off" enterkeyhint="search"><kbd aria-hidden="true">/</kbd><button class="clr" id="qclr" type="button" aria-label="Clear search" hidden>'+I("x")+'</button></form>'+
   '<button class="tourbtn" type="button" data-tour="start">'+I("pin")+'Take a shop tour with Marky</button>'+
   '<div class="stats"><div><b data-count="'+SHOPS.length+'">0</b><span>Shops</span></div><div><b data-count="'+areaList().length+'">0</b><span>Areas</span></div><div><b data-count="'+rounded+'" data-suf="+">0</b><span>Products and services</span></div></div></div>'+
   '<div class="stack" aria-hidden="true">'+stack+'</div></section>'+
   '<div class="tstrip" aria-label="Why Markezo"><span>'+I("check")+'Free to browse, no sign-up</span><span>'+I("chat")+'Order on WhatsApp</span><span>'+I("tag")+'Prices confirmed by each shop</span><span>'+I("pin")+'Real local shops with addresses</span></div>'+mqHtml()+
   '<div id="stores" class="sec" style="padding-top:0;content-visibility:visible"><div class="cats" id="cats" role="group" aria-label="Filter by category"></div>'+
   '<div class="head"><h2 id="gt">All stores</h2><span class="count" id="count" aria-live="polite"></span></div>'+
   '<div class="grid" id="grid"></div></div>'+
   stripHtml()+
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
  setLd({"@type":"ItemList","name":"Markezo shops","creator":{"@type":"Person","name":"Shahzaib Arshad Khagga"},"itemListElement":SHOPS.map(function(s,i){return {"@type":"ListItem","position":i+1,"item":ld(s)}})});
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
  revealIn($("#grid"),".card");
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
   storyHtml(s)+'<div class="layout sg" id="prodstart" style="'+st(s)+'"><div>'+(s.note?'<div class="note">'+I("alert")+esc(s.note)+'</div>':'')+factsHtml(s)+
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
  storyMount(s);
  botCur=s;botSay(themedHello(s));
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
      html+='<div class="prod photo"><button class="pphoto" type="button" data-lb="'+i+'" aria-label="View photo: '+esc(it[0])+'"><img src="'+photoUrl(it[3])+'" alt="'+esc(it[0])+'" width="480" height="640" loading="lazy" decoding="async" onerror="this.style.opacity=0"><span>'+I("search")+'View</span></button><div class="pbody"><div><h3>'+esc(it[0])+'</h3>'+small+priceHtml+'</div>'+prodControl(s,i)+'</div></div>';
    }else{
      html+='<div class="prod"><div class="top"><span class="b">'+I(s.ic)+'</span><div><h3>'+esc(it[0])+'</h3>'+small+priceHtml+'</div></div>'+prodControl(s,i)+'</div>';
    }
  });
  el.innerHTML=n?html:'<p class="empty">No products match "'+esc(ps)+'".</p>';
  revealIn(el,".prod");
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
  var cake=s.id==="mamas-bake"||s.id==="alizay-baking";
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
  if(cat==="All"&&!t)return "Hi, I am Marky. You are on the Markezo home page. Here are "+SHOPS.length+" local shops. Tap a shop card to open its store, or choose Shop tour and I will walk you through every store.";
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

/* ===== Per-shop animated stories (scroll driven, like a product-building hero) ===== */
function srnd(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
function ly(s,inner,cls){return '<g class="ly '+(cls||'')+'" data-s="'+s+'">'+inner+'</g>'}
function cyl(x,y,w,h,ry,side,top){var rx=w/2;return '<path d="M'+x+' '+y+'v'+h+'A'+rx+' '+ry+' 0 0 0 '+(x+w)+' '+(y+h)+'V'+y+'Z" fill="'+side+'"/><ellipse cx="'+(x+rx)+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+top+'"/>'}
function SVG(inner,vb){return '<svg viewBox="'+(vb||'0 0 600 600')+'" role="img" focusable="false"><defs><linearGradient id="shine" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".3" stop-color="#fff" stop-opacity=".35"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="ds" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity=".28"/></filter><filter id="blur8" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter><filter id="blur20" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="20"/></filter></defs>'+inner+'</svg>'}
function star(x,y,r,c,cls){return '<path class="'+(cls||'tw')+'" d="M'+x+' '+(y-r)+' L'+(x+r*.28)+' '+(y-r*.28)+' L'+(x+r)+' '+y+' L'+(x+r*.28)+' '+(y+r*.28)+' L'+x+' '+(y+r)+' L'+(x-r*.28)+' '+(y+r*.28)+' L'+(x-r)+' '+y+' L'+(x-r*.28)+' '+(y-r*.28)+'Z" fill="'+c+'"/>'}
function steam(x,y,c,d){return '<path class="rise" style="animation-delay:'+(d||0)+'s" d="M'+x+' '+y+' q-12 -20 0 -40 q12 -20 0 -40" fill="none" stroke="'+c+'" stroke-width="6" stroke-linecap="round" opacity=".6"/>'}
function shadowE(cx,cy,rx){return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+(rx*.1)+'" fill="#000" opacity=".18" filter="url(#blur8)"/>'}

/* ---------- Mama's Bake: a cake is baked layer by layer ---------- */
function sceneBake(){
  var r=srnd(7),o='',i,a,x,y,cols=['#ff4d6d','#ffd166','#06d6a0','#4cc9f0','#b388eb','#ff9f1c'];
  o+=ly(0,shadowE(300,512,250)+'<ellipse cx="300" cy="498" rx="232" ry="34" fill="#fff"/><ellipse cx="300" cy="494" rx="206" ry="26" fill="#f2e7da"/>'+cyl(150,404,300,68,26,'#d99a3e','#f0c878')+'<path d="M150 404v68" stroke="#fff" stroke-opacity=".18" stroke-width="14"/>'+'<circle cx="190" cy="440" r="3" fill="#a96a1d" opacity=".6"/><circle cx="260" cy="452" r="3" fill="#a96a1d" opacity=".6"/><circle cx="360" cy="436" r="3" fill="#a96a1d" opacity=".6"/><circle cx="420" cy="456" r="3" fill="#a96a1d" opacity=".6"/>');
  o+=ly(1,cyl(150,390,300,14,26,'#fff7ea','#fffdf6')+cyl(150,344,300,46,26,'#d99a3e','#f0c878')+'<path d="M150 344v46" stroke="#fff" stroke-opacity=".18" stroke-width="14"/>'+'<ellipse cx="300" cy="388" rx="150" ry="26" fill="none" stroke="#d63a5a" stroke-width="6" opacity=".85"/>');
  var fr=cyl(138,334,324,138,28,'#ffcfdc','#ffe8ef')+'<path d="M138 334v138" stroke="#fff" stroke-opacity=".5" stroke-width="16"/>';
  for(i=0;i<20;i++){a=i/20*Math.PI*2;x=300+156*Math.cos(a);y=334+25*Math.sin(a);fr+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="10" fill="#fff"/><circle cx="'+(x-3).toFixed(1)+'" cy="'+(y-3).toFixed(1)+'" r="3" fill="#ffd1df"/>'}
  for(i=0;i<=14;i++){a=i/14*Math.PI;x=300+150*Math.cos(a);y=472+27*Math.sin(a);fr+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="8" fill="#fff"/><circle cx="'+(x-2).toFixed(1)+'" cy="'+(y-2).toFixed(1)+'" r="2.4" fill="#ffd1df"/>'}
  o+=ly(2,fr);
  var t='';
  for(i=0;i<34;i++){a=r()*Math.PI*2;var rr=Math.sqrt(r());x=300+rr*118*Math.cos(a);y=334+rr*20*Math.sin(a);t+='<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="9" height="3.6" rx="1.8" fill="'+cols[i%6]+'" transform="rotate('+Math.round(r()*180)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>'}
  [[250,318],[300,308],[350,318]].forEach(function(p,k){t+='<path d="M'+p[0]+' '+(p[1]-12)+' q8 -14 18 -14" stroke="#2d6a2e" stroke-width="3" fill="none"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="15" fill="#d90429"/><circle cx="'+(p[0]-5)+'" cy="'+(p[1]-5)+'" r="4" fill="#fff" opacity=".7"/>'});
  t+='<rect x="293" y="250" width="14" height="60" rx="3" fill="#7bdff2"/><rect x="293" y="262" width="14" height="6" fill="#fff"/><rect x="293" y="278" width="14" height="6" fill="#fff"/><rect x="293" y="294" width="14" height="6" fill="#fff"/><ellipse class="fk" cx="300" cy="238" rx="8" ry="15" fill="#ffb703"/><ellipse class="fk" cx="300" cy="242" rx="4" ry="8" fill="#fff3b0"/>';
  t+=star(170,270,14,'#ffd166')+star(440,246,12,'#fff')+star(480,340,16,'#ffd166')+star(124,380,10,'#fff');
  o+=ly(3,t);
  return SVG(o,'40 190 520 400');
}

/* ---------- Khan Food Point: desi breakfast and dairy ---------- */
function sceneFood(){
  var r=srnd(3),o='',i,c='';
  for(i=0;i<46;i++){var a=r()*6.28,rr=Math.sqrt(r());c+='<circle cx="'+(430+rr*62*Math.cos(a)).toFixed(1)+'" cy="'+(404+rr*20*Math.sin(a)).toFixed(1)+'" r="'+(5+r()*3).toFixed(1)+'" fill="'+(r()>.4?'#e3b26a':'#d29a4f')+'"/>'}
  o+=ly(0,shadowE(300,508,250)+'<ellipse cx="300" cy="448" rx="250" ry="72" fill="#fff"/><ellipse cx="300" cy="444" rx="222" ry="58" fill="#f3ece0"/><ellipse cx="256" cy="420" rx="118" ry="38" fill="#c98a2e"/><ellipse cx="256" cy="414" rx="112" ry="34" fill="#e5a84a"/><ellipse cx="270" cy="392" rx="104" ry="32" fill="#c98a2e"/><ellipse cx="270" cy="386" rx="98" ry="29" fill="#f0bd62"/><path d="M200 386 q30 -12 60 0 M250 390 q30 -12 60 0 M300 380 q20 -8 40 0" stroke="#a5681c" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>'+
    '<path d="M340 392 Q430 372 520 392 Q510 456 430 462 Q350 456 340 392Z" fill="#b87333"/><ellipse cx="430" cy="392" rx="90" ry="22" fill="#cf8844"/><ellipse cx="430" cy="396" rx="76" ry="16" fill="#9c3f1b"/>'+c+'<path d="M404 392 q8 -10 18 -2 M446 386 q10 -8 16 2" stroke="#3a8a3a" stroke-width="4" fill="none" stroke-linecap="round"/>'+steam(400,372,'#fff',0)+steam(450,372,'#fff',1.2));
  o+=ly(1,'<path d="M82 292 H156 L148 410 Q147 420 138 420 H100 Q91 420 90 410 Z" fill="#e9f1f6" opacity=".9"/><path d="M88 320 H152 L148 410 Q147 420 138 420 H100 Q91 420 90 410 Z" fill="#fff"/><path d="M82 292 H156 L154 304 H84Z" fill="#fff" opacity=".6"/>'+
    '<path d="M250 300 Q300 282 350 300 Q346 346 300 350 Q254 346 250 300Z" fill="#a85a2a"/><ellipse cx="300" cy="300" rx="50" ry="13" fill="#c97a42"/><ellipse cx="300" cy="302" rx="42" ry="9" fill="#fffaf0"/>');
  o+=ly(2,'<path d="M300 216 q-10 40 -26 62" stroke="#ffd23f" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M284 190 q40 -8 52 34 q-30 22 -64 4 q-6 -24 12 -38Z" fill="#c9ccd1" stroke="#8d9199"/><path d="M270 256 q10 30 2 56" pathLength="1" class="draw" stroke="#ffcf33" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="462" y="426" width="70" height="38" rx="6" fill="#fff0a8"/><rect x="462" y="426" width="70" height="12" rx="6" fill="#fff8cf"/>');
  o+=ly(3,'<g class="fl"><rect x="470" y="236" width="62" height="78" rx="14" fill="#f4a300"/><rect x="470" y="236" width="62" height="78" rx="14" fill="url(#shine)"/><rect x="474" y="222" width="54" height="18" rx="6" fill="#6b3a12"/><text x="501" y="282" text-anchor="middle" font-size="12" font-weight="900" fill="#fff">HONEY</text><rect x="498" y="170" width="6" height="64" rx="3" fill="#8a5a2b"/><ellipse cx="501" cy="168" rx="12" ry="8" fill="#b9770e"/></g>'+star(120,230,12,'#ffd23f')+star(330,170,10,'#ffd23f'));
  return SVG(o,'30 150 540 400');
}

/* ---------- Khan Karyana Store: a grocery basket fills up ---------- */
function sceneKaryana(){
  var o='',i,w='';
  function pk(k,cx,bottom,h,rot){var c=CUTS()[k];if(!c)return '';var wd=h*c.w/c.h;return '<image href="'+cutUrl(k)+'" x="'+(cx-wd/2).toFixed(1)+'" y="'+(bottom-h)+'" width="'+wd.toFixed(1)+'" height="'+h+'" preserveAspectRatio="xMidYMid meet" filter="url(#ds)"'+(rot?' transform="rotate('+rot+' '+cx+' '+(bottom-h/2)+')"':'')+'/>'}
  function md(k,cx,cy,r){var c=CUTS()[k];if(!c)return '';return '<g filter="url(#ds)"><clipPath id="mc_'+k+'"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"/></clipPath><circle cx="'+cx+'" cy="'+cy+'" r="'+(r+5)+'" fill="#fff"/><image href="'+cutUrl(k)+'" x="'+(cx-r)+'" y="'+(cy-r)+'" width="'+(2*r)+'" height="'+(2*r)+'" clip-path="url(#mc_'+k+')" preserveAspectRatio="xMidYMid slice"/></g>'}
  o+=ly(0,shadowE(300,530,250)+'<path d="M110 330 L150 500 Q300 540 450 500 L490 330Z" fill="#8a5a28"/><ellipse cx="300" cy="330" rx="190" ry="38" fill="#6b431c"/><ellipse cx="300" cy="332" rx="176" ry="30" fill="#3d2610"/><path d="M130 330 Q300 70 470 330" fill="none" stroke="#a8702f" stroke-width="16" stroke-linecap="round"/>');
  /* back row (tall packs) */
  o+=ly(2,pk('ghee',150,392,150)+pk('oil',392,392,236)+pk('chilli',298,392,190));
  o+=ly(3,pk('surf',470,392,214));
  o+=ly(1,pk('maida',222,392,196));
  o+=ly(3,pk('paste',312,330,50,-16));
  /* front row */
  o+=ly(1,md('ata',178,352,40)+md('sugar',258,346,38)+md('salt',336,350,38));
  o+=ly(3,pk('soap',420,392,92,5));
  for(i=0;i<11;i++){w+='<path d="M'+(118+i*3)+' '+(350+i*14)+' Q300 '+(380+i*14)+' '+(482-i*3)+' '+(350+i*14)+'" stroke="#6b431c" stroke-width="3" fill="none" opacity=".55"/>'}
  o+='<path d="M118 362 L150 500 Q300 540 450 500 L482 362 Q300 394 118 362Z" fill="#a8702f"/><path d="M118 362 L150 500 Q300 540 450 500 L482 362 Q300 394 118 362Z" fill="url(#shine)" opacity=".5"/>'+w+'<path d="M118 362 Q300 394 482 362" stroke="#d7a15a" stroke-width="8" fill="none"/>';
  /* floating extras */
  o+=ly(2,'<g class="fl">'+md('haldi',78,250,40)+'</g><g class="fl" style="animation-delay:-2s">'+md('zira',526,236,38)+'</g>'+star(40,170,12,'#ffd166')+star(560,160,10,'#fff'));
  o+=ly(3,'<g class="fl" style="animation-delay:-1s">'+md('conf',64,400,42)+'</g><g class="fl" style="animation-delay:-3s">'+md('stat',538,398,40)+'</g>'+star(300,70,12,'#fff'));
  return SVG(o,'0 40 600 540');
}

/* ---------- Smoke Bar: flavour bottles and drifting clouds (adults only) ---------- */
function sceneSmoke(){
  var o='',bot=function(x,c1,c2,name){return '<g><rect x="'+(x-8)+'" y="298" width="16" height="22" rx="4" fill="#222"/><rect x="'+(x-35)+'" y="318" width="70" height="150" rx="16" fill="'+c1+'"/><rect x="'+(x-35)+'" y="318" width="70" height="150" rx="16" fill="url(#shine)"/><rect x="'+(x-35)+'" y="372" width="70" height="46" fill="'+c2+'"/><text x="'+x+'" y="402" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" letter-spacing="1">'+name+'</text></g>'};
  o+=ly(0,'<circle cx="300" cy="300" r="210" fill="none" stroke="#b388ff" stroke-width="3" opacity=".5"/><circle cx="300" cy="300" r="210" fill="none" stroke="#b388ff" stroke-width="14" opacity=".25" filter="url(#blur8)"/><ellipse cx="300" cy="486" rx="240" ry="26" fill="#2a1456"/><ellipse cx="300" cy="480" rx="240" ry="24" fill="#3b1d78"/>');
  o+=ly(1,bot(180,'#7b2ff7','#5b1fc4','TOKYO'));
  o+=ly(2,bot(300,'#17a2b8','#0e7f92','OXWA')+bot(420,'#f77f00','#c25f00','CRUSH'));
  var cl='';[[170,200,60,0],[300,150,80,1],[430,210,64,2],[240,110,50,3],[360,90,46,4],[110,130,40,5],[480,120,44,6]].forEach(function(p){cl+='<circle class="drift" style="animation-delay:-'+p[3]+'s" cx="'+p[0]+'" cy="'+p[1]+'" r="'+p[2]+'" fill="#d9c8ff" opacity=".45" filter="url(#blur20)"/>'});
  o+=ly(3,cl+'<circle cx="480" cy="480" r="46" fill="#e63946"/><text x="480" y="492" text-anchor="middle" font-size="34" font-weight="900" fill="#fff">18+</text>');
  return SVG(o);
}

/* ---------- Warda Drink Corner: a cold drink is poured ---------- */
function sceneDrink(){
  var o='',g='M190 190 H410 L388 490 Q386 504 372 504 H228 Q214 504 212 490 Z',i,b='';
  o+=ly(0,shadowE(300,512,220)+'<rect x="362" y="96" width="14" height="260" rx="7" fill="#e11d2e" transform="rotate(14 369 226)"/><path d="'+g+'" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".7" stroke-width="5"/>');
  o+=ly(1,'<clipPath id="gc"><path d="'+g+'"/></clipPath><g clip-path="url(#gc)"><rect class="grow" x="180" y="250" width="240" height="260" fill="#5a2a0e"/><rect class="grow" x="180" y="250" width="240" height="14" fill="#8a4a1a"/></g>','');
  for(i=0;i<14;i++){b+='<circle class="rise" style="animation-delay:'+(i*.37).toFixed(2)+'s" cx="'+(236+((i*47)%130))+'" cy="'+(470-(i*13)%40)+'" r="'+(3+i%3)+'" fill="#fff" opacity=".7"/>'}
  o+=ly(2,'<g class="fl"><rect x="232" y="236" width="46" height="46" rx="9" fill="#cfeaff" fill-opacity=".55" stroke="#fff" stroke-width="2" transform="rotate(-12 255 259)"/><rect x="298" y="228" width="50" height="50" rx="9" fill="#cfeaff" fill-opacity=".55" stroke="#fff" stroke-width="2" transform="rotate(10 323 253)"/><rect x="276" y="270" width="44" height="44" rx="9" fill="#cfeaff" fill-opacity=".5" stroke="#fff" stroke-width="2" transform="rotate(4 298 292)"/></g>'+b);
  var ch='';for(i=0;i<26;i++){ch+='<path d="M'+(60+(i*37)%130)+' '+(520+(i*11)%30)+' l14 -22 l14 22Z" fill="#f2b441" transform="rotate('+((i*53)%90)+' 100 540)"/>'}
  o+=ly(3,'<circle cx="408" cy="196" r="34" fill="#ffe66d"/><circle cx="408" cy="196" r="26" fill="#fff3a6"/><path d="M408 196 L408 170 M408 196 L430 183 M408 196 L430 209 M408 196 L408 222 M408 196 L386 209 M408 196 L386 183" stroke="#ffe66d" stroke-width="3"/>'+'<path d="M56 540 Q130 500 204 540 Q130 560 56 540Z" fill="#f5efe0"/>'+ch+star(480,320,14,'#ffd36a')+star(130,250,12,'#fff')+star(520,430,10,'#ffd36a'));
  return SVG(o);
}

/* ---------- Ali Tailor's: a waistcoat is measured, cut and stitched ---------- */
function sceneTailor(){
  var o='',wc='M196 232 Q250 206 282 222 L300 304 L318 222 Q350 206 404 232 L398 440 Q300 472 202 440Z';
  o+=ly(0,shadowE(300,560,170)+'<rect x="293" y="462" width="14" height="86" fill="#7b6b55"/><ellipse cx="300" cy="552" rx="80" ry="12" fill="#5d503f"/><circle cx="300" cy="126" r="22" fill="#8a5a2b"/><rect x="280" y="148" width="40" height="44" rx="10" fill="#d9c7a3"/><path d="M176 220 Q300 184 424 220 L410 346 Q404 424 382 472 H218 Q196 424 190 346Z" fill="#e8d9b8"/><path d="M176 220 Q300 184 424 220 L410 346 Q404 424 382 472 H218 Q196 424 190 346Z" fill="url(#shine)" opacity=".6"/>'+'<path d="M186 322 Q300 356 414 322" stroke="#ffd23f" stroke-width="18" fill="none"/><path d="M186 322 Q300 356 414 322" stroke="#111" stroke-width="18" fill="none" stroke-dasharray="2 12" opacity=".45"/><path d="M414 322 q40 20 22 70" stroke="#ffd23f" stroke-width="14" fill="none" stroke-linecap="round"/>');
  o+=ly(1,'<path d="'+wc+'" pathLength="1" class="draw" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="1" />'+'<g class="fl"><path d="M470 160 l60 60 M530 160 l-60 60" stroke="#c9ccd1" stroke-width="8" stroke-linecap="round"/><circle cx="470" cy="226" r="14" fill="none" stroke="#d6336c" stroke-width="6"/><circle cx="530" cy="226" r="14" fill="none" stroke="#d6336c" stroke-width="6"/></g>');
  o+=ly(2,'<path d="'+wc+'" fill="#37332f"/><path d="'+wc+'" fill="url(#shine)" opacity=".5"/><path d="'+wc+'" pathLength="1" class="draw" fill="none" stroke="#f3c969" stroke-width="3" stroke-dasharray="1"/><g class="fl"><path d="M470 330 l40 -48" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/><ellipse cx="512" cy="280" rx="3" ry="9" fill="none" stroke="#e5e7eb" stroke-width="2" transform="rotate(40 512 280)"/><path d="M512 276 Q540 250 520 214" pathLength="1" class="draw" stroke="#f3c969" stroke-width="3" fill="none"/></g>');
  o+=ly(3,[330,360,390,420].map(function(y,i){return '<circle cx="'+(300+(i%2?2:-2))+'" cy="'+y+'" r="9" fill="#f3c969"/><circle cx="'+(300+(i%2?2:-2))+'" cy="'+y+'" r="4" fill="#b8892a"/>'}).join('')+'<path d="M392 250 Q430 240 452 280" stroke="#f3c969" stroke-width="2" fill="none"/><g class="fl"><rect x="428" y="276" width="124" height="40" rx="6" fill="#f3c969"/><circle cx="438" cy="286" r="4" fill="#37332f"/><text x="490" y="302" text-anchor="middle" font-size="12" font-weight="900" fill="#37332f">GENTS · LADIES</text></g>'+star(150,200,12,'#f3c969')+star(470,150,10,'#fff'));
  return SVG(o);
}

/* ---------- Shade's Beauty Parlour: mirror, makeup, lipstick, nails ---------- */
function sceneBeauty(){
  var o='',i,bulbs='',petal='';
  for(i=0;i<16;i++){var a=i/16*Math.PI*2;bulbs+='<circle class="tw" style="animation-delay:'+(i*.15).toFixed(2)+'s" cx="'+(300+170*Math.cos(a)).toFixed(1)+'" cy="'+(270+170*Math.sin(a)).toFixed(1)+'" r="9" fill="#fff3b0"/>'}
  o+=ly(0,shadowE(300,530,220)+'<circle cx="300" cy="270" r="170" fill="none" stroke="#e8b04a" stroke-width="16"/><circle cx="300" cy="270" r="160" fill="#fdebf3"/><circle cx="300" cy="270" r="160" fill="url(#shine)" opacity=".7"/>'+bulbs+star(250,220,26,'#fff')+star(350,310,16,'#fff')+'<rect x="280" y="436" width="40" height="80" fill="#b8860b"/>');
  o+=ly(1,'<rect x="70" y="400" width="200" height="116" rx="20" fill="#3b1e2b"/><circle cx="118" cy="436" r="20" fill="#f4a6c0"/><circle cx="170" cy="436" r="20" fill="#e86a92"/><circle cx="222" cy="436" r="20" fill="#d4a373"/><circle cx="118" cy="486" r="20" fill="#a0522d"/><circle cx="170" cy="486" r="20" fill="#c9184a"/><circle cx="222" cy="486" r="20" fill="#7b2cbf"/>'+'<g transform="rotate(-28 300 420)"><rect x="296" y="330" width="12" height="110" rx="6" fill="#d4a017"/><path d="M290 330 q16 -40 32 0Z" fill="#f4a6c0"/></g>');
  o+=ly(2,'<rect x="402" y="420" width="64" height="100" rx="8" fill="#d4a017"/><rect x="402" y="490" width="64" height="30" rx="8" fill="#111"/><rect x="410" y="360" width="48" height="66" rx="6" fill="#e11d48"/><path d="M410 360 l48 0 l-14 -24 q-10 -6 -20 0Z" fill="#be123c"/>','up');
  var pl='';for(i=0;i<8;i++){pl+='<ellipse cx="0" cy="-30" rx="14" ry="30" fill="#fff" stroke="#f9a8d4" transform="rotate('+(i*45)+')"/>'}
  o+=ly(3,'<g transform="translate(130 140)">'+pl+'<circle r="12" fill="#ffd23f"/></g><rect x="486" y="392" width="46" height="70" rx="10" fill="#ff5fa2"/><rect x="498" y="364" width="22" height="32" rx="4" fill="#111"/><path d="M60 560 L250 560 L236 590 L60 590 L74 575Z" fill="#c9184a"/><text x="150" y="580" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" letter-spacing="2">BRIDAL · PARTY</text>'+star(500,190,16,'#ffd166')+star(110,330,12,'#fff'));
  return SVG(o);
}

/* ---------- Kashmiri Tuition Center: books, writing, graduation cap ---------- */
function sceneSchool(){
  var o='';
  o+=ly(0,'<path d="M0 520 L110 300 L180 380 L270 240 L370 400 L450 300 L600 520Z" fill="#8fa8d8" opacity=".5"/><path d="M270 240 L246 282 L270 270 L292 284Z M110 300 L92 334 L112 326 L130 338Z M450 300 L430 336 L452 328 L470 338Z" fill="#fff" opacity=".9"/>'+shadowE(300,520,220)+'<rect x="110" y="456" width="380" height="50" rx="6" fill="#1d3a8a"/><rect x="120" y="494" width="360" height="8" fill="#fff" opacity=".85"/><rect x="140" y="410" width="330" height="46" rx="6" fill="#c1121f"/><rect x="150" y="446" width="310" height="8" fill="#fff" opacity=".85"/><rect x="120" y="364" width="350" height="46" rx="6" fill="#2a9d8f"/><rect x="130" y="400" width="330" height="8" fill="#fff" opacity=".85"/>');
  var ln='';for(var i=0;i<5;i++){ln+='<path d="M'+(190+i*4)+' '+(300+i*12)+' h'+(i%2?150:178)+'" pathLength="1" class="draw" style="transition-delay:'+(i*.25)+'s" stroke="#1d3a8a" stroke-width="3" fill="none" stroke-dasharray="1"/>'}
  o+=ly(1,'<path d="M300 366 L130 346 L130 280 L300 300Z" fill="#fff" stroke="#cbd5e1"/><path d="M300 366 L470 346 L470 280 L300 300Z" fill="#f4f6fb" stroke="#cbd5e1"/>'+ln+'<g class="fl"><rect x="420" y="190" width="14" height="110" rx="4" fill="#ffd166" transform="rotate(28 427 245)"/><path d="M394 296 l10 -22 l18 10Z" fill="#f2d1a5" transform="rotate(28 427 245)"/></g>');
  o+=ly(2,'<path d="M300 150 L470 214 L300 278 L130 214Z" fill="#111"/><path d="M214 244 v46 q86 40 172 0 v-46 L300 278Z" fill="#222"/><path d="M450 222 v70" stroke="#f5c542" stroke-width="5"/><circle cx="450" cy="298" r="9" fill="#f5c542"/><path d="M300 150 L470 214 L300 278 L130 214Z" fill="url(#shine)" opacity=".4"/>');
  o+=ly(3,star(110,160,18,'#f5c542')+star(500,130,14,'#fff')+star(540,300,12,'#f5c542')+star(70,420,12,'#fff')+'<path d="M150 560 L450 560 L430 590 L170 590Z" fill="#1d3a8a"/><text x="300" y="581" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" letter-spacing="3">PG TO MATRIC · PG TO 5TH</text>');
  return SVG(o);
}

/* ---------- Al-Nasir Homeo Clinic: leaf, dropper, 12-hour doctor, heartbeat ---------- */
function sceneClinic(){
  var o='';
  o+=ly(0,'<circle cx="300" cy="300" r="230" fill="#f4f8e6"/><circle cx="300" cy="300" r="230" fill="none" stroke="#c7d89a" stroke-width="3"/>'+'<path d="M300 520 Q290 400 300 300" stroke="#4d7c0f" stroke-width="8" fill="none"/>'+[[300,300,-30],[296,360,50],[302,420,-52],[300,250,18]].map(function(p){return '<ellipse cx="'+(p[0]+(p[2]>0?44:-44))+'" cy="'+p[1]+'" rx="46" ry="20" fill="#5e9c1a" transform="rotate('+(p[2]>0?-24:24)+' '+(p[0]+(p[2]>0?44:-44))+' '+p[1]+')"/>'}).join('')+'<ellipse cx="300" cy="226" rx="20" ry="42" fill="#6ab023"/>','up');
  o+=ly(1,'<rect x="418" y="360" width="100" height="140" rx="18" fill="#b36a14"/><rect x="418" y="360" width="100" height="140" rx="18" fill="url(#shine)"/><rect x="418" y="420" width="100" height="52" fill="#fff"/><text x="468" y="452" text-anchor="middle" font-size="18" font-weight="900" fill="#3f6212">HOMEO</text><rect x="448" y="330" width="40" height="36" rx="6" fill="#444"/><path d="M468 330 q-30 -16 -26 -60 q8 -30 26 -20 q18 -10 26 20 q4 44 -26 60Z" fill="#111" transform="translate(0 -4)"/><path class="drop" d="M468 300 q10 18 0 30 q-10 -12 0 -30Z" fill="#7dd3fc"/>');
  o+=ly(2,'<circle cx="150" cy="430" r="78" fill="#fff" stroke="#d7e3b0" stroke-width="3"/><circle cx="150" cy="430" r="62" pathLength="1" class="draw" fill="none" stroke="#5e9c1a" stroke-width="10" stroke-dasharray="1" stroke-linecap="round" transform="rotate(-90 150 430)"/><text x="150" y="440" text-anchor="middle" font-size="34" font-weight="900" fill="#3f6212">12H</text>');
  o+=ly(3,'<path d="M40 250 H190 l20 -40 l30 100 l24 -140 l26 120 l16 -40 H560" pathLength="1" class="draw" fill="none" stroke="#e63946" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1"/><g class="fl"><rect x="276" y="100" width="48" height="140" rx="8" fill="#22c55e" opacity="0"/></g>'+'<rect x="476" y="150" width="30" height="86" rx="6" fill="#22c55e"/><rect x="448" y="178" width="86" height="30" rx="6" fill="#22c55e"/>'+star(120,170,14,'#7dd3fc')+star(300,130,12,'#fff'));
  return SVG(o);
}

/* ---------- Hashmi Electronics: a TV powers on, speakers play ---------- */
function sceneTV(){
  var o='',i,q='',cols=['#ff4d6d','#ffd166','#06d6a0','#4cc9f0','#b388eb'];
  o+=ly(0,shadowE(280,540,210)+'<rect x="240" y="400" width="80" height="44" fill="#1b2330"/><ellipse cx="280" cy="448" rx="110" ry="12" fill="#1b2330"/><rect x="70" y="150" width="420" height="260" rx="16" fill="#0f141c"/><rect x="82" y="162" width="396" height="236" rx="8" fill="#070a0f"/><path d="M82 162 H300 L220 398 H82Z" fill="#fff" opacity=".05"/>');
  o+=ly(1,'<rect x="60" y="140" width="440" height="280" rx="30" fill="#4cc9f0" opacity=".35" filter="url(#blur20)"/><rect x="82" y="162" width="396" height="236" rx="8" fill="#ff4d6d"/><rect x="82" y="162" width="396" height="236" rx="8" fill="url(#shine)" opacity=".4"/><path d="M82 330 Q180 250 280 320 T478 280 V398 H82Z" fill="#4cc9f0"/><path d="M82 360 Q200 310 300 360 T478 340 V398 H82Z" fill="#06d6a0"/><circle cx="400" cy="224" r="30" fill="#ffd166"/>');
  for(i=0;i<22;i++){q+='<circle class="tw" style="animation-delay:'+(i*.2).toFixed(1)+'s" cx="'+(100+(i*73)%360)+'" cy="'+(176+(i*41)%210)+'" r="4" fill="'+cols[i%5]+'"/>'}
  o+=ly(2,'<rect x="506" y="220" width="78" height="230" rx="14" fill="#1b2330"/><circle cx="545" cy="290" r="22" fill="#0b0f15" stroke="#4cc9f0" stroke-width="3"/><circle cx="545" cy="372" r="30" fill="#0b0f15" stroke="#4cc9f0" stroke-width="3"/><circle cx="545" cy="290" r="8" fill="#4cc9f0"/><circle cx="545" cy="372" r="12" fill="#4cc9f0"/>'+[0,1,2].map(function(k){return '<path class="tw" style="animation-delay:'+(k*.4)+'s" d="M'+(496-k*16)+' '+(330-24-k*12)+' q-14 '+(24+k*12)+' 0 '+(48+k*24)+'" fill="none" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round"/>'}).join(''));
  o+=ly(3,q+'<text x="280" y="468" text-anchor="middle" font-size="26" font-weight="900" fill="#e2e8f0" letter-spacing="8">Q-LED</text>'+star(60,110,12,'#fff')+star(520,150,14,'#4cc9f0'));
  return SVG(o);
}

/* ---------- Al-Khair Pharmacy: cross sign, medicine, pills, delivery ---------- */
function scenePharma(){
  var o='',i,pills='',cols=[['#ef4444','#fff'],['#2563eb','#fff'],['#f59e0b','#fff'],['#16a34a','#fff']];
  o+=ly(0,'<circle cx="300" cy="290" r="200" fill="#0aa3c2"/><circle cx="300" cy="290" r="200" fill="url(#shine)" opacity=".5"/><rect x="262" y="170" width="76" height="240" rx="14" fill="#fff"/><rect x="180" y="252" width="240" height="76" rx="14" fill="#fff"/>'+shadowE(300,520,220));
  o+=ly(1,'<rect x="76" y="320" width="130" height="190" rx="20" fill="#d97706"/><rect x="76" y="320" width="130" height="190" rx="20" fill="url(#shine)"/><rect x="86" y="284" width="110" height="44" rx="10" fill="#fff"/><rect x="76" y="380" width="130" height="80" fill="#fff"/><rect x="128" y="392" width="26" height="56" fill="#16a34a"/><rect x="113" y="407" width="56" height="26" fill="#16a34a"/>');
  for(i=0;i<8;i++){var c=cols[i%4];pills+='<g transform="translate('+(250+(i*53)%250)+' '+(430+(i*19)%80)+') rotate('+((i*37)%120-40)+')"><rect width="52" height="22" rx="11" fill="'+c[0]+'"/><path d="M26 0 h15 a11 11 0 0 1 0 22 h-15Z" fill="'+c[1]+'"/></g>'}
  o+=ly(2,pills+'<rect x="368" y="330" width="130" height="86" rx="10" fill="#e5e7eb"/>'+[0,1,2,3,4,5].map(function(k){return '<circle cx="'+(392+(k%3)*40)+'" cy="'+(356+Math.floor(k/3)*34)+'" r="12" fill="#fff" stroke="#9ca3af"/>'}).join(''));
  o+=ly(3,'<g class="fl"><path d="M330 470 h120 l-14 70 h-92Z" fill="#fff"/><path d="M360 470 q30 -44 60 0" stroke="#fff" stroke-width="6" fill="none"/><rect x="378" y="488" width="14" height="36" fill="#16a34a"/><rect x="367" y="499" width="36" height="14" fill="#16a34a"/></g><path class="drift" d="M300 500 h-80 M310 520 h-110 M300 540 h-60" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/>'+star(110,170,14,'#fff')+star(500,160,12,'#fff'));
  return SVG(o);
}

var STORY={
 "mamas-bake":{art:sceneBake,cta:"Browse cake designs",steps:[
  {k:"FROM MAMA'S OVEN",t:"BAKED\nFRESH",p:"Fresh and tasty cakes, cupcakes, brownies, donuts and gluten-free bakes.",a:"Soft sponge",bg:"#FFF1E4",ink:"#3B1A0F"},
  {k:"STEP TWO",t:"LAYER BY\nLAYER",p:"Cream and filling between every layer, so each slice is soft and rich.",a:"Cream and filling",bg:"#F8D7C4",ink:"#3B1A0F"},
  {k:"STEP THREE",t:"FROSTED\nBY HAND",p:"Smooth buttercream and piped borders, finished the way you like.",a:"Piped by hand",bg:"#F2B8C6",ink:"#3A0F1D"},
  {k:"MADE FOR YOU",t:"YOUR DESIGN,\nYOUR DAY",p:"Birthdays, anniversaries, Umrah Mubarak and more. Pick a design below or ask for your own. Home delivery is available; payment is taken first.",a:"Home delivery",bg:"#3B1220",ink:"#FFEFE6"}]},
 "khan-food-point":{art:sceneFood,cta:"See the products",steps:[
  {k:"DESI BREAKFAST",t:"PARATHA\nFIRST",p:"Hot paratha with chana, the classic desi breakfast.",a:"Paratha chana",bg:"#FBEBD0",ink:"#3A1D08"},
  {k:"ON THE SIDE",t:"FRESH\nDAIRY",p:"Fresh milk and dahi to go with it.",a:"Milk and dahi",bg:"#F1D9A8",ink:"#3A1D08"},
  {k:"PURE AND GOLDEN",t:"DESI GHEE,\nMAKHAN",p:"Desi ghee and butter by the kilo, with honey and shon halwa.",a:"Ghee and butter",bg:"#D9923B",ink:"#2B1403"},
  {k:"ORDER",t:"FROM\nJHANG MOR",p:"Delivery on orders of Rs. 500 or more. Charges depend on distance.",a:"Delivery from Rs. 500",bg:"#4A2410",ink:"#FFF1DC"}]},
 "khan-karyana-store":{art:sceneKaryana,cta:"See the products",steps:[
  {k:"EVERYDAY KARYANA",t:"FILL YOUR\nBASKET",p:"Flour, sugar, oil and more from one store.",a:"Your basket",bg:"#E8F3E1",ink:"#12361B"},
  {k:"THE BASICS",t:"ATA, SUGAR,\nSALT",p:"Staples with the shop's prices listed below.",a:"Staples",bg:"#CFE7C4",ink:"#12361B"},
  {k:"COOKING",t:"OIL, GHEE,\nSPICES",p:"Cooking oil, ghee, mirch, haldi and zira.",a:"Cooking",bg:"#F7D9A0",ink:"#3A2406"},
  {k:"HOME CARE",t:"SOAP TO\nSTATIONERY",p:"Soap, tooth paste, detergent, sweets, copies and pens. Delivery from Rs. 500.",a:"Delivery from Rs. 500",bg:"#123D22",ink:"#EAF7E3"}]},
 "smoke-bar":{art:sceneSmoke,cta:"See the flavours",steps:[
  {k:"ADULTS ONLY · 18+",t:"FLAVOUR\nFIRST",p:"Pods, vapes and flavours. Sold to adults 18 and over only.",a:"18+ only",bg:"#1B1030",ink:"#EFE6FF"},
  {k:"THE FLAVOURS",t:"TOKYO",p:"Flavours are priced per 1 ml. Ask the shop for pods and vapes prices.",a:"Per 1 ml",bg:"#2A1456",ink:"#EFE6FF"},
  {k:"MORE FLAVOURS",t:"OXWA,\nCRUSH",p:"Oxwa and Crush at Rs. 100 per 1 ml.",a:"Oxwa · Crush",bg:"#123238",ink:"#E4FBFF"},
  {k:"VISIT US",t:"MAKKAH\nPLAZA",p:"Opposite Suhail Petroleum Pump. No delivery. Contact the shop to know if it is open.",a:"No delivery",bg:"#3A1766",ink:"#F4ECFF"}]},
 "warda-drink-corner":{art:sceneDrink,cta:"See the products",steps:[
  {k:"COLD DRINKS",t:"ICE COLD,\nALWAYS",p:"Cold drinks and snacks at Purani Ghass Mandi Chowk.",a:"Thandi bottle",bg:"#FFF1CF",ink:"#2A1A05"},
  {k:"POURED FRESH",t:"CHILLED\nTO THE BRIM",p:"Cold bottles, ready when you are.",a:"Chilled",bg:"#F5D98A",ink:"#2A1A05"},
  {k:"ICE ON TOP",t:"EXTRA\nCOOL",p:"Ice, bubbles and a drink that hits the spot.",a:"On ice",bg:"#C98A1B",ink:"#1F1203"},
  {k:"SNACK TIME",t:"CHIPS\nON THE SIDE",p:"Snacks to go with it. No delivery; contact the shop to know if it is open.",a:"Snacks",bg:"#2A1A06",ink:"#FFE9B0"}]},
 "ali-tailors":{art:sceneTailor,cta:"See the services",steps:[
  {k:"THE FIRST MEASURE",t:"MADE TO\nMEASURE",p:"Stitching for men and women, measured to fit.",a:"Measure",bg:"#EFE7DA",ink:"#1C1812"},
  {k:"THE PATTERN",t:"CUT WITH\nCARE",p:"Gents suits, ladies suits, waistcoats, coats and shirts.",a:"Pattern",bg:"#DCD0BC",ink:"#1C1812"},
  {k:"STITCHED",t:"STITCHED\nTO FIT",p:"Each piece is stitched to your own measurements.",a:"Stitching",bg:"#2C2A28",ink:"#F6E7C1"},
  {k:"READY TO WEAR",t:"FINISHED\nIN STYLE",p:"Contact the shop for the stitching price and when to bring the cloth.",a:"Price on contact",bg:"#14120F",ink:"#F3D98B"}]},
 "shades-beauty-parlour":{art:sceneBeauty,cta:"See the services",steps:[
  {k:"LADIES ONLY",t:"GLOW\nUP",p:"Bridal, party and everyday makeup, plus skin and nail care.",a:"Ladies only",bg:"#FCE7EF",ink:"#3B0F27"},
  {k:"COLOUR AND CARE",t:"MAKEUP\nYOUR WAY",p:"Bridal makeup, party makeup and simple makeup.",a:"Makeup",bg:"#F6C6D8",ink:"#3B0F27"},
  {k:"LIPS AND LOOKS",t:"FINISHED\nWITH FLAIR",p:"Facial, pedicure and manicure for the full look.",a:"Facial · Nails",bg:"#C23A78",ink:"#FFFFFF"},
  {k:"BOOK YOUR SLOT",t:"MESSAGE\nUS",p:"Message the parlour on WhatsApp for the price and appointment time.",a:"Appointment",bg:"#3A0F27",ink:"#FFE3EE"}]},
 "kashmiri-tuition-center":{art:sceneSchool,cta:"See the classes",steps:[
  {k:"TUITION CLASSES",t:"START\nSTRONG",p:"Classes for girls and boys near Kashmiri Chowk.",a:"Girls and boys",bg:"#EAF0FB",ink:"#0C1D46"},
  {k:"GIRLS",t:"PG TO\nMATRIC",p:"Prep Group (PG) to Matric for girls.",a:"PG to Matric",bg:"#CFDCF7",ink:"#0C1D46"},
  {k:"BOYS",t:"PG TO\n5TH",p:"Prep Group (PG) to 5th for boys.",a:"PG to 5th",bg:"#1D3A8A",ink:"#FFFFFF"},
  {k:"ADMISSION",t:"LEARN.\nPRACTICE.\nEXCEL.",p:"Contact the center for admission and fees.",a:"Admission",bg:"#0B1636",ink:"#F6E3A8"}]},
 "al-nasir-homeo-clinic":{art:sceneClinic,cta:"See the services",steps:[
  {k:"HOMEO CLINIC",t:"GENTLE\nCARE",p:"A 12-hour doctor and a full range of medicines.",a:"12-hour doctor",bg:"#EEF3DD",ink:"#1E2B0B"},
  {k:"MEDICINES",t:"HOMEOPATHIC\nAND MORE",p:"Homeopathic medicine and all varieties of medicine.",a:"All medicines",bg:"#DCE6BC",ink:"#1E2B0B"},
  {k:"DOCTOR HOURS",t:"12 HOURS\nA DAY",p:"A doctor is available for 12 hours.",a:"12 hours",bg:"#5B7A22",ink:"#FFFFFF"},
  {k:"APPOINTMENT",t:"BOOK A\nVISIT",p:"Contact the clinic for the appointment time. Tida, Karimabad.",a:"Tida, Karimabad",bg:"#1F2D0B",ink:"#EAF2CC"}]},
 "hashmi-electronics":{art:sceneTV,cta:"See the products",steps:[
  {k:"ELECTRONICS",t:"WATCH\nIT BIG",p:"LED TVs, Q-LED TVs and Audionic speakers.",a:"LED TV",bg:"#E9EDF2",ink:"#0F1722"},
  {k:"LED TV",t:"COLOUR\nON",p:"All varieties of LED TVs.",a:"All varieties",bg:"#CBD5E1",ink:"#0F1722"},
  {k:"AUDIONIC",t:"SOUND TO\nMATCH",p:"Audionic speakers, all varieties.",a:"Audionic speakers",bg:"#2B3646",ink:"#FFFFFF"},
  {k:"Q-LED",t:"VISIT\nQINWAN CHOWK",p:"All varieties of Q-LED TVs. Message the shop for prices.",a:"Q-LED",bg:"#0F1722",ink:"#E2E8F0"}]},
  "alizay-baking":{art:sceneBake,cta:"Browse cake designs",steps:[
  {k:"HOME BAKERY",t:"BAKED\nWITH LOVE",p:"Custom cakes, cupcakes, muffins, brownies and donuts from Alizay Baking.",a:"Home bakery",bg:"#FDEBF3",ink:"#3A1030"},
  {k:"STEP TWO",t:"LAYER BY\nLAYER",p:"Soft sponge with cream and filling in every layer.",a:"Cream and filling",bg:"#F7D3E6",ink:"#3A1030"},
  {k:"STEP THREE",t:"DECORATED\nBY HAND",p:"Fondant toppers, buttercream and piped details, made for your theme.",a:"Made by hand",bg:"#E9B6D8",ink:"#34102C"},
  {k:"MADE FOR YOU",t:"YOUR THEME,\nYOUR DAY",p:"Birthdays, bride to be, doctor cakes and more. Pick a design below or ask for your own. Ask the shop for the price.",a:"Custom designs",bg:"#3A1034",ink:"#FFEAF6"}]},
 "al-khair-pharmacy":{art:scenePharma,cta:"Ask about a medicine",steps:[
  {k:"PHARMACY",t:"CARE,\nDELIVERED",p:"Pharmacy with delivery at Committee Chowk.",a:"Delivery",bg:"#E3F3F7",ink:"#08303D"},
  {k:"MEDICINES",t:"THE RIGHT\nMEDICINE",p:"Ask the shop for the price and stock of any medicine.",a:"Ask for stock",bg:"#C4E5EE",ink:"#08303D"},
  {k:"ON WHATSAPP",t:"TELL US\nWHAT YOU NEED",p:"Message the pharmacy on WhatsApp with your request.",a:"WhatsApp",bg:"#1B8AA6",ink:"#FFFFFF"},
  {k:"DELIVERY",t:"AT YOUR\nDOOR",p:"Delivery is available. Please ask the shop for the price and delivery details.",a:"Delivery",bg:"#06303D",ink:"#DDF3F9"}]}
};

/* ===== Scenes built from real photos (own photos and linked stock photos) ===== */
function RM(id){return "https://images.pexels.com/photos/"+id+"/pexels-photo-"+id+".jpeg?auto=compress&cs=tinysrgb&w=520"}
function PS(i){return typeof i==="string"?i:photoUrl(i)}
var _cid=0;
function cardImg(src,cx,cy,w,h,rot,bd){
  bd=bd==null?8:bd;var id="cc"+(++_cid),x=cx-w/2,y=cy-h/2;
  return '<g transform="rotate('+(rot||0)+' '+cx+' '+cy+')" filter="url(#ds)"><rect x="'+(x-bd)+'" y="'+(y-bd)+'" width="'+(w+2*bd)+'" height="'+(h+2*bd)+'" rx="18" fill="#fff"/><clipPath id="'+id+'"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="12"/></clipPath><image href="'+PS(src)+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" preserveAspectRatio="xMidYMid slice" clip-path="url(#'+id+')"/></g>';
}
function circImg(src,cx,cy,r,ring){
  var id="cc"+(++_cid);
  return '<g filter="url(#ds)"><circle cx="'+cx+'" cy="'+cy+'" r="'+(r+7)+'" fill="'+(ring||"#fff")+'"/><clipPath id="'+id+'"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"/></clipPath><image href="'+PS(src)+'" x="'+(cx-r)+'" y="'+(cy-r)+'" width="'+(2*r)+'" height="'+(2*r)+'" clip-path="url(#'+id+')" preserveAspectRatio="xMidYMid slice"/></g>';
}

/* Mama's Bake: a cake really bakes in the oven, then is layered, frosted and decorated */
function sceneBake(){
  var r=srnd(7),o='',i,a,x,y,cols=['#ff4d6d','#ffd166','#06d6a0','#4cc9f0','#b388eb','#ff9f1c'];
  function T(inner){return '<g transform="translate(150 70) scale(.8)">'+inner+'</g>'}
  /* 0: the oven - batter rises and turns golden while the window glows */
  var knobs='';for(i=0;i<3;i++)knobs+='<circle cx="'+(70+i*50)+'" cy="276" r="11" fill="#6b7280"/><rect x="'+(68+i*50)+'" y="266" width="4" height="9" rx="2" fill="#fff"/>';
  o+=ly(0,shadowE(125,512,120)+
    '<rect x="20" y="250" width="210" height="262" rx="20" fill="#d5d9df"/><rect x="20" y="250" width="210" height="262" rx="20" fill="url(#shine)" opacity=".5"/><rect x="32" y="258" width="186" height="40" rx="10" fill="#aeb4bd"/>'+knobs+
    '<rect x="44" y="312" width="162" height="160" rx="14" fill="#23242a"/><rect x="52" y="320" width="146" height="144" rx="9" fill="#ff8a1f" opacity=".5" class="tw"/>'+
    '<rect x="62" y="420" width="126" height="10" rx="3" fill="#4b4f57"/>'+
    '<path class="bk" d="M70 420 Q70 372 125 368 Q180 372 180 420Z" fill="#e8b765"/>'+
    '<rect x="64" y="426" width="122" height="12" rx="3" fill="#9aa0a8"/>'+
    '<rect x="60" y="482" width="130" height="10" rx="5" fill="#9aa0a8"/>'+
    steam(100,250,'#fff',0)+steam(160,250,'#fff',1.4)+
    '<circle cx="190" cy="276" r="7" fill="#ff4d4d" class="tw"/>'+
    '<rect x="176" y="150" width="62" height="42" rx="10" fill="#fff"/><text x="207" y="178" text-anchor="middle" font-size="20" font-weight="900" fill="#3b1a0f">180°</text>'+
    T('<ellipse cx="300" cy="498" rx="232" ry="34" fill="#fff"/><ellipse cx="300" cy="494" rx="206" ry="26" fill="#f2e7da"/>'));
  /* 1: baked layers come out and are stacked with cream */
  o+=ly(1,T(cyl(150,404,300,68,26,'#d99a3e','#f0c878')+'<path d="M150 404v68" stroke="#fff" stroke-opacity=".18" stroke-width="14"/><circle cx="190" cy="440" r="3" fill="#a96a1d" opacity=".6"/><circle cx="260" cy="452" r="3" fill="#a96a1d" opacity=".6"/><circle cx="360" cy="436" r="3" fill="#a96a1d" opacity=".6"/><circle cx="420" cy="456" r="3" fill="#a96a1d" opacity=".6"/>'+
    cyl(150,390,300,14,26,'#fff7ea','#fffdf6')+cyl(150,344,300,46,26,'#d99a3e','#f0c878')+'<path d="M150 344v46" stroke="#fff" stroke-opacity=".18" stroke-width="14"/><ellipse cx="300" cy="388" rx="150" ry="26" fill="none" stroke="#d63a5a" stroke-width="6" opacity=".85"/>'));
  /* 2: frosted by hand */
  var fr=cyl(138,334,324,138,28,'#ffcfdc','#ffe8ef')+'<path d="M138 334v138" stroke="#fff" stroke-opacity=".5" stroke-width="16"/>';
  for(i=0;i<20;i++){a=i/20*Math.PI*2;x=300+156*Math.cos(a);y=334+25*Math.sin(a);fr+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="10" fill="#fff"/><circle cx="'+(x-3).toFixed(1)+'" cy="'+(y-3).toFixed(1)+'" r="3" fill="#ffd1df"/>'}
  for(i=0;i<=14;i++){a=i/14*Math.PI;x=300+150*Math.cos(a);y=472+27*Math.sin(a);fr+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="8" fill="#fff"/><circle cx="'+(x-2).toFixed(1)+'" cy="'+(y-2).toFixed(1)+'" r="2.4" fill="#ffd1df"/>'}
  fr+='<g class="fl"><path d="M470 250 l-58 60 q-8 8 -2 14 l10 10 q6 6 14 -2 l56 -62Z" fill="#fff" stroke="#e0c6cf"/><path d="M412 312 l-34 34" stroke="#ffb3c8" stroke-width="10" stroke-linecap="round"/></g>';
  o+=ly(2,T(fr));
  /* 3: decorated and ready */
  var t='';
  for(i=0;i<34;i++){a=r()*Math.PI*2;var rr=Math.sqrt(r());x=300+rr*118*Math.cos(a);y=334+rr*20*Math.sin(a);t+='<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="9" height="3.6" rx="1.8" fill="'+cols[i%6]+'" transform="rotate('+Math.round(r()*180)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>'}
  [[250,318],[300,308],[350,318]].forEach(function(p){t+='<path d="M'+p[0]+' '+(p[1]-12)+' q8 -14 18 -14" stroke="#2d6a2e" stroke-width="3" fill="none"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="15" fill="#d90429"/><circle cx="'+(p[0]-5)+'" cy="'+(p[1]-5)+'" r="4" fill="#fff" opacity=".7"/>'});
  t+='<rect x="293" y="250" width="14" height="60" rx="3" fill="#7bdff2"/><rect x="293" y="262" width="14" height="6" fill="#fff"/><rect x="293" y="278" width="14" height="6" fill="#fff"/><rect x="293" y="294" width="14" height="6" fill="#fff"/><ellipse class="fk" cx="300" cy="238" rx="8" ry="15" fill="#ffb703"/><ellipse class="fk" cx="300" cy="242" rx="4" ry="8" fill="#fff3b0"/>';
  o+=ly(3,T(t)+star(180,230,14,'#ffd166')+star(560,200,16,'#fff')+star(560,330,12,'#ffd166')+star(300,120,10,'#fff'));
  return SVG(o,'0 90 600 460');
}

/* Khan Food Point: real product photos around a paratha chana plate */
function sceneFood(){
  var o='';
  o+=ly(0,'<circle cx="300" cy="320" r="158" fill="#fff" opacity=".5"/>'+circImg(53,300,320,138)+steam(262,170,'#fff',0)+steam(340,170,'#fff',1.3));
  o+=ly(1,'<g class="fl">'+circImg(47,100,190,66)+'</g><g class="fl" style="animation-delay:-2s">'+circImg(52,500,196,62)+'</g>');
  o+=ly(2,'<g class="fl" style="animation-delay:-1s">'+circImg(49,100,462,62)+'</g><g class="fl" style="animation-delay:-3s">'+circImg(50,500,462,62)+'</g>');
  o+=ly(3,'<g class="fl">'+circImg(51,300,92,58)+'</g><g class="fl" style="animation-delay:-2s">'+circImg(48,300,566,52)+'</g>'+star(40,330,12,'#ffd23f')+star(560,330,12,'#ffd23f'));
  return SVG(o,'0 20 600 600');
}

/* Warda Drink Corner: an empty glass is filled, iced, then the real products appear */
function sceneDrink(){
  var o='',i,bub='',g='M190 150 H410 L388 470 Q386 484 372 484 H228 Q214 484 212 470 Z';
  for(i=0;i<14;i++){bub+='<circle class="rise" style="animation-delay:'+(i*.37).toFixed(2)+'s" cx="'+(236+((i*47)%130))+'" cy="'+(450-(i*13)%40)+'" r="'+(3+i%3)+'" fill="#fff" opacity=".7"/>'}
  o+=ly(0,shadowE(300,492,200)+'<rect x="372" y="60" width="14" height="260" rx="7" fill="#e11d2e" transform="rotate(14 379 190)"/><path d="'+g+'" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".75" stroke-width="5"/>');
  o+=ly(1,'<clipPath id="gc"><path d="'+g+'"/></clipPath><g clip-path="url(#gc)"><rect class="grow" x="180" y="200" width="240" height="290" fill="#5a2a0e"/><rect class="grow" x="180" y="200" width="240" height="16" fill="#8a4a1a"/></g><path d="M300 20 q0 60 0 120" class="draw" pathLength="1" stroke="#7a3a12" stroke-width="12" fill="none" stroke-linecap="round"/>');
  o+=ly(2,'<g class="fl"><rect x="232" y="186" width="46" height="46" rx="9" fill="#cfeaff" fill-opacity=".55" stroke="#fff" stroke-width="2" transform="rotate(-12 255 209)"/><rect x="298" y="178" width="50" height="50" rx="9" fill="#cfeaff" fill-opacity=".55" stroke="#fff" stroke-width="2" transform="rotate(10 323 203)"/><rect x="276" y="220" width="44" height="44" rx="9" fill="#cfeaff" fill-opacity=".5" stroke="#fff" stroke-width="2" transform="rotate(4 298 242)"/></g>'+bub+'<circle cx="412" cy="156" r="34" fill="#ffe66d"/><circle cx="412" cy="156" r="26" fill="#fff3a6"/><path d="M412 156 L412 130 M412 156 L434 143 M412 156 L434 169 M412 156 L412 182 M412 156 L390 169 M412 156 L390 143" stroke="#ffe66d" stroke-width="3"/>');
  o+=ly(3,'<g class="fl">'+circImg(54,110,300,92,'#ffe66d')+'</g><g class="fl" style="animation-delay:-2s">'+circImg(55,500,330,86,'#f2b441')+'</g><g class="fl" style="animation-delay:-1s">'+circImg(78,300,552,50,'#fff')+'</g>'+star(80,120,14,'#ffd36a')+star(540,120,12,'#fff')+star(300,40,12,'#ffd36a'));
  return SVG(o,'0 10 600 600');
}

/* Ali Tailor's: the shop's own stitched pieces, with a tape measure and a stitch line */
function sceneTailor(){
  var o='';
  o+=ly(0,cardImg(57,300,275,190,255,0)+'<path d="M110 470 Q300 520 490 470" stroke="#ffd23f" stroke-width="20" fill="none"/><path d="M110 470 Q300 520 490 470" stroke="#111" stroke-width="20" fill="none" stroke-dasharray="2 14" opacity=".45"/><path d="M490 470 q40 24 20 74" stroke="#ffd23f" stroke-width="16" fill="none" stroke-linecap="round"/>');
  o+=ly(1,cardImg(60,118,175,180,135,-6)+'<g class="fl"><path d="M500 120 l60 60 M560 120 l-60 60" stroke="#c9ccd1" stroke-width="8" stroke-linecap="round"/><circle cx="500" cy="186" r="14" fill="none" stroke="#d6336c" stroke-width="6"/><circle cx="560" cy="186" r="14" fill="none" stroke="#d6336c" stroke-width="6"/></g>');
  o+=ly(2,cardImg(58,486,330,140,190,6)+cardImg(59,114,400,140,190,-6)+'<path d="M190 440 Q300 360 420 400" pathLength="1" class="draw" fill="none" stroke="#f3c969" stroke-width="4" stroke-dasharray="1"/><g class="fl"><path d="M420 398 l34 -40" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/></g>');
  o+=ly(3,cardImg(56,300,555,110,140,0)+'<g class="fl"><rect x="430" y="470" width="130" height="40" rx="6" fill="#f3c969"/><circle cx="440" cy="480" r="4" fill="#37332f"/><text x="498" y="496" text-anchor="middle" font-size="12" font-weight="900" fill="#37332f">GENTS · LADIES</text></g>'+star(60,330,14,'#f3c969')+star(300,36,12,'#fff'));
  return SVG(o,'0 10 600 630');
}

/* Shade's Beauty Parlour: lit mirror with linked stock photos */
function sceneBeauty(){
  var o='',i,bulbs='';
  for(i=0;i<16;i++){var a=i/16*Math.PI*2;bulbs+='<circle class="tw" style="animation-delay:'+(i*.15).toFixed(2)+'s" cx="'+(300+176*Math.cos(a)).toFixed(1)+'" cy="'+(270+176*Math.sin(a)).toFixed(1)+'" r="9" fill="#fff3b0"/>'}
  o+=ly(0,'<circle cx="300" cy="270" r="176" fill="none" stroke="#e8b04a" stroke-width="16"/>'+circImg(RM(29368877),300,270,160,'#fdebf3')+bulbs+star(150,140,20,'#fff')+star(450,400,14,'#fff'));
  o+=ly(1,'<g class="fl">'+circImg(RM(7290123),90,440,68)+'</g><g class="fl" style="animation-delay:-2s">'+circImg(RM(13469411),510,440,68)+'</g>');
  o+=ly(2,'<g class="fl" style="animation-delay:-1s">'+circImg(RM(3865548),84,110,58)+'</g><g class="fl" style="animation-delay:-3s">'+circImg(RM(34930123),520,100,58)+'</g>');
  o+=ly(3,'<g class="fl">'+circImg(RM(2281695),300,520,64)+'</g><path d="M60 570 L250 570 L236 600 L60 600 L74 585Z" fill="#c9184a"/><text x="150" y="590" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" letter-spacing="2">BRIDAL · PARTY</text>'+star(540,230,16,'#ffd166'));
  return SVG(o,'0 20 600 600');
}

/* Kashmiri Tuition Center: classroom photos over the mountains */
function sceneSchool(){
  var o='';
  o+=ly(0,'<path d="M0 520 L110 300 L180 380 L270 240 L370 400 L450 300 L600 520Z" fill="#8fa8d8" opacity=".5"/><path d="M270 240 L246 282 L270 270 L292 284Z M110 300 L92 334 L112 326 L130 338Z M450 300 L430 336 L452 328 L470 338Z" fill="#fff" opacity=".9"/>'+cardImg(RM(8423011),300,330,220,280,-2));
  o+=ly(1,cardImg(RM(29659894),122,420,160,210,-9)+'<g class="fl"><rect x="440" y="200" width="14" height="110" rx="4" fill="#ffd166" transform="rotate(28 447 255)"/><path d="M414 306 l10 -22 l18 10Z" fill="#f2d1a5" transform="rotate(28 447 255)"/></g>');
  o+=ly(2,'<path d="M300 90 L470 154 L300 218 L130 154Z" fill="#111"/><path d="M214 184 v46 q86 40 172 0 v-46 L300 218Z" fill="#222"/><path d="M450 162 v70" stroke="#f5c542" stroke-width="5"/><circle cx="450" cy="238" r="9" fill="#f5c542"/><path d="M300 90 L470 154 L300 218 L130 154Z" fill="url(#shine)" opacity=".4"/>');
  o+=ly(3,cardImg(RM(5905923),480,420,150,200,8)+star(80,170,18,'#f5c542')+star(540,120,14,'#fff')+star(70,320,12,'#f5c542')+'<path d="M150 560 L450 560 L430 590 L170 590Z" fill="#1d3a8a"/><text x="300" y="581" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" letter-spacing="3">PG TO MATRIC · PG TO 5TH</text>');
  return SVG(o,'0 20 600 600');
}

/* Al-Nasir Homeo Clinic: leaf, dropper bottle, doctor, medicines */
function sceneClinic(){
  var o='';
  o+=ly(0,'<circle cx="300" cy="300" r="230" fill="#f4f8e6"/><circle cx="300" cy="300" r="230" fill="none" stroke="#c7d89a" stroke-width="3"/><path d="M300 520 Q290 400 300 300" stroke="#4d7c0f" stroke-width="8" fill="none"/>'+[[300,300,-30],[296,360,50],[302,420,-52],[300,250,18]].map(function(p){return '<ellipse cx="'+(p[0]+(p[2]>0?44:-44))+'" cy="'+p[1]+'" rx="46" ry="20" fill="#5e9c1a" transform="rotate('+(p[2]>0?-24:24)+' '+(p[0]+(p[2]>0?44:-44))+' '+p[1]+')"/>'}).join('')+'<ellipse cx="300" cy="226" rx="20" ry="42" fill="#6ab023"/>','up');
  o+=ly(1,'<g class="fl">'+circImg(RM(40557468),470,380,88,'#fff')+'</g><path class="drop" d="M470 252 q10 18 0 30 q-10 -12 0 -30Z" fill="#7dd3fc"/>');
  o+=ly(2,'<g class="fl" style="animation-delay:-2s">'+circImg(RM(7578798),135,420,92)+'</g><circle cx="150" cy="190" r="56" fill="#fff" stroke="#d7e3b0" stroke-width="3"/><circle cx="150" cy="190" r="44" pathLength="1" class="draw" fill="none" stroke="#5e9c1a" stroke-width="9" stroke-dasharray="1" stroke-linecap="round" transform="rotate(-90 150 190)"/><text x="150" y="199" text-anchor="middle" font-size="24" font-weight="900" fill="#3f6212">12H</text>');
  o+=ly(3,'<path d="M20 90 H170 l20 -34 l30 90 l24 -124 l26 108 l16 -34 H580" pathLength="1" class="draw" fill="none" stroke="#e63946" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1"/><g class="fl" style="animation-delay:-1s">'+circImg(RM(3873150),480,170,66)+'</g>'+star(70,330,12,'#7dd3fc')+star(540,520,12,'#fff'));
  return SVG(o,'0 20 600 580');
}

/* Hashmi Electronics: product photos with glow and sound waves */
function sceneTV(){
  var o='',i,q='',cols=['#ff4d6d','#ffd166','#06d6a0','#4cc9f0','#b388eb'];
  o+=ly(0,'<rect x="60" y="80" width="480" height="300" rx="40" fill="#4cc9f0" opacity=".3" filter="url(#blur20)"/>'+cardImg(RM(38975400),300,240,400,250,0));
  o+=ly(1,cardImg(RM(5202925),150,500,190,130,-4));
  o+=ly(2,circImg(RM(191877),470,500,86,'#4cc9f0')+[0,1,2].map(function(k){return '<path class="tw" style="animation-delay:'+(k*.4)+'s" d="M'+(360-k*18)+' '+(470-k*10)+' q-16 '+(26+k*12)+' 0 '+(52+k*22)+'" fill="none" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round"/>'}).join(''));
  for(i=0;i<22;i++){q+='<circle class="tw" style="animation-delay:'+(i*.2).toFixed(1)+'s" cx="'+(70+(i*83)%460)+'" cy="'+(50+(i*47)%520)+'" r="4" fill="'+cols[i%5]+'"/>'}
  o+=ly(3,q+'<text x="300" y="418" text-anchor="middle" font-size="26" font-weight="900" fill="#e2e8f0" letter-spacing="8">Q-LED</text>'+star(50,100,12,'#fff')+star(550,60,14,'#4cc9f0'));
  return SVG(o,'0 20 600 600');
}

/* Al-Khair Pharmacy: pharmacist, capsules and blister packs, delivery */
function scenePharma(){
  var o='';
  o+=ly(0,'<circle cx="300" cy="290" r="200" fill="#0aa3c2"/><circle cx="300" cy="290" r="200" fill="url(#shine)" opacity=".5"/>'+circImg(RM(9629685),300,290,160,'#fff'));
  o+=ly(1,'<g class="fl">'+circImg(RM(31406906),100,440,74)+'</g><circle cx="100" cy="200" r="42" fill="#fff"/><rect x="92" y="172" width="16" height="56" rx="3" fill="#16a34a"/><rect x="72" y="192" width="56" height="16" rx="3" fill="#16a34a"/>');
  o+=ly(2,'<g class="fl" style="animation-delay:-2s">'+circImg(RM(3873150),500,440,74)+'</g>');
  o+=ly(3,'<g class="fl"><path d="M370 540 h120 l-14 70 h-92Z" fill="#fff"/><path d="M400 540 q30 -44 60 0" stroke="#fff" stroke-width="6" fill="none"/><rect x="418" y="558" width="14" height="36" fill="#16a34a"/><rect x="407" y="569" width="36" height="14" fill="#16a34a"/></g><path class="drift" d="M340 570 h-90 M350 590 h-110 M340 610 h-60" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/>'+star(520,110,14,'#fff')+star(80,90,12,'#fff'));
  return SVG(o,'0 20 600 620');
}

/* ===== Story engine: sticky stage, step by step as you scroll ===== */
var REDUCE=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
var storyEl=null,storyData=null,storyStep=-1,storySeen=false,storyTick=false;
function storyHtml(s){
  var S=STORY[s.id];if(!S)return "";
  var n=S.steps.length;
  var tx=S.steps.map(function(st,i){return '<div class="tx" data-i="'+i+'"><p class="sk">'+esc(st.k)+'</p><h2 class="st">'+esc(st.t).replace(/\n/g,"<br>")+'</h2><p class="sp">'+esc(st.p)+'</p></div>'}).join("");
  var dots=S.steps.map(function(st,i){return '<li data-i="'+i+'"></li>'}).join("");
  return '<section class="story sg" id="story" style="'+st(s)+';--n:'+n+'" aria-label="The story of '+esc(s.name)+'">'+
    '<div class="stick"><div class="stage"><div class="txt">'+tx+'<button class="sbtn" type="button" data-skip="1">'+esc(S.cta)+' <span aria-hidden="true">&darr;</span></button></div>'+
    '<div class="art" aria-hidden="true">'+S.art()+'<div class="ann" id="storyAnn"></div></div></div><ol class="dots" aria-hidden="true">'+dots+'</ol></div></section>';
}
function storyMount(s){
  storyEl=$("#story");storyData=STORY[s.id];storyStep=-1;storySeen=false;
  if(!storyEl)return;
  var f=storyData.steps[0],stick=storyEl.firstElementChild;
  stick.style.setProperty("--sbg",f.bg);stick.style.setProperty("--sink",f.ink);
  storyUpdate();
}
function storyUpdate(){
  if(!storyEl)return;
  var n=storyData.steps.length,stick=storyEl.firstElementChild,r=storyEl.getBoundingClientRect();
  if(!storySeen&&(REDUCE||r.top<innerHeight*.82))storySeen=true;
  if(!storySeen)return;
  var step=n-1;
  if(!REDUCE){
    var total=Math.max(1,storyEl.offsetHeight-stick.offsetHeight),p=(70-r.top)/total;
    step=Math.min(n-1,Math.floor(Math.max(0,Math.min(.9999,p))*n));
  }
  if(step===storyStep)return;
  storyStep=step;
  var cur=storyData.steps[step],i,els;
  els=storyEl.querySelectorAll(".ly");for(i=0;i<els.length;i++)els[i].classList.toggle("on",+els[i].getAttribute("data-s")<=step);
  els=storyEl.querySelectorAll(".tx");for(i=0;i<els.length;i++)els[i].classList.toggle("on",i===step);
  els=storyEl.querySelectorAll(".dots li");for(i=0;i<els.length;i++)els[i].classList.toggle("on",i===step);
  stick.style.setProperty("--sbg",cur.bg);stick.style.setProperty("--sink",cur.ink);
  var an=$("#storyAnn");if(an){an.classList.remove("show");setTimeout(function(){an.textContent=cur.a;an.classList.add("show")},160)}
}
(function(){
  function kick(){if(!storyEl||storyTick)return;storyTick=true;requestAnimationFrame(function(){storyTick=false;storyUpdate()})}
  addEventListener("scroll",kick,{passive:true});addEventListener("resize",kick);
})();

/* ===== Shop themed bot: each shop gets its own Marky ===== */
var ACC={
 baker:'<path d="M14 18 q-8 -10 2 -14 q4 -7 12 -3 q8 -4 12 3 q10 4 2 14Z" fill="#fff" stroke="#e2d6c8"/><rect x="16" y="14" width="32" height="6" rx="2" fill="#fff" stroke="#e2d6c8"/>',
 dairy:'<path d="M12 22 q20 -18 40 0Z" fill="#d9822b"/><rect x="10" y="20" width="44" height="4" rx="2" fill="#a85a12"/><path d="M24 41 q8 -6 16 0 q-8 3 -16 0Z" fill="#6b3a12"/>',
 grocer:'<path d="M12 22 q20 -18 40 0Z" fill="#2f8f46"/><rect x="10" y="20" width="44" height="4" rx="2" fill="#1d6b31"/><path d="M19 58 H45 V72 Q32 77 19 72Z" fill="#2f8f46"/><rect x="27" y="63" width="10" height="6" rx="1" fill="#1d6b31"/>',
 smoke:'<rect x="16" y="26" width="14" height="10" rx="3" fill="#111"/><rect x="34" y="26" width="14" height="10" rx="3" fill="#111"/><rect x="29" y="29" width="6" height="2" fill="#111"/><circle class="tw" cx="56" cy="10" r="5" fill="#c9b6ff" opacity=".8"/><circle class="tw" cx="60" cy="20" r="3.5" fill="#c9b6ff" opacity=".6"/>',
 drink:'<path d="M10 20 q22 -14 44 0" stroke="#4cc9f0" stroke-width="3.4" fill="none"/><path d="M49 44 h13 l-2 24 h-9Z" fill="#fff" stroke="#bbb"/><path d="M51 51 h9 l-1 15 h-7Z" fill="#6b2d0c"/><rect x="57" y="32" width="2.4" height="16" fill="#e11d2e" transform="rotate(12 58 40)"/>',
 tailor:'<path d="M15 54 q17 9 34 0" stroke="#ffd23f" stroke-width="5.5" fill="none"/><path d="M17 54 q15 7 30 0" stroke="#000" stroke-width="5.5" stroke-dasharray="1 4" opacity=".45" fill="none"/><path d="M49 55 q6 6 3 14" stroke="#ffd23f" stroke-width="4" fill="none" stroke-linecap="round"/>',
 beauty:'<path d="M32 12 l-13 -7 v14Z M32 12 l13 -7 v14Z" fill="#ec4899"/><circle cx="32" cy="12" r="4" fill="#be185d"/><path d="M26 43c3 2.4 9 2.4 12 0" stroke="#e11d48" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
 teacher:'<path d="M32 3 L55 12 L32 21 L9 12Z" fill="#111"/><path d="M20 16 v9 q12 6 24 0 v-9" fill="#222"/><path d="M52 13 v13" stroke="#f5c542" stroke-width="2"/><circle cx="52" cy="28" r="2.6" fill="#f5c542"/>',
 clinic:'<path d="M10 20 q22 -14 44 0" stroke="#ddd" stroke-width="3" fill="none"/><circle cx="32" cy="15" r="7" fill="#e5e7eb" stroke="#9ca3af"/><circle cx="32" cy="15" r="3" fill="#fff"/><rect x="29" y="59" width="6" height="11" fill="#22c55e"/><rect x="26.5" y="61.5" width="11" height="6" fill="#22c55e"/>',
 tech:'<path d="M9 34 q0 -22 23 -22 q23 0 23 22" stroke="#222" stroke-width="4" fill="none"/><rect x="3" y="30" width="9" height="17" rx="4" fill="#ef4444"/><rect x="52" y="30" width="9" height="17" rx="4" fill="#ef4444"/>',
 pharma:'<path d="M13 20 q19 -15 38 0Z" fill="#fff" stroke="#cbd5e1"/><rect x="30" y="8" width="4" height="9" fill="#16a34a"/><rect x="27.5" y="10.5" width="9" height="4" fill="#16a34a"/><rect x="29" y="59" width="6" height="11" fill="#16a34a"/><rect x="26.5" y="61.5" width="11" height="6" fill="#16a34a"/>'
};
var BOT_THEME={
 "mamas-bake":{role:"Baker bot",acc:ACC.baker,chips:["See cake designs","Do you deliver?","Phone number","Where is it?"],hello:"I'm Marky the baker. Welcome to Mama's Bake! Scroll to watch a cake come together, then pick a design. Home delivery is available and payment is taken first."},
 "khan-food-point":{role:"Dairy bot",acc:ACC.dairy,chips:["See the products","Milk price","Delivery?","Where is it?"],hello:"I'm Marky from the dairy counter. Khan Food Point has fresh milk, dahi, ghee, butter, honey and paratha chana. Delivery starts from Rs. 500."},
 "khan-karyana-store":{role:"Grocer bot",acc:ACC.grocer,chips:["See the products","Delivery?","Phone number","Where is it?"],hello:"I'm Marky the grocer. Grab a basket: Khan Karyana Store has ata, sugar, oil, spices, soap and more. Delivery from Rs. 500."},
 "smoke-bar":{role:"Flavour bot · 18+",acc:ACC.smoke,chips:["See the flavours","Prices?","Phone number","Where is it?"],hello:"Marky here. Smoke Bar is for adults 18 and over only. Flavours are priced per 1 ml. There is no delivery."},
 "warda-drink-corner":{role:"Cold drink bot",acc:ACC.drink,chips:["See the products","Is it open now?","Phone number","Where is it?"],hello:"I'm Marky, your cold drink buddy. Warda Drink Corner serves cold drinks and snacks. There is no delivery."},
 "ali-tailors":{role:"Tailor bot",acc:ACC.tailor,chips:["See the services","Stitching price?","Phone number","Where is it?"],hello:"I'm Marky the tailor, tape measure ready. Ali Tailor's stitches suits, waistcoats, coats and shirts for men and women. Contact the shop for the price."},
 "shades-beauty-parlour":{role:"Beauty bot",acc:ACC.beauty,chips:["See the services","Book an appointment","Phone number","Where is it?"],hello:"I'm Marky, your glam guide. Shade's Beauty Parlour offers bridal, party and simple makeup, facial, pedicure and manicure. Ladies only."},
 "kashmiri-tuition-center":{role:"Teacher bot",acc:ACC.teacher,chips:["See the classes","Admission?","Phone number","Where is it?"],hello:"I'm Marky the teacher. Kashmiri Tuition Center has classes for girls (PG to Matric) and boys (PG to 5th). Contact the center for admission."},
 "al-nasir-homeo-clinic":{role:"Clinic bot",acc:ACC.clinic,chips:["See the services","Doctor timing","Phone number","Where is it?"],hello:"I'm Marky, the clinic assistant. Al-Nasir Homeo Clinic has a doctor for 12 hours and a full range of medicines. Contact the clinic for an appointment."},
 "hashmi-electronics":{role:"Tech bot",acc:ACC.tech,chips:["See the products","Prices?","Phone number","Where is it?"],hello:"I'm Marky, the tech helper. Hashmi Electronics sells LED TVs, Q-LED TVs and Audionic speakers. Message the shop for prices."},
  "alizay-baking":{role:"Baker bot",acc:ACC.baker,chips:["See cake designs","Phone number","Where is it?","Prices?"],hello:"I'm Marky the baker. Welcome to Alizay Baking! Scroll to watch a cake come together, then pick a design. Ask the shop for the price of your design."},
 "al-khair-pharmacy":{role:"Pharmacy bot",acc:ACC.pharma,chips:["Ask about a medicine","Delivery?","Phone number","Where is it?"],hello:"I'm Marky, the pharmacy helper. Al-Khair Pharmacy delivers. Ask the shop about the price and stock of any medicine."}
};
function themedHello(s){var th=BOT_THEME[s.id];return th?th.hello:shopText(s)}
function botThemeApply(){
  var th=botCur&&BOT_THEME[botCur.id];
  var g=$("#botAcc");if(g)g.innerHTML=th?th.acc:"";
  var nm=$("#botName");if(nm)nm.textContent=th?th.role:"Marky · Markezo helper";
}
var botT=null;
function botShow(ms){
  var b=$("#bot"),u=$("#botBubble");if(!b)return;
  b.classList.remove("quiet");u.classList.remove("pop");void u.offsetWidth;u.classList.add("pop");
  clearTimeout(botT);botT=setTimeout(function(){if(!b.classList.contains("ask"))b.classList.add("quiet")},ms||8000);
}
function botChips(){
  var c=$("#botChips");if(!c)return;c.innerHTML="";
  var th=botCur&&BOT_THEME[botCur.id];
  var l=botCur?(th?th.chips:["Phone number","Where is it?","Delivery?","Prices?"]):["Take a shop tour","Which shops deliver?","Where can I buy a cake?","How does it work?"];
  l.forEach(function(t){
    var b=document.createElement("button");b.type="button";b.textContent=t;
    b.addEventListener("click",function(){
      if(t==="Take a shop tour"){tourStart();return}
      if(/^(See|Ask about)\b/.test(t)){var e=$("#prodstart");if(e)e.scrollIntoView({behavior:"smooth"});return}
      $("#botQ").value=t;botSubmit();
    });
    c.appendChild(b);
  });
}

/* ===== Shop tour: Marky walks you through every store ===== */
var tour={on:false,i:0};
function tourStart(){tour.on=true;tour.i=0;var h="shop-"+SHOPS[0].id;if(location.hash==="#"+h)route();else location.hash=h}
function tourGo(d){
  var n=SHOPS.length;tour.i+=d;
  if(tour.i>=n){tourEnd(true);return}
  if(tour.i<0)tour.i=0;
  location.hash="shop-"+SHOPS[tour.i].id;
}
function tourEnd(done){
  tour.on=false;$("#tbar").hidden=true;
  if(done){toast("Tour finished. Happy shopping!");if(location.hash!=="#home")location.hash="home"}
}
function tourSync(h){
  var bar=$("#tbar");
  if(!tour.on){bar.hidden=true;return}
  if(h.indexOf("shop-")!==0){tourEnd(false);return}
  var n=SHOPS.length,i,s;
  for(i=0;i<n;i++)if(SHOPS[i].id===h.slice(5))break;
  if(i>=n){tourEnd(false);return}
  tour.i=i;s=SHOPS[i];
  $("#tourTxt").textContent="Tour "+(i+1)+" of "+n+" · "+s.name;
  $("#tourNext").textContent=i===n-1?"Finish":"Next shop";
  $("#tourPrev").disabled=i===0;
  bar.hidden=false;
  botSay("Stop "+(i+1)+" of "+n+". "+themedHello(s));
  botShow(14000);
}

/* ===== Polish: motion, reveals, counters, tilt, ticker, bazaar strip ===== */
var HAS_IO="IntersectionObserver" in window;
var RV=HAS_IO?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");RV.unobserve(e.target)}})},{threshold:.1,rootMargin:"0px 0px -4% 0px"}):null;
var PZ=HAS_IO?new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle("paused",!e.isIntersecting)})},{rootMargin:"120px"}):null;
var CNT=HAS_IO?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){countUp(e.target);CNT.unobserve(e.target)}})},{threshold:.4}):null;
var SIO=HAS_IO?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){buildStrip();SIO.disconnect()}})},{rootMargin:"400px"}):null;
var SPY=null;

function revealIn(root,sel){
  if(!root)return;
  var els=root.querySelectorAll(sel||".card,.prod,.fact,.stp,.area,.faq details,.sec>h2,.sec>p,.cta,.rates,.note"),k=0;
  for(var i=0;i<els.length;i++){
    var el=els[i];if(el.classList.contains("rv"))continue;
    el.classList.add("rv");el.style.setProperty("--d",(k%6)*70+"ms");k++;
    if(RV)RV.observe(el);else el.classList.add("in");
  }
}
function countUp(el){
  if(el._cu)return;el._cu=1;
  var to=+el.getAttribute("data-count")||0,suf=el.getAttribute("data-suf")||"";
  if(REDUCE){el.textContent=to+suf;return}
  var t0=null,dur=1400;
  (function f(t){if(t0===null)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(f)})(performance.now());
}
function mqHtml(){
  var one=SHOPS.map(function(s){return '<span><i>'+I(s.ic)+'</i>'+esc(s.name)+'</span>'}).join("");
  return '<div class="mq" data-pause aria-hidden="true"><div class="mqt">'+one+one+'</div></div>';
}
function stripHtml(){
  return '<section class="sec" id="explore"><div class="shead"><div><h2>Explore the bazaar</h2><p>Every shop has its own little world. Tap a scene to step inside.</p></div>'+
    '<div class="sarrs"><button type="button" data-strip="-1" aria-label="Scroll left">&lsaquo;</button><button type="button" data-strip="1" aria-label="Scroll right">&rsaquo;</button></div></div>'+
    '<div class="strip" id="strip" data-pause role="list" aria-label="Shop scenes"></div></section>';
}
function buildStrip(){
  var el=$("#strip");if(!el||el.getAttribute("data-done"))return;
  el.setAttribute("data-done","1");
  el.innerHTML=SHOPS.map(function(s){
    var S=STORY[s.id];if(!S)return "";var f=S.steps[3];
    return '<a class="tile sg" role="listitem" href="#shop-'+s.id+'" style="'+st(s)+';--tbg:'+f.bg+';--tink:'+f.ink+'" aria-label="Open '+esc(s.name)+'"><div class="tart" aria-hidden="true">'+S.art()+'</div><div class="tcap"><span>'+esc(s.cat)+'</span><b>'+esc(s.name)+'</b></div></a>';
  }).join("");
  revealIn(el,".tile");
}
function heroFx(){
  var hero=$(".hero");
  if(!hero||REDUCE||!(window.matchMedia&&matchMedia("(pointer:fine)").matches))return;
  hero.addEventListener("pointermove",function(e){
    var r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    hero.style.setProperty("--mx",(x*100).toFixed(1)+"%");hero.style.setProperty("--my",(y*100).toFixed(1)+"%");
    var stk=hero.querySelector(".stack");if(stk){stk.style.setProperty("--px",((x-.5)*2).toFixed(2));stk.style.setProperty("--py",((y-.5)*2).toFixed(2))}
  });
}
function navSpy(){
  if(!HAS_IO)return;
  if(SPY)SPY.disconnect();
  var links=document.querySelectorAll(".nav a");
  SPY=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){for(var i=0;i<links.length;i++)links[i].classList.toggle("act",links[i].getAttribute("href")==="#"+e.target.id)}
  })},{threshold:.35});
  ["stores","explore","how","areas","faq"].forEach(function(id){var el=document.getElementById(id);if(el)SPY.observe(el)});
}
function polishHome(){
  var v=$("#view");
  revealIn(v,".sec>h2,.sec>p,.stp,.area,.faq details,.cta,.tstrip,.shead");
  var c=v.querySelectorAll("[data-count]"),i;
  for(i=0;i<c.length;i++){if(CNT)CNT.observe(c[i]);else countUp(c[i])}
  var p=v.querySelectorAll("[data-pause]");for(i=0;i<p.length;i++)if(PZ)PZ.observe(p[i]);
  var s=$("#strip");if(s){if(SIO)SIO.observe(s);else buildStrip()}
  heroFx();navSpy();
}
function polishShop(){
  var v=$("#view");
  revealIn(v,".fact,.rates,.note,.near,.contact,.phead");
}
function polishRoute(){
  var v=$("#view");v.classList.remove("vin");void v.offsetWidth;v.classList.add("vin");
  var links=document.querySelectorAll(".nav a");for(var i=0;i<links.length;i++)links[i].classList.remove("act");
}

/* tilt + glare on store cards */
(function(){
  var cur=null,v=$("#view");
  function reset(){if(cur){["--rx","--ry"].forEach(function(k){cur.style.removeProperty(k)});cur=null}}
  v.addEventListener("pointermove",function(e){
    if(e.pointerType!=="mouse"||REDUCE)return;
    var c=e.target.closest?e.target.closest(".card"):null;
    if(c!==cur)reset();
    if(!c)return;
    cur=c;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    c.style.setProperty("--rx",((.5-y)*7).toFixed(2)+"deg");c.style.setProperty("--ry",((x-.5)*9).toFixed(2)+"deg");
    c.style.setProperty("--gx",(x*100).toFixed(0)+"%");c.style.setProperty("--gy",(y*100).toFixed(0)+"%");
  });
  v.addEventListener("pointerleave",reset);
})();

/* add-to-list: flying +1 and badge bump; confetti when a request is sent */
function flyAdd(btn){
  if(REDUCE||!btn||!btn.getBoundingClientRect||!Element.prototype.animate)return;
  var a=btn.getBoundingClientRect(),cb=$("#cartBtn"),c=cb.getBoundingClientRect(),el=document.createElement("div");
  var sx=a.left+a.width/2,sy=a.top+a.height/2,dx=c.left+c.width/2-sx,dy=c.top+c.height/2-sy;
  el.className="fly";el.textContent="+1";el.style.left=sx+"px";el.style.top=sy+"px";document.body.appendChild(el);
  var an=el.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:"translate(calc(-50% + "+(dx*.4)+"px),calc(-50% + "+(dy*.4-70)+"px)) scale(1.3)",opacity:1,offset:.45},{transform:"translate(calc(-50% + "+dx+"px),calc(-50% + "+dy+"px)) scale(.45)",opacity:.25}],{duration:760,easing:"cubic-bezier(.4,0,.2,1)"});
  an.onfinish=function(){el.remove();cb.classList.remove("bump");void cb.offsetWidth;cb.classList.add("bump")};
}
function confetti(x,y){
  if(REDUCE||!Element.prototype.animate)return;
  var cols=["#ffc233","#ff7a59","#2ee6b0","#6fb2ff","#ff6fae","#b794ff"],i;
  for(i=0;i<28;i++){
    var p=document.createElement("i"),a=Math.random()*Math.PI*2,v=80+Math.random()*170,rot=Math.random()*600;
    p.className="cf";p.style.left=x+"px";p.style.top=y+"px";p.style.background=cols[i%6];document.body.appendChild(p);
    (function(p,a,v,rot){p.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:"translate("+(Math.cos(a)*v)+"px,"+(Math.sin(a)*v-90)+"px) rotate("+rot+"deg)",opacity:1,offset:.55},{transform:"translate("+(Math.cos(a)*v*1.15)+"px,"+(Math.sin(a)*v+130)+"px) rotate("+(rot*2)+"deg)",opacity:0}],{duration:1100+Math.random()*500,easing:"cubic-bezier(.2,.7,.3,1)"}).onfinish=function(){p.remove()}})(p,a,v,rot);
  }
}
$("#cartBody").addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a.wa"):null;if(a)confetti(e.clientX,e.clientY)});
$("#view").addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a.wabig,a.btn.wa"):null;if(a)confetti(e.clientX,e.clientY)});

/* ripple on buttons */
document.addEventListener("pointerdown",function(e){
  if(REDUCE||!e.target.closest)return;
  var t=e.target.closest(".btn,.add,.sbtn,.wabig,.cartbtn,.tourbtn,.chip,.visit");if(!t)return;
  var r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,i=document.createElement("span");
  i.className="rip";i.style.cssText="width:"+s+"px;height:"+s+"px;left:"+(e.clientX-r.left-s/2)+"px;top:"+(e.clientY-r.top-s/2)+"px";
  t.appendChild(i);setTimeout(function(){if(i.parentNode)i.parentNode.removeChild(i)},700);
});

/* scroll progress bar + header shadow */
(function(){
  var bar=$("#sprog"),hd=document.querySelector(".bar"),tick=0;
  function on(){tick=0;var max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(max>0?Math.min(1,scrollY/max):0)+")";hd.classList.toggle("scrolled",scrollY>16)}
  addEventListener("scroll",function(){if(!tick){tick=1;requestAnimationFrame(on)}},{passive:true});
  addEventListener("resize",on);on();
})();
try{sessionStorage.setItem("mzS","1")}catch(e){}


/* ===== Router ===== */
var SECTIONS={stores:1,explore:1,how:1,areas:1,faq:1};
function route(){
  storyEl=null;botCur=null;if(!$("#lb").hidden){$("#lb").hidden=true;document.body.style.overflow=""}
  var h=location.hash.replace("#","");
  if(SECTIONS[h]){
    if(!$("#grid")){homeView();polishHome()}
    var el=document.getElementById(h);if(el)el.scrollIntoView();
    return;
  }
  window.scrollTo(0,0);
  if(h.indexOf("shop-")===0&&byId(h.slice(5))){shopView(byId(h.slice(5)));polishShop()}
  else{homeView();polishHome()}
  polishRoute();
  botThemeApply();
  if(tour.on)tourSync(h);else{$("#tbar").hidden=true;botReveal()}
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
  if(d.add){flyAdd(t);cart[d.add]=(cart[d.add]||0)+1;refresh();if(cart[d.add]===1)toast("Added to your list")}
  else if(d.dec){var k=d.dec;cart[k]=(cart[k]||0)-1;if(cart[k]<=0)delete cart[k];refresh()}
  else if(d.copy){copyText(requestText(d.copy),t)}
  else if(d.num){copyText(d.num,t)}
  else if(d.reset){cat="All";q="";var i=$("#q");if(i)i.value="";var c=$("#qclr");if(c)c.hidden=true;syncChips();filterGrid()}
  else if(d.cat){cat=d.cat;syncChips();filterGrid()}
  else if(d.lb!==undefined){var sh=byId(location.hash.replace("#shop-",""));if(sh)openLb(sh,+d.lb)}
  else if(d.tour==="start"){tourStart()}
  else if(d.strip){var sp_=$("#strip");if(sp_)sp_.scrollBy({left:+d.strip*320,behavior:"smooth"})}
  else if(d.skip){var ps_=$("#prodstart");if(ps_)ps_.scrollIntoView({behavior:"smooth"})}
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
$("#logoIc").innerHTML=I("shop");$("#spMk").innerHTML=I("shop");
$("#closeCart").innerHTML=I("x");$("#lbClose").innerHTML=I("x");
$("#toTop").innerHTML=I("up");
$("#botListen").innerHTML=I("speaker")+"Listen";
$("#botHide").innerHTML=I("x")+"Hide";
$("#copy").textContent="© "+new Date().getFullYear()+" Markezo. Shop details and prices are provided by each shop. Some photos are linked from Pexels.";
if(!window.speechSynthesis)$("#botListen").hidden=true;
$("#botListen").addEventListener("click",botListen);
$("#botHide").addEventListener("click",function(){$("#bot").classList.add("quiet")});
/* Question box: answers come from the shop data on this page (no server needed) */
var BOT_KEYS={"khan-food-point":["khan","food"],"khan-karyana-store":["khan","karyana","kariyana"],"smoke-bar":["smoke"],"warda-drink-corner":["warda"],"ali-tailors":["ali","tailor","tailors","tayler","tailer"],"shades-beauty-parlour":["shade","shades","parlour","parlor","beauty"],"kashmiri-tuition-center":["kashmiri","tuition","tution"],"al-nasir-homeo-clinic":["nasir","homeo","clinic"],"hashmi-electronics":["hashmi"],"mamas-bake":["mama","mamas","bake"],"al-khair-pharmacy":["khair","pharmacy"],"alizay-baking":["alizay","alizzay","alizai","baking"]};
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

(function(){
  var nm=document.createElement("div");nm.className="botname";nm.id="botName";nm.textContent="Marky · Markezo helper";
  var bt=$("#botBubble");bt.insertBefore(nm,$("#botText"));
  $("#tourNext").addEventListener("click",function(){tourGo(1)});
  $("#tourPrev").addEventListener("click",function(){tourGo(-1)});
  $("#tourEnd").addEventListener("click",function(){tourEnd(false)});
})();
loadCart();themeIcon();route();renderCart();
