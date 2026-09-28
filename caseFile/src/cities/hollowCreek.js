const hollowCreek = {
    id: 'hollowCreek',
    name: 'Hollow Creek',

    protagonist: {
        
        personality: {
            traits: ['cynical', 'Chain-smoker', 'introverted', 'Obstinate'],
            voice: 'short, sarcastic and not emotionally vulnerable',
            motivation: 'discover that he killed his sister and make him pay for his crimes'
        }
    },

    victim: {
        name: "Rebecca",
        relationToProtagonist: "Sister",
        causeOfDeath: "Beaten and sexually assaulted",
    },

    caseIntro: `
        On March 19, 1999, your younger sister Rebecca, a 19-year-old college student, 
        traveled to South Dakota with two of her friends during spring break.

        At first, you didn't think much of it. You simply wished her a good vacation and went on with your life.

        That changed when she suddenly stopped contacting you and the rest of your family.

        A month passed without a single word from her. You and your parents contacted the police, 
        but they couldn't give you any clear answers.

        Then Rebecca and her friends appeared in the newspapers.

        They had been found along a hiking trail by a group of tourists. 
        Rebecca had suffered severe injuries, and there were indications that she had also been sexually assaulted. 
        She was barely recognizable.

        The police claimed they were doing everything they could.

        Another month passed with no progress.

        Apparently, the local police were already overwhelmed by another serial killer investigation, 
        and Rebecca's case had been pushed aside.

        You decide to travel to South Dakota yourself.

        If the police won't bring your sister's killer to justice, 
        you'll have to find the truth on your own.
    `,

    victoryEnding: `
        You finally found him — the man who took Rebecca from you.
        It won't bring her back. But at least now, he'll never do this to anyone else's sister.
    `,

    defeatEnding: `
        Ten bodies later, and you still don't know who did it.
        Hollow Creek keeps its secrets. Rebecca's killer is still out there, and you failed her.
    `,


    excludedFromCrimeScene: ['Old Mill'],

    events: [
        {
            id: 'fortuneTeller',
            trigger: { action: 'investigate', location: 'The Lantern Motel', day: 1 },
            replacesDescription: true,
            text: `
                You weren't planning on staying in the lobby, but a woman by the vending machine
                catches your sleeve before you can walk past.

                She has a deck of cards fanned in one hand and the tired smile of someone
                who has said this a hundred times.

                "Sit. One card. It's on the house."

                You're not the type. You sit anyway.

                She flips it over and doesn't even look at it. She looks at you.

                "You came here for a girl. Young. She's gone now, and she's the only reason you're in this town."

                Your cigarette stops halfway to your mouth.

                "Don't ask how," she adds. "The cards don't answer questions. They just tell you who's already gone."

                You leave a few bills on the table. Not because you believe her.
                You just don't like how quiet the lobby got.
            `
        },
        {
            id: 'stateOfEmergency',
            trigger: { deaths: 5 },
            title: 'State of emergency',
            banner: 'STATE OF EMERGENCY — the police are now investigating.',
            text: `
                On the morning of the fifth body, the police finally stop pretending.

                A state of emergency is declared in Hollow Creek. Roadblocks go up on the county road,
                deputies start knocking on doors, and the phones at the station don't stop ringing.

                They're investigating now.
                You'd say it's about time, if it weren't five bodies too late.
            `
        }
    ],

    locations: {
        "Railroad Station": {
            description: `
                The old train station in Hollow Creek's old train station was built from weathered brick.
                The place reeked of alcohol and gave you an overwhelming feeling
                of disgust and depression.

                Aside from you and a few employees, the station was deserted.

                You sit down and pull out a cigarette.
                About five meters away, there was a sign forbidding smoking
                on the premises.

                The employees didn't seem to care enough to stop you,
                so you took some time to smoke and watch the trains
                pass by every half hour.
            `,
            
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a folded station renovation sketch with measurements"
                },
                {
                    occupation: "Architect",
                    item: "a carpenter’s pencil tucked into a weathered floor plan"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a stack of marked train-schedule worksheets"
                },
                {
                    occupation: "Teacher",
                    item: "a worn attendance notebook beside the bench"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a travel first-aid pouch with gauze"
                },
                {
                    occupation: "Doctor",
                    item: "a prescription pad with the station address"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook filled with train arrival times"
                },
                {
                    occupation: "Journalist",
                    item: "a press photograph of the station with notes"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a stamped document in a leather folder"
                },
                {
                    occupation: "Lawyer",
                    item: "a business card beside a handwritten legal appointment"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a greasy coupling wrench near the maintenance door"
                },
                {
                    occupation: "Mechanic",
                    item: "a small box of replacement bolts"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a battered notebook describing passing trains"
                },
                {
                    occupation: "Author",
                    item: "a fountain pen beside an unfinished paragraph"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a guitar pick between the floorboards"
                },
                {
                    occupation: "Musician",
                    item: "a folded sheet of music marked with train noises"
                },

                 //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police notebook with the platform number circled"
                },
                {
                    occupation: "Police Officer",
                    item: "a whistle on a worn duty lanyard"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "a silver pocket watch stopped at an odd time"
                },
                {
                    occupation: "Dilettante",
                    item: "a monogrammed cigarette case"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook with observations about travelers"
                },
                {
                    occupation: "Psychologist",
                    item: "a small card with handwritten behavior notes"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a black candle stub under the bench"
                },
                {
                    occupation: "Occultist",
                    item: "a small charm tied to an old railway cord"
                },
                
            ],
           
            genericObjects: [

                    {
                        item: "Wooden Bench",
                        description: "An old wooden bench with several layers of peeling paint."
                    },
                    {
                        item: "Train Schedule",
                        description: "A faded train schedule hanging beside the platform entrance."
                    },
                    {
                        item: "Trash Can",
                        description: "A metal trash can overflowing with cigarette butts and old newspapers."
                    },
                    {
                        item: "Ticket Booth",
                        description: "A small glass ticket booth with dusty windows and a cracked counter."
                    },
                    {
                        item: "Wall Clock",
                        description: "A large wall clock that ticks loudly in the otherwise quiet station."
                    },
                    {
                        item: "Newspaper Stand",
                        description: "A wooden stand holding several old newspapers and local magazines."
                    },
                    {
                        item: "Lost and Found Box",
                        description: "A cardboard box containing forgotten umbrellas, gloves, and other small belongings."
                    },
                    {
                        item: "Platform Sign",
                        description: "A weathered sign indicating the station platform number."
                    }
            ]
        },

        "Pharmacy": {
            description: `
                As you enter the pharmacy, you find yourself surrounded by long aisles filled with
                medicine and, occasionally, hygiene products.

                After wandering around for a few minutes, you pass elderly women and young employees.
                Some of them stop you to ask if you need anything.
                You tell them you're just looking around and continue on your way.

                As time passes, the smell of painkillers slowly gets into your head,
                and little by little, your head begins to ache.

                You sit down on one of the benches inside. Not that it makes the pain any better,
                but at least you can pretend your legs haven't started shaking.
            `,
            crimeSceneObjects: [

                 //Architect
                {
                    occupation: "Architect",
                    item: "a renovation sketch for the pharmacy shelves"
                },
                {
                    occupation: "Architect",
                    item: "a measuring tape beside floor plans"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a child’s dosage chart with red corrections"
                },
                {
                    occupation: "Teacher",
                    item: "a notebook with medication reminders"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a prescription pad with crossed-out names"
                },
                {
                    occupation: "Doctor",
                    item: "a medical journal by the consultation counter"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook about a pharmacy scandal"
                },
                {
                    occupation: "Journalist",
                    item: "a clipped article about medicine shortages"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a liability form in a receipt"
                },
                {
                    occupation: "Lawyer",
                    item: "a sealed legal notice to the store"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a small toolbox with a pharmacy delivery label"
                },
                {
                    occupation: "Mechanic",
                    item: "a grease-stained receipt for a delivery cart part"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a handwritten description of regular customers"
                },
                {
                    occupation: "Author",
                    item: "a fountain pen beside a half-finished story"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a harmonica case near the waiting bench"
                },
                {
                    occupation: "Musician",
                    item: "a crumpled song sheet behind a magazine"
                },

                 //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police report form with the pharmacy address"
                },
                {
                    occupation: "Police Officer",
                    item: "spare handcuffs in a locked staff drawer"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive leather wallet by the cosmetics aisle"
                },
                {
                    occupation: "Dilettante",
                    item: "a silk handkerchief embroidered with initials"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a pamphlet with handwritten anxiety notes"
                },
                {
                    occupation: "Psychologist",
                    item: "a notebook observing nervous customers"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a tiny vial of dark powder behind a medicine box"
                },
                {
                    occupation: "Occultist",
                    item: "a tarot card inside an old pharmacy leaflet"
                },
            ],

           genericObjects: [
                {
                    item: "Medicine Shelf",
                    description: "A long shelf filled with boxes of medicine arranged in neat rows."
                },
                {
                    item: "Shopping Basket",
                    description: "A small plastic basket left beside one of the aisles."
                },
                {
                    item: "Cash Register",
                    description: "An old cash register with several buttons worn almost completely smooth."
                },
                {
                    item: "Waiting Bench",
                    description: "A padded bench where customers can sit while waiting for prescriptions."
                },
                {
                    item: "Magazine Rack",
                    description: "A metal rack filled with newspapers, magazines, and outdated health pamphlets."
                },
                {
                    item: "Bathroom Mirror",
                    description: "A small mirror above a sink, surrounded by shelves of hygiene products."
                },
                {
                    item: "Shopping Bag",
                    description: "A paper pharmacy bag folded neatly and left beside the counter."
                },
                {
                    item: "Digital Scale",
                    description: "An old digital scale sitting near the pharmacy's health products."
                }
            ]
        },

        "St. Mary's Church": {
            description: `
                As you enter the church, a strange feeling runs through your body.
                You've never been a fan of sacred places,
                but there was something about this particular church that gave you an unusual sense of "unholiness."

                You wander through the halls without much enthusiasm.
                Mass hasn't started yet, and the only other person there is a priest.

                When he notices you, he smiles warmly, showing a hint of sympathy, before returning to his duties.

                Meanwhile, you decide to spend some time admiring the beautiful paintings throughout the church.
            `,

            crimeSceneObjects: [
                 //Architect
                {
                    occupation: "Architect",
                    item: "a detailed sketch of the stained-glass windows"
                },
                {
                    occupation: "Architect",
                    item: "a small measuring ruler beside restoration plans"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a lesson booklet on local church history"
                },
                {
                    occupation: "Teacher",
                    item: "children’s worksheets near the pews"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a first-aid kit beneath a pew"
                },
                {
                    occupation: "Doctor",
                    item: "a newspaper clipping about an old church incident"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook with questions about the church"
                },
                {
                    occupation: "Journalist",
                    item: "a newspaper clipping about an old church incident"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a property document with the church seal"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal envelope beneath the hymnals"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a wrench from the old heating system"
                },
                {
                    occupation: "Mechanic",
                    item: "a tin of machine grease by the maintenance door"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a leather notebook describing the paintings"
                },
                {
                    occupation: "Author",
                    item: "a fountain pen beside a half-written prayer-like passage"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "loose organ sheet music"
                },
                {
                    occupation: "Musician",
                    item: "a broken guitar pick near the choir seats"
                },

                 //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police report folded beneath a pew"
                },
                {
                    occupation: "Police Officer",
                    item: "a service whistle on a coat in the vestry"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "a gold tie pin engraved with initials"
                },
                {
                    occupation: "Dilettante",
                    item: "an expensive perfume bottle by the coat rack"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing parishioners"
                },
                {
                    occupation: "Psychologist",
                    item: "a grief pamphlet with underlined passages"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a strange symbol inside an old hymnal"
                },
                {
                    occupation: "Occultist",
                    item: "a black candle stub behind a statue"
                },
            ],

            genericObjects: [
                {
                    item: "Wooden Pew",
                    description: "A long wooden pew polished smooth by years of use."
                },
                {
                    item: "Hymnal",
                    description: "A worn hymnal resting inside a compartment beneath the pew."
                },
                {
                    item: "Confessional",
                    description: "A small wooden confessional booth with a dark curtain covering its entrance."
                },
                {
                    item: "Statue",
                    description: "A religious statue standing quietly beneath a dim wall light."
                },
                {
                    item: "Stained Glass Window",
                    description: "A colorful stained-glass window depicting a religious scene."
                },
                {
                    item: "Offering Box",
                    description: "A wooden box with a narrow opening for donations."
                },
                {
                    item: "Bell Rope",
                    description: "A thick rope hanging from a small opening near the church's bell tower."
                },
                {
                    item: "Candle Stand",
                    description: "A metal stand covered with the remains of recently burned candles."
                }
            ]
        },

        "Police Department": {
            description: `
                You decide to go in and check on how the investigation is going.

                At first, you spend half an hour sitting on a bench, waiting for someone to call you in.
                The waiting room is filled with nervous and anxious people, each seemingly carrying their own problems.

                To pass the time, you start guessing why each person is there.

                Woman with a black eye? Beaten by her husband.

                Man with trembling hands? Maybe someone is threatening him.

                Eventually, a police officer comes over, only to tell you that he can't give you any information.
                It's confidential.
            `,
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a renovation blueprint in the briefing room"                   
                },
                {
                    occupation: "Architect",
                    item: "a scale ruler beside building plans"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "evidence-labeling training worksheets"
                },
                {
                    occupation: "Teacher",
                    item: "a red-marked report about a school incident"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a medical examiner form in a case folder"
                },
                {
                    occupation: "Doctor",
                    item: "a sealed first-aid kit on the patrol desk"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a reporter notebook in the waiting room"
                },
                {
                    occupation: "Journalist",
                    item: "a folded press pass in a case file"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a subpoena clipped to an investigation folder"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal brief with handwritten notes"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a vehicle maintenance log with repairs circled"
                },
                {
                    occupation: "Mechanic",
                    item: "a worn socket wrench from the garage"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a detective novel by the coffee machine"
                },
                {
                    occupation: "Author",
                    item: "a notebook with an unfinished short story"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a harmonica by the patrol desk"
                },
                {
                    occupation: "Musician",
                    item: "a crumpled concert flyer on the noticeboard"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a spare badge in an evidence envelope"
                },
                {
                    occupation: "Police Officer",
                    item: "a duty belt behind the front desk"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "a gold cufflink in the evidence room"
                },
                {
                    occupation: "Dilettante",
                    item: "an expensive fountain pen engraved with initials"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a behavioral assessment form with margin notes"
                },
                {
                    occupation: "Psychologist",
                    item: "a folder of interview observations"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a case photo with an unfamiliar symbol"
                },
                {
                    occupation: "Occultist",
                    item: "a small charm sealed in an evidence bag"
                },
                
            ],

            genericObjects: [
                {
                    item: "Reception Desk",
                    description: "A wooden reception desk covered with papers, telephones, and office supplies."
                },
                {
                    item: "Waiting Chair",
                    description: "A hard plastic chair designed to be uncomfortable for reasons nobody bothered to explain."
                },
                {
                    item: "Bulletin Board",
                    description: "A crowded bulletin board covered with notices, photographs, and handwritten reminders."
                },
                {
                    item: "Telephone",
                    description: "An old office telephone with a tangled cord and a cracked receiver."
                },
                {
                    item: "Filing Cabinet",
                    description: "A gray metal filing cabinet filled with labeled folders."
                },
                {
                    item: "Coffee Machine",
                    description: "A cheap coffee machine that looks like it has been working longer than some of the officers."
                },
                {
                    item: "Coat Rack",
                    description: "A metal coat rack holding several police jackets and umbrellas."
                },
                {
                    item: "Security Monitor",
                    description: "A small monitor displaying the grainy image from a security camera."
                }
            ]
        },

        "High School": {
            description: `
                You spend a few minutes there, taking a quick look at the gate and running your
                hands along the bars as you try to spot anything unusual.

                But you quickly realize that the only strange thing about the place might be an adult standing by the gate,
                staring at teenagers through the bars.
            `,
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a classroom renovation plan behind the gate"
                },
                {
                    occupation: "Architect",
                    item: "a scale ruler in the teacher's desk"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "graded exams on a desk"
                },
                {
                    occupation: "Teacher",
                    item: "a worn attendance register with names circled"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a school nurse first-aid kit"
                },
                {
                    occupation: "Doctor",
                    item: "a medical form in a student emergency file"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a student newspaper draft with a local headline"
                },
                {
                    occupation: "Journalist",
                    item: "a camera roll labeled with the school name"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a permission form with legal notes"
                },
                {
                    occupation: "Lawyer",
                    item: "a sealed law-office letter to the school"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a small engine part from the vocational workshop"
                },
                {
                    occupation: "Mechanic",
                    item: "a grease-stained wrench by the maintenance shed"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a student's unfinished manuscript"
                },
                {
                    occupation: "Author",
                    item: "a notebook with observations about classmates"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a snapped guitar string in the music room"
                },
                {
                    occupation: "Musician",
                    item: "sheet music with pencil marks"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a school resource officer's spare whistle"
                },
                {
                    occupation: "Police Officer",
                    item: "a police report clipped to a disciplinary file"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive fountain pen in a locker"
                },
                {
                    occupation: "Dilettante",
                    item: "a monogrammed handkerchief under the bleachers"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a student counseling form with observations"
                },
                {
                    occupation: "Psychologist",
                    item: "a booklet on adolescent behavior with notes"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a strange symbol beneath a desk"
                },
                {
                    occupation: "Occultist",
                    item: "dried herbs hidden in a locker"
                },
            ],

            genericObjects: [
                {
                    item: "Locker",
                    description: "A row of metal lockers covered with scratches, stickers, and carved initials."
                },
                {
                    item: "School Desk",
                    description: "An old wooden desk covered with small scratches and forgotten pencil marks."
                },
                {
                    item: "Chalkboard",
                    description: "A black chalkboard with traces of yesterday's lesson still visible."
                },
                {
                    item: "Trophy Case",
                    description: "A glass case displaying old sports trophies and academic awards."
                },
                {
                    item: "School Bell",
                    description: "An electric bell mounted high on the wall above the hallway."
                },
                {
                    item: "Bulletin Board",
                    description: "A crowded board covered with club announcements, posters, and school notices."
                },
                {
                    item: "Water Fountain",
                    description: "An old metal water fountain that makes a faint rattling sound when used."
                },
                {
                    item: "Janitor's Cart",
                    description: "A cleaning cart parked against the wall with a mop and several bottles of detergent."
                }
            ]
        },

        "The Lantern Motel": {
            description: `
                As you enter the motel, you notice the employees looking at you.
                They quickly look away once they realize you're just another stranger walking in.

                You greet the receptionist and try to ask her a series of questions,
                but she doesn't seem interested in talking to you about a crime unless you're wearing a badge or carrying a gun.

                You buy a snack from a vending machine and watch people come and go.
            `,
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a floor plan of the older motel wing"
                },
                {
                    occupation: "Architect",
                    item: "a carpenter's pencil beside a room renovation sketch"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a motel guest notebook with several students' names"
                },
                {
                    occupation: "Teacher",
                    item: "corrected worksheets in a motel room"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a travel medical kit in a motel room"
                },
                {
                    occupation: "Doctor",
                    item: "an empty prescription bottle on the bedside table"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook listing motel guests and room numbers"
                },
                {
                    occupation: "Journalist",
                    item: "a disposable camera with undeveloped photos"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a motel contract in a briefcase"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal notice to the motel owner"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a greasy wrench beside a parked car"
                },
                {
                    occupation: "Mechanic",
                    item: "a motel receipt with a vehicle repair note"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a typewritten page by a motel lamp"
                },
                {
                    occupation: "Author",
                    item: "a notebook describing strangers"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a guitar pick under a motel bed"
                },
                {
                    occupation: "Musician",
                    item: "a folded setlist on the nightstand"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police notebook with a room number circled"
                },
                {
                    occupation: "Police Officer",
                    item: "handcuffs in a desk drawer"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive cufflink beneath a motel bed"
                },
                {
                    occupation: "Dilettante",
                    item: "a leather cigarette case with engraved initials"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing motel guests"
                },
                {
                    occupation: "Psychologist",
                    item: "an insomnia pamphlet with handwritten notes"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a tarot card beneath the motel Bible"
                },
                {
                    occupation: "Occultist",
                    item: "a small black candle burned down by the sink"
                },
            ],
            genericObjects: [
                {
                    item: "Reception Bell",
                    description: "A small metal bell sitting on the motel reception counter."
                },
                {
                    item: "Guest Register",
                    description: "A thick book containing the names and room numbers of motel guests."
                },
                {
                    item: "Room Key",
                    description: "A brass key attached to a small plastic tag displaying a motel room number."
                },
                {
                    item: "Vending Machine",
                    description: "An old vending machine filled with snacks and cheap drinks."
                },
                {
                    item: "Ice Machine",
                    description: "A noisy ice machine humming in the corner of the motel hallway."
                },
                {
                    item: "Luggage Cart",
                    description: "A metal luggage cart with one wheel that squeaks when pushed."
                },
                {
                    item: "Motel Bible",
                    description: "A worn Bible placed inside the drawer of a motel bedside table."
                },
                {
                    item: "Desk Lamp",
                    description: "A cheap bedside lamp with a yellowed lampshade."
                }
            ]
        },

        "Cemetery": {
            description: `
                For a cemetery, the atmosphere isn't nearly as melancholic as you expected.

                Most of the graves seemed incomplete in some way. Some had been vandalized, while others had simply been forgotten by time.

                You walk around, reading the names on the gravestones.

                "John Doe."
                "Chris P. Bacon."
                "Anita Job."

                "What the hell kind of names are these?" you think.

                Thankfully, the rest of the cemetery was so poorly maintained that most of the other names were either
                illegible or missing from the gravestones entirely.
            `,
            crimeSceneObjects: [
                
                //Architect
                {
                    occupation: "Architect",
                    item: "a cemetery expansion plan beneath a stone bench"
                },
                {
                    occupation: "Architect",
                    item: "a measuring tape beside a damaged gravestone"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a lesson sheet on local burial history"
                },
                {
                    occupation: "Teacher",
                    item: "a notebook listing names and dates"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a medical examiner note in a folder"
                },
                {
                    occupation: "Doctor",
                    item: "a first-aid pouch near the caretaker shed"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook with grave dates"
                },
                {
                    occupation: "Journalist",
                    item: "a newspaper clipping about an old cemetery incident"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a burial plot property deed"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal envelope with the cemetery name"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a rusted wrench near the maintenance shed"
                },
                {
                    occupation: "Mechanic",
                    item: "a replacement bolt from the old gate"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a notebook describing gravestones"
                },
                {
                    occupation: "Author",
                    item: "a handwritten story about a forgotten grave"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a broken harmonica near a weathered headstone"
                },
                {
                    occupation: "Musician",
                    item: "a folded song sheet beneath a bench"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police notebook with a grave number circled"
                },
                {
                    occupation: "Police Officer",
                    item: "an old evidence tag beneath a stone"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "a silver pocket watch on a grave ledge"
                },
                {
                    occupation: "Dilettante",
                    item: "a monogrammed handkerchief on an iron fence"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a grief pamphlet with handwritten observations"
                },
                {
                    occupation: "Psychologist",
                    item: "a notebook recording reactions at funerals"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a strange sigil carved into a headstone"
                },
                {
                    occupation: "Occultist",
                    item: "a black candle stub buried beside an old grave"
                },
            ],

            genericObjects: [
                {
                    item: "Gravestone",
                    description: "An old gravestone covered with moss and difficult-to-read lettering."
                },
                {
                    item: "Iron Fence",
                    description: "A low iron fence surrounding one of the older sections of the cemetery."
                },
                {
                    item: "Stone Bench",
                    description: "A weathered stone bench overlooking several rows of graves."
                },
                {
                    item: "Funeral Wreath",
                    description: "A dried funeral wreath resting against the base of a gravestone."
                },
                {
                    item: "Caretaker Shed",
                    description: "A small wooden shed used to store gardening and cemetery maintenance equipment."
                },
                {
                    item: "Watering Can",
                    description: "A metal watering can left beside a patch of flowers."
                },
                {
                    item: "Dead Flowers",
                    description: "A collection of wilted flowers placed beside an old grave."
                },
                {
                    item: "Cemetery Gate",
                    description: "A large iron gate with rust spreading across its hinges."
                }
            ]
        },

        "Miller's Grocery": {
            description: `
                As you enter the grocery store, you feel an atmosphere that is a little less melancholic than usual.

                The place isn't crowded, but there are at least four or five people inside, not counting the cashier.

                You walk around a few times and, not wanting to look like a shoplifter or just some lunatic,
                you pick up a soda and a pack of cookies.

                When you reach the counter, the elderly man smiles and asks if you're new around here.

                You tell him you're just passing through.
            `,
            crimeSceneObjects: [
               

                //Architect
                {
                    occupation: "Architect",
                    item: "a hand-drawn aisle rearrangement plan"
                },
                {
                    occupation: "Architect",
                    item: "a measuring tape by the stockroom"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a shopping list on the back of a graded worksheet"
                },
                {
                    occupation: "Teacher",
                    item: "a child's homework notebook by the checkout"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a prescription reminder on a grocery receipt"
                },
                {
                    occupation: "Doctor",
                    item: "a small medical pouch by the magazine rack"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a local newspaper with articles circled"
                },
                {
                    occupation: "Journalist",
                    item: "a notebook interviewing townspeople"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a supplier contract beneath the counter"
                },
                {
                    occupation: "Lawyer",
                    item: "a business card from a local law office"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a greasy spark plug by the delivery records"
                },
                {
                    occupation: "Mechanic",
                    item: "a wrench by the loading dock"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a notebook describing grocery customers"
                },
                {
                    occupation: "Author",
                    item: "a handwritten draft on a shopping list"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a guitar pick near the entrance"
                },
                {
                    occupation: "Musician",
                    item: "a folded song sheet behind a magazine"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police business card by the register"
                },
                {
                    occupation: "Police Officer",
                    item: "a receipt with a patrol car number"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive leather wallet by the register"
                },
                {
                    occupation: "Dilettante",
                    item: "a monogrammed silver lighter"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing regular customers"
                },
                {
                    occupation: "Psychologist",
                    item: "a stress pamphlet by the magazines"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a small charm behind the register"
                },
                {
                    occupation: "Occultist",
                    item: "a tarot card between old magazines"
                },
            ],

            genericObjects: [
                {
                    item: "Shopping Cart",
                    description: "A metal shopping cart with one wheel that refuses to cooperate."
                },
                {
                    item: "Cash Register",
                    description: "An old mechanical cash register sitting behind the counter."
                },
                {
                    item: "Grocery Shelf",
                    description: "A tall shelf packed with canned food, boxes, and household supplies."
                },
                {
                    item: "Freezer",
                    description: "A large freezer humming quietly near the back of the store."
                },
                {
                    item: "Paper Bag",
                    description: "A brown paper grocery bag folded beside the checkout counter."
                },
                {
                    item: "Price Tag",
                    description: "A small handwritten price tag hanging from a shelf."
                },
                {
                    item: "Local Newspaper",
                    description: "A stack of the latest local newspapers sitting near the entrance."
                },
                {
                    item: "Delivery Box",
                    description: "A cardboard delivery box waiting to be unpacked in the stockroom."
                }
            ]
        },

        "Creekside Trail": {
            description: `
                The creek runs quietly beside the trail, disturbed only by the wind through the trees
            `,
            crimeSceneObjects: [
            
                //Architect
                {
                    occupation: "Architect",
                    item: "a folded bridge design sketch under a rock"
                },
                {
                    occupation: "Architect",
                    item: "a measuring ruler in a hiking bag"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a field-trip worksheet dampened by the creek"
                },
                {
                    occupation: "Teacher",
                    item: "a notebook listing students and trail observations"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a compact first-aid kit beside the trail"
                },
                {
                    occupation: "Doctor",
                    item: "a medical glove on a branch"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook with trail measurements and interview notes"
                },
                {
                    occupation: "Journalist",
                    item: "a camera film canister with a date"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a signed liability waiver under a stone"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal envelope in an abandoned backpack"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a greasy wrench by a broken trail bicycle"
                },
                {
                    occupation: "Mechanic",
                    item: "a box of spare bolts near the creek"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a weathered notebook describing the woods"
                },
                {
                    occupation: "Author",
                    item: "a page of handwritten prose under a stone"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a harmonica case by a tree"
                },
                {
                    occupation: "Musician",
                    item: "a broken guitar string in the brush"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police notebook with a trail marker circled"
                },
                {
                    occupation: "Police Officer",
                    item: "a flashlight with a department serial number"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive watch half-buried in dirt"
                },
                {
                    occupation: "Dilettante",
                    item: "a silk scarf on a branch"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing hikers"
                },
                {
                    occupation: "Psychologist",
                    item: "a counseling pamphlet soaked by the creek"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a circle of stones around a strange symbol"
                },
                {
                    occupation: "Occultist",
                    item: "a small charm hanging from a low branch"
                },
            ],

            genericObjects: [
                {
                    item: "Trail Sign",
                    description: "A wooden sign pointing toward different sections of the trail."
                },
                {
                    item: "Wooden Bridge",
                    description: "A narrow wooden bridge crossing the creek."
                },
                {
                    item: "Park Bench",
                    description: "A simple wooden bench overlooking the creek."
                },
                {
                    item: "Trash Can",
                    description: "A metal trash can surrounded by a few leaves and pieces of litter."
                },
                {
                    item: "Trail Map",
                    description: "A weathered map showing the different paths around the creek."
                },
                {
                    item: "Fallen Branch",
                    description: "A large branch lying across the side of the trail."
                },
                {
                    item: "Hiking Marker",
                    description: "A small painted marker attached to a tree to indicate the correct path."
                },
                {
                    item: "Old Backpack",
                    description: "An old backpack abandoned beside the trail, its fabric faded by the weather."
                }
            ]
        },

        "Old Mill": {
            description: `
                You enter the old mill. Some of the locals had warned you that it was dangerous, but you needed to go there anyway.

                Inside, you find several human skeletons and various ritualistic objects scattered throughout the place.
                Blood forms strange symbols across the floor, surrounded by expensive food and bottles of wine.

                At first, you think you've found the killer's hideout.
                But you quickly realize that whatever happened here was far more elaborate than the way your sister's killer operated.
                His methods were brutal and straightforward.

                Whatever this is, and whoever did it, it's none of your business.
            `,
           
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a blueprint of the original machinery floor"
                },
                {
                    occupation: "Architect",
                    item: "a scale model of a wooden mill wheel"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "an old ledger with handwritten lessons"
                },
                {
                    occupation: "Teacher",
                    item: "a classroom bell from a rusted beam"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a blood-stained medical bandage in a discarded case"
                },
                {
                    occupation: "Doctor",
                    item: "an empty medicine vial"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook about disappearances"
                },
                {
                    occupation: "Journalist",
                    item: "a damaged camera with a roll of film"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a sealed legal document under a floorboard"
                },
                {
                    occupation: "Lawyer",
                    item: "a mill property deed with handwritten notes"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a heavy wrench by the machinery"
                },
                {
                    occupation: "Mechanic",
                    item: "a box of worn machine bolts"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a manuscript page describing the mill"
                },
                {
                    occupation: "Author",
                    item: "a fountain pen with dried ink by an old desk"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a broken violin string on a beam"
                },
                {
                    occupation: "Musician",
                    item: "a battered harmonica near the machinery"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "an old evidence marker on the floor"
                },
                {
                    occupation: "Police Officer",
                    item: "a police badge sealed in a rusted box"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive wine bottle with a monogrammed label"
                },
                {
                    occupation: "Dilettante",
                    item: "a gold pocket watch in the debris"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook with unsettling behavioral observations"
                },
                {
                    occupation: "Psychologist",
                    item: "a handwritten interview transcript with crossed-out names"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a book with ritual diagrams"
                },
                {
                    occupation: "Occultist",
                    item: "a vial of black ash beside a candle stub"
                },
            ],

            genericObjects: [
                {
                    item: "Broken Machinery",
                    description: "An enormous piece of rusted machinery occupying most of the room."
                },
                {
                    item: "Wooden Barrel",
                    description: "An empty wooden barrel covered in dust and cobwebs."
                },
                {
                    item: "Rusty Gear",
                    description: "A large metal gear lying on the floor beside the old machinery."
                },
                {
                    item: "Wooden Crate",
                    description: "A damaged wooden crate filled with dirt and fragments of old equipment."
                },
                {
                    item: "Mill Wheel",
                    description: "The remains of the old mill wheel, almost completely covered in moss."
                },
                {
                    item: "Rope",
                    description: "A thick, frayed rope hanging from one of the wooden beams."
                },
                {
                    item: "Oil Lamp",
                    description: "An old oil lamp covered in dust, still recognizable despite its condition."
                },
                {
                    item: "Broken Window",
                    description: "A large broken window allowing thin beams of sunlight into the mill."
                }
            ]
        },

        "Hollow Creek Park": {
            description: `
                Empty swings sway slightly. A single streetlamp flickers at the far end
            `,
            crimeSceneObjects: [

                //Architect
                {
                    occupation: "Architect",
                    item: "a park renovation plan under a bench"
                },
                {
                    occupation: "Architect",
                    item: "a measuring tape from the maintenance box"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a field-trip worksheet near the swings"
                },
                {
                    occupation: "Teacher",
                    item: "a notebook listing children's names and activities"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a first-aid pouch near the playground"
                },
                {
                    occupation: "Doctor",
                    item: "a medical glove under a bench"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook on park visitors"
                },
                {
                    occupation: "Journalist",
                    item: "a camera film canister with a date"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a park liability form under a bench"
                },
                {
                    occupation: "Lawyer",
                    item: "a legal notice to the town council"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "a small wrench by the broken streetlamp panel"
                },
                {
                    occupation: "Mechanic",
                    item: "a grease-stained maintenance cart part"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a notebook describing people in the park"
                },
                {
                    occupation: "Author",
                    item: "a handwritten story under a bench"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a guitar pick near the swings"
                },
                {
                    occupation: "Musician",
                    item: "a folded sheet of music under a bench"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police notebook with the streetlamp location circled"
                },
                {
                    occupation: "Police Officer",
                    item: "a spare police whistle on a tree branch"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "a monogrammed pocket watch under a bench"
                },
                {
                    occupation: "Dilettante",
                    item: "an expensive silk scarf on the playground fence"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing park visitors"
                },
                {
                    occupation: "Psychologist",
                    item: "a childhood behavior pamphlet with margin notes"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a strange symbol scratched under a bench"
                },
                {
                    occupation: "Occultist",
                    item: "herbs tied with black thread"
                },
            ],

            genericObjects: [
                {
                    item: "Swing Set",
                    description: "An old metal swing set that creaks whenever the wind moves it."
                },
                {
                    item: "Slide",
                    description: "A faded metal slide with several patches of rust."
                },
                {
                    item: "Park Bench",
                    description: "A wooden bench facing the playground and the empty field."
                },
                {
                    item: "Streetlamp",
                    description: "An old streetlamp standing at the far end of the park."
                },
                {
                    item: "Trash Can",
                    description: "A green metal trash can beside the playground."
                },
                {
                    item: "Drinking Fountain",
                    description: "A public drinking fountain with a weak stream of water."
                },
                {
                    item: "Picnic Table",
                    description: "A wooden picnic table covered with initials and faded graffiti."
                },
                {
                    item: "Park Sign",
                    description: "A wooden sign listing the park's rules and opening hours."
                }
            ]
        },

        "The Rusty Nail": {
            description: `
                The bar is nearly empty, the smell of spilled beer and old wood filling the room
            `,
            crimeSceneObjects: [
            
                //Architect
                {
                    occupation: "Architect",
                    item: "a bar renovation sketch with measurements"
                },
                {
                    occupation: "Architect",
                    item: "a floor plan beneath the counter"
                },

                //Teacher
                {
                    occupation: "Teacher",
                    item: "a graded worksheet used as a coaster"
                },
                {
                    occupation: "Teacher",
                    item: "a notebook from night class"
                },

                //Doctor
                {
                    occupation: "Doctor",
                    item: "a small first-aid pouch behind the bar"
                },
                {
                    occupation: "Doctor",
                    item: "an empty prescription bottle beside a booth"
                },

                //Journalist
                {
                    occupation: "Journalist",
                    item: "a notebook with rumors about locals"
                },
                {
                    occupation: "Journalist",
                    item: "a newspaper with crime stories circled"
                },

                //Lawyer
                {
                    occupation: "Lawyer",
                    item: "a legal notice under a bar tab"
                },
                {
                    occupation: "Lawyer",
                    item: "a business card from a local attorney"
                },

                //Mechanic
                {
                    occupation: "Mechanic",
                    item: "an oil-stained wrench by a bar stool"
                },
                {
                    occupation: "Mechanic",
                    item: "a spark plug by the back door"
                },

                //Author
                {
                    occupation: "Author",
                    item: "a notebook describing bar patrons"
                },
                {
                    occupation: "Author",
                    item: "a handwritten story on a beer-stained napkin"
                },

                //Musician
                {
                    occupation: "Musician",
                    item: "a snapped guitar string near the stage"
                },
                {
                    occupation: "Musician",
                    item: "a battered harmonica on the counter"
                },

                //Police Officer
                {
                    occupation: "Police Officer",
                    item: "a police whistle beneath a bar stool"
                },
                {
                    occupation: "Police Officer",
                    item: "a report number on a receipt"
                },

                //Dilettante
                {
                    occupation: "Dilettante",
                    item: "an expensive cufflink under a table"
                },
                {
                    occupation: "Dilettante",
                    item: "a silver cigarette case engraved with initials"
                },

                //Psychologist
                {
                    occupation: "Psychologist",
                    item: "a notebook observing intoxicated patrons"
                },
                {
                    occupation: "Psychologist",
                    item: "an addiction pamphlet with handwritten notes"
                },

                //Occultist
                {
                    occupation: "Occultist",
                    item: "a tarot card under a coaster"
                },
                {
                    occupation: "Occultist",
                    item: "a small black candle stub behind the bar"
                },
            ],
            genericObjects: [
                {
                    item: "Bar Counter",
                    description: "A long wooden counter covered with scratches, stains, and old cigarette burns."
                },
                {
                    item: "Bar Stool",
                    description: "A worn wooden stool with a slightly crooked leg."
                },
                {
                    item: "Pool Table",
                    description: "An old pool table with faded green felt and several missing balls."
                },
                {
                    item: "Jukebox",
                    description: "An outdated jukebox glowing faintly in the corner."
                },
                {
                    item: "Beer Bottle",
                    description: "An empty beer bottle abandoned on a table."
                },
                {
                    item: "Dart Board",
                    description: "A worn dart board covered with holes from years of use."
                },
                {
                    item: "Bar Mirror",
                    description: "A large mirror behind the counter reflecting rows of bottles and empty tables."
                },
                {
                    item: "Neon Sign",
                    description: "A flickering neon sign bearing the name of the bar."
                }
            ]
        }
    }
}

module.exports = {
    hollowCreek
}
