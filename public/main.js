// This is Javascript file
$( function() {
    var availableTags = [
      "Hello",
      "Titanic", 
      "Rush hour 1",
      "Ruah houe 2",
      "Rush hour 3",
      "Harry Potter",
      "Bad Eggs",
      "Bad Girl",
      "Bad Girls",
      "Bad Guy",
      "Bad Guys Always Die"
    ];
    $( "#search" ).autocomplete({
      source: availableTags
    });
  } );
  
/* global $*/
