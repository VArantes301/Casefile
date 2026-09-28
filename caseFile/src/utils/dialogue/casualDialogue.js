const casualDialogue = {

    normal: [
        "You following the game this weekend? Been a rough season.",
        "My kids are driving me up the wall lately. You got any?",
        "Ever been up north? Nice this time of year.",
        "Been getting colder lately, hasn't it?",
        "I swear the weekends keep getting shorter.",
        "You hear about that new diner they opened downtown?",
        "Traffic wasn't too bad this morning, for once.",
        "I really need to fix that fence before winter.",
        "Feels like summer was just yesterday.",
        "You ever go fishing around here?",
        "It's been a pretty quiet day.",
        "Can't complain. Things could be worse.",
        "You been around Hollow Creek long?",
        "Feels like everybody's in a hurry lately.",
        "Nice seeing someone new around here."
    ],

    evasive: [
        "Not much to say, honestly.",
        "Nice weather we're having. Anyway, I should get going.",
        "Nothing much going on with me.",
        "Same old, same old.",
        "Can't complain, I suppose.",
        "Nothing interesting happening around here.",
        "Just trying to get through the week.",
        "I've been pretty busy lately.",
        "Nothing worth talking about.",
        "You know how it is. Work, home, sleep.",
        "I wouldn't know much about that.",
        "I'm not really a talkative person.",
        "I tend to keep to myself.",
        "Nothing exciting happening on my end.",
        "Just another day."
    ],

    rude: [
        "Why are you even talking to me? Mind your own business.",
        "You've got some nerve showing up here.",
        "I don't owe you conversation, detective.",
        "Do I look like I have time to chat?",
        "Can't you see I'm busy?",
        "You always this nosy?",
        "Find someone else to bother.",
        "I'm not in the mood for this.",
        "What, you got nothing better to do?",
        "Go bother somebody who actually wants to talk.",
        "I'm trying to enjoy my day here.",
        "You ask a lot of questions.",
        "I don't remember inviting you over.",
        "Can I help you with something?",
        "You're starting to get on my nerves."
    ],

    aboutVictim: [
        "Rebecca? Knew her a little. Kept to herself, mostly.",
        "Never really spoke to her, but people liked her around here.",
        "Poor girl. Didn't deserve what happened.",
        "I remember seeing Rebecca around town from time to time.",
        "She used to shop around here every now and then.",
        "I think I saw her at the diner a few times.",
        "She always seemed polite enough.",
        "Didn't know her personally, but she seemed nice.",
        "It's strange not seeing her around anymore.",
        "I suppose everyone knew her at least a little around here."
    ],

    refuses: [
        "Not now. I'm swamped.",
        "I don't have time for this.",
        "Some other time, maybe.",
        "Sorry, I've got somewhere to be.",
        "Can't talk right now.",
        "I'm already running late.",
        "Maybe later. I've got work to finish.",
        "Not a good time.",
        "I've got a lot on my plate today.",
        "Rain check?",
        "I'm in the middle of something.",
        "I should probably get going.",
        "I've got somewhere I need to be.",
        "Maybe I'll catch you around town.",
        "Sorry, today's been hectic."
    ],

    work: [
        "Been working since six this morning. I'm exhausted.",
        "My boss has been driving me crazy lately.",
        "I could really use a vacation.",
        "Work's been slow this week.",
        "I don't mind my job. It's just the hours I hate.",
        "I've been thinking about looking for something closer to home.",
        "You ever have one of those days where nothing goes right?",
        "I spend so much time at work I barely see my house anymore.",
        "The morning shift is always the worst.",
        "At least tomorrow's my day off.",
        "I swear, some days the clock barely moves.",
        "I actually like my job when people aren't making it difficult.",
        "I've been working here longer than I'd like to admit.",
        "My schedule's been all over the place lately.",
        "I'm just trying to make it to payday."
    ],

    family: [
        "My daughter started school last month. She's growing up too fast.",
        "My brother's coming into town next week.",
        "My parents still live a few miles outside town.",
        "My kid keeps asking for a dog. I'm starting to give in.",
        "My sister called me three times this morning.",
        "Family gatherings always turn into arguments somehow.",
        "My dad's been fixing things around the house again.",
        "My mother makes enough food for ten people every Sunday.",
        "I haven't seen my cousin in months.",
        "The whole family is getting together this weekend."
    ],

    home: [
        "My sink's been leaking for two weeks now.",
        "I really need to clean out the garage.",
        "The heater started making a weird noise last night.",
        "I've been meaning to repaint the kitchen.",
        "My neighbor's dog keeps digging up my yard.",
        "I finally fixed that old shelf in my bedroom.",
        "I've got laundry piled up to the ceiling.",
        "The power went out at my place last night.",
        "I've been trying to keep the garden alive.",
        "My roof needs fixing before the next big storm."
    ],

    weather: [
        "Looks like rain later.",
        "It's getting colder every morning.",
        "I don't remember the summers being this hot.",
        "Perfect weather for staying inside.",
        "The wind's been awful lately.",
        "I actually like this kind of weather.",
        "Supposed to be sunny tomorrow.",
        "Feels like winter came early this year.",
        "I could really use a warm cup of coffee today.",
        "At least the weather's been nice this week."
    ],

    food: [
        "I grabbed breakfast at the diner this morning. Pretty good.",
        "I've been craving a good burger all week.",
        "Nothing beats homemade pie.",
        "I tried making chili last night. Turned out better than expected.",
        "I'm thinking about getting takeout tonight.",
        "Coffee's the only thing keeping me awake today.",
        "I swear everything tastes better when someone else cooks it.",
        "I've been trying to learn how to cook properly.",
        "There's nothing better than a hot meal after work.",
        "I had the best pancakes this morning."
    ],

    sports: [
        "Did you catch the game last night?",
        "Our team really needs to get its act together.",
        "I've been playing basketball with some friends on Sundays.",
        "I used to play baseball when I was younger.",
        "You ever watch boxing?",
        "The playoffs are getting interesting this year.",
        "I haven't missed a game all season.",
        "My son just joined the school team.",
        "I swear I could've made that shot myself.",
        "It's nice having something to look forward to on the weekend."
    ],

    town: [
        "Small town. Everybody knows everybody.",
        "Feels like half the town works at the same three places.",
        "You can walk across downtown in about ten minutes.",
        "Nothing ever seems to happen around here.",
        "I like living somewhere quiet.",
        "Sometimes I miss having more things to do.",
        "The town's changed quite a bit over the years.",
        "You get used to seeing the same faces everywhere.",
        "It's hard to keep anything private around here.",
        "I can't imagine living somewhere huge."
    ],

    hobbies: [
        "I've been trying to get back into reading.",
        "I picked up an old guitar recently. Can't play a thing.",
        "I've been working on my garden whenever I have time.",
        "I started going for walks in the evenings.",
        "I've been watching way too much television lately.",
        "I bought a puzzle last week. Haven't finished it yet.",
        "I like spending my weekends fishing.",
        "I've been trying to learn how to cook.",
        "I collect old records. Probably more than I need.",
        "I've been fixing up an old car in my garage."
    ],

    weekend: [
        "Got any plans for the weekend?",
        "I'm probably just going to stay home this weekend.",
        "We're having a barbecue on Saturday.",
        "I might go fishing if the weather stays nice.",
        "I've got some errands to run this weekend.",
        "Probably going to catch the game with some friends.",
        "I'm overdue for a lazy weekend.",
        "My family wants to go out of town.",
        "I might stop by the diner on Sunday morning.",
        "Nothing planned yet. I kind of like it that way."
    ],

    tired: [
        "I barely slept last night.",
        "I'm running on coffee at this point.",
        "It's been a long day.",
        "I could really use a nap.",
        "I don't know how people wake up this early.",
        "I've been exhausted all week.",
        "I think I fell asleep on the couch last night.",
        "My back's been killing me after work.",
        "I really need a quiet evening.",
        "I'm counting the hours until I can go home."
    ],

    cheerful: [
        "Can't complain. It's been a pretty good day.",
        "Something about today just feels nice.",
        "I finally finished that thing I've been working on.",
        "Got some good news this morning.",
        "I've been in a pretty good mood lately.",
        "It's nice seeing everyone out today.",
        "I think today's going to be a good day.",
        "I got lucky at the grocery store. They had everything I needed.",
        "My coffee came out perfect this morning.",
        "Sometimes you just have a good day for no reason."
    ],

    grumpy: [
        "Everything's more expensive these days.",
        "My alarm went off way too early this morning.",
        "Nothing works properly anymore.",
        "I swear people have forgotten how to drive.",
        "Another day, another problem.",
        "I don't know how anyone gets anything done around here.",
        "My coffee got cold before I could finish it.",
        "The weekend never lasts long enough.",
        "I've had better mornings.",
        "I really should've stayed in bed today."
    ],

    joking: [
        "If I had a dollar for every time someone asked me that, I'd be retired.",
        "I could use a vacation, preferably somewhere nobody knows my name.",
        "My cooking is good enough to keep me alive. That's about it.",
        "I told myself I'd go to bed early tonight. We both know that's not happening.",
        "I'm pretty sure my dog understands me better than most people do.",
        "I keep buying things I don't need. It's becoming a hobby.",
        "I'm not saying I'm lazy. I'm just very efficient with my energy.",
        "My house is clean. You just have to avoid looking at certain rooms.",
        "I have a long list of things to do. Naturally, I'm doing none of them.",
        "I was going to be productive today. Then I sat down."
    ],

    anecdote: [
        "I once got lost driving around here for three hours. Still don't know how.",
        "When I was a kid, there used to be a movie theater downtown.",
        "I broke my arm falling out of a tree when I was twelve.",
        "I once won a pie-eating contest at the county fair.",
        "I used to work at the old grocery store years ago.",
        "My first car barely made it through the winter.",
        "I once spent an entire summer fixing up an old motorcycle.",
        "When I was younger, I wanted to be a teacher.",
        "I learned how to fish from my grandfather.",
        "I still remember the first time I saw snow."
    ],

    flirting: [
        "You always look this good, or is today a special occasion?",
        "I don't think I've seen you around here before. I'd remember.",
        "You're pretty easy on the eyes, you know.",
        "You have a nice smile.",
        "Careful, keep talking like that and I might start liking you.",
        "I was having a pretty boring day until you showed up.",
        "You know, you're kind of charming.",
        "I wouldn't mind running into you again.",
        "You seem like trouble. The fun kind.",
        "I think I could get used to talking to you."
    ],

    subtleFlirting: [
        "It's always nice talking to you.",
        "You have a way of making conversations interesting.",
        "I didn't expect to enjoy this conversation so much.",
        "You seem different from most people around here.",
        "I like your style.",
        "You have a nice laugh.",
        "I always seem to run into you lately.",
        "You're easy to talk to.",
        "I wouldn't mind seeing you around more often.",
        "You've got a good energy about you."
    ],

    compliments: [
        "That's a nice jacket.",
        "I like your hair.",
        "You've got good taste.",
        "You seem like a pretty decent person.",
        "You've got a good sense of humor.",
        "I like the way you carry yourself.",
        "You always seem to know what you're doing.",
        "That's a good look for you.",
        "You've got a pretty memorable face.",
        "You seem to be having a good day."
    ],

    curiosity: [
        "So, what brings you to Hollow Creek?",
        "You settling in around here?",
        "Where'd you grow up?",
        "How long have you been in town?",
        "You like it here so far?",
        "What do you usually do around town?",
        "You got family around here?",
        "You work nearby?",
        "You know many people in town yet?",
        "You planning on staying here long?"
    ],

    observations: [
        "You look like you came prepared for the weather.",
        "That's an interesting choice of shoes.",
        "I don't think I've seen anyone around here dress quite like that.",
        "You always carry that bag around?",
        "You look like you've been walking all day.",
        "You look pretty relaxed today.",
        "You seem like you're in a good mood.",
        "You've got a pretty distinctive style.",
        "You look tired. Long day?",
        "You clean up pretty well."
    ],

    familiar: [
        "There you are. I was wondering when I'd run into you again.",
        "Good to see you.",
        "You been keeping busy?",
        "How's everything going?",
        "Haven't seen you in a while.",
        "You always seem to show up around here.",
        "I was just thinking about you the other day.",
        "How've you been?",
        "Nice seeing a familiar face.",
        "You having a better day than me, I hope."
    ],

    mundane: [
        "I forgot to buy milk again.",
        "I really need to get new shoes.",
        "My phone battery never lasts long enough.",
        "I lost my keys this morning. Found them in my pocket.",
        "I need to remember to call the plumber.",
        "I spent twenty minutes looking for my glasses. They were on my head.",
        "I think I left the oven on. I'll probably check twice when I get home.",
        "I need to stop buying snacks at the gas station.",
        "I haven't done the dishes yet.",
        "I keep forgetting what day it is."
    ],

    nostalgic: [
        "Things felt different around here when I was younger.",
        "I remember when downtown used to be much busier.",
        "We used to spend entire summers outside.",
        "I miss how simple things felt back then.",
        "My parents used to bring me here when I was a kid.",
        "There used to be a little shop on this street.",
        "I haven't thought about those days in years.",
        "Sometimes I miss being a kid.",
        "A lot has changed since I was young.",
        "You don't see kids playing outside as much anymore."
    ],

    opinions: [
        "Pineapple belongs on pizza. I'll stand by that.",
        "I think mornings are overrated.",
        "Coffee tastes better when someone else makes it.",
        "Summer is way too hot.",
        "I'd rather have a quiet night than go to a party.",
        "Dogs are better than cats. Don't tell my neighbor.",
        "I think small towns are underrated.",
        "Breakfast food should be acceptable at any time of day.",
        "Rainy days aren't so bad.",
        "I don't trust anyone who says they don't like fries."
    ],

    teasing: [
        "You always this serious?",
        "You look like you could use some fun.",
        "Don't tell me you actually believe that.",
        "You're going to have to do better than that.",
        "I didn't expect you to say that.",
        "You really have an answer for everything, don't you?",
        "You're kind of funny when you're annoyed.",
        "I can't tell if you're joking or not.",
        "You're more interesting than you look.",
        "I might have underestimated you."
    ],

    odd: [
        "Do you ever get the feeling someone's watching you, then realize it's just a squirrel?",
        "I saw a raccoon stealing someone's trash this morning. Bold little thing.",
        "I swear birds around here are getting smarter.",
        "Have you ever noticed how quiet this town gets at night?",
        "I had the strangest dream last night.",
        "Sometimes I wonder what people do when nobody's looking.",
        "I saw a deer standing in the middle of the road yesterday.",
        "I don't trust automatic doors. They always open before I'm ready.",
        "You ever just forget why you walked into a room?",
        "I think my neighbor's cat has been judging me for years."
    ],

    politeExit: [
        "It was nice talking to you.",
        "Well, I'd better let you get back to whatever you were doing.",
        "Good talking to you.",
        "I'll see you around.",
        "Take care.",
        "Have a good one.",
        "Enjoy the rest of your day.",
        "I'll catch you later.",
        "Nice meeting you.",
        "Hope you have a good day."
    ]

};

module.exports = { casualDialogue };