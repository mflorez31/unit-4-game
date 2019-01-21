src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

$(document).ready(function() {
var allHeros = ["lukeSkywalker", "chewbacca", "yoda", "darthMaul", "darthVader", "bobaFett"];    
console.log(allHeros)

var lukeSkywalker = {
    name: "Luke Skywalker",
    side: "rebels",
    HP: "100",
    At: "20"
}

var chewbacca = {
    name: "Chewbacca",
    side: "rebels",
    HP: "150",
    At: "10"
}

var yoda = {
    name: "Yoda",
    side: "rebels",
    HP: "80",
    At: "30"
}

var darthMaul = {
    name: "Darth Maul ",
    side: "empire",
    HP: "100",
    At: "20"
}

var darthVader = {
    name: "Darth Vader",
    side: "empire",
    HP: "120",
    At: "15"
}

var bobaFett = {
    name: "Boba Fett",
    side: "empire",
    HP: "130",
    At: "10"
}


    $('#button-rebels').click(function() {
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
        $("heroImage1").text("You have choosen")
        $('#heroImage2').hide();
        $("#heroName2").hide();
        $("#heroHP2").hide();
        $("#heroAt2").hide();

        
    })

});    
