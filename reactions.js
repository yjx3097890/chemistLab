Chemist.Reactions = {
    //NaOH+HCL
    "hydrochloricAcid+sodiumHydroxide" : {
        phenomenon : function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x5E89CB );
            
            if (this.delta === 100) {
                result.push("sodiumChloride");
                result.target = vessel;
                callback && callback(result);
            }
            
        },
        info : function () {
            Chemist.utils.info("<div>NaOH + HCl = NaCl + H<sub>2</sub>O</div>");
        },
        delta : 0 //反应程度0-100
    },
    //NaOH + HCl + 酚酞
    "hydrochloricAcid+pphenolphthalein+sodiumHydroxide" : {
        phenomenon : function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x5E89CB );
            
            if (this.delta === 100) {
                result.push("sodiumChloride");
                result.target = vessel;
                callback && callback(result);
            }
        },
        info : function () {
            Chemist.utils.info("<div>NaOH + HCl = NaCl + H<sub>2</sub>O</div>");
        },
        delta : 0
    },
    //NaOH+酚酞
    "phenolphthalein+sodiumHydroxide" : {
        phenomenon : function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex(0xF621AD);
            
            if (this.delta === 100) {
                //反应后的结果
                result.push("sodiumHydroxide");
                result.push("pphenolphthalein");  //pphenolphthalein表示不存在的酚酞
                result.target = vessel;
                callback && callback(result);
            }
        },
        info : function () {
            Chemist.utils.info("<div>NaOH 遇酚酞变成红色。</div>");
        },
        delta : 0
    },
    //NaOH+H2SO4
    "sodiumHydroxide+sulfuricAcid": {
        phenomenon: function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x5E89CB );

            if (this.delta === 100) {
                result.push("sodiumSulfate");
                result.target = vessel;
                callback && callback(result);
            }
        },
        info: function () {
            Chemist.utils.info("<div>2NaOH + H<sub>2</sub>SO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O</div>");
        },
        delta: 0
    },
    //NaOH + H2SO4 + 酚酞
    "pphenolphthalein+sodiumHydroxide+sulfuricAcid" : {
        phenomenon : function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x5E89CB );

            if (this.delta === 100) {
                result.push("sodiumSulfate");
                result.push("pphenolphthalein");  //pphenolphthalein表示不存在的酚酞
                result.target = vessel;
                callback && callback(result);
            }
        },
        info : function () {
            Chemist.utils.info("<div>2NaOH + H<sub>2</sub>SO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O</div>");
        },
        delta : 0
    },
    //NaOH+CuSO4
    "copperSulfate+sodiumHydroxide": {
        phenomenon: function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x217BF3 );

            if(this.delta === 40) {
                vessel.sediment = Chemist.addSediment(vessel, 0x0159FC);
            }
            if(this.delta === 100) {
                result.push("sodiumSulfate");
                result.push("copperHydroxide");
                result.target = vessel;
                callback && callback(result);
            }
        },
        info: function () {
            Chemist.utils.info("<div>2NaOH + CuSO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + Cu(OH)<sub>2</sub></div>");
        },
        delta: 0
    },
    //Zn+HCl
    "hydrochloricAcid+zinc" : {
        phenomenon: function (vessel, callback) {
            var liquid = vessel.liquid, result = [];
            liquid.material.color.setHex( 0x5E89CB );

            if(this.delta === 40) {
                vessel.gas = {};
                vessel.gas.detail = Chemist.clone(Chemist.Chemicals.gases["hydrogen"]);
                vessel.gas.bubbles = Chemist.addBubbles(vessel);
            }
            if(this.delta === 100) {
                result.push(" zincChloride");
                result.target = vessel;
                callback && callback(result);
            }
        },
        info: function () {
            Chemist.utils.info("<div>Zn + 2HCl = ZnCl<sub>2</sub> + H<sub>2</sub></div>");
        },
        delta: 0
    }
};