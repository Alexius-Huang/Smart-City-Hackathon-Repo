(function (window) {
    window.showDialog = function(title, imgSrc, content) {

        var msgContent = '<div class="img_container">'+ '<img src="' + imgSrc + '"></img></div><div><h1>' + title + '</h1></div><div>' + content  + '</div>'

        var dialogInstance = new BootstrapDialog({
            title: title,
            message: msgContent,
            buttons: [{
                label: '<img style="width: 20px; height:20px;"  src="https://www.seeklogo.net/wp-content/uploads/2013/11/facebook-flat-vector-logo-400x400.png"></img>',
                action: function(dialog) {
                    dialog.setTitle('Title 1');
                }
            }, {
                label: '<span class="glyphicon glyphicon-thumbs-up" style="margin-right:10px;"></span>認同',
                action: function(dialog) {
                    dialog.setTitle('Title 1');
                }
            }, {
                label: '<span class="glyphicon glyphicon-thumbs-down" style="margin-right:10px;"></span>反對',
                action: function(dialog) {
                    dialog.setTitle('Title 2');
                }
            }]
        });

        //dialogInstance.setType(BootstrapDialog.TYPE_WARNING)
        dialogInstance.open()

    }
}(window))