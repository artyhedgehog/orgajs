(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});var a=n(0),r=n.n(a),i=n(152);t.default=function(e){var t=e.data.orgContent,n=t.meta.title;return r.a.createElement(i.a,null,r.a.createElement("h1",null,n),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))};var o="66703816"},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(144),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(146),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},149:function(e,t,n){"use strict";var a=n(157),r=n.n(a),i=n(158),o=n.n(i),u=n(159),c=n.n(u);o.a.plugins=[new c.a];var l=new r.a(o.a);t.a=l},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Orga"}}}}},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},152:function(e,t,n){"use strict";var a=n(147),r=n.n(a),i=n(150),o=n(0),u=n.n(o),c=n(148),l=n(4),s=n.n(l),d=n(156),m=n.n(d),f=n(145),p=(n(32),n(155)),g=n.n(p),h=function(e){var t=e.children,n=e.to,a=e.activeClassName,r=g()(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(n)?u.a.createElement(f.Link,Object.assign({to:n,activeClassName:a},r),t):u.a.createElement("a",Object.assign({href:n},r),t)};function v(){var e=r()(["\n"]);return v=function(){return e},e}function y(){var e=r()(["\ncolor: gray;\nmargin: 0 auto;\npadding-bottom: ",";\ntext-align: center;\nborder-bottom: none;\n"]);return y=function(){return e},e}function b(){var e=r()(["\ndisplay: flex;\njustify-content: center;\n"]);return b=function(){return e},e}function E(){var e=r()(["\ndisplay: block;\ntext-decoration: none;\nborder-radius: 0.4rem;\npadding: .5rem 1.5rem;\ntext-align: center;\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return E=function(){return e},e}function w(){var e=r()(["\npadding-top: 3rem;\npadding-bottom: 2rem;\n"]);return w=function(){return e},e}var x=n(149).a.rhythm,T=c.a.header(w()),q=Object(c.a)(h)(E()),S=c.a.div(b()),j=c.a.h1(y(),x(1.5)),k=Object(c.a)(h)(v()),C=function(e){var t=e.siteTitle;return u.a.createElement(T,null,u.a.createElement(k,{to:"/"},u.a.createElement(j,null,t)),u.a.createElement(S,null,u.a.createElement(q,{to:"/docs"},"DOCS"),u.a.createElement(q,{to:"/ast"},"AST"),u.a.createElement(q,{to:"/syntax"},"SYNTAX"),u.a.createElement(q,{to:"https://github.com/xiaoxinghu/orgajs"},"CODE")))};C.propTypes={siteTitle:s.a.string},C.defaultProps={siteTitle:""};var O=C;n(160);function R(){var e=r()(["\nmargin: auto;\nmax-width: 740px;\n"]);return R=function(){return e},e}var P=c.a.div(R()),Q=function(e){var t=e.children;return u.a.createElement(f.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(P,null,u.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},u.a.createElement("html",{lang:"en"})),u.a.createElement(O,{siteTitle:e.site.siteMetadata.title}),u.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})};Q.propTypes={children:s.a.node.isRequired};t.a=Q}}]);
//# sourceMappingURL=component---src-templates-post-js-e45e9a65c65922f3a22d.js.map