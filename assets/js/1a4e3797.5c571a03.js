"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[138],{1035:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var s=r(6540),a=r(4586),n=r(7990),c=r(5260),l=r(8774),o=r(1312);const u=["zero","one","two","few","many","other"];function i(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(5391),g=r(6347),f=r(2303),x=r(1088);const y=function(){const e=(0,f.A)(),t=(0,g.W6)(),r=(0,g.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(x.Hg)&&x.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var j=r(5891),S=r(2384),w=r(9913),A=r(6841),C=r(3810),v=r(7674),b=r(2849),P=r(4471);const F="searchContextInput_mXoe",R="searchQueryInput_CFBF",T="searchResultItem_U687",_="searchResultItemPath_uIbk",$="searchResultItemSummary_oZHr",I="searchQueryColumn_q7nx",H="searchContextColumn_oWAF";var N=r(3385),k=r(4848);function q(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=m(),{searchValue:n,searchContext:l,searchVersion:u,updateSearchPath:i,updateSearchContext:h}=y(),[d,g]=(0,s.useState)(n),[f,w]=(0,s.useState)(),[A,C]=(0,s.useState)(),v=`${e}${u}`,P=(0,s.useMemo)((()=>d?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,s.useEffect)((()=>{i(d),f&&(d?f(d,(e=>{C(e)})):C(void 0))}),[d,f]);const T=(0,s.useCallback)((e=>{g(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==d&&g(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(x.Hg)||l||x.dz?await(0,j.Z)(v,l):{wrappedIndexes:[],zhDictionary:[]};w((()=>(0,S.m)(e,t,100)))}()}),[l,v]),(0,k.jsxs)(s.Fragment,{children:[(0,k.jsxs)(c.A,{children:[(0,k.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,k.jsx)("title",{children:P})]}),(0,k.jsxs)("div",{className:"container margin-vert--lg",children:[(0,k.jsx)("h1",{children:P}),(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:(0,p.A)("col",{[I]:Array.isArray(x.Hg),"col--9":Array.isArray(x.Hg),"col--12":!Array.isArray(x.Hg)}),children:(0,k.jsx)("input",{type:"search",name:"q",className:R,"aria-label":"Search",onChange:T,value:d,autoComplete:"off",autoFocus:!0})}),Array.isArray(x.Hg)?(0,k.jsx)("div",{className:(0,p.A)("col","col--3","padding-left--none",H),children:(0,k.jsxs)("select",{name:"search-context",className:F,id:"context-selector",value:l,onChange:e=>h(e.target.value),children:[x.dz&&(0,k.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),x.Hg.map((e=>{const{label:r,path:s}=(0,N.p)(e,t);return(0,k.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!f&&d&&(0,k.jsx)("div",{children:(0,k.jsx)(b.A,{})}),A&&(A.length>0?(0,k.jsx)("p",{children:r(A.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:A.length}))}):(0,k.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,k.jsx)("section",{children:A&&A.map((e=>(0,k.jsx)(L,{searchResult:e},e.document.i)))})]})]})}function L(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===w.i.Title,o=r===w.i.Keywords,u=r===w.i.Description,i=u||o,h=c||i,d=r===w.i.Content,m=(c?t.b:s.b).slice(),p=d||i?t.s:t.t;h||m.push(s.t);let g="";if(x.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);g=`?${e.toString()}`}return(0,k.jsxs)("article",{className:T,children:[(0,k.jsx)("h2",{children:(0,k.jsx)(l.A,{to:t.u+g+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,A.Z)(p,a):(0,C.C)(p,(0,v.g)(n,"t"),a,100)}})}),m.length>0&&(0,k.jsx)("p",{className:_,children:(0,P.$)(m)}),(d||u)&&(0,k.jsx)("p",{className:$,dangerouslySetInnerHTML:{__html:(0,C.C)(t.t,(0,v.g)(n,"t"),a,100)}})]})}const U=function(){return(0,k.jsx)(n.A,{children:(0,k.jsx)(q,{})})}}}]);