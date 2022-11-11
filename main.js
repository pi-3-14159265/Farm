//This is going to be like cookie clicker!
let itemType = document.getElementById("item-type").innerHTML;
let money = document.getElementById("total-money").innerHTML;
//Notice that money and itemType are link to there HTML side so we create new ones
let rawMoney = document.getElementById("total-money");
let rawItemType = document.getElementById("item-type");
let obj = document.getElementById("obj");
let chicPrice = document.getElementById("chic-price");
let chicOwn = document.getElementById("chic-own");
let MpS = document.getElementById("MpS");
let grainPrice = document.getElementById("grain-price");
let grainOwn = document.getElementById("grain-own");
let upgradeCost = document.getElementById("upgrade-cost");
let milkPrice = document.getElementById("milk-price");
let milkOwn = document.getElementById("milk-own");
let ricePrice = document.getElementById("rice-price");
let riceOwn = document.getElementById("rice-own");
let tomatoPrice = document.getElementById("tomato-price");
let tomatoOwn = document.getElementById("tomato-own");
let rasPrice = document.getElementById("ras-price");
let rasOwn = document.getElementById("ras-own");
let peachPice = document.getElementById("Peach-price");
let peachOwn = document.getElementById("Peach-own");
let muti = "1";
let buildingsOwn = 0;
let timeBeforVanish = 7000;
let spawnTime = 6700;
let chicMuti = 0;
let grainMuti = 0;
let milkMuti = 0;
let tomatoMuti = 0;
let riceMuti = 0;
let rasMuti = 0;
let peachMuti = 0;
let MpS_muti = 1


function updateMoney() {
    document.getElementById('total-money').innerHTML = money;
}
/*
function killClones() {
    document.getElementById('_1').innerHTML = '';
    document.getElementById('_2').innerHTML = '';
    document.getElementById('_3').innerHTML = '';
    document.getElementById('_4').innerHTML = '';
    document.getElementById('_5').innerHTML = '';
    document.getElementById('_6').innerHTML = '';
    document.getElementById('_7').innerHTML = '';
    document.getElementById('_8').innerHTML = '';
    document.getElementById('_9').innerHTML = '';
    document.getElementById('_10').innerHTML = '';
    document.getElementById('_11').innerHTML = '';
    document.getElementById('_12').innerHTML = '';
    document.getElementById('_13').innerHTML = '';
    document.getElementById('_14').innerHTML = '';
    document.getElementById('_15').innerHTML = '';
    document.getElementById('_16').innerHTML = '';
    document.getElementById('_17').innerHTML = '';
    document.getElementById('_18').innerHTML = '';
    document.getElementById('_19').innerHTML = '';
    document.getElementById('_20').innerHTML = '';
}
*/

