function mc(_json,_stage)
{
  this.movie = [];
  PIXI.loader
    .add('assets/anim.json')
    .load(onAssetsLoaded);
  this.load = function load()
  {
   
  };
  function onAssetsLoaded()
  {
     var frames = [];

    for (var i = 1; i < 11; i++) {
        var val = i < 10 ? '' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame( val + '.png'));
    }


    // create a MovieClip (brings back memories from the days of Flash, right ?)
   this.movie = new PIXI.extras.MovieClip(frames);

    /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    this.movie.position.set(0);

   this.movie.anchor.set(0.5);
    this.movie.animationSpeed = 0.5;

   this.movie.play();
    stage.addChild(this.movie);
    console.log("sjosf0");
  }
   this.addToStage = function addToStage()
    {
         console.log("joshua");
    };
  return this;
}