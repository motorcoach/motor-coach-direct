import american_dream_42B from '../img/american_coach/american dream 42B.png'
import american_dream_42Q from '../img/american_coach/american dream 42Q.png'
import american_dream_42S from '../img/american_coach/american dream 42S.png'
import american_dream_45A from '../img/american_coach/american dream 45A.png'
import american_dream_2018_42G from '../img/american_coach/american_dream_2018_42G.png'
import american_dream_2018_45A from '../img/american_coach/american_dream_2018_45A.png'
import american_dream_2018_45T from '../img/american_coach/american_dream_2018_45T.png'
import american_dream_se_2018_40J from '../img/american_coach/2018 american dream se 40J.png'
import american_dream_se_2018_40L from '../img/american_coach/2018 american dream se 40L.png'
import american_dream_se_2018_44M from '../img/american_coach/2018 american dream se 44M.png'
import american_eagle_45A from '../img/american_coach/american eagle 45A.png'
import american_eagle_45C from '../img/american_coach/american eagle 45C.png'
import american_eagle_45T from '../img/american_coach/american eagle 45T.png'
import american_eagle_2018_45A from '../img/american_coach/2018 american eagle 45A.png'
import american_eagle_2018_45N from '../img/american_coach/2018 american eagle 45N.png'
import american_eagle_2018_45C from '../img/american_coach/2018 american eagle 45C.png'
import american_eagle_2018_45T from '../img/american_coach/2018 american eagle 45T.png'
import american_revolution_2018_39B from '../img/american_coach/2018 american revolution 39B.png'
import american_revolution_2018_42D from '../img/american_coach/2018 american revolution 42D.png'
import american_revolution_2018_42S from '../img/american_coach/2018 american revolution 42S.png'
import american_revolution_2018_42P from '../img/american_coach/2018 american revolution 42P.png'
import american_revolution_2018_42G from '../img/american_coach/2018 american revolution 42G.png'
import american_revolution_2018_42Q from '../img/american_coach/2018 american revolution 42Q.png'
import american_revolution_2018_42QB from '../img/american_coach/2018 american revolution 42QB.png'
import american_revolution_se_2018_38K from '../img/american_coach/2018 american revolution se 38K.png'
import american_revolution_se_2018_39F from '../img/american_coach/2018 american revolution se 39F.png'
import american_revolution_se_2018_40D from '../img/american_coach/2018 american revolution se 40D.png'
import american_revolution_se_2018_40G from '../img/american_coach/2018 american revolution se 40G.png'
import american_revolution_se_2018_44H from '../img/american_coach/2018 american revolution se 44H.png'
import dx3_34KD from '../img/dynamax/DX3-34KD.png'
import dx3_37BH from '../img/dynamax/DX3-37BH.png'
import dx3_37RB from '../img/dynamax/DX3-37RB.png'
import dx3_37TS from '../img/dynamax/DX3-37TS.png'
import dx3_35DS from '../img/dynamax/DX3-35DS.png'
import dx3_36FK from '../img/dynamax/DX3-36FK.png'
import force_34KD from '../img/dynamax/Force-34KD.png'
import force_37BH from '../img/dynamax/Force-37BH.png'
import force_37TS from '../img/dynamax/Force-37TS.png'
import dynaQuest_XL_3400KD from '../img/dynamax/2019 DynaQuest XL 3400KD.png'
import dynaQuest_XL_37RB from '../img/dynamax/2019 DynaQuest XL 37RB.png'
import dynaQuest_XL_37BH from '../img/dynamax/2019 DynaQuest XL 37BH.png'
import dynaQuest_XL_3800TS from '../img/dynamax/2019 DynaQuest XL 3800TS.png'
import dynaQuest_XL_3801TS from '../img/dynamax/2019 DynaQuest XL 3801TS.png'
import entegra_anthem_42DEQ from '../img/entegra/2018_Entegra_Anthem_42DEQ.png'