function press() {
    if (itemType === 'Egg') {
        money = Number(eval(money+"+1"+"*"+muti));
        document.getElementById('total-money').innerHTML = money;
    }
    if (itemType === "Grain") {
        money = Number(eval(money+"+5"+"*"+muti));
        document.getElementById('total-money').innerHTML = money;
    }
    if (itemType === "Corn") {
        money = Number(eval(money+"+10"+"*"+muti));
        document.getElementById('total-money').innerHTML = money;
    }



    if (money >= 80 || Number(chicOwn.innerHTML) > 0) {
        document.getElementById("chic").style.visibility = "visible"
        document.getElementById("chic-own-tag").style.visibility = "visible"
    } 
    if (money >= 300 || Number(grainOwn.innerHTML) > 0) {
        document.getElementById("grain").style.visibility = "visible"
        document.getElementById("grain-own-tag").style.visibility = "visible"
    } 
    if (money >= 800 || Number(milkOwn.innerHTML) > 0) {
        document.getElementById("milk").style.visibility = "visible"
        document.getElementById("milk-own-tag").style.visibility = "visible"
    } 
    if (money >= 5000 || Number(riceOwn.innerHTML) > 0) {
        document.getElementById("rice").style.visibility = "visible"
        document.getElementById("rice-own-tag").style.visibility = "visible"
    } 
    if (money >= 20000 || Number(tomatoOwn.innerHTML) > 0) {
        document.getElementById("tomato").style.visibility = "visible"
        document.getElementById("tomato-own-tag").style.visibility = "visible"
    } 
    if (money >= 40000 || Number(rasOwn.innerHTML) > 0) {
        document.getElementById("ras").style.visibility = "visible"
        document.getElementById("ras-own-tag").style.visibility = "visible"
    } 
    if (money >= 80000 || Number(peachOwn.innerHTML) > 0) {
        document.getElementById("peach").style.visibility = "visible"
        document.getElementById("peach-own-tag").style.visibility = "visible"
    } 

        //killClones()
        //let randint = Math.floor(Math.random() * 21);
        //let randpar = "_"+String(randint)
        //let elem = document.getElementById(randpar).style;
        //let pos = 30;
        //elem.opacity = 1
        //elem.left = "130px"
        //elem.top = "200px"
        //clearInterval(id);
        //id = setInterval(effct,1);
        //document.getElementById(randpar).innerHTML = "+"+"1";
        //function effct() {
        //    if (pos == 200) {
        //        clearInterval(id)
        //    } else {
        //        pos++;
        //        //elem.opacity = pos
        //        elem.position = 'relative' 
        //        elem.bottem = String(500+(pos)/2)+"px"
        //    }
        //killClones()
}
/*
function buyChic() {
    if (money >= chicPrice.innerHTML) {
        money -= chicPrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        chicOwn.innerHTML = Number(eval(chicOwn.innerHTML+"+1"));
        chicOwn.innerHTML = chicOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+1")
        chicPrice.innerHTML = Math.ceil(Number(chicPrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyGrain() {
    if (money >= grainPrice.innerHTML) {
        money -= grainPrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        grainOwn.innerHTML = Number(eval(grainOwn.innerHTML+"+1"));
        grainOwn.innerHTML = grainOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+5")
        grainPrice.innerHTML = Math.ceil(Number(grainPrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyMilk() {
    if (money >= milkPrice.innerHTML) {
        money -= milkPrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        milkOwn.innerHTML = Number(eval(milkOwn.innerHTML+"+1"));
        milkOwn.innerHTML = milkOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+10")
        milkPrice.innerHTML = Math.ceil(Number(milkPrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyRice() {
    if (money >= ricePrice.innerHTML) {
        money -= ricePrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        riceOwn.innerHTML = Number(eval(riceOwn.innerHTML+"+1"));
        riceOwn.innerHTML = riceOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+15")
        ricePrice.innerHTML = Math.ceil(Number(ricePrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyTomato() {
    if (money >= tomatoPrice.innerHTML) {
        money -= tomatoPrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        tomatoOwn.innerHTML = Number(eval(tomatoOwn.innerHTML+"+1"));
        tomatoOwn.innerHTML = tomatoOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+30")
        tomatoPrice.innerHTML = Math.ceil(Number(tomatoPrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyRas() {
    if (money >= rasPrice.innerHTML) {
        money -= rasPrice.innerHTML
        updateMoney()
        buildingsOwn += 1
        rasOwn.innerHTML = Number(eval(rasOwn.innerHTML+"+1"));
        rasOwn.innerHTML = rasOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+50")
        rasPrice.innerHTML = Math.ceil(Number(rasPrice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function buyPeach() {
    if (money >= peachPice.innerHTML) {
        money -= peachPice.innerHTML
        updateMoney()
        buildingsOwn += 1
        peachOwn.innerHTML = Number(eval(peachOwn.innerHTML+"+1"));
        peachOwn.innerHTML = peachOwn.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+100")
        peachPice.innerHTML = Math.ceil(Number(peachPice.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}
*/
function buyItem(price, own, value) {
    if (money >= price.innerHTML) {
        money -= price.innerHTML
        updateMoney()
        buildingsOwn += 1
        own.innerHTML = Number(eval(own.innerHTML+"+1"));
        own.innerHTML = own.innerHTML
        MpS.innerHTML = eval(MpS.innerHTML+"+"+String(value))
        price.innerHTML = Math.ceil(Number(price.innerHTML)*1.25)
    } else {
        console.log("something went wrong")
    }
}

