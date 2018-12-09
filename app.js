var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static(path.join(__dirname, "public")));

app.get("/getCMSData", function(req, res) {
    console.log("req.params.reqURL->"+ JSON.stringify(req.query.reqURL))
    
    var data = ({
      data: '<home-comp></home-comp>test'
    });
    //res.status(200).send(data);

    var carr = [];
    if(req.query.reqURL === "/"){
        carr.push({
            componentname: "Header",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li class=\"selected\">\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li>\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header>'
            }
          });
        carr.push({
            componentname: "Comp1",
            componenttype: "Comp1",
            data: {
                titleimage: '/images/home.png',
                title: 'Welcome to React SSR for CMS site',
                desc: "This is the sample component generated from API response using the CMS site.",
                buttontext: "Learn more",
                id: 1,
            }
          });
    }else if(req.query.reqURL === "/page2"){
        carr.push({
            componentname: "Header",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li class=\"selected\">\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header>'
            }
          });
        carr.push({
            componentname: "Comp2",
            componenttype: "Comp2",
            data: {
                title: "Tools behind the SSR",
                columnsArr:[
                    {title: "Webpack", desc: "It uses the webpack to bundle the JS and CSS files."},
                    {title: "Express JS", desc: "It uses the Express to render the react output from server side."},
                    {title: "SSR", desc: "It uses the Server side rendering."}
                ],
                id: 2,
            }
          });
    }else {
        carr.push({
            componentname: "404",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li>\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header><h3> Page Not Found</h3>'
            }
          });
    }
    
    var data = ({
        compArr: carr
    });
    res.json(data);

});

var server = app.listen(process.env.COUCHBASE_PORT || 3000, function () {
    console.log("API server Listening on port %s...", server.address().port);
});