const FloorplansMap = {
    'American Coach': {
        '2019': {
            'American Dream': [
                {'42B':american_dream_42B},
                {'42Q':american_dream_42Q},
                {'42S':american_dream_42S},
                {'45A':american_dream_45A},
            ],
            'American Eagle': [
                {'45A':american_eagle_45A},
                {'45C':american_eagle_45C},
                {'45T':american_eagle_45T}
            ],
            'American Eagle Heritage Edition': [
                {'45A':american_eagle_45A},
                {'45C':american_eagle_45C}
            ],            
        },
        '2018': {
            'American Dream': [
                {'42G':american_dream_2018_42G},
                {'45A':american_dream_2018_45A},
                {'45T':american_dream_2018_45T}
            ],
            'American Dream SE': [
                {'40J':american_dream_se_2018_40J},
                {'40L':american_dream_se_2018_40L},
                {'44M':american_dream_se_2018_44M}
            ],
            'American Eagle': [
                {'45A':american_eagle_2018_45A},
                {'45N':american_eagle_2018_45N},
                {'45C':american_eagle_2018_45C},
                {'45T':american_eagle_2018_45T}
            ],
            'American Revolution': [
                {'39B':american_revolution_2018_39B},
                {'42D':american_revolution_2018_42D},
                {'42S':american_revolution_2018_42S},
                {'42P':american_revolution_2018_42P},
                {'42G':american_revolution_2018_42G},
                {'42Q':american_revolution_2018_42Q},
                {'42QB':american_revolution_2018_42QB}
            ],
            'American Revolution SE': [
                {'38K':american_revolution_se_2018_38K},
                {'39F':american_revolution_se_2018_39F},
                {'40D':american_revolution_se_2018_40D},
                {'40G':american_revolution_se_2018_40G},
                {'44H':american_revolution_se_2018_44H}
            ]
        }
    },
    'Dynamax': {
        '2019': {
            'DX3': [
                {'34KD':dx3_34KD},
                {'37BH':dx3_37BH},
                {'37RB':dx3_37RB},
                {'37TS':dx3_37TS},
                {'35DS':dx3_35DS},
                {'36FK':dx3_36FK}
            ],
            'Force HD': [
                {'34KD':force_34KD},
                {'37BH':force_37BH},
                {'37TS':force_37TS}
            ],
            'DynaQuest XL': [
                {'3400KD':dynaQuest_XL_3400KD},
                {'37RB':dynaQuest_XL_37RB},
                {'37BH':dynaQuest_XL_37BH},
                {'3800TS':dynaQuest_XL_3800TS},
                {'3801TS':dynaQuest_XL_3801TS}
            ]
        }
    },
    'Entegra': {
        '2020': {
            'Reatta': [
                {'37MB':{}},
                {'39BH':{}}, 
                {'39T2':{}}
            ],
            'Aspire': [
                {'38M':{}},
                {'40P':{}}, 
                {'42DEQ':{}}, 
                {'44B':{}}, 
                {'44F':{}},
                {'44R':{}}, 
                {'44W':{}}
            ],
            'Anthem': [
                {'42DEQ':{}},
                {'44A': {}}, 
                {'44B': {}}, 
                {'44F': {}}, 
                {'44W': {}}
            ], 
            'Cornerstone': [
                {'45A': {}},
                {'45B': {}},
                {'45F': {}},
                {'45W': {}}, 
                {'45X': {}}, 
                {'45Y': {}}
            ]
        },
        '2019': {
            'Anthem': [
                {'42DEQ': {}},
                {'44A': {}}, 
                {'44B': {}}, 
                {'44F': {}}
            ],
            'Aspire': [
                {'38M': {}}, 
                {'40M': {}},
                {'42DEQ': {}},
                {'44B': {}}, 
                {'44R': {}}, 
                {'44W': {}}
            ], 
            'Cornerstone': [
                {'45A': {}},
                {'45B': {}}, 
                {'45F': {}}, 
                {'45W': {}}, 
                {'45X': {}}, 
                {'45Y': {}}
            ], 
            'Insignia': [
                {'37MB': {}},
                {'44B': {}}, 
                {'44R': {}}, 
                {'44W': {}}
            ]
        },
        '2018': {
            'Anthem': [
                {'42DEQ': {}},
                {'42RBQ': {}},
                {'44A': {}},
                {'44B': {}},
                {'44F': {}},
                {'44W': {}}
            ],
            'Aspire': [
                {'38M': {}},
                {'40P': {}},
                {'42DEQ': {}}, 
                {'42RBQ': {}},
                {'44Q': {}}, 
                {'44R': {}}, 
                {'44U': {}}, 
                {'44W': {}}
            ],
            'Cornerstone': [
                {'45A': {}},
                {'45B': {}},
                {'45F': {}},
                {'45W': {}}, 
                {'45X': {}},
                {'45Y': {}}
            ],
            'Insignia': [
                {'44B': {}},
                {'44W': {}}
            ]
        }
    },
    'Fleetwood': {
        '2019': {
            'Pace Arrow': [
                {'33D': {}},
                {'35E': {}},
                {'35QS': {}},
                {'36U': {}}
            ],
            'Pace Arrow LXE': [
                {'37R': {}},
                {'38F': {}},
                {'38K': {}}, 
                {'38N': {}}
            ],
            'Discovery': [
                {'38F': {}},
                {'38K': {}},
                {'38N': {}},
                {'38W': {}}
            ],
            'Discovery LXE': [
                {'40D': {}},
                {'40G': {}}, 
                {'40M': {}},
                {'44B': {}},
                {'44H': {}}
            ]     
        },
        '2018': {
            'Pace Arrow': [
                {'33D': {}},
                {'35M': {}},
                {'35E': {}},
                {'36U': {}}
            ],
            'Pace Arrow LXE': [
                {'38F': {}},
                {'38K': {}},
                {'38N': {}},
                {'37R': {}}
            ],
            'Discovery': [
                {'38K': {}}, 
                {'38N': {}},
                {'38F': {}}
            ],
            'Discovery LXE': [
                {'38K': {}},
                {'39F': {}},
                {'40X': {}},
                {'40G': {}},
                {'40E': {}},
                {'40D': {}},
                {'44H': {}}, 
                {'44B': {}}
            ]  
        }
    },
    'Monaco': {
        '2019': {
            'Monaco Signature': [
                {'40J': {}},
                {'40L': {}},
                {'44M': {}}, 
                {'44B': {}}
            ],
            'Monaco Marquis': [
                {'40J': {}},
                {'40L': {}},
                {'44B': {}},
                {'44M': {}}
            ]
        },
        '2018': {
            'Monaco Signature': [
                {'Ne': {}},
                {'40J': {}},
                {'44M': {}}
            ],
            'Monaco Signature': [
                {'Ne': {}},
                {'40J': {}},
                {'44M': {}}
            ],
        }
    },
    'Newmar': {
        '2019': {  
            'Dutch Star': [
                {'3717': {}}, 
                {'3736': {}},
                {'4002': {}},
                {'4018': {}}, 
                {'4054': {}},
                {'4310': {}}, 
                {'4311': {}},
                {'4326': {}},
                {'4328': {}},
                {'4362': {}},
                {'4363': {}}, 
                {'4369': {}}
            ],
            'Essex': [
                {'4533': {}},
                {'4534': {}},
                {'4543': {}},
                {'4550': {}},
                {'4551': {}},
                {'4576': {}},
                {'4579': {}},
                {'4598': {}}
            ],
            'King Aire': [
                {'4531': {}},
                {'4533': {}},
                {'4534': {}},
                {'4546': {}},
                {'4549': {}},
                {'4550': {}},
                {'4553': {}},
                {'4598': {}}
            ],
            'London Aire': [
                {'4533': {}},
                {'4534': {}},
                {'4535': {}},
                {'4543': {}},
                {'4550': {}},
                {'4551': {}},
                {'4576': {}},
                {'4579': {}}
            ],
            'Mountain Aire': [
                {'4018': {}},
                {'4533': {}},
                {'4534': {}},
                {'4535': {}},
                {'4543': {}},
                {'4550': {}},
                {'4551': {}},
                {'4576': {}},
                {'4579': {}}
            ],
            'New Aire': [
                {'3341': {}},
                {'3343': {}}, 
                {'3345': {}}
            ],
            'Ventana': [
                {'3407': {}},
                {'3412': {}},
                {'3426': {}},
                {'3709': {}},
                {'3717': {}},
                {'4002': {}},
                {'4037': {}},
                {'4054': {}},
                {'4310': {}},
                {'4311': {}},
                {'4326': {}},
                {'4348': {}},
                {'4369': {}}
            ],
            'Ventana LE': [
                {'3412': {}},
                {'3426': {}},
                {'3709': {}},
                {'3717': {}},
                {'4002': {}},
                {'4037': {}},
                {'4045': {}},
                {'4048': {}}
            ]
        },
        '2018': {
            'Dutch Star': [
                {'3718': {}},
                {'3736': {}},
                {'4002': {}},
                {'4018': {}},
                {'4052': {}},
                {'4310': {}},
                {'4311': {}},
                {'4326': {}},
                {'4362': {}},
                {'4369': {}},
                {'4327': {}}
            ],
            'Essex': [
                {'4531': {}},
                {'4534': {}},
                {'4537': {}},
                {'4553': {}},
                {'4596': {}},
                {'4536': {}}
            ],
            'King Aire': [
                {'4534': {}},
                {'4536': {}},
                {'4537': {}},
                {'4553': {}},
                {'4595': {}},
                {'4531': {}}
            ],
            'London Aire': [
                {'4534': {}},
                {'4535': {}},
                {'4536': {}},
                {'4537': {}},
                {'4553': {}},
                {'4531': {}}
            ],
            'Mountain Aire': [
                {'4531': {}},
                {'4524': {}},
                {'4525': {}},
                {'4536': {}},
                {'4537': {}},
                {'4553': {}},
                {'4047': {}}
            ],
            'New Aire': [
                {'3341': {}},
                {'3342': {}}
            ],
            'Ventana': [
                {'3407': {}},
                {'3412': {}},
                {'3436': {}},
                {'3709': {}},
                {'3715': {}},
                {'4002': {}},
                {'4037': {}},
                {'4046': {}},
                {'4049': {}},
                {'4310': {}},
                {'4311': {}},
                {'4326': {}},
                {'4369': {}},
                {'4308': {}}
            ],
            'Ventana LE': [
                {'3412': {}},
                {'3413': {}},
                {'3426': {}},
                {'3709': {}},
                {'3713': {}},
                {'4002': {}},
                {'4037': {}},
                {'4042': {}},
                {'4048': {}}
            ]
        }
    },
    'Tiffin': {
        '2019': {
            'Allegro Breeze': [
                {'31BR': {}},
                {'33BR': {}}
            ],
            'Allegro Bus': [
                {'37AP': {}},
                {'40AP': {}},
                {'40IP': {}},
                {'45MP': {}},
                {'45OPP': {}}
            ],
            'Allegro Red': [
                {'33AA': {}},
                {'37BA': {}},
                {'37PA': {}}
            ],
            'Open Road Allegro': [
                {'31MA': {}},
                {'32SA': {}},
                {'34PA': {}},
                {'36LA': {}},
                {'36UA': {}}
            ],    
            'Phaeton': [
                {'37BH': {}},
                {'40AH': {}},
                {'40IH': {}},
                {'40QBH': {}},
                {'40QKH': {}},
                {'44OH': {}}
            ], 
            'Zephyr': [
                {'45MZ': {}},
                {'45PZ': {}}
            ]   
        },
        '2018': {
            'Allegro Bus': [
                {'37AP': {}},
                {'40AP': {}},
                {'40SP': {}},
                {'45MP': {}},
                {'45OP': {}},
                {'45OPP': {}}
            ],
            'Allegro Red': [
                {'33A': {}},
                {'37BA': {}},
                {'37PA': {}},
                {'38QBA': {}}, 
                {'38QRA': {}}
            ],
            'Phaeton': [
                {'36GH': {}},
                {'37BH': {}},
                {'40AH': {}},
                {'40QKH': {}},
                {'40QBH': {}},
                {'40IH': {}},
                {'44OH': {}}
            ]
        }
    },
    'Winnebago': {
        '2019': {
            'Forza': [
                {'34T': {}},
                {'36G': {}},
                {'38F': {}},
                {'38W': {}}
            ],
            'Journey': [
                {'36M': {}},
                {'40J': {}},
                {'42E': {}}
            ],
            'Horizon': [
                {'40A': {}},
                {'42Q': {}}
            ],
            'Tour': [
                {'42QD': {}},
                {'45RD': {}}
            ],
            'Grand Tour': [
                {'42QL': {}},
                {'45RL': {}}
            ] 
        },
        '2018': {
            'Forza': [
                {'34T': {}},
                {'36G': {}}, 
                {'38F': {}},
                {'38W': {}}
            ],
            'Horizon': [
                {'40A': {}},
                {'42Q': {}}
            ],
            'Grand Tour': [
                {'42QL': {}},
                {'45RL': {}}
            ]    
        }
    }
}
export default FloorplansMap