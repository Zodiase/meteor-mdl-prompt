### A simple prompt solution with mdl for meteor.

Usage
-----

```JavaScript
// JavaScript with jQuery

// To display the prompt window, send an event to `document.body` with appropriate options.
$(document.body).trigger('__mdl__prompt', {
  // Optional prompt title.
  // If omitted, only the prompt message is displayed.
  title: 'Prompt Title',

  // Prompt message.
  // If omitted, Empty String will be used.
  message: 'Prompt message!',

  // Options for the yes/confirm button.
  // If omitted, the button will not be displayed.
  yes: {
    // Override option for the title of the button.
    // Default is 'Yes'.
    title: 'Yes Button',
    // Optional callback when this button is clicked.
    action: function () {/* Do things here. */}
  },

  // Options for the no/cancel button.
  // If omitted, the button will not be displayed.
  // Note that clicking on the background mask triggers this button,
  // therefore if omitted, the prompt can only be discarded by clicking the yes button.
  no: {
    // Override option for the title of the button.
    // Default is 'No'.
    title: 'No Button',
    // Optional callback when this button is clicked.
    action: function () {/* Do things here. */}
  }
});
```

Examples
--------

```JavaScript
// JavaScript with jQuery

// Display a notice that can be discarded by clicking either the OK button or the background mask.
$(document.body).trigger('__mdl__prompt', {
  message: 'Hello World!',
  no: {title: 'OK'}
});

// Display a warning that can only be discarded by clicking the OK button.
$(document.body).trigger('__mdl__prompt', {
  message: 'Something went wrong!',
  yes: {title: 'OK'}
});

// Prompt to confirm an action while clicking the background mask also means cancel.
$(document.body).trigger('__mdl__prompt', {
  message: 'Are you sure to delete this file?',
  yes: {
    title: 'Confirm',
    action: deleteThisFile
  },
  no: {
    title: 'Cancel'
  }
});
```
