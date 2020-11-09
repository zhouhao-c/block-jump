
cc.Class({
    extends: cc.Component,

    properties: {
        toggle_a: cc.Toggle,
		toggle_b: cc.Toggle,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.toggle_a.node.on('toggle', this.ToggleEvent_a, this)//四个监听参数（监听类型，监听回调方法，执行监听回调方法的目标，触发阶段（一般来说不需要设置））
		this.toggle_b.node.on('toggle', this.ToggleEvent_b, this)
		//获取全局播放器
		this.AudioPlayer = cc.find("Audio").getComponent("AudioManager")
    },

    ToggleEvent_a: function(event) {
		var toggle = event
		if (toggle.isChecked) {
			this.AudioPlayer.playBgMusic()
		}else{
			this.AudioPlayer.stopBgMusic()
		}
	},
	
	ToggleEvent_b: function(event) {
		var toggle = event
		if (toggle.isChecked) {
			this.AudioPlayer.flag = true
		}else{
			this.AudioPlayer.flag = false
		}
    },

    onClickType:function(target,data){
        if(data == 'return'){
            cc.director.loadScene("Menu");
        }
    },
    
    start () {

    },

    // update (dt) {},
});
