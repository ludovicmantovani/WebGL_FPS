Arena = function(game) {
    this.game = game;
    var scene = game.scene;

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

};