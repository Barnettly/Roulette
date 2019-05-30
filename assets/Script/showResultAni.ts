const {ccclass, property} = cc._decorator;

@ccclass
export default class showResultAni extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    private _started:boolean = false;
    private _speed:number = 1000;
    private working_time:number = 0;
    private total_time:number = 0;
    private a_v: number = 0;
    // onLoad () {}

    start () {

    }

    startRotate (result:number){
        this._started = true;
        
        var degree_set = [133.5, 31.5, -71.5, -175, 83, -20, -123];
        var degree = this.node.rotation;
	    degree = degree - (Math.floor(degree / 360)) * 360;
	    
	    this._speed = 1000;
	    var s = (6) * 360 + degree_set[result - 1] - degree;
	    s += (-15 + Math.random() * 30);
	    
	   
	    this.working_time = 0;
	    this.total_time = (s * 2) / this._speed;
	    this.a_v = -this._speed / this.total_time;
    }

    update (dt) {
        if (this._started === false || this.working_time >= this.total_time) {
            return;
        }
        
        this.working_time += dt;
        if (this.working_time >= this.total_time) {
            dt -= (this.working_time - this.total_time);
            this._started = false; 
        }
        
        
        var s = this._speed * dt + this.a_v * dt * dt * 0.5;
        this.node.rotation += s;
        this._speed += this.a_v * dt;
    }
}
