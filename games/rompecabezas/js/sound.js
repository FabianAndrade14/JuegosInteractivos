;(function(document, window, undefined) {
var currentAudio = 0,
    support    = window.Audio && (new Audio).canPlayType,
    TOTAL      = 0;

// Sound manager
// create n audio objects
function Sound(file, n) {
    if (!support) { return; }
    var i;
    
    this.file = file;
    TOTAL = n;
    
    this.audio = [];
    
    for (i = 0; i < n; i++) {
        this.audio[i] = new Audio();
    }

    var load = function(){ 
        document.removeEventListener('touchstart', load);
        document.removeEventListener('mousedown', load);
        this.load();
    }.bind(this);

    document.addEventListener('touchstart', load);
    document.addEventListener('mousedown', load);
}

Sound.prototype.load = function() {
    if (!support) { return; }
    if (this._loaded) return;

    this._loaded = true;
    var ext = this.audio[0].canPlayType("audio/mp3") ? ".mp3" : ".wav";

    for (var i = 0; i < TOTAL; i++) {
        this.audio[i].src = this.file + ext;
        this.audio[i].volume = 0;
        this.audio[i].load();
    }
}

// iterate over the available audio objects
Sound.prototype.play = function() {
    if (!support) { return; }
    this.audio[currentAudio].volume = 1;
    this.audio[currentAudio].play();
    currentAudio = (currentAudio+1)%TOTAL;
}

window.game = window.game || {};
game.Sound = Sound;
}(document, window));
