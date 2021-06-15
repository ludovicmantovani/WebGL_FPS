Game = function(canvasId) {

    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);
    var _this = this;
    
    this.scene = this._initScene(engine);
    
    var _player = new Player(_this, canvas);
    var _arena = new Arena(_this);

    engine.runRenderLoop(function () {
        _this.fps = Math.round(1000/engine.getDeltaTime());
        _player._checkMove((_this.fps)/60);
        _this.scene.render();
    });

    window.addEventListener("resize", function () {
        if (engine) {
            engine.resize();
        }
    },false);

};


Game.prototype = {
    _initScene : function(engine) {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor=new BABYLON.Color3(0,0,0);
        return scene;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    new Game('renderCanvas');
}, false);

function degToRad(deg)
{
   return (Math.PI*deg)/180
}

function radToDeg(rad)
{
   // return (Math.PI*deg)/180
   return (rad*180)/Math.PI
}