

Chemist.Bottle = function (position, callback) {
     var beaker = null;
     
    Chemist.objLoader.load("obj/beaker.obj", function (objects) {       
        beaker = objects.children[0];

        beaker.material.transparent = true;
        beaker.material.opacity = 0.3;
        beaker.material.refractionRatio = 0.85;
        beaker.position.copy(position);
        beaker.scale.set(0.5, 0.5, 0.5);
        beaker.castShadow = true;

        Chemist.Base.call(beaker, {
            type: Chemist.type.container,
            scale: 0.5,
            ot: new THREE.Vector3(0.74, 1.52, 0)
        });

        Chemist.scene.add(beaker);
        Chemist.objects.push(beaker);

        callback && callback(beaker);
    });
};

