var FCM = require('fcm-node');
var serverKey = 'AAAA_3E75FE:APA91bGIKisORKTl_5k_ZWIp2NGFv31awEuSOMq-dVKC_Xh4ux82CnCcnwifZ4LojURhVIzGNfuXOpwRlM4A4Ize8BW-3-l_SDEe-IuoXg4cxQuNP48-x8jlxzbCjD8zF2Snjcdbti3b';
var fcm = new FCM(serverKey);

var message = {
to:'f-JSyV9aT2yEpIQzriDwn0:APA91bHuBzutcYDsu_aX4pF8hDoFSgroI9PSLCHbJwOho8jhOkMy5YCZA5mhuw3npm31XNX7JGpxse5yrBzYDFZuBJLceGE54TLRJHKyNZayGQoIJs7JVq3q-WGch0ymQtjvZS4__rG2',
    notification: {
        title: 'NotifcatioTestAPP',
        body: '{"Message from node js app"}',
    },

    data: { //you can send only notification or only data(or include both)
        title: 'ok cdfsdsdfsd',
        body: '{"name" : "okg ooggle ogrlrl"}'
    }

};

fcm.send(message, function(err, response) {
    if (err) {
        console.log("Something has gone wrong!"+err);
        console.log("Respponse:! "+response);
    } else {
        // showToast("Successfully sent with response");
        console.log("Successfully sent with response: ", response);
    }

});




//     var FCM = require('fcm-node');

// var serverkey = 'AAAA_3E75FE:APA91bGIKisORKTl_5k_ZWIp2NGFv31awEuSOMq-dVKC_Xh4ux82CnCcnwifZ4LojURhVIzGNfuXOpwRlM4A4Ize8BW-3-l_SDEe-IuoXg4cxQuNP48-x8jlxzbCjD8zF2Snjcdbti3b';  
// var fcm = new FCM(serverkey);
// var message = {  
// 			to : req.body.userToken,
// 			collapse_key : 'TEST',
// 			data : {
// 					my_key: 'my value', contents: "abcv/"
// 			},
// 			notification : {
// 					title : 'Title of the notification',
// 					body : 'Body of the notification'
// 			}
// 	};

// fcm.send(message, function(err,response){  
// if(err) {
// 	console.log(message);
//        console.log("Something has gone wrong !");
//  } else {
//      console.log("Successfully sent with resposne :",response);
//    }
// });