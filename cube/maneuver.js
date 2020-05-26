// tree structure
// leaf: {description, note, maneuvers}
// composite: no `maneuvers` property

var maneuvers = {
    roofpig_conf: "flags=showalg",
    F2L: {
        roofpig_conf: "colored=U-",
        "棱角顶层，等待入位 (基本形一)": {
            note:"很简单, 很多其他转法会先变成这样再入位",
            maneuvers:[
                "U R U' R'",
                "U' F' U F",
                "R U' R' F' U2 F"
            ]
        },
        "棱角顶层，顶面反色相邻 (基本形二)": {
            note:"角棱顶面反色, 棱不和角相连且在与底面比较近的一侧. 很简单, 转底色所在的那一面, 角直接转过去找棱,然后一起入位. 很多其他转法会先变成这样再入位",
            maneuvers:[
                "R U R'",
                "F' U' F",
            ]
        },
        "棱角顶层，顶面同色不连": {
            note:"棱沿顶面转一下就是基本形一. 但是这样角也跟着转. 所以需要先从底色块推动顶层转动(底色块朝右则顺时针,反之逆时针), 再把角藏下面, 再把棱转到角旁边位置,把角转回来. 四步变成基本形一.",
            maneuvers:[
                "U' R U R' U' R U2 R'",
                "U' R U2 R' U' R U2 R'",
                "U F' U' F U F' U2 F",
                "U F' U2 F U F' U2 F",
            ]
        },
        "棱角顶层，顶面同色相连": {
            note:"转底色所在的那一面把棱藏起来, 顶面转一下角, 再把棱还原. 这时角的顶色正好跟棱相反, 三步变成了基本形二. ",
            maneuvers:[
                "R U' R' U2 F' U' F",
                "F' U F U2 R U R'",
            ]
        },
        "棱角顶层，顶面反色": {
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
        "棱角顶层，顶面底色，棱角不连": {
            note: "先藏棱. 把棱转到和侧面颜色一致的位置藏. 然后角块去找棱块, 四步变成基本形一.",
            maneuvers: [
                "U R U2 R' U R U' R'",
                "U2 R U R' U R U' R'",
                "U' F' U2 F U' F' U F",
                "U2 F' U' F U' F' U F",
            ]
        },
        "棱角顶层，顶面底色，棱角相连, 侧面反色": {
            note: "顶层转动藏棱, 然后角转动180度, 把棱回复. 三步变成基本形二. 注意跟同色相连类似.",
            maneuvers: [
                "R U2 R' U' R U R'",
                "F' U2 F U F' U' F",
            ],
        },
        "棱角顶层，顶面底色，棱角相连, 侧面同色": {
            note: "跟‘角块顶层，顶面底色’类似，做类似三组基本动作，只不过第一组基本动作中最后顶面转180度而不是90度。",
            maneuvers: [
                "R U R' U2' R U R' U' R U R'",
                "F' U' F U2 F' U' F U F' U' F",
            ],
        },
        "角块顶层，底色在侧": {
            note: "用两种方法R,F'转动棱块到顶面，总有一种方法做成顶面反色。",
            maneuvers: [
                "U' F' U' F U2 F' U' F",
                "U R U R' U2 R U R'",
                "U2 F' U F U R U R'",
                "U2 R U' R' U' F' U' F",
            ],
        },
        "角块顶层，顶面底色": {
            note: "做三组基本动作：）",
            maneuvers: [
                "R U R' U' R U R' U' R U R' U'",
            ],
        },
        "棱块顶层，角块正确": {
            note: "角块上来，变成顶面反色",
            maneuvers: [
                "U' F' U' F U R U R'",
                "U R U R' U' F' U' F",
            ],
        },
        "棱块顶层，底棱同侧": {
            note: "做一组基本动作, 变成同色不连",
            maneuvers: [
                "R U R' U' R U R'",
                "F' U' F U F' U' F"
            ],
        },
        "棱块顶层，底棱异侧": {
            note: "底色所在面转一下，变成基本形一",
            maneuvers: [
                "F' U' F U2 R U' R'",
                "R U R' U2 F' U F"
            ],
        },
        "角棱都不在顶层": {
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
    },
    "原子操作": {
        roofpig_conf: "flags=startsolved,showalg",
        note: `
        定义原子操作为不能更简单的操作, 任何模式都可以由原子操作组合得到. 
        原子操作存在一些限制, 无法做到诸如'翻转单个棱'的粒度. 具体的限制有三个: 
           1. 所有角的旋转度数之和必须是360的倍数 
           2. 所有边的翻转次数为偶数
           3. 所有边和角的交换为偶数

        基于以上的限制, 有以下几种原子操作
           1. 轮换同一个面上的三个角 (轮换实际上是两次交换的组合: a->b->c->a 等价于 b<->c + a<->b )
           2. 旋转同一个面上的两个角 
           3. 轮换三条棱
           4. 翻转相邻的两条棱
           5. 同时交换两个角和两个棱
        
        以上原子操作足以把魔方变成任何模式. 其中, 操作5是不必须的. 在允许打乱棱块的前提下, 可以通过1和单面旋转完成5.
        对于换棱而言, 所有的换棱方法, 除(轮换中间一层的三个棱)之外, 都可以组合生成另外的换棱方法. 所以原则上只要掌握一种就足够了.
        通用生成公式: (d a e)(e b c)(e a d) => (a b c)
        从而, 如果两个轮换中存在一个共同元素, 则可以经此媒介生成不含此媒介的其他4种轮换
        例如, 如果存在(abc)和(cde), 则可以生成 (ade)(bde)(abd)(abe)
        `,
        "1 轮换同一个面上的三个角": {
            maneuvers: [
                "R' U L U' R U L' U'",
                "R U' L' U R' U' L U",
            ]
        },
        "2 旋转同一面上的两个角": {
            maneuvers: [
                "R' D R F D F' U' F D' F' R' D' R U",
                "F2 D' F2 D R' R' U' R U F2 U F2 U' R",
            ]
        },
        "3 轮换同一个面上的三条棱": {
            maneuvers: [
                "R2 U R U R' U' R' U' R' U R'",
                "R2 U' R' U' R U R U R U' R",
                "R B L U2 L' B' R' F' U2 F",
                "U R' S2 R F R' S2 R F' U'",
                "R' U' R' U' R' U R U R U",
            ]
        },
        "4 翻转相邻的两条棱": {
            note: "从后,左,前,右,上，来上一圈。右边抖动一小下想反抗，被上面给镇压回去。再对称的转回去，右仍想反抗，仍然被上面镇压。",
            maneuvers: ["B L F R U R' U F' L' B' R' U' R U'"]
        },
        "5 同时交换两个角和两个棱": {
            maneuvers: [
                "F D R' U R D' U' R2 U R U' R2 F'",
                "F' D' L U' L' D U L2 U' L' U L2 F",
            ]
        },
        "连续应用轮换同一个面上的三条棱可以轮换所有棱": {
            note: "",
            roofpig_conf: "flags=!showalg",
            maneuvers: [
                "z' R2 U' R' U' R U R U R U' R z "+
                "y2 R2 U' R' U' R U R U R U' R y2 "+
                "z' y2 R2 U' R' U' R U R U R U' R y2 z "+
                "R2 U R U R' U' R' U' R' U R' "+
                "z' y2 R2 U R U R' U' R' U' R' U R' y2 z"
            ]
        },
        "其他变体": {
            roofpig_conf: "flags=startsolved,showalg",
            "围绕一角旋转三棱": {
                note: "U (R' S2 R) F (R' S2 R) F' U'",
                maneuvers: [
                    "U R' S2 R F R' S2 R F' U'",
                    "U' F M2 F' R' F M2 F' R U"
                ]
            },
            "围绕一角旋转三个角": {
                note: "U (R' B2 R) F (R' B2 R) F' U', 注意跟上一个的对称性",
                maneuvers: [
                    "U R' B2 R F R' B2 R F' U'",
                    "U' F L2 F' R' F L2 F' R U"
                ]
            },
            "轮换中间一层的三条棱": {
                maneuvers: [
                    "M F2 M' F2"
                ]
            },
            "翻转同一个面上的相对两个棱": {
                maneuvers: [
                    "M U M U M U2 M' U M' U M' U2"
                ]
            },
            "旋转同一个面上的对角": {
                maneuvers: [
                    "R F' D2 F R' U2 R F' D2 F R' U2"
                ]
            },
            "旋转最远的对角": {
                maneuvers: [
                    "F' R2 F U' L2 U F' R2 F U' L2 U",
                    "F L2 F' U R2 U' F L2 F' U R2 U'"
                ]
            },
            "翻转中间一层的对棱" : {
                note: "注意M2后面的5个的旋转方向, 都是顺着上一个的旋转方向",
                maneuvers: [
                    "M2 U F' L U' F M2 F' U L' F U'"
                ]
            }
        }
    }
};