function upp() {
    if (money >= upgradeCost.innerHTML && document.getElementById("click-me").src == "https://pi-3-14159265.github.io/Farm/grain-click.png") {
        money -= Number(upgradeCost.innerHTML)
        itemType = "Corn"
        document.getElementById("item-type").innerHTML = "Corn"
        document.getElementById("click-me").src = "corn.png"
        upgradeCost.innerHTML = eval(upgradeCost.innerHTML+"*5")
    } else {
        console.log("SOMETHING WENT WRONG")
    }
    if (money >= upgradeCost.innerHTML && document.getElementById("click-me").src == "https://pi-3-14159265.github.io/Farm/egg.png") {
        money -= Number(upgradeCost.innerHTML)
        itemType = "Grain"
        document.getElementById("item-type").innerHTML = "Wheat"
        document.getElementById("click-me").src = "grain-click.png"
        upgradeCost.innerHTML = eval(upgradeCost.innerHTML+"*5") 
    } else {
        console.log("SOMETHING WENT WRONG")
    }
}

function news() {
    //console.log("banner")
    let newsBanner = document.getElementById("news");
    let progress = 41;
    if (itemType == "Grain") {
        progress += 10
    }
    if (itemType == "Corn") {
        progress += 39
    }
    let story = Math.floor(Math.random()*progress)
    //console.log(story)
    if (story == 0) {
        newsBanner.innerHTML = "Local women eats egg!";
        //console.log("this worked")
    }
    if (story == 1) {
        newsBanner.innerHTML = "ahh a day in the life";
    }
    if (story == 2) {
        newsBanner.innerHTML = "Clicking random items is hard work.";
    }
    if (story == 3) {
        newsBanner.innerHTML = "You decide to sell your eggs";
    }
    if (story == 4) {
        newsBanner.innerHTML = "Why is an egg worth a dollar? You have no idea!";
    }
    if (story == 5) {
        newsBanner.innerHTML = "You wonder if there's any point in playing this game";
    }
    if (story == 6) {
        newsBanner.innerHTML = "Experts say 'Farming is easy all you do is smash a button'";
    }
    if (story == 7) {
        newsBanner.innerHTML = "Local kids break into farm to click a button";
    }
    if (story == 8) {
        newsBanner.innerHTML = "You are starting to be the talk of the town";
    }
    if (story == 9) {
        newsBanner.innerHTML = "You hire local kid to take people on tours of the farm!";
    }
    if (story == 10) {
        newsBanner.innerHTML = "Man Found To Be Stock Piling Eggs Intentions Unknown";
    }
    if (story == 11) {
        newsBanner.innerHTML = "A local dinner buys some of your eggs";
    }
    if (story == 12) {
        newsBanner.innerHTML = "journalist removed from press because bad grammar";
    }
    if (story == 13) {
        newsBanner.innerHTML = "You install Node.js to your compute only to discover Python is better.";
    }
    if (story == 14) {
        newsBanner.innerHTML = "Local asylum prison escapes.";
    }
    if (story == 15) {
        if (Number(chicOwn) >= 1) {
            newsBanner.innerHTML = "You look longingly at your chickens wishing to be able to live a care free life and peck the ground";
        } else {
            newsBanner.innerHTML = "You wish you have some chickens to lay eggs for you.";
        }
    }
    if (story == 16) {
        newsBanner.innerHTML = "Sometimes you lay awake at night and wonder why dose a raspberry plant cost "+String(rasPrice.innerHTML);
    }
    if (story == 17) {
        newsBanner.innerHTML = "Competing farm goes bankrupt";
    }
    if (story == 18) {
        newsBanner.innerHTML = "You wonder what's on line 339";//lol looked
    }
    if (story == 19) {
        if (Number(buildingsOwn) > 10) {
            newsBanner.innerHTML = "People come from adjacent towns to buy your "+itemType;
        } else {
            newsBanner.innerHTML = "you wish more people would buy your eggs";
        }
    }
    if (story == 20) {
        newsBanner.innerHTML = "Teens vandalize house with eggs";
    }
    if (story == 21) {
        newsBanner.innerHTML = "Ever heard of Cookie Clicker";
    }
    if (story == 22) {
        newsBanner.innerHTML = "Riot Breaks Out Over Discussion Over Eggs: Which Is Better The Yoke Or The Whites";
    }
    if (story == 23) {
        newsBanner.innerHTML = "I hope your not thinking of cheating!";
    }
    if (story == 24) {
        newsBanner.innerHTML = "Secret Society Found At Local Private School They Call Themselves The DPS";
    }
    if (story == 25) {
        newsBanner.innerHTML = "Local School Bans Paper";
    }
    if (story == 26) {
        newsBanner.innerHTML = "Running out of ink pleas send mor";
    }
    if (story == 27) {
        newsBanner.innerHTML = "Man Discovers Eggs Can Be Deep Fried";
    }
    if (story == 28) {
        newsBanner.innerHTML = "Women makes cookies with your eggs";
    }
    if (story == 29) {
        newsBanner.innerHTML = "Goose Eggs On The Rise Buy Them At Local Asian Store!";
    }
    if (story == 30) {
        newsBanner.innerHTML = "Egg Jokes On The Rise";
    }
    if (story == 31) {
        newsBanner.innerHTML = "People Love Your Eggs";
    }
    if (story == 32) {
        newsBanner.innerHTML = "Celebrities Eat Eggs Too!";
    }
    if (story == 33) {
        newsBanner.innerHTML = "Why Did I Write This One";
    }
    if (story == 34) {
        newsBanner.innerHTML = "Man Steels "+String(Math.floor(Math.random()*1000))+" Eggs From Farm Next Door";
    }
    if (story == 35) {
        newsBanner.innerHTML = "Dinners Now Serve Eggs";
    }
    if (story == 36) {
        newsBanner.innerHTML = "You try to negotiate with a chickens for more eggs. Not going well.";
    }
    if (story == 37) {
        newsBanner.innerHTML = "Chicken On The Ballot For Town Sheriff";
    }
    if (story == 38) {
        newsBanner.innerHTML = "Some Times You Lay Awake At Night Think Your Area Might Have Obsessions";
    }
    if (story == 39) {
        newsBanner.innerHTML = "Local Criminal Steels 30 Laptops Demands 1000 Eggs For The Safe Return Of Laptops ";
    }
    if (story == 40) {
        newsBanner.innerHTML = "At 2:48 AM Elvis was spotted driving in a car along with Waldo";
    }
    /*

    These next events have a chance of happening only if your on the wheat stage 

    */
    if (story == 41) {
        newsBanner.innerHTML = "Wheat gives you a better source of money";
    }
    if (story == 42) {
        newsBanner.innerHTML = "People come from all over the state to see your farm!";
    }
    if (story == 43) {
        newsBanner.innerHTML = "You hire a lorry driver to ship wheat all over the state";
    }
    if (story == 44) {
        newsBanner.innerHTML = "Car Crash";
    }
    if (story == 45) {
        newsBanner.innerHTML = "local scientist research show genetically enhanced plants may be the future";
    }
    if (story == 46) {
        newsBanner.innerHTML = "After a long days work you eat a dinner on 1 egg";
    }
    if (story == 47) {
        newsBanner.innerHTML = "Ohh you're still here";
    }
    if (story == 48) {
        newsBanner.innerHTML = "Plane Crashes Leaving Sydney On Trip To LA";
    }
    if (story == 49) {
        newsBanner.innerHTML = "Scientist find alternative Water";
    }
    if (story == 50) {
        newsBanner.innerHTML = "Celebreality says 'Wheat is my favorite color' ";
    }
    /*

    This Is A FAKE BREAK Its Real now

    */
    if (story == 51) {
        newsBanner.innerHTML = "Experts say 'Talking to chickens increases egg production'";
    }
    if (story == 52) {
        newsBanner.innerHTML = "Celebreality Eats Grain At Party' ";
    }
    if (story == 53) {
        newsBanner.innerHTML = "Putting on some Weight? Eat Grain!";
    }
    if (story == 54) {
        newsBanner.innerHTML = "Quakers Protest";
    }
    if (story == 55) {
        newsBanner.innerHTML = "Grain Now Has A Theme Song!";
    }
    if (story == 56) {
        newsBanner.innerHTML = "Experts Find Grain In Ancient Tomb";
    }
    if (story == 57) {
        newsBanner.innerHTML = "Grain Found To Be Alternative To Cannibalism!";
    }
    if (story == 58) {
        newsBanner.innerHTML = "Man Wins Lotto of 50 Million, Buys Grain";
    }
    if (story == 59) {
        newsBanner.innerHTML = "Gluten-Freers Cause Riot At Factory ";
    }
    if (story == 60) {
        newsBanner.innerHTML = "People Consider Switching Farm-Goods To Money";
    /*

    this is a break

    */
    }
    if (story == 61) {
        newsBanner.innerHTML = "Local weather man claims it will rain eggs";
    }
    if (story == 62) {
        newsBanner.innerHTML = "You just learned that you where hatched";
    }
    if (story == 63) {
        newsBanner.innerHTML = "You found a your cows with a type writer";
    }
    if (story == 64) {
        newsBanner.innerHTML = "You start to wonder who made the corn song";
    }
    if (story == 65) {
        newsBanner.innerHTML = "I hope you have a corntastic day";
    }
    if (story == 66) {
        newsBanner.innerHTML = "You start to wonder if reality is real or if your in a stimulation";
    }
    if (story == 67) {
        newsBanner.innerHTML = "you wonder if it's cannibalism for a corn to eat pop corn";
    }
    if (story == 68) {
        newsBanner.innerHTML = "you wonder who was the first person to eat corn and what there reasoning behind it was";
    } 
    if (story == 69) {
        newsBanner.innerHTML = "Does corn go on pizza? what about eggs?";
    }
    if (story == 70) {
        newsBanner.innerHTML = "Local news out reach starts to question how the chickens are laying one egg each second";
    }
    if (story == 71) {
        newsBanner.innerHTML = "Your lawn was egged you with 'with your mom' you question if it was aliens or local kids";
    }
    if (story == 72) {
        newsBanner.innerHTML = "you buy butter for your corn";
    }
    if (story == 73) {
        newsBanner.innerHTML = "You started to question how much popcorn comes from all this corn.";
    }
    if (story == 74) {
        newsBanner.innerHTML = "You wonder if grain is real then you eat a bread";
    }
    if (story == 75) {
        newsBanner.innerHTML = "news says Gluten free bread is on the rise.";
    }
    if (story == 76) {
        newsBanner.innerHTML = "old mc Donald had a farm and on this far he had "+String(chicOwn.innerHTML)+" chickens";
    }
    if (story == 77) {
        newsBanner.innerHTML = "the news states that eggs help you with your hunger other side calls this fake news";
    }
    if (story == 78) {
        newsBanner.innerHTML = "You read a fortune cookie that tells you to start a farm.";
    }
    if (story == 79) {
        newsBanner.innerHTML = "You read a unusual fortune cookie which claims that you will die in three you ate the rest of the note.";
    }
}

function recoverData() {
    money = localStorage.getItem("money")
    itemType = localStorage.getItem("item")
    MpS.innerHTML = localStorage.getItem("mps")
    chicPrice.innerHTML = localStorage.getItem("chicPrice")
    chicOwn.innerHTML = localStorage.getItem("chicCount")
    grainOwn.innerHTML = localStorage.getItem("grainOwn")
    grainPrice.innerHTML = localStorage.getItem("grainPrice")
    milkOwn.innerHTML = localStorage.getItem("milkOwn")
    milkPrice.innerHTML = localStorage.getItem("milkPrice")
    riceOwn.innerHTML = localStorage.getItem("riceOwn")
    ricePrice.innerHTML = localStorage.getItem("ricePrice")
    tomatoOwn.innerHTML = localStorage.getItem("tomatoOwn")
    tomatoPrice.innerHTML = localStorage.getItem("tomatoPrice")
    rasOwn.innerHTML = localStorage.getItem("rasOwn")
    rasPrice.innerHTML = localStorage.getItem("rasPrice")
    peachOwn.innerHTML = localStorage.getItem("peachOwn")
    peachPice.innerHTML = localStorage.getItem("peachPrice")
    document.getElementById("click-me").src = localStorage.getItem("clickMePic")
    upgradeCost.innerHTML = localStorage.getItem("upgradePrice")
}

function saveData() {
    localStorage.clear()
    localStorage.setItem("money",money)
    localStorage.setItem("item",itemType)
    localStorage.setItem("mps",MpS.innerHTML)
    localStorage.setItem("chicCount",chicOwn.innerHTML)
    localStorage.setItem("chicPrice",chicPrice.innerHTML)
    localStorage.setItem("grainOwn",grainOwn.innerHTML)
    localStorage.setItem("grainPrice",grainPrice.innerHTML)
    localStorage.setItem("milkOwn",milkOwn.innerHTML)
    localStorage.setItem("milkPrice",milkPrice.innerHTML)
    localStorage.setItem("riceOwn",riceOwn.innerHTML)
    localStorage.setItem("ricePrice",ricePrice.innerHTML)
    localStorage.setItem("tomatoOwn",tomatoOwn.innerHTML)
    localStorage.setItem("tomatoPrice",tomatoPrice.innerHTML)
    localStorage.setItem("rasOwn",rasOwn.innerHTML)
    localStorage.setItem("rasPrice",rasPrice.innerHTML)
    localStorage.setItem("peachOwn",peachOwn.innerHTML)
    localStorage.setItem("peachPrice",peachPice.innerHTML)
    localStorage.setItem("clickMePic", document.getElementById("click-me").src)
    localStorage.setItem("upgradePrice",upgradeCost.innerHTML)
    console.log("SAVED!")
}

function MpS_count() {
    //money += ((MpS_muti*((Number(chicOwn.innerHTML)*(1+chicMuti))+(Number(grainOwn.innerHTML)*(5+grainMuti))+(Number(milkOwn.innerHTML)*(10+milkMuti))+(Number(riceOwn.innerHTML)*(15+riceMuti))+(Number(tomatoOwn.innerHTML)*(30+tomatoMuti))+(Number(rasOwn.innerHTML)*(50+rasMuti))+(Number(peachOwn.innerHTML)*(100+peachMuti))))/10)
    money = (Math.round(((Number(MpS.innerHTML)/10)+Number(money))*100))/100
    updateMoney()
}

function harvestClick() {
    document.getElementById("harvest").style.visibility = "hidden"
    money = money*1.20
    updateMoney()
    //console.log("yes")
}

function harvest() {
    document.getElementById("harvest").style.visibility = "visible";
    document.getElementById("harvest").style.position = "relative"
    document.getElementById("harvest").style.left = String(Math.floor(Math.random()*1000))+"px";
    document.getElementById("harvest").style.bottom = String(Math.floor(Math.random()*500))+"px";
    setTimeout(() => {
        document.getElementById("harvest").style.visibility = "hidden";
    }, 7000)
    //spawnTime = (70+Math.floor(Math.random()*20))*1000
    //console.log("Got to the end "+String(Math.floor(Math.random()*1000))+"px"+String(Math.floor(Math.random()*500))+"px")
}
setInterval(MpS_count,100)
setInterval(news,4000)
setInterval(harvest,(70+Math.floor(Math.random()*20))*1000)
//setInterval(saveData, 20000)
