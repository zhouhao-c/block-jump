
cc.Class({
    extends: cc.Component,

    properties: {
        loading:cc.Node,
        start_button:cc.Node,
    },


    onLoad () {
        
        this.loading = this.loading.getComponent('loading')
        this.loading.setProgress(1)
        this.loading.finishCallBack = function(){
            this.start_button.active = true
        }.bind(this)
        
        // let finish = cc.callFunc(() => {
        //     cc.director.loadScene("Menu")
        // })
        this.AudioPlayer = cc.find("Audio").getComponent("AudioManager")
        cc.log(this.AudioPlayer)
    },

    onClickType:function(target,data){
        if(data == 'start'){
            cc.director.loadScene("Menu")
        }else if(data == 'button'){
            this.AudioPlayer.playButton()
        }
    },

    start () {

    },

    // update (dt) {},
});
