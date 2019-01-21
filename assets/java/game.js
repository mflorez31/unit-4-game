src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

$(document).ready(function() {
var allHeros = ["lukeSkywalker", "chewbacca", "yoda", "darthMaul", "darthVader", "bobaFett"];    
console.log(allHeros)

var lukeSkywalker = {
    name: "Luke Skywalker",
    side: "rebels",
    HP: "100",
    At: "20",
    Pic: function(){
        var imageHero = $("<img>");
        imageHero.attr("src", "assets/images/Luke-skywalker.jpg");
        imageHero.attr('width', "300");
        $("#heroPickImg").append(imageHero);
    }
}

var chewbacca = {
    name: "Chewbacca",
    side: "rebels",
    HP: "150",
    At: "10",
    Pic: function(){
        var imageHero = $("<img>");
        imageHero.attr("src", "assets/images/Chewbacca.jpg");
        imageHero.attr('width', "300");
        $("#heroPickImg").append(imageHero);}
}

var yoda = {
    name: "Yoda",
    side: "rebels",
    HP: "80",
    At: "30",
    Pic: function(){
        var imageHero = $("<img>");
        imageHero.attr("src", "assets/images/yoda.jpg");
        imageHero.attr('width', "300");
        $("#heroPickImg").append(imageHero);}
}

var darthMaul = {
    name: "Darth Maul ",
    side: "empire",
    HP: "100",
    At: "20",
    Pic: function(){
        var imageEnemy = $("<img>");
        imageEnemy.attr("src", "assets/images/darth-maul.jpg");
        imageEnemy.attr('width', "300");
        $("#enemyPickImg").append(imageEnemy);}
}

var darthVader = {
    name: "Darth Vader",
    side: "empire",
    HP: "120",
    At: "15",
    Pic: function(){
        var imageEnemy = $("<img>");
        imageEnemy.attr("src", "assets/images/darth-vader.jpg");
        imageEnemy.attr('width', "300");
        $("#enemyPickImg").append(imageEnemy);}
}

var bobaFett = {
    name: "Boba Fett",
    side: "empire",
    HP: "130",
    At: "10",
    Pic: function(){
        var imageEnemy = $("<img>"); 
        imageEnemy.attr("src", "assets/images/boba_fett.jpg");
        imageEnemy.attr('width', "300");
        $("#enemyPickImg").append(imageEnemy);}
}

var hero = "";
var enemy = "";
var side = "";

function heroHide(){
    $('#heroImage1').hide();
    $("#heroName1").hide();
    $("#heroHP1").hide();
    $("#heroAt1").hide();
    $('#heroImage2').hide();
    $("#heroName2").hide();
    $("#heroHP2").hide();
    $("#heroAt2").hide();
    $('#heroImage3').hide();
    $("#heroName3").hide();
    $("#heroHP3").hide();
    $("#heroAt3").hide();
}

function choosenHero(){
  hero.Pic();
  $("#heroPickName").text(hero.name);
  $("#heroPickHP").text("HP: "+hero.HP);
  $("#heroPickAT").text("Attack: "+hero.At);
}

function choosenEnemy(){
    enemy.Pic();
    $("#enemyPickName").text(enemy.name);
    $("#enemyPickHP").text("HP: "+enemy.HP);
    $("#enemyPickAT").text("Attack: "+enemy.At);
    $("#enemyPickImg").show();
  }


    $('#button-rebels').click(function() {
        side = "rebels";
        $('<img />').attr({
            'id': 'heroImage1',
            'src': 'assets/images/Luke-skywalker.jpg',
            'width': 250
        }).appendTo('#heroImage1');  
        $("#heroName1").text(lukeSkywalker.name);
        $("#heroHP1").text("HP: "+lukeSkywalker.HP);
        $("#heroAt1").text("Attack: "+lukeSkywalker.At);

        $('<img />').attr({
            'id': 'heroImage2',
            'src': 'assets/images/Chewbacca.jpg',
            'width': 250
        }).appendTo('#heroImage2');
        $("#heroName2").text(chewbacca.name);
        $("#heroHP2").text("HP: "+chewbacca.HP);
        $("#heroAt2").text("Attack: "+chewbacca.At);

       $('<img />').attr({
            'id': 'heroImage3',
            'src': 'assets/images/yoda.jpg',
            'width': 250
        }).appendTo('#heroImage3');
        $("#heroName3").text(yoda.name);
        $("#heroHP3").text("HP: "+yoda.HP);
        $("#heroAt3").text("Attack: "+yoda.At);

        $('<img />').attr({
            'id': 'enemyImage1',
            'src': 'assets/images/boba_fett.jpg',
            'width': 250
        }).appendTo('#enemyImage1');
        $("#enemyName1").text(bobaFett.name);
        $("#enemyHP1").text("HP: "+bobaFett.HP);
        $("#enemyAt1").text("Attack: "+bobaFett.At);

        $('<img />').attr({
            'id': 'enemyImage2',
            'src': 'assets/images/darth-maul.jpg',
            'width': 250
        }).appendTo('#enemyImage2');
        $("#enemyName2").text(darthMaul.name);
        $("#enemyHP2").text("HP: "+darthMaul.HP);
        $("#enemyAt2").text("Attack: "+darthMaul.At);

       $('<img />').attr({
            'id': 'enemyImage3',
            'src': 'assets/images/darth-vader.jpg',
            'width': 250
        }).appendTo('#enemyImage3');
        $("#enemyName3").text(darthVader.name);
        $("#enemyHP3").text("HP: "+darthVader.HP);
        $("#enemyAt3").text("Attack: "+darthVader.At);

        $('#button-rebels').hide();
        $('#button-empire').hide();   
    });          


    $('#button-empire').click( function() {
        side = "empire";
        $('<img />').attr({
            'id': 'heroImage1',
            'src': 'assets/images/boba_fett.jpg',
            'width': 250
        }).appendTo('#heroImage1');  
        $("#heroName1").text(bobaFett.name);
        $("#heroHP1").text("HP: "+bobaFett.HP);
        $("#heroAt1").text("Attack: "+bobaFett.At);

        $('<img />').attr({
            'id': 'heroImage2',
            'src': 'assets/images/darth-maul.jpg',
            'width': 250
        }).appendTo('#heroImage2');
        $("#heroName2").text(darthMaul.name);
        $("#heroHP2").text("HP: "+darthMaul.HP);
        $("#heroAt2").text("Attack: "+darthMaul.At);

       $('<img />').attr({
            'id': 'heroImage3',
            'src': 'assets/images/darth-vader.jpg',
            'width': 250
        }).appendTo('#heroImage3');
        $("#heroName3").text(darthVader.name);
        $("#heroHP3").text("HP: "+darthVader.HP);
        $("#heroAt3").text("Attack: "+darthVader.At);
        

        $('<img />').attr({
            'id': 'enemyImage1',
            'src': 'assets/images/Luke-skywalker.jpg',
            'width': 250
        }).appendTo('#enemyImage1');  
        $("#enemyName1").text(lukeSkywalker.name);
        $("#enemyHP1").text("HP: "+lukeSkywalker.HP);
        $("#enemyAt1").text("Attack: "+lukeSkywalker.At);

        $('<img />').attr({
            'id': 'enemyImage2',
            'src': 'assets/images/Chewbacca.jpg',
            'width': 250
        }).appendTo('#enemyImage2');
        $("#enemyName2").text(chewbacca.name);
        $("#enemyHP2").text("HP: "+chewbacca.HP);
        $("#enemyAt2").text("Attack: "+chewbacca.At);

        $('<img />').attr({
            'id': 'enemyImage3',
            'src': 'assets/images/yoda.jpg',
            'width': 250
        }).appendTo('#enemyImage3');
        $("#enemyName3").text(yoda.name);
        $("#enemyHP3").text("HP: "+yoda.HP);
        $("#enemyAt3").text("Attack: "+yoda.At);

        $('#button-rebels').hide();
        $('#button-empire').hide();
    });

    $("#heroImage1").click( function() {
        $("#heroText1").text("You have choosen")
        heroHide();
        $("#heroText2").text("VRS");
        if ( side === "rebels" ){
            hero = lukeSkywalker;
        }else {
            hero = bobaFett;
        }
        choosenHero();
    })
    $("#heroImage2").click( function() {
        heroHide();
        if ( side === "rebels" ){
            hero = chewbacca;
            choosenHero();

        }else {
            hero = darthMaul;
        }
    })
    $("#heroImage3").click( function() {
        heroHide();
        if ( side === "rebels" ){
            hero = yoda;
            choosenHero();
        }else {
            hero = darthVader;
        }
    })

    
    $("#enemyImage1").click( function() {
        $('#enemyImage1').hide();
        $("#enemyName1").hide();
        $("#enemyHP1").hide();
        $("#enemyAt1").hide();
        if ( side === "rebels" ){
            enemy = bobaFett;
            
        }else {
            enemy = lukeSkywalker;
        }
        choosenEnemy();
    })
    $("#enemyImage2").click( function() {
        $('#enemyImage2').hide();
        $("#enemyName2").hide();
        $("#enemyHP2").hide();
        $("#enemyAt2").hide();
        if ( side === "rebels" ){
            enemy = darthMaul;
        }else {
            enemy = chewbacca;
        }
        choosenEnemy();
    })
    $("#enemyImage3").click( function() {
        $("#enemyText1").text("You have choosen")
        $('#enemyImage3').hide();
        $("#enemyName3").hide();
        $("#enemyHP3").hide();
        $("#enemyAt3").hide();
        if ( side === "rebels" ){
            enemy = darthVader;
        }else {
            enemy = yoda;
        }
        choosenEnemy();
    })

    $("#Attack").click( function(){
        
        console.log(hero);
        console.log(enemy);
        enemy.HP = enemy.HP-hero.At;
        hero.HP = hero.HP-enemy.At;
        hero.At = hero.At*2;
        console.log(hero);
        console.log(enemy);
        $("#heroPickHP").text("HP: "+hero.HP);
        $("#heroPickAT").text("Attack: "+hero.At);
        $("#enemyPickHP").text("HP: "+enemy.HP);
        $("#enemyPickAT").text("Attack: "+enemy.At);

        if ( hero.HP <= 0 ){
            alert("You lose")
            $("#heroPickHP").text("Better luck next time.");
            $("#heroPickAT").text("The galaxy will morn your loss");
        }
        if (enemy.HP <= 0 ){
            alert("You have defeated "+ enemy.name + "  choose next enemy");
            $("#enemyPickName").text("");
            $("#enemyPickHP").text("");
            $("#enemyPickAT").text("");
            $("#enemyPickImg").hide();

        }

    })

});    
