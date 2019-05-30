import showResultAni from "./showResultAni";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    btnStart: cc.Button = null;

    @property(showResultAni)
    aniDisk: showResultAni = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btnStart.node.on("click", ()=>{
            let result = Math.round(Math.random()*(6-0));
            this.aniDisk.startRotate(result);
        });
    }

    start () {

    }

    // update (dt) {}
}
