// tree structure
// leaf: {description, note, maneuvers}
// composite: no `maneuvers` property

var maneuvers = {
    roofpig_conf: "flags=showalg",
    F2L: {
        roofpig_conf: "colored=U-",
        base1: {
            description: "基本形一: 等待入位. 角棱已经对好,只等入位",
            note:"很简单, 很多其他转法会先变成这样再入位",
            maneuvers:[
                "U R U' R'",
                "U' F' U F",
                "R U' R' F' U2 F"
            ]
        },
        base2: {
            description: "基本形二: 反色相邻. 角棱顶面反色, 棱不和角相连且在与底面比较近的一侧",
            note:"很简单, 转底色所在的那一面, 角直接转过去找棱,然后一起入位. 很多其他转法会先变成这样再入位",
            maneuvers:[
                "R U R'",
                "F' U' F",
            ]
        },
        USNA: {
            description: "棱角顶层，顶面同色不连",
            note:"棱沿顶面转一下就是基本形一. 但是这样角也跟着转. 所以需要先从底色块推动顶层转动(底色块朝右则顺时针,反之逆时针), 再把角藏下面, 再把棱转到角旁边位置,把角转回来. 四步变成基本形一.",
            maneuvers:[
                "U' R U R' U' R U2 R'",
                "U' R U2 R' U' R U2 R'",
                "U F' U' F U F' U2 F",
                "U F' U2 F U F' U2 F",
            ]
        },
        UARE: {
            description: "棱角顶层，顶面同色相连",
            note:"转底色所在的那一面把棱藏起来, 顶面转一下角, 再把棱还原. 这时角的顶色正好跟棱相反, 三步变成了基本形二. ",
            maneuvers:[
                "R U' R' U2 F' U' F",
                "F' U F U2 R U R'",
            ]
        },
        UNS: {
            description: "棱角顶层，顶面反色",
            note:"顶层转动把角藏起来, 注意方向不能把棱也同时藏起来. 调整棱的位置, 这个位置在藏角之前要看好, 在和角相对且离底色较近的一侧. 再把角转回. 四步变成基本形二. ",
            maneuvers:[
                "U' R U2 R' U F' U' F",
                "U F' U' F U' F' U' F",
                "U F' U F U' F' U' F",
                "U F' U2 F U' R U R'",
                "U' R U R' U R U R'",
                "U' R U' R' U R U R'",
            ]
        },
        UDNA: {
            description: "棱角顶层，顶面底色，棱角不连",
            note: "先藏棱. 把棱转到和侧面颜色一致的位置藏. 然后角块去找棱块, 四步变成基本形一.",
            maneuvers: [
                "U R U2 R' U R U' R'",
                "U2 R U R' U R U' R'",
                "U' F' U2 F U' F' U F",
                "U2 F' U' F U' F' U F",
            ]
        },
        UDARE: {
            description: "棱角顶层，顶面底色，侧面反色",
            note: "顶层转动藏棱, 然后角转动180度, 把棱回复. 三步变成基本形二. 注意跟同色相连类似.",
            maneuvers: [
                "R U2 R' U' R U R'",
                "F' U2 F U F' U' F",
            ],
        },
        UDAWE: {
            description: "棱角顶层，顶面底色，侧面同色",
            note: "跟‘角块顶层，顶面底色’类似，做类似三组基本动作，只不过第一组基本动作中最后顶面转180度而不是90度。",
            maneuvers: [
                "R U R' U2' R U R' U' R U R'",
                "F' U' F U2 F' U' F U F' U' F",
            ],
        },
        CUER: {
            description: "角块顶层，底色在侧",
            note: "用两种方法R,F'转动棱块到顶面，总有一种方法做成顶面反色。",
            maneuvers: [
                "U' F' U' F U2 F' U' F",
                "U R U R' U2 R U R'",
                "U2 F' U F U R U R'",
                "U2 R U' R' U' F' U' F",
            ],
        },
        BUER: {
            description: "角块顶层，顶面底色",
            note: "做三组基本动作：）",
            maneuvers: [
                "R U R' U' R U R' U' R U R' U'",
            ],
        },
        EUCR: {
            description: "棱块顶层，角块正确",
            note: "角块上来，变成顶面反色",
            maneuvers: [
                "U' F' U' F U R U R'",
                "U R U R' U' F' U' F",
            ],
        },
        EU: {
            description: "棱块顶层，底棱同侧",
            note: "做一组基本动作, 变成同色不连",
            maneuvers: [
                "R U R' U' R U R'",
                "F' U' F U F' U' F"
            ],
        },
        EUBN: {
            description: "棱块顶层，底棱异侧",
            note: "底色所在面转一下，变成基本形一",
            maneuvers: [
                "F' U' F U2 R U' R'",
                "R U R' U2 F' U F"
            ],
        },
        EF: {
            description: "角棱都不在顶层",
            note: "做一组RU'R', 变成角棱在顶层且不相连，必能在8步以内解决",
            maneuvers: [
                "R U' R' U' R U R' U' R U2 R'",
                "R U' R' U R U2 R' U R U' R'",
                "R U' R' U F' U2 F U F' U2 F",
                "R U' R' U' R U' R' U F' U' F",
                "R U' R' U2 F' U' F U' F' U F",
            ],
        },
    },
    ATOM: {
        FlipAdjacentEdge: {
            description: "翻相临两个棱(上后和上右)",
            note: "从后,左,前,右,上，来上一圈。右边抖动一小下想反抗，被上面给镇压回去。再对称的转回去，右仍想反抗，仍然被上面镇压。",
            maneuvers: ["B L F R U R' U F' L' B' R' U' R U'"]
        }
    },
    PLL: {
        Y: {
            description: "PLL Y",
            note: "开始两个R2U'非常好记顺手, R2U很难做,所以不会记错. 一个d之后, 接一对对称的RUR' RU'R'.中间插一个B2.",
            maneuvers: ["R2 U' R2 U' R2 Dw R U R' B2 R U' R'"]
        },
        E: {
            note: "初始化：R2 U R' U' y 中间：三组基本动作。其中收尾时有一个U' y' U就简化为y'了",
            maneuvers: [
                "R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2'"
                ]
        },
        J: {
            note: "基本动作变形 R U2 R' U'做两组，最后两步之前插入一个L' U，之后再来一个L",
            maneuvers: [
                "R U2 R' U' R U2 L' U R' U' L",
                "L' U2' L U L' U2' R U' L U R'"
                ]
        },
    }
};
