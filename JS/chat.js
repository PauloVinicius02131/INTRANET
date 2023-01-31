var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
    widgetcode: "f78cbd99af699564ab5d09b5eb7f9b23765905267ba30fab089271be65c16318",
    values: {},
    ready: function () { }
};

var d = document;
var s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";

var t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);

d.write("<div id='zsiqwidget'></div>");