(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(84)},42:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(9),c=t(10),r=t(11),i=t(5),s=t(1),o=t.n(s),m=t(21),u=t.n(m),d=(t(42),t(32)),E=t.n(d),p={infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,fade:!0,easing:"fade",adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1},f=t(22),v=t.n(f),g=t(14),h=t(33);function N(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var b=function(e){Object(c.a)(t,e);var a=N(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.Helmet,null,o.a.createElement("title",null,this.props.pageTitle," "),o.a.createElement("meta",{name:"description",content:"Marico el que lo encuentre y lo lea."})))}}]),t}(s.Component),y=t(16),w=t(34),O=t.n(w);function x(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var R=function(e){Object(c.a)(t,e);var a=x(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(y.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(y.a)(l)),l.stickyHeader=l.stickyHeader.bind(Object(y.a)(l)),window.addEventListener("load",function(){console.log("All assets are loaded")}),l}return Object(l.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")});var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t,n=this.props,l=n.logo,c=n.color,r=void 0===c?"default-color":c;return"dark"===l&&(t=o.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Digital Agency"})),o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(r)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},t)),o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(O.a,{className:"mainmenu",items:["home","mission","importance","about","testimonial","pricing"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#mission"},"Misi\xf3n")),o.a.createElement("li",null,o.a.createElement("a",{href:"#importance"},"La Importancia")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"Sobre M\xed")),o.a.createElement("li",null,o.a.createElement("a",{href:"#testimonial"},"Testimoniales")),o.a.createElement("li",null,o.a.createElement("a",{href:"#pricing"},"Planes y Precios"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"})),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(g.b,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(g.c,null))))))}}]),t}(s.Component),j=t(24),A=[{Social:o.a.createElement(j.a,null),link:"https://www.facebook.com/solracs2013"},{Social:o.a.createElement(j.b,null),link:"https://www.instagram.com/maldonadotraining/?hl=es-la"}],C=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},o.a.createElement("p",null,"Copyright \xa9 2020. All Rights Reserved.")))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},A.map(function(e,a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),o.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},o.a.createElement("div",{className:"text text-center"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.instagram.com/caribeit/?hl=es-la"},"Powered by CaribeIT.")),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.instagram.com/caribeit/?hl=es-la"},'"Tus ideas y nuestro talento".'))))))))};function k(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var D=[{title:"TRANQUI",precioFull:"16.667$",precioDescuento:"11.400$",frecuencia:"- 2 secciones por semana",incluye0:"- 1 sesi\xf3n nutricional con medici\xf3n antropometrica",incluye1:"",incluye2:"",nulo:"",whatsapp:"https://clck.ru/RVUKN"},{title:"MANIJA",precioFull:"22.000$",precioDescuento:"14.600$",frecuencia:"- 3 secciones por semana",incluye0:"- 1 sesi\xf3n nutricional con medici\xf3n antropometrica",incluye1:"- 1 bebida isotonica por sesi\xf3n de entrenamiento",incluye2:"",nulo:"",whatsapp:"https://clck.ru/RVUL9"},{title:"A FULL",precioFull:"27.333$",precioDescuento:"17.800$",frecuencia:"- 3 secciones por semana",incluye0:"- 1 sesi\xf3n nutricional con medici\xf3n antropometrica",incluye1:"- 1 bebida isotonica por sesi\xf3n de entrenamiento",incluye2:"- 1 sesi\xf3n Kinesi\xf3logica",nulo:"",whatsapp:"https://clck.ru/RVUML"}],S=function(e){Object(c.a)(t,e);var a=k(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.column,a=D.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"row"},a.map(function(a,t){return o.a.createElement("div",{className:"".concat(e),key:t},o.a.createElement("a",{href:a.whatsapp,target:"blank"},o.a.createElement("div",{className:"service service__style--2"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"reContent"},o.a.createElement("h1",{className:"title text-center"},a.title),o.a.createElement("p",{className:"text-price-end"},a.frecuencia),o.a.createElement("p",{className:"text-price-end"},a.incluye0),o.a.createElement("p",{className:"text-price-end"},a.incluye1),o.a.createElement("p",{className:"text-price-end"},a.incluye2)),o.a.createElement("h4",{className:"title text-center strikethrough"},a.precioFull),o.a.createElement("p",{className:"text-center sale-off"},"25% off"),o.a.createElement("h2",{className:"title text-center"},a.precioDescuento),o.a.createElement("div",{className:"text-center"},o.a.createElement("a",{href:a.whatsapp,target:"blank",className:"rn-button-style--3 btn-primary--wsp whatsapp"},o.a.createElement("span",null,"Escrib\xedme"),o.a.createElement("i",{className:"fa fa-whatsapp whatsapp-icon"})))))))})),o.a.createElement("div",{className:"service service__style--2 subservices"},o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title text-center"},"Aclaraciones:"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",{className:"text-price-end"},"Cada sesi\xf3n de entrenamiento tiene una hora de duraci\xf3n"),o.a.createElement("p",{className:"text-price-end"},"- Con el valor del abono del plan que elijas disfrutaras mes a mes de los beneficios que este incluye."),o.a.createElement("p",{className:"text-price-end"},"- Los entrenamientos podr\xe1n ser realizados en parques al aire libre, en domicilios si las condiciones lo permiten, o en gimnasios*."),o.a.createElement("p",{className:"text-price-end"},"- En caso de elegir entrenar en un gym consultame para ver opciones.")))))}}]),t}(s.Component),L=t(3);function I(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var T=function(e){Object(c.a)(t,e);var a=I(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("h2",{className:"title-practice"},"En la practica"),o.a.createElement(L.d,null,o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Nunca me cope de lleno con ning\xfan deporte en mi vida, pero desde que entreno con Carlitos me divierto adem\xe1s de conseguir resultados reales.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"DALVA FALCONI"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Admitir\xe9 que hacer ejercicio no es lo m\xedo, pero ya tengo un par de a\xf1os entrenando con Carlos y he mejorado mi fuerza y movilidad como nunca antes.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"CARLOS CALENS"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Tuve una lesi\xf3n de cadera cuando chica que me imped\xeda realizar algunos movimientos, trabajando de la mano de Carlos hoy tengo una movilidad impecable.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"ANA DE ERRANDONEA"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Con Carlitos hemos mejorado mucho la movilidad y fuerza, tras m\xe1s de 2 a\xf1os de trabajo con \xe9l seguimos por m\xe1s.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"JUAN ERRANDONEA"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Conoc\xed a Charly hace unos 2 a\xf1os, le ped\xed una rutina de onda y al d\xeda de hoy he mejorado f\xedsicamente como nunca antes, su gu\xeda y motivaci\xf3n son su plus.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"RODRIGO VILLALBA"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"A Charly lo conoc\xed en un gym, pegamos onda y comenzamos a entrenar, con el me divierto y encima me hace llegar para el verano.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"MARIANA BODI"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Que si dietas, que si tal rutina, que si cardio o pesas, antes de conocer a Charly nada, luego de sus planificaciones de 10.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"DYLAN GUELMAN"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Conoc\xed a Charly por referencia de un amigo, tome una clase de prueba con \xe9l y desde entonces me cope con sus planificaciones y manera de entrenar.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"ROI CORRADO"))))),o.a.createElement(L.c,null,o.a.createElement("div",{className:"rn-testimonial-content text-center"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,"Entreno con Carlos desde hace m\xe1s de 2 a\xf1os y sin duda alguna los mejores resultados los he obtenido bajo su gu\xeda.")),o.a.createElement("div",{className:"author-info"},o.a.createElement("h6",null,o.a.createElement("span",null,"KARINA CHAVEZ"))))),o.a.createElement(L.b,{className:"testimonial-thumb-wrapper"},o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/DalvaFalconi.jpeg",alt:"Dalva Falconi"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/CarlosCalens.jpeg",alt:"Carlos Calens"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/AnaDeErrandonea.jpeg",alt:"Ana De Errandonea"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/JuanErrandonea.jpeg",alt:"Juan Errandonea"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/RodrigoVillalba.jpeg",alt:"Rodrigo Villalba"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/MarianaBodi.jpeg",alt:"Mariana Bodi"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/DylanGuealman.jpeg",alt:"Dylan Guealman"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/RoiCorrado.jpeg",alt:"Roi Corrado"})))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"testimonial-thumbnai"},o.a.createElement("div",{className:"thumb"},o.a.createElement("img",{src:"/assets/images/testimonial/KarinaChavez.jpeg",alt:"Karina Chavez"})))))))))}}]),t}(s.Component),q=[{textPosition:"text-right",bgImage:"bg_image--15",description:"HABLEMOS DE TRAINING"},{textPosition:"text-center",bgImage:"bg_image--16",description:"MAS QUE ENTRENAR, ES UNA MANERA DE CONECTARNOS CON LA VIDA, EN LO FISICO Y ESPIRITUAL. . . "},{textPosition:"text-center",bgImage:"bg_image--17",description:". . . COMPROMETIENDONOS CON LA VISION DE SER MEJORES . . ."},{textPosition:"text-center",bgImage:"bg_image--18",description:". . . Y DISFRUTANDO DEL PROCESO PARA LOGRARLO!!"},{textPosition:"text-center",bgImage:"bg_image--19",description:'"CUANDO QUIERES ALGO CON MUCHA INTENSIDAD, NINGUN SACRIFICIO ES DEMASIADO GRANDE"',subdescription:" - Rafael Nadal"}],P=function(){return o.a.createElement("div",{className:"active-dark"},o.a.createElement(b,{pageTitle:"Maldonado Training"}),o.a.createElement(R,{homeLink:"/",logo:"dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},o.a.createElement("div",{className:"slider-activation slider-startup "},o.a.createElement(E.a,Object.assign({className:"rn-slick-dot dot-light"},p),q.map(function(e,a){return o.a.createElement("div",{className:"slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ".concat(e.bgImage),key:a,"data-black-overlay":"8"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.description?o.a.createElement("p",{className:"description"},e.description):"",e.subdescription?o.a.createElement("p",{className:"description subdescription text-left !important"},e.subdescription):"")))))}))))),o.a.createElement("div",{id:"mission",className:"fix"},o.a.createElement("div",{className:"rn-blog-area ptb--120 bg_color--5 mb-dec--30"},o.a.createElement("div",{className:"container bg_image--mission"},o.a.createElement("div",{className:"row align-items-end bg-color-opacity"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"section-title text-center"},o.a.createElement("h2",{className:"title"},"M\xed Misi\xf3n"),o.a.createElement("p",null,"Desde aqui quiero aportarte mi asesoria profesional, para que seas cap\xe1z de mejorar tu aspecto f\xedsico y emocional a trav\xe9s de la creaci\xf3n de nuevos h\xe1bitos que te garantizan un desarrollo integral completo."))))))),o.a.createElement("div",{id:"importance",className:"fix"},o.a.createElement("div",{className:"rn-blog-area ptb--120 bg_color--5 mb-dec--30"},o.a.createElement("div",{className:"container bg_image--importance"},o.a.createElement("div",{className:"row align-items-end bg-color-opacity"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"section-title text-center"},o.a.createElement("h2",{className:"title"},"El Beneficio de tener un entrenador personal."),o.a.createElement("p",null,"El Personal Trainer, es ese puente que te ayudar\xe1 a hacer realidad ese cambio fisico que tanto quieres; a trav\xe9s de una planificaci\xf3n bien elaborada en base a tus objetivos y requerimientos basicos."))))))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container-about"},o.a.createElement("div",{className:"row row--35 "},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"about-inner inner "},o.a.createElement("div",{className:"section-title"},o.a.createElement("br",null),o.a.createElement("h2",{className:"title text-center"},"Sobre m\xed"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",{className:"description"},"Hola, me llamo Carlos Maldonado, soy profe de educaci\xf3n f\xedsica y soy de Caracas, Venezuela."),o.a.createElement("br",null),o.a.createElement("p",{className:"description"},"Fu\xed atleta de nataci\xf3n y aguas abiertas cuando chico y participe en carreras de calle de 5, 10 y 15k. Tengo m\xe1s de 10 a\xf1os de experiencia en el \xe1mbito deportivo y del entrenamiento personalizado. Apasionado del F\xfatbol y amante del buen caf\xe9."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",{className:"description text-center"},"\xa1Pienso que el compromiso es la diferencia entre lo que fu\xe9, a lo que puedo ser!")))),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("img",{className:"w-100",src:"/assets/images/about/about-8.webp",alt:"About Images"})))))))),o.a.createElement("div",{id:"testimonial",className:"fix"},o.a.createElement("div",{className:"about-area ptb--60  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container "},o.a.createElement("div",{className:"row row--35 align-items-center"},o.a.createElement(T,null)))))),o.a.createElement("div",{id:"pricing",className:"fix"},o.a.createElement("div",{className:"rn-blog-area ptb--120 bg_color--5 mb-dec--30"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-end bg-color-opacity"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"PLANES"),o.a.createElement("p",{className:"text-price"},"Si bien cada plan de entrenamiento es elaborado de manera personalizada, en base a los objetivos y requerimientos b\xe1sicos de cada persona, todos tienen como prioridad el aumento de la fuerza en general."),o.a.createElement("p",null,"\xa1Ya que al mejorar esta capacidad, mejorariamos todas las dem\xe1s!")))),o.a.createElement("div",{className:"row creative-service"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(S,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"}))),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("h2",{className:"end-text"},"\xa1No dejes que otro te cuente la historia, sal\xed y escrib\xed la tuya!"))))),o.a.createElement(C,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(v.a,{showUnder:160},o.a.createElement(g.a,null))))};function M(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var _=function(e){Object(c.a)(t,e);var a=M(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{headerPosition:"header--transparent",color:"color-white",logo:"logo-light"}),o.a.createElement("div",{className:"error-page-inner bg_color--4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",{className:"title theme-gradient"},"404!"),o.a.createElement("h3",{className:"sub-title"},"Page not found"),o.a.createElement("span",null,"The page you were looking for could not be found."),o.a.createElement("div",{className:"error-button"},o.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},"Back To Homepage"))))))),o.a.createElement("div",{className:"backto-top"},o.a.createElement(v.a,{showUnder:160},o.a.createElement(g.a,null))),o.a.createElement(C,null))}}]),t}(s.Component),U=t(35),F=t(2),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function V(e){return function(){var a,t=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return Object(r.a)(this,a)}}var B=function(e){Object(c.a)(t,e);var a=V(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(U.a,{basename:"/"},o.a.createElement(F.c,null,o.a.createElement(F.a,{exact:!0,path:"".concat("","/"),component:P}),o.a.createElement(F.a,{path:"".concat("","/404"),component:_}),o.a.createElement(F.a,{component:_})))}}]),t}(s.Component);u.a.render(o.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");z?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(a,e)})}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.49ac7f87.chunk.js.map