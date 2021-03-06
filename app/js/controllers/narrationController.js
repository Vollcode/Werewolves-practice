wwApp.controller('narrationController', function() {
  var self = this;

  self.turns = ['werewolves', 'villager'];

  self.currentTurn = 0;

  self.day = 1;

  self.nextTurn = function() {
    self.day ++;
    if((self.currentTurn) === self.turns.length - 1) {
        self.currentTurn = 0;
    } else {
      self.currentTurn += 1;
    }
  };

  self.narrativeStore = {
    werewolves: 'hello kill things',
    villager: 'kill each other'
  };

  self.getNarrative = function() {
    return self.narrativeStore[self.turns[self.currentTurn]];
  };


});
