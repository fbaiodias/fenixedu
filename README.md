fenixedu
========

The FenixEdu API Node.js Module Wrapper (http://fenixedu.org/dev/api/)

# Installation
1. `$ npm install fenixedu`

# Usage
```javascript
  var fenix = require('fenixedu');
  
  fenix.canteen.getMenu(function(err, menu) {
    console.log(menu);
  });
  
  fenix.courses.getCourseSchedule("1610612926005", function(err, schedule) {
    console.log(schedule);
  });
```
