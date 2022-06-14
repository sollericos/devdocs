"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[33228],{61319:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=r(83117),i=r(80102),l=(r(67294),r(3905)),o=r(13904),n=["components"],s={title:"DML drivers",tags:["core_dml","DML","core","API","RDBM"]},d=void 0,c={unversionedId:"apis/core/dml/drivers",id:"apis/core/dml/drivers",title:"DML drivers",description:"A number of native drivers are included with Moodle, including those with support for:",source:"@site/docs/apis/core/dml/drivers.md",sourceDirName:"apis/core/dml",slug:"/apis/core/dml/drivers",permalink:"/devdocs/docs/apis/core/dml/drivers",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/core/dml/drivers.md",tags:[{label:"core_dml",permalink:"/devdocs/docs/tags/core-dml"},{label:"DML",permalink:"/devdocs/docs/tags/dml"},{label:"core",permalink:"/devdocs/docs/tags/core"},{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"RDBM",permalink:"/devdocs/docs/tags/rdbm"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655188037,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"DML drivers",tags:["core_dml","DML","core","API","RDBM"]},sidebar:"docs",previous:{title:"Data definition API",permalink:"/devdocs/docs/apis/core/dml/ddl"},next:{title:"DML exceptions",permalink:"/devdocs/docs/apis/core/dml/exceptions"}},p={},u=[{value:"Query logging",id:"query-logging",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,(0,a.Z)({frontMatter:s},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"A number of native drivers are included with Moodle, including those with support for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MySQLi"),(0,l.kt)("li",{parentName:"ul"},"MariaDB"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"Oracle"),(0,l.kt)("li",{parentName:"ul"},"Microsoft SQL Server")),(0,l.kt)("p",null,"These drivers are supported using DML Database Driver layer, which has a number of discreet benefits:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"more optimised and probably faster"),(0,l.kt)("li",{parentName:"ul"},"consume less memory"),(0,l.kt)("li",{parentName:"ul"},"better possibility to improve logging, debugging, profiling, etc."),(0,l.kt)("li",{parentName:"ul"},"less code, easier to fix and maintain"),(0,l.kt)("li",{parentName:"ul"},"and more")),(0,l.kt)("h2",{id:"query-logging"},"Query logging"),(0,l.kt)("p",null,"The native DML drivers support logging of database queries to database table, which can be enabled in config.php:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"$CFG->dboptions = [\n    'dbpersist' => 0,\n    //'logall'   => true,\n    'logslow'  => 5,\n    'logerrors'  => true,\n];\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logall")," - log all queries - suitable only for developers, causes high server loads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logslow")," - log queries that take longer than specified number of seconds (float values are accepted)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logerrors")," - log all error queries")),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/core/dml/"},"DML functions"),": Where all the functions used to handle DB data (",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_Manipulation_Language"},"DML"),") are defined."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/core/dml/exceptions"},"DML exceptions"),": New DML code is throwing exceptions instead of returning false if anything goes wrong")))}g.isMDXComponent=!0}}]);