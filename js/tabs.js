$('.character-nav').each(function(){               // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');           // Get the active list item
  var $link = $tab.find('a');                   // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
        id = this.hash;                          // Get href of clicked tab 

    if (id && !$link.is('.active')) {           // If not currently active
        $tab = $link.parent().toggleClass('active');   // Toggles between tabs with active class
      $panel = $(id).toggleClass('active');        // Toggles between panels with active class
        
        $tab.siblings().removeClass('active');                 // Make sibling tabs inactive
      $panel.siblings().removeClass('active');               // Make sibling panels inactive
    }
         
  });
});