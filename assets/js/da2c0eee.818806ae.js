(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9503],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7129:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=a(2122),n=a(9756),i=(a(7294),a(4137)),o=["components"],s={title:"DataHub Features",sidebar_label:"Features",slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},l="DataHub Features",u={unversionedId:"docs/features",id:"docs/features",isDocsHomePage:!1,title:"DataHub Features",description:"DataHub is made up of a generic backend and a React-based UI.",source:"@site/genDocs/docs/features.md",sourceDirName:"docs",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/features.md",version:"current",frontMatter:{title:"DataHub Features",sidebar_label:"Features",slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},sidebar:"overviewSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},c=[{value:"Entities",id:"entities",children:[{value:"Datasets",id:"datasets",children:[]},{value:"Users &amp; Groups",id:"users--groups",children:[]},{value:"Dashboards &amp; Charts",id:"dashboards--charts",children:[]},{value:"Tasks &amp; Pipelines",id:"tasks--pipelines",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Schemas coming soon",id:"schemas-coming-soon",children:[]},{value:"Metrics coming soon",id:"metrics-coming-soon",children:[]}]},{value:"Metadata Sources",id:"metadata-sources",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-features"},"DataHub Features"),(0,i.kt)("p",null,"DataHub is made up of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/gma"},"generic backend")," and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/datahub-web-react"},"React-based UI"),".\nOriginal DataHub ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"blog post")," talks about the design extensively and mentions some of the features of DataHub.\nOur open sourcing ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p"},"blog post")," also provides a comparison of some features between LinkedIn production DataHub vs open source DataHub. Below is a list of the latest features that are available in DataHub, as well as ones that will soon become available."),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("h3",{id:"datasets"},"Datasets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schema"),": table & document schema in tabular and JSON format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coarse grain lineage"),": support for lineage at the dataset level, tabular & graphical visualization of downstreams/upstreams"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ownership"),": surfacing owners of a dataset, viewing datasets you own"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dataset life-cycle management"),': deprecate/undeprecate, surface removed datasets and tag it with "removed"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any dataset"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fine grain lineage"),": support for lineage at the field level ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Social actions"),": likes, follows, bookmarks ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compliance management"),": field level tag based compliance editing ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Top users"),": frequent users of a dataset ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]")),(0,i.kt)("h3",{id:"users--groups"},"Users & Groups"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Profile editing"),": LinkedIn style professional profile editing such as summary, skills")),(0,i.kt)("h3",{id:"dashboards--charts"},"Dashboards & Charts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Basic information"),": ownership, location. Link to external service for viewing the dashboard."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any dashboards ","[",(0,i.kt)("em",{parentName:"li"},"coming soon"),"]")),(0,i.kt)("h3",{id:"tasks--pipelines"},"Tasks & Pipelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Basic information"),": "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution history"),": Executions and their status. Link to external service for viewing full info.")),(0,i.kt)("h3",{id:"tags"},"Tags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Globally defined"),": Tags provided a standardized set of labels that can be shared across all your entities"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Supports entities and schemas"),": Tags can be applied at the entity level or for datasets, attached to schema fields."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Searchable")," Entities can be searched and filtered by tag")),(0,i.kt)("h3",{id:"schemas-coming-soon"},"Schemas ","[",(0,i.kt)("em",{parentName:"h3"},"coming soon"),"]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schema history"),": view and diff historic versions of schemas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GraphQL"),": visualization of GraphQL schemas")),(0,i.kt)("h3",{id:"metrics-coming-soon"},"Metrics ","[",(0,i.kt)("em",{parentName:"h3"},"coming soon"),"]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Basic information"),": ownershp, dimensions, formula, input & output datasets, dashboards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any metric")),(0,i.kt)("h2",{id:"metadata-sources"},"Metadata Sources"),(0,i.kt)("p",null,"We have a ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"Metadata Ingestion Framework")," which supports a variety of popular connectors, like"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BigQuery"),(0,i.kt)("li",{parentName:"ul"},"Snowflake"),(0,i.kt)("li",{parentName:"ul"},"Redshift "),(0,i.kt)("li",{parentName:"ul"},"Postgres"),(0,i.kt)("li",{parentName:"ul"},"Kafka"),(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"Hive"),(0,i.kt)("li",{parentName:"ul"},"Looker"),(0,i.kt)("li",{parentName:"ul"},"MongoDB ")),(0,i.kt)("p",null,"and many more."))}m.isMDXComponent=!0}}]);