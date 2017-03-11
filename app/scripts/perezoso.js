var PEREZOSO = (function() {
  var tasksTimed = [],
      tasksInfinite = [],
      isRunning = false,
      intervalID = null;

  return {

    add: function(w, f, p) {
      this.addTimed(w, f, p);
    },
    addTimed: function(w, f, p) {
      var d = new Date();
      var t = d.getTime();
      var myW = t + w;
      tasksTimed.push({start: t, when: myW, func: f, param: p });
      //console.log("added: " + w + " f: " + f + " myID: " + o);
      this._init();
    },
    addInfinite: function(w, f, p) {
      var d = new Date();
      var t = d.getTime();
      var myW = t + w;
      tasksInfinite.push({interval: w, when: myW, func: f, param: p });
      //console.log("added Infinite: " + w + " f: " + f);
      this._init();
    },
    _update: function() {
      PEREZOSO._findTime();  
      PEREZOSO._cleanList();
    },
    _init: function(){
      if(intervalID === null) {
        intervalID = window.setInterval(this._update, 10);
        isRunning = true;
      }
    },
    _findTime: function() 
    {
      if(tasksTimed.length) 
      {
        for(var q = 0; q < tasksTimed.length; q++) 
        {
          var d = new Date();
          var myT = d.getTime();
          var myW = tasksTimed[q].when;
          
          if((myW-myT) < 0) 
          {
            if(typeof tasksTimed[q].func === 'function') {
              tasksTimed[q].func(tasksTimed[q].param);
              tasksTimed[q] = null;
            }
          }
        } 
      }
      if(tasksInfinite.length) 
      {
        for(var q = 0; q < tasksInfinite.length; q++) 
        {
          var d = new Date();
          var myT = d.getTime();
          var myW = tasksInfinite[q].when;
          
          if((myW-myT) < 0) 
          {
            tasksInfinite[q].func(tasksInfinite[q].param);
            var newT = myT + tasksInfinite[q].interval;
            //console.log(newT);
            tasksInfinite[q].when = d.getTime() + tasksInfinite[q].interval;
          }
        } 
      }
    },
    _cleanList: function() {
      var newArray = [];
       for(var q = 0; q < tasksTimed.length; q++) {
          if(tasksTimed[q] != null) { newArray.push(tasksTimed[q]); }
       }
       tasksTimed = newArray;
       if(newArray.length == 0 && tasksInfinite.length == 0) {
          clearInterval(intervalID);
          intervalID = null;
       }
    }
  }
}(PEREZOSO || {}));