
cc.Class({
    extends: cc.Component,

    properties: {
        audio_button:{
        	type:cc.AudioClip,
        	default:null
        },
        bgm:{
        	type:cc.AudioClip,
        	default:null
        },
        audio_star: {
            default: null,
            type: cc.AudioClip
        },
        flag:true,
    },

    stopBgMusic:function () {        
        if (this.bgmChannel !== undefined) {
            cc.audioEngine.stop(this.bgmChannel);     
        }
    },

	playBgMusic:function(){
        this.bgmChannel = cc.audioEngine.play(this.bgm,true,0.5)
    },

    playButton:function(){
        if(this.flag){
            cc.audioEngine.play(this.audio_button,false,1)
        }
        
    },

    playstarAudio:function(){
        if(this.flag){
            cc.audioEngine.play(this.audio_star,false,1)
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.node)//常驻节点
		this.playBgMusic();
    },

    start () {

    },

    // update (dt) {},
});
