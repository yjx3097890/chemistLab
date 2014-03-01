/**
 * 烧杯
 * @param position
 * @param callback
 * @constructor
 */
Chemist.Beaker = function (position, callback) {
     var beaker = null;
     
    Chemist.objLoader.load("obj/beaker.obj", function (objects) {
        var scale = 0.5;

        beaker = objects.children[0];

        beaker.material.transparent = true;
        beaker.material.opacity = 0.3;
        beaker.material.refractionRatio = 0.85;
        beaker.position.copy(position);
        beaker.scale.set(scale, scale, scale);
        beaker.castShadow = true;

        Chemist.Base.call(beaker, {
            type: Chemist.type.vessel,
            ot: new THREE.Vector3(0.74, 1.52, 0),
            scale: scale,
            detail: Chemist.Equips.beaker
        });

        Chemist.scene.add(beaker);
        Chemist.objects.push(beaker);

        callback && callback(beaker);
    });
};

