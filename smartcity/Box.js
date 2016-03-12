(function (window) {
    window.showDialog = function(title, subTitle, imgSrc, content) {

        var msg = [ '環境議題', '跟上COP21進度 環署明年1月起提五年減碳計畫', '本報2015年12月10日台北訊，陳文姿報導', '由環保署長魏國彥所帶領的政府部會代表團，於上週前往巴黎參加聯合國氣候綱要公约第21屆會員大會（COP21）。大會將於11日閉幕，魏國彥與政府代表特地隔海召開視訊記者會，說明巴黎氣候大會的最新進展。目前情勢看來，眾所注目的巴黎協議可望順利產生，也將牽動國內減碳與能源發展。','https://c2.staticflickr.com/6/5659/23023227844_f0e6391f61_z.jpg' ];


        $(document).on('click', '.statistic', function() {
             var dialogInstanceC = new BootstrapDialog({
                title: '統計資訊',
                message: '<div class="static_contaier" style="max-height: 60%;"><svg></svg></div>',
                onshown: function(dialogRef){
                    drawPieChart('.static_contaier svg');
                }
            });
            dialogInstanceC.open();
        });



        $(document).on('click', '.money', function() {

            var moneyDialogContent = '<div><h1>這件事應該被更多人關注！</h1></div>' + 
                                    '<div><img src="icon/laba02.png" style="display:block; margin:auto;  max-width: 90%;" / ></div>' +
                                    '<div><h1>奉獻我的影響力以提升關注熱度</h1></div>' + 
                                    '<form class="form-inline">  <div class="form-group">    <label class="" for="exampleInputName2" style="font-size: large; margin-right: 160px;">我剩餘的影響力: 27</label>   <span> <input type="text" class="form-control pull-right" id="exampleInputName2" placeholder=""> </div> <button class="btn btn-primary glyphicon glyphicon-arrow-right"></button> </span></form>';

             var dialogInstanceC = new BootstrapDialog({
                title: '募資平台',
                message: moneyDialogContent,
                onshown: function(dialogRef){
                    drawPieChart('.static_contaier svg');
                }
            });
            dialogInstanceC.open();
        });


        var msgContent = '<div class="">' +
                            '<div class="img_container"><img src="' + msg[4] + '"></img></div>' + 
                            '<div><h3>' +  msg[1] + '</h3></div>' + 
                            '<div><h5>' + msg[2] + '</h5></div>'+ 
                            '<div>' + 
                                '<div class="pull-left">' + 
                                '<span class="glyphicon glyphicon-user" style="margin-right:3px;"></span> <span style="margin-right:10px; ">JJ</span>' +
                                '<span class="glyphicon glyphicon-flag" style="margin-right:3px;"></span> <span style="margin-right:10px; ">八卦王</span>' +
                                '<span class="glyphicon glyphicon-tower" style="margin-right:3px;"></span> <span style="margin-right:10px; ">王八卦</span>' +
                                '</div>' + 
                                '<div class="pull-right">' + 
                                '<span class="glyphicon glyphicon-thumbs-up" style="margin-right:3px;"></span><span style="margin-right:10px; ">100</span>' + 
                                '<span class="glyphicon glyphicon-thumbs-down" style="margin-right:3px;"></span><span style="margin-right:10px; ">20</span>' + 
                                '<span class="glyphicon glyphicon-signal" style="margin-right:3px;"></span><span style="margin-right:10px;"><a class="statistic" style="cursor: pointer;">統計資訊</a></span>' + 
                                '<img width="20px" src="icon/laba01.png" /><a class="money" style="cursor: pointer;">募資平台</a></span>' + 
                                '</div>' + 
                            '</div>' +
                            '<div class="pull-left" style="margin-top: 10px;">' + msg[3]  + '</div>' +
                        '</div>'

        var dialogInstance = new BootstrapDialog({
            title: msg[1],
            message: msgContent,
            buttons: [{
                label: '<img style="width: 20px; height:20px;"  src="https://www.seeklogo.net/wp-content/uploads/2013/11/facebook-flat-vector-logo-400x400.png"></img>',
                action: function(dialog) {
                    dialogInstance.close()
                }
            }, {
                label: '<span class="glyphicon glyphicon-thumbs-up" style="margin-right:10px;"></span>認同',
                action: function(dialog) {
                    dialogInstance.close()
                }
            }, {
                label: '<span class="glyphicon glyphicon-thumbs-down" style="margin-right:10px;"></span>反對',
                action: function(dialog) {
                    dialogInstance.close()
                }
            }, {
                label: '<span class="glyphicon glyphicon-signal" style="margin-right:3px;"></span><span style="margin-right:10px;"><a class="statistic" style="cursor: pointer;">統計資訊</a></span>',
                action: function(dialog) {
                    
                }
            }, {
                label: '<img width="20px" src="icon/laba01.png" /><a class="money" style="cursor: pointer;">募資平台</a></span>',
                action: function(dialog) {
                }
            }]
        });

        dialogInstance.open()

    }
}(window))