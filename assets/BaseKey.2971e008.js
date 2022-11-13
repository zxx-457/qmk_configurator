import{n as g,y as n,d,m as p,i as o,e as y}from"./index.f9ff9457.js";const v={name:"base-keymap",computed:{styles(){let e=.85,t=.61;return this.config.SCALE<1&&(e*=(1+this.config.SCALE)/2,t*=(1+this.config.SCALE)/2),{"--unit-width":"1","--unit-height":"1","--default-smaller-key-font-size":`${t}rem`,"--default-key-font-size":`${e}rem`,"--default-key-height":`${this.config.KEY_HEIGHT}px`,"--default-key-width":`${this.config.KEY_WIDTH}px`,"--default-key-x-spacing":`${this.config.KEY_X_SPACING}px`,"--default-key-y-spacing":`${this.config.KEY_Y_SPACING}px`,width:`${this.width}px`,height:`${this.height}px`}}},methods:{calcKeyKeymapDims(e,t){return{w:e*this.config.KEY_X_SPACING-(this.config.KEY_X_SPACING-this.config.KEY_WIDTH),h:t*this.config.KEY_Y_SPACING-(this.config.KEY_Y_SPACING-this.config.KEY_HEIGHT),uh:t,uw:e}},calcKeyKeymapPos(e,t){return{x:e*this.config.KEY_X_SPACING,y:t*this.config.KEY_Y_SPACING}},setSize(e){this.width=e.x,this.height=e.y},calculateMax(e){const i=this.layouts[e].reduce((s,a)=>{let r=Object.assign({w:1,h:1},a);const u=this.calcKeyKeymapPos(r.x,r.y),c=this.calcKeyKeymapDims(r.w,r.h);return s.x=Math.max(s.x,u.x+c.w),s.y=Math.max(s.y,u.y+c.h),s},{x:0,y:0});return i.x>this.defaults.MAX_X&&(this.resizeConfig(i),i.x*=this.config.SCALE,i.y*=this.config.SCALE),i}}};let k,S;const f={};var w=g(v,k,S,!1,K,null,null,null);function K(e){for(let t in f)this[t]=f[t]}const I=function(){return w.exports}();var x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"key",class:e.myclasses,style:e.mystyles,attrs:{draggable:"",id:e.myid,title:e.myTitle},on:{click:e.clicked,dragstart:e.dragstart,dragend:e.dragend,drop:function(s){return s.stopPropagation(),e.dropped.apply(null,arguments)},dragleave:function(s){return s.preventDefault(),e.dragleave.apply(null,arguments)},dragover:function(s){return s.preventDefault(),e.dragover.apply(null,arguments)},dragenter:function(s){return s.preventDefault(),e.dragenter.apply(null,arguments)}}},[e._v(e._s(e.displayName)),e.icon?i("font-awesome-icon",{attrs:{size:"2x",icon:e.icon}}):e._e(),e.visible?[e.visible?i("div",{staticClass:"remove",on:{click:function(s){return s.stopPropagation(),e.remove.apply(null,arguments)}}},[e._v("x")]):e._e()]:e._e()],2)},$=[];let l=Object.assign({},n.iconCodes,n.platformIcons(window.navigator.platform));const C=(e,t)=>{if(e==1)switch(t){case 1:return"k1u";case 1.25:return"k125u";case 1.5:return"k15u";case 1.75:return"k175u";case 2:return"k2u";case 2.25:return"k225u";case 2.75:return"k275u";case 3:return"k3u";case 4:return"k4u";case 6:return"k6u";case 6.25:return"k625u";case 7:return"k7u"}if(t==1)switch(e){case 1.25:return"k125uh";case 1.5:return"k15uh";case 1.75:return"k175uh";case 2:return"k2uh"}if(e===2){if(t===1.25)return"kiso";if(t===2.25)return"kbae"}return"custom"},h=new Map,m=(e,t)=>{const i=`${e}-${t}`;if(h.has(i))return h.get(i);const a=C(e,t);return h.set(i,a),a},E={name:"base-key",props:{id:Number,meta:Object,w:Number,h:Number,y:Number,x:Number,uh:Number,uw:Number,colorway:String,displaySizes:{type:Boolean,default:!1},printable:{type:Boolean,default:!1}},computed:{...d("keymap",["config"]),...d("keymap",{curLayer:"layer"}),...p("keymap",["getKey","getSelectedKey","colorwayOverride"]),...p("keycodes",["lookupKeycode"]),myTitle(){return this.meta?this.meta.code:""},myid(){return`key-${this.id}`},visible(){return this.meta?this.meta.code!=="KC_NO":!1},displayName(){if(this.displaySizes)return this.uh>this.uw?this.uw===1?this.uh:`${this.uw} /
 ${this.uh}`:this.uw;if(!o(this.meta)&&o(l[this.meta.code]))return this.formatName(this.meta.name)},icon(){if(!this.displaySizes&&this.meta&&l[this.meta.code])return l[this.meta.code]},isSelected(){return this.id===this.getSelectedKey&&!this.$store.state.keymap.selectedContent},isContentSelected(){return this.$store.state.keymap.selectedContent&&this.id===this.getSelectedKey},myclasses(){let e=[];this.isSelected&&e.push("keycode-select"),this.inHover&&e.push("overme"),this.inSwap&&e.push("swapme"),this.meta&&this.meta.name.length>=2&&!this.displaySizes&&e.push("smaller");const{KEY_WIDTH:t,KEY_HEIGHT:i}=this.config;return e.push(m(this.uh,this.uw)),!o(this.meta)&&!this.printable&&(this.colorwayOverride&&this.colorwayOverride[this.meta.code]?e.push(`${this.colorway}-${this.colorwayOverride[this.meta.code]}`):n.alphaCodes[this.meta.code]?e.push(`${this.colorway}-key`):n.modCodes[this.meta.code]||this.w<=t*3&&(this.w>t||this.h>i)?(e.push("mod"),e.push(`${this.colorway}-mod`)):e.push(`${this.colorway}-key`)),e.join(" ")},mystyles(){let e=[];return this.y>0&&e.push(`top: ${this.y}px;`),this.x>0&&e.push(`left: ${this.x}px;`),m(this.uh,this.uw)==="custom"&&(this.uw!==1&&e.push(`--unit-width: ${this.uw};`),this.uh!==1&&e.push(`--unit-height: ${this.uh};`)),e.join("")}},methods:{...y("keymap",["setSelected","setKeycode","swapKeys","setSelectedContent"]),...y("app",["stopListening","startListening"]),clicked(){let e=this.id;this.isSelected&&(e=void 0),this.setSelected(e)},dropped(e){this.setSelected(this.id);let t=JSON.parse(e.dataTransfer.getData("application/json"));t.action==="swap"?(console.log(`swapping ${t.id} with ${this.id}`),this.swapKeys({layer:this.curLayer,srcIndex:t.id,dstIndex:this.id})):this.setKeycode({_code:t.code,layer:t.layer}),this.dragleave()},dragend(){this.inSwap=!1,this.inHover=!1,this.$el.style.opacity="1"},dragover(){return!1},dragenter(){this.inHover=!0},dragleave(){this.inHover=!1},dragstart(e){this.inSwap=!0;let{id:t}=this;e.dropEffect="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("application/json",JSON.stringify({action:"swap",id:t}))},formatName(e){return e},remove(){this.setSelected(this.id),this.setKeycode({_code:"KC_NO"})},clickContents(){let e=this.id;this.isContentSelected&&(e=void 0),this.setSelectedContent(e)}},data(){return{inHover:!1,inSwap:!1,platform:void 0}}},_={};var N=g(E,x,$,!1,b,null,null,null);function b(e){for(let t in _)this[t]=_[t]}const A=function(){return N.exports}();export{A as B,I as a};
