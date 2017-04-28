const OpenTimestamps = require('javascript-opentimestamps');

const ots = getParameterByName('ots');
var jsonString="{}";

if(ots) {
    jsonString = OpenTimestamps.json(hex2ascii(ots));
} else {
    jsonString='{"hash":"8bd5a5f07b4451c29756df5eb51d194fb5b20c7e89812d877bbad30d871c582f","op":"sha256","result":"OK","timestamp":{"ops":[{"op":"append","arg":"b63d8f213d047298b8ab4595acd8e5d0","result":"8bd5a5f07b4451c29756df5eb51d194fb5b20c7e89812d877bbad30d871c582fb63d8f213d047298b8ab4595acd8e5d0","timestamp":{"ops":[{"op":"sha256","arg":"","result":"9f42984ccdb96addb79884e714cc6b6b059c68f2ac3a2e07c5198c22d904de14","timestamp":{"ops":[{"op":"prepend","arg":"ae59d2c0d2f5efa97df8f3cca7e85845880c102237f1a6a1b0b4c6a5ab77f494","result":"ae59d2c0d2f5efa97df8f3cca7e85845880c102237f1a6a1b0b4c6a5ab77f4949f42984ccdb96addb79884e714cc6b6b059c68f2ac3a2e07c5198c22d904de14","timestamp":{"ops":[{"op":"sha256","arg":"","result":"0bca1ed1718c71929130a639f0a7b82eeb91a8fa45b16510c9ee15fec4a0bf15","timestamp":{"ops":[{"op":"append","arg":"026356e7972f023930ec84c213adedc4050460973935bbd2f4df3d7bd5dec55f","result":"0bca1ed1718c71929130a639f0a7b82eeb91a8fa45b16510c9ee15fec4a0bf15026356e7972f023930ec84c213adedc4050460973935bbd2f4df3d7bd5dec55f","timestamp":{"ops":[{"op":"sha256","arg":"","result":"c8f78972680bec45199bf6f19472fe1db32ceeed4509c79f345086bf4888d3fa","timestamp":{"ops":[{"op":"append","arg":"2e12050afd7a10ea4f591ed717d35de6","result":"c8f78972680bec45199bf6f19472fe1db32ceeed4509c79f345086bf4888d3fa2e12050afd7a10ea4f591ed717d35de6","timestamp":{"ops":[{"op":"sha256","arg":"","result":"8b35bc0a91a93d6d17e0162868dc123bc8b1bbfab22af9268f7fea70376b5cb0","timestamp":{"ops":[{"op":"prepend","arg":"57d982df","result":"57d982df8b35bc0a91a93d6d17e0162868dc123bc8b1bbfab22af9268f7fea70376b5cb0","timestamp":{"ops":[{"op":"append","arg":"b1f26e2e55590477","result":"57d982df8b35bc0a91a93d6d17e0162868dc123bc8b1bbfab22af9268f7fea70376b5cb0b1f26e2e55590477","timestamp":{"attestations":[{"type":"PendingAttestation","param":"https://alice.btc.calendar.opentimestamps.org"}]}}]}}]}}]}},{"op":"append","arg":"4aaade9c2ffb853ccff9c07681d019fd","result":"c8f78972680bec45199bf6f19472fe1db32ceeed4509c79f345086bf4888d3fa4aaade9c2ffb853ccff9c07681d019fd","timestamp":{"ops":[{"op":"sha256","arg":"","result":"a2181eb7fd470600d82119b73d7ae5da2d8c84db7d55fd45b568fac036d86f90","timestamp":{"ops":[{"op":"prepend","arg":"57d982e0","result":"57d982e0a2181eb7fd470600d82119b73d7ae5da2d8c84db7d55fd45b568fac036d86f90","timestamp":{"ops":[{"op":"append","arg":"6644ef713071762a","result":"57d982e0a2181eb7fd470600d82119b73d7ae5da2d8c84db7d55fd45b568fac036d86f906644ef713071762a","timestamp":{"attestations":[{"type":"PendingAttestation","param":"https://bob.btc.calendar.opentimestamps.org"}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}';
    
}

var obj = JSON.parse(jsonString);

$("#hash").html(obj.hash);
if(obj.result=="KO"){
    $("#error").html(obj.error);
}

var timestamp = obj.timestamp;
print(timestamp,0);


function print(timestamp,fork){

    if(timestamp.attestations !== undefined ){
        timestamp.attestations.forEach(function(item){
            var tr = document.createElement('tr');
            $("<td>").html(fork).appendTo(tr);
            $("<td>").html(item.type+" "+item.param).appendTo(tr);
            $("<td>").html("attestation").appendTo(tr);
            $("#table").append(tr);
        });
    }


    if(timestamp.ops === undefined ){
        return;
    }

    if(timestamp.ops.length > 1){
        var tr = document.createElement('tr');
        $("<td>").html(fork).appendTo(tr);
        $("<td>").html("fork into 2 paths").appendTo(tr);
        $("<td>").html("fork").appendTo(tr);
        $("#table").append(tr);
        fork++;
    }

    if(timestamp.ops.length > 0){
        var count=0;
        timestamp.ops.forEach(function(item){
            var tr = document.createElement('tr');
            $("<td>").html(fork+count).appendTo(tr);

            let content = item.result;
            if(item.arg.length>0){
                let start = content.indexOf(item.arg);
                let end = start+item.arg.length;
                content = item.result.substring(0, start)+"<b>"+item.arg+"</b>"+item.result.substring(end, item.result.length)
            }
            let title = item.op+"("+((item.arg.length>0)?item.arg.substring(0, 6)+'...':'')+")";

            $("<td>").html(content).appendTo(tr);
            $("<td>").html(title).appendTo(tr);
            $("#table").append(tr);
            print(item.timestamp, fork+count);
            count++;
        });
    }

}


// get parameters
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function hex2ascii(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
