(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,n,t){"use strict";t.r(n);var a=t(147),r=t.n(a),i=t(0),o=t.n(i),u=t(148),c=t(152),l=t(145);function s(){var e=r()(["\ndisplay: block;\ntext-decoration: none;\npadding: "," ",";\nborder-radius: ",";\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return s=function(){return e},e}var d=t(149).a.rhythm,f=Object(u.a)(l.Link)(s(),d(.05),d(.4),d(.2));function m(){var e=r()(["\ncolor: gray;\n"]);return m=function(){return e},e}t.d(n,"pageQuery",function(){return v});var p=u.a.p(m()),g=function(e){var n=e.node,t=n.meta,a=t.title,r=t.description,i=n.fields.slug;return o.a.createElement(f,{to:i,key:"doc-link-"+i},o.a.createElement("h3",null,a),o.a.createElement(p,null,r))},v=(n.default=function(e){var n=e.data;return o.a.createElement(c.a,null,o.a.createElement("div",null,n.allOrgContent.edges.map(g)))},"1222309098")},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return m});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),u=t(144),c=t.n(u);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return u.withPrefix}),t.d(n,"navigate",function(){return u.navigate}),t.d(n,"push",function(){return u.push}),t.d(n,"replace",function(){return u.replace}),t.d(n,"navigateTo",function(){return u.navigateTo});var l=t(146),s=t.n(l);t.d(n,"PageRenderer",function(){return s.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,n,t){var a;e.exports=(a=t(151))&&a.default||a},149:function(e,n,t){"use strict";var a=t(157),r=t.n(a),i=t(158),o=t.n(i),u=t(159),c=t.n(u);o.a.plugins=[new c.a];var l=new r.a(o.a);n.a=l},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Orga"}}}}},151:function(e,n,t){"use strict";t.r(n);t(32);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),u=t(51),c=t(2),l=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},152:function(e,n,t){"use strict";var a=t(147),r=t.n(a),i=t(150),o=t(0),u=t.n(o),c=t(148),l=t(4),s=t.n(l),d=t(156),f=t.n(d),m=t(145),p=(t(32),t(155)),g=t.n(p),v=function(e){var n=e.children,t=e.to,a=e.activeClassName,r=g()(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(t)?u.a.createElement(m.Link,Object.assign({to:t,activeClassName:a},r),n):u.a.createElement("a",Object.assign({href:t},r),n)};function h(){var e=r()(["\n"]);return h=function(){return e},e}function y(){var e=r()(["\ncolor: gray;\nmargin: 0 auto;\npadding-bottom: ",";\ntext-align: center;\nborder-bottom: none;\n"]);return y=function(){return e},e}function b(){var e=r()(["\ndisplay: flex;\njustify-content: center;\n"]);return b=function(){return e},e}function E(){var e=r()(["\ndisplay: block;\ntext-decoration: none;\nborder-radius: 0.4rem;\npadding: .5rem 1.5rem;\ntext-align: center;\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return E=function(){return e},e}function x(){var e=r()(["\npadding-top: 3rem;\npadding-bottom: 2rem;\n"]);return x=function(){return e},e}var w=t(149).a.rhythm,k=c.a.header(x()),T=Object(c.a)(v)(E()),q=c.a.div(b()),j=c.a.h1(y(),w(1.5)),O=Object(c.a)(v)(h()),C=function(e){var n=e.siteTitle;return u.a.createElement(k,null,u.a.createElement(O,{to:"/"},u.a.createElement(j,null,n)),u.a.createElement(q,null,u.a.createElement(T,{to:"/docs"},"DOCS"),u.a.createElement(T,{to:"/ast"},"AST"),u.a.createElement(T,{to:"/syntax"},"SYNTAX"),u.a.createElement(T,{to:"https://github.com/xiaoxinghu/orgajs"},"CODE")))};C.propTypes={siteTitle:s.a.string},C.defaultProps={siteTitle:""};var S=C;t(160);function R(){var e=r()(["\nmargin: auto;\nmax-width: 740px;\n"]);return R=function(){return e},e}var P=c.a.div(R()),Q=function(e){var n=e.children;return u.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(P,null,u.a.createElement(f.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},u.a.createElement("html",{lang:"en"})),u.a.createElement(S,{siteTitle:e.site.siteMetadata.title}),u.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n))},data:i})};Q.propTypes={children:s.a.node.isRequired};n.a=Q}}]);
//# sourceMappingURL=component---src-pages-docs-index-js-7b563bcc7ab30454e28f.js.map