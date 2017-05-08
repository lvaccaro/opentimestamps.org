const OpenTimestamps = require('javascript-opentimestamps');

const ots = getParameterByName('ots');
var jsonString="{}";

if(ots) {
    jsonString = OpenTimestamps.json(hex2ascii(ots));
} else {
    jsonString='{"hash":"03ba204e50d126e4674c005e04d82e84c21366780af1f43bd54a37816b6ab340","op":"sha256","result":"OK","timestamp":{"result":"03ba204e50d126e4674c005e04d82e84c21366780af1f43bd54a37816b6ab340","ops":[{"fork":0,"op":"ripemd160","arg":"","result":"1df8859e60bc679503d16dcb870e6ce91a57e9df","timestamp":{"result":"1df8859e60bc679503d16dcb870e6ce91a57e9df","ops":[{"fork":0,"op":"prepend","arg":"0100000001e482f9d32ecc3ba657b69d898010857b54457a90497982ff56f97c4ec58e6f98010000006b483045022100b253add1d1cf90844338a475a04ff13fc9e7bd242b07762dea07f5608b2de367022000b268ca9c3342b3769cdd062891317cdcef87aac310b6855e9d93898ebbe8ec0121020d8e4d107d2b339b0050efdd4b4a09245aa056048f125396374ea6a2ab0709c6ffffffff026533e605000000001976a9140bf057d40fbba6744862515f5b55a2310de5772f88aca0860100000000001976a914","result":"0100000001e482f9d32ecc3ba657b69d898010857b54457a90497982ff56f97c4ec58e6f98010000006b483045022100b253add1d1cf90844338a475a04ff13fc9e7bd242b07762dea07f5608b2de367022000b268ca9c3342b3769cdd062891317cdcef87aac310b6855e9d93898ebbe8ec0121020d8e4d107d2b339b0050efdd4b4a09245aa056048f125396374ea6a2ab0709c6ffffffff026533e605000000001976a9140bf057d40fbba6744862515f5b55a2310de5772f88aca0860100000000001976a9141df8859e60bc679503d16dcb870e6ce91a57e9df","timestamp":{"result":"0100000001e482f9d32ecc3ba657b69d898010857b54457a90497982ff56f97c4ec58e6f98010000006b483045022100b253add1d1cf90844338a475a04ff13fc9e7bd242b07762dea07f5608b2de367022000b268ca9c3342b3769cdd062891317cdcef87aac310b6855e9d93898ebbe8ec0121020d8e4d107d2b339b0050efdd4b4a09245aa056048f125396374ea6a2ab0709c6ffffffff026533e605000000001976a9140bf057d40fbba6744862515f5b55a2310de5772f88aca0860100000000001976a9141df8859e60bc679503d16dcb870e6ce91a57e9df","ops":[{"fork":0,"op":"append","arg":"88ac00000000","result":"0100000001e482f9d32ecc3ba657b69d898010857b54457a90497982ff56f97c4ec58e6f98010000006b483045022100b253add1d1cf90844338a475a04ff13fc9e7bd242b07762dea07f5608b2de367022000b268ca9c3342b3769cdd062891317cdcef87aac310b6855e9d93898ebbe8ec0121020d8e4d107d2b339b0050efdd4b4a09245aa056048f125396374ea6a2ab0709c6ffffffff026533e605000000001976a9140bf057d40fbba6744862515f5b55a2310de5772f88aca0860100000000001976a9141df8859e60bc679503d16dcb870e6ce91a57e9df88ac00000000","timestamp":{"result":"0100000001e482f9d32ecc3ba657b69d898010857b54457a90497982ff56f97c4ec58e6f98010000006b483045022100b253add1d1cf90844338a475a04ff13fc9e7bd242b07762dea07f5608b2de367022000b268ca9c3342b3769cdd062891317cdcef87aac310b6855e9d93898ebbe8ec0121020d8e4d107d2b339b0050efdd4b4a09245aa056048f125396374ea6a2ab0709c6ffffffff026533e605000000001976a9140bf057d40fbba6744862515f5b55a2310de5772f88aca0860100000000001976a9141df8859e60bc679503d16dcb870e6ce91a57e9df88ac00000000","tx":"7e9f0f7d9daa2d9e51b2e22f4abe814c3f90539afa778a9bef88dc64627cb2ec","ops":[{"fork":0,"op":"sha256","arg":"","result":"9c6aa9591003377455b6f27fc71b5acfa5fbb2fa49362fa87a25ef0d799dd462","timestamp":{"result":"9c6aa9591003377455b6f27fc71b5acfa5fbb2fa49362fa87a25ef0d799dd462","ops":[{"fork":0,"op":"sha256","arg":"","result":"ecb27c6264dc88ef9b8a77fa9a53903f4c81be4a2fe2b2519e2daa9d7d0f9f7e","timestamp":{"result":"ecb27c6264dc88ef9b8a77fa9a53903f4c81be4a2fe2b2519e2daa9d7d0f9f7e","ops":[{"fork":0,"op":"prepend","arg":"a987f716c533913c314c78e35d35884cac943fa42cac49d2b2c69f4003f85f88","result":"a987f716c533913c314c78e35d35884cac943fa42cac49d2b2c69f4003f85f88ecb27c6264dc88ef9b8a77fa9a53903f4c81be4a2fe2b2519e2daa9d7d0f9f7e","timestamp":{"result":"a987f716c533913c314c78e35d35884cac943fa42cac49d2b2c69f4003f85f88ecb27c6264dc88ef9b8a77fa9a53903f4c81be4a2fe2b2519e2daa9d7d0f9f7e","ops":[{"fork":0,"op":"sha256","arg":"","result":"e7b919aef5283e190c46d8cc4df2f1ff5343dcdb730638438cb28c16e0b829f0","timestamp":{"result":"e7b919aef5283e190c46d8cc4df2f1ff5343dcdb730638438cb28c16e0b829f0","ops":[{"fork":0,"op":"sha256","arg":"","result":"169be2743153b2bb751136acee44d14200ddc9e49cf6594af8d2d2a2104b6228","timestamp":{"result":"169be2743153b2bb751136acee44d14200ddc9e49cf6594af8d2d2a2104b6228","ops":[{"fork":0,"op":"prepend","arg":"dec55b3487e1e3f722a49b55a7783215862785f4a3acb392846019f71dc64a9d","result":"dec55b3487e1e3f722a49b55a7783215862785f4a3acb392846019f71dc64a9d169be2743153b2bb751136acee44d14200ddc9e49cf6594af8d2d2a2104b6228","timestamp":{"result":"dec55b3487e1e3f722a49b55a7783215862785f4a3acb392846019f71dc64a9d169be2743153b2bb751136acee44d14200ddc9e49cf6594af8d2d2a2104b6228","ops":[{"fork":0,"op":"sha256","arg":"","result":"a08c812aaaa5dc42e24674d988d652d42115d1b30470e34431abbc8c74accd0c","timestamp":{"result":"a08c812aaaa5dc42e24674d988d652d42115d1b30470e34431abbc8c74accd0c","ops":[{"fork":0,"op":"sha256","arg":"","result":"dda599c3662f06e455656173195c805ad31bde2dd7c6e058e3c938d2fa6a6d06","timestamp":{"result":"dda599c3662f06e455656173195c805ad31bde2dd7c6e058e3c938d2fa6a6d06","ops":[{"fork":0,"op":"prepend","arg":"b2ca18f485e080478e025dab3d464b416c0e1ecb6629c9aefce8c8214d042432","result":"b2ca18f485e080478e025dab3d464b416c0e1ecb6629c9aefce8c8214d042432dda599c3662f06e455656173195c805ad31bde2dd7c6e058e3c938d2fa6a6d06","timestamp":{"result":"b2ca18f485e080478e025dab3d464b416c0e1ecb6629c9aefce8c8214d042432dda599c3662f06e455656173195c805ad31bde2dd7c6e058e3c938d2fa6a6d06","ops":[{"fork":0,"op":"sha256","arg":"","result":"4f5fb40ee3f02eafe3b9c4c2cdd0787dcc0f6cbf622dd17e04155fa4da74ff75","timestamp":{"result":"4f5fb40ee3f02eafe3b9c4c2cdd0787dcc0f6cbf622dd17e04155fa4da74ff75","ops":[{"fork":0,"op":"sha256","arg":"","result":"20a48517b9e288c46b48987110b4d62056ec4c5234b1dac7ec2af867b13c850a","timestamp":{"result":"20a48517b9e288c46b48987110b4d62056ec4c5234b1dac7ec2af867b13c850a","ops":[{"fork":0,"op":"append","arg":"11b0e90661196ff4b0813c3eda141bab5e91604837bdf7a0c9df37db0e3a1198","result":"20a48517b9e288c46b48987110b4d62056ec4c5234b1dac7ec2af867b13c850a11b0e90661196ff4b0813c3eda141bab5e91604837bdf7a0c9df37db0e3a1198","timestamp":{"result":"20a48517b9e288c46b48987110b4d62056ec4c5234b1dac7ec2af867b13c850a11b0e90661196ff4b0813c3eda141bab5e91604837bdf7a0c9df37db0e3a1198","ops":[{"fork":0,"op":"sha256","arg":"","result":"829037f5e71c2168fdc9169fd1d361b8dc027ec98ecfecfb7b141b29555d4121","timestamp":{"result":"829037f5e71c2168fdc9169fd1d361b8dc027ec98ecfecfb7b141b29555d4121","ops":[{"fork":0,"op":"sha256","arg":"","result":"16a800adc6c37b8bdd800e9b48e67b0b62912061a785c892fad592116b57cab8","timestamp":{"result":"16a800adc6c37b8bdd800e9b48e67b0b62912061a785c892fad592116b57cab8","ops":[{"fork":0,"op":"append","arg":"c34bc1a4a1093ffd148c016b1e664742914e939efabe4d3d356515914b26d9e2","result":"16a800adc6c37b8bdd800e9b48e67b0b62912061a785c892fad592116b57cab8c34bc1a4a1093ffd148c016b1e664742914e939efabe4d3d356515914b26d9e2","timestamp":{"result":"16a800adc6c37b8bdd800e9b48e67b0b62912061a785c892fad592116b57cab8c34bc1a4a1093ffd148c016b1e664742914e939efabe4d3d356515914b26d9e2","ops":[{"fork":0,"op":"sha256","arg":"","result":"35372e44256cf9c49a51d7f17185ac4d5417c81cdde359c5e91e89d3c0cdb0f9","timestamp":{"result":"35372e44256cf9c49a51d7f17185ac4d5417c81cdde359c5e91e89d3c0cdb0f9","ops":[{"fork":0,"op":"sha256","arg":"","result":"535cc781a96fc168ad1abf2757999e77c71ab3aa24b926d73a1ca9c6ba029614","timestamp":{"result":"535cc781a96fc168ad1abf2757999e77c71ab3aa24b926d73a1ca9c6ba029614","ops":[{"fork":0,"op":"append","arg":"c3e6e7c38c69f6af24c2be34ebac48257ede61ec0a21b9535e4443277be30646","result":"535cc781a96fc168ad1abf2757999e77c71ab3aa24b926d73a1ca9c6ba029614c3e6e7c38c69f6af24c2be34ebac48257ede61ec0a21b9535e4443277be30646","timestamp":{"result":"535cc781a96fc168ad1abf2757999e77c71ab3aa24b926d73a1ca9c6ba029614c3e6e7c38c69f6af24c2be34ebac48257ede61ec0a21b9535e4443277be30646","ops":[{"fork":0,"op":"sha256","arg":"","result":"9d5440dbb399e24d04a39f219f84bfba45e9159d52f5be3d56e93291d03b7ae9","timestamp":{"result":"9d5440dbb399e24d04a39f219f84bfba45e9159d52f5be3d56e93291d03b7ae9","ops":[{"fork":0,"op":"sha256","arg":"","result":"83b0b3b5d451418ddc864bf34afba138fd0541469fa00977756877a6c36fc1dd","timestamp":{"result":"83b0b3b5d451418ddc864bf34afba138fd0541469fa00977756877a6c36fc1dd","ops":[{"fork":0,"op":"prepend","arg":"0798bf8606e00024e5d5d54bf0c960f629dfb9dad69157455b6f2652c0e8de81","result":"0798bf8606e00024e5d5d54bf0c960f629dfb9dad69157455b6f2652c0e8de8183b0b3b5d451418ddc864bf34afba138fd0541469fa00977756877a6c36fc1dd","timestamp":{"result":"0798bf8606e00024e5d5d54bf0c960f629dfb9dad69157455b6f2652c0e8de8183b0b3b5d451418ddc864bf34afba138fd0541469fa00977756877a6c36fc1dd","ops":[{"fork":0,"op":"sha256","arg":"","result":"ae2b925b5e50f03f9b42fbe85368812799e13b19d8812cd7779057395795ac79","timestamp":{"result":"ae2b925b5e50f03f9b42fbe85368812799e13b19d8812cd7779057395795ac79","ops":[{"fork":0,"op":"sha256","arg":"","result":"d4637af05f82eddc4e4254f340e0bebaf6713c70f21d538736483f07292392c6","timestamp":{"result":"d4637af05f82eddc4e4254f340e0bebaf6713c70f21d538736483f07292392c6","ops":[{"fork":0,"op":"append","arg":"3f9ada6d60baa244006bb0aad51448ad2fafb9d4b6487a0999cff26b91f0f536","result":"d4637af05f82eddc4e4254f340e0bebaf6713c70f21d538736483f07292392c63f9ada6d60baa244006bb0aad51448ad2fafb9d4b6487a0999cff26b91f0f536","timestamp":{"result":"d4637af05f82eddc4e4254f340e0bebaf6713c70f21d538736483f07292392c63f9ada6d60baa244006bb0aad51448ad2fafb9d4b6487a0999cff26b91f0f536","ops":[{"fork":0,"op":"sha256","arg":"","result":"af3c11e76808d7aa9753d8478c0d468444db5eb5bc26b7511813bfc5f630e19b","timestamp":{"result":"af3c11e76808d7aa9753d8478c0d468444db5eb5bc26b7511813bfc5f630e19b","ops":[{"fork":0,"op":"sha256","arg":"","result":"efa898490f9cc0dcd698220e9a9c1acc01b54c1c14b23520ace3cd82341f6b45","timestamp":{"result":"efa898490f9cc0dcd698220e9a9c1acc01b54c1c14b23520ace3cd82341f6b45","ops":[{"fork":0,"op":"prepend","arg":"c703019e959a8dd3faef7489bb328ba485574758e7091f01464eb65872c975c8","result":"c703019e959a8dd3faef7489bb328ba485574758e7091f01464eb65872c975c8efa898490f9cc0dcd698220e9a9c1acc01b54c1c14b23520ace3cd82341f6b45","timestamp":{"result":"c703019e959a8dd3faef7489bb328ba485574758e7091f01464eb65872c975c8efa898490f9cc0dcd698220e9a9c1acc01b54c1c14b23520ace3cd82341f6b45","ops":[{"fork":0,"op":"sha256","arg":"","result":"04853c771da47330c3f89d117fe84f8f031ac1485572e71f0b8c54a5e5e20df9","timestamp":{"result":"04853c771da47330c3f89d117fe84f8f031ac1485572e71f0b8c54a5e5e20df9","ops":[{"fork":0,"op":"sha256","arg":"","result":"cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788","timestamp":{"result":"cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788","ops":[{"fork":0,"op":"append","arg":"cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788","result":"cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788","timestamp":{"result":"cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788cbfefff513ff84b915e3fed6f9d799676630f8364ea2a6c7557fad94a5b5d788","ops":[{"fork":0,"op":"sha256","arg":"","result":"8a061c45c453f4af4b9b36b006f90bac2f6fcbe3a9f70f4267c6e623b68b8d4e","timestamp":{"result":"8a061c45c453f4af4b9b36b006f90bac2f6fcbe3a9f70f4267c6e623b68b8d4e","ops":[{"fork":0,"op":"sha256","arg":"","result":"3f10376d0aebb4647ff550b60d69ba5ad6b6809d51af6a6476e0312a9433a3bf","timestamp":{"result":"3f10376d0aebb4647ff550b60d69ba5ad6b6809d51af6a6476e0312a9433a3bf","ops":[{"fork":0,"op":"prepend","arg":"0be23709859913babd4460bbddf8ed213e7c8773a4b1face30f8acfdf093b705","result":"0be23709859913babd4460bbddf8ed213e7c8773a4b1face30f8acfdf093b7053f10376d0aebb4647ff550b60d69ba5ad6b6809d51af6a6476e0312a9433a3bf","timestamp":{"result":"0be23709859913babd4460bbddf8ed213e7c8773a4b1face30f8acfdf093b7053f10376d0aebb4647ff550b60d69ba5ad6b6809d51af6a6476e0312a9433a3bf","ops":[{"fork":0,"op":"sha256","arg":"","result":"faa6e88835c144ad73f48992bc05e691a52a9199df02450194f3a03b530dc2d7","timestamp":{"result":"faa6e88835c144ad73f48992bc05e691a52a9199df02450194f3a03b530dc2d7","ops":[{"fork":0,"op":"sha256","arg":"","result":"007ee445d23ad061af4a36b809501fab1ac4f2d7e7a739817dd0cbb7ec661b8a","timestamp":{"attestations":[{"fork":0,"type":"BitcoinBlockHeaderAttestation","param":358391,"merkle":"8a1b66ecb7cbd07d8139a7e7d7f2c41aab1f5009b8364aaf61d03ad245e47e00"}],"result":"8a1b66ecb7cbd07d8139a7e7d7f2c41aab1f5009b8364aaf61d03ad245e47e00"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]},"tx":"7e9f0f7d9daa2d9e51b2e22f4abe814c3f90539afa778a9bef88dc64627cb2ec"}]}}]}}]}}';

}

var obj = JSON.parse(jsonString);

$("#hash").html(obj.hash);
if(obj.result=="KO"){
    $("#error").html(obj.error);
}

var timestamp = obj.timestamp;
print(timestamp,0);


function print(timestamp){

    if(timestamp.attestations !== undefined ){
        timestamp.attestations.forEach(function(item){
            var tr = document.createElement('tr');
            $("<td>").html(item.fork).appendTo(tr);
            var string = "";
            if(item.type == "BitcoinBlockHeaderAttestation"){
                string = "Merkle root "+item.merkle+" of Bitcoin block "+item.param;
            } else if(item.type == "EthereumBlockHeaderAttestation"){
                string = "Merkle root "+item.merkle+" of Ethereum block "+item.param;
            } else if(item.type == "PendingAttestation"){
                string = "Pending attestation: server "+item.param;
            } else if(item.type == "UnknownAttestation"){
                string = "Unknown attestation: payload "+item.param;
            }
            $("<td>").html(string).appendTo(tr);
            $("<td>").html("attestation").appendTo(tr);
            $("#table").append(tr);
        });
    }


    if(timestamp.tx !== undefined ) {
        var tr = document.createElement('tr');
        $("<td>").html(timestamp.ops[0].fork).appendTo(tr);
        $("<td>").html(timestamp.tx).appendTo(tr);
        $("<td>").html("tx").appendTo(tr);
        $("#table").append(tr);
    }

    if(timestamp.ops === undefined ){
        return;
    }

    if(timestamp.ops.length > 1){
        var tr = document.createElement('tr');
        $("<td>").html(timestamp.ops[0].fork).appendTo(tr);
        $("<td>").html("fork into 2 paths").appendTo(tr);
        $("<td>").html("fork").appendTo(tr);
        $("#table").append(tr);
        fork++;
    }


    if(timestamp.ops.length > 0){
        timestamp.ops.forEach(function(item){
            var tr = document.createElement('tr');
            $("<td>").html(item.fork).appendTo(tr);

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
            print(item.timestamp, item.fork);
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
