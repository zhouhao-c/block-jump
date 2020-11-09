cc.Class({
    extends: cc.Component,

    properties: {
        suspendBg:cc.Node,
    },
    onLoad: function () {
        // 切换至菜单场景
        // this.node.on(cc.Node.EventType.TOUCH_END,function(){
        //     // cc.director.loadScene("Menu");
        //     var suspend = cc.instantiate(this.suspendPrefab);
        //     this.node.addChild(suspend);
        //     suspend.setPosition(cc.v2(0,600));
        // });
        this.AudioPlayer = cc.find("Audio").getComponent("AudioManager")
    },

    onClickType:function(target,data){
        if(data == 'suspend'){
            this.suspendBg.active = true;
            cc.director.pause();
            this.AudioPlayer.stopBgMusic();
        }else if(data == 'close' || data == 'continue'){
            this.suspendBg.active = false;
            cc.director.resume();
            this.AudioPlayer.playBgMusic()
        }else if(data == 'return'){
            cc.director.resume();
            cc.director.loadScene("Menu");
            this.AudioPlayer.playBgMusic()
        }
    },
    
});
