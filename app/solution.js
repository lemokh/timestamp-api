"use strict";

module.exports = function(app){
    app.get('/:query', function(req,res){
       res.send(JSON.stringify(main(req.params.query))); // insert main function 
    });
};

function main(str){
    var unix, natural;
    if (str.match('[a-zA-Z]')){
        if (isDate(str)){
            unix = toDate(str);
            natural = unixDate(unix);
            return {unix:unix, natural:natural};
        }
        else {return {unix:null, natural:null};}
    }
    else if (str.length < 13 && /^\d+$/.test(str)){
        unix = parseInt(str, 10);
        natural = unixDate(str);
        return {unix:unix, natural:natural};
    }
    else {
        return {unix:null, natural:null};
    }
}

function isDate(str){
    var status = false;
    if (!str||str.length<=0){status = false;}
    else {
        var result = new Date(str);
        if (result == 'Invalid Date'){status = false;}
        else {status = true;}
    }
    return status;
}

function toDate(str){
    var myDate = new Date(str);
    return myDate.getTime()/1000.0;
}

function unixDate(unix){
    var A = new Date(unix*1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var year = A.getFullYear();
    var month = months[A.getMonth()];
    var date = A.getDate();
    var timestamp = month+" "+date+", "+year;
    return timestamp;
}