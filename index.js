// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Bootswatch Theme Selector</h1>`;


/* When a theme-change item is selected, update theme */
jQuery(function($) {
    $('body').on('click', '.change-style-menu-item', function() {
      var theme_name = $(this).attr('rel');
      var theme = "//netdna.bootstrapcdn.com/bootswatch/3.0.0/" + theme_name + "/bootstrap.min.css";
      console.log(theme);
      set_theme(theme);
    });
});

function set_theme(theme) {
  $('link[title="main"]').attr('href', theme);
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

var supports_storage = supports_html5_storage();

/* On load, set theme from local storage */
if (supports_storage) {
  var theme = localStorage.theme;
  if (theme) {
    set_theme(theme);
  }
} else {
  /* Don't annoy user with options that don't persist */
  $('#theme-dropdown').hide();
}