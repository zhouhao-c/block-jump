cc.Class({
    extends: cc.Component,

    properties: {
		m_ProMaxLen:{
			default:275,
			type:cc.Integer
		},
		m_ProImage:cc.Node,
		m_Speed:{
			default:160,
			type:cc.Integer
		},
    },
	
	ctor:function(){
		this.m_ProgressIng = false
	},
	
	//规定整体长度最长百分比
	setProgress:function(pro){
		if(pro > 1 || pro < 0){
			return
		}
		var width = this.m_ProMaxLen * pro
		if(width < this.m_SetWidth){
			return
		}
		this.m_SetWidth = this.m_ProMaxLen * pro
		this.m_ProgressIng = true
	},
	
    onLoad () {
		this.m_ProImage.width = 0
	},

    start () {

    },

    update (dt) {
		if(this.m_ProgressIng){
			if(this.m_ProImage.width < this.m_SetWidth){
				this.m_ProImage.width += dt*this.m_Speed
			}
			if(this.m_ProImage.width >= this.m_ProMaxLen){
				this.m_ProgressIng = false
				if(this.finishCallBack != null){
					this.finishCallBack()
				}
			}
		}
	},
});
