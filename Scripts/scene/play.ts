module scene {
    export class PlayScene extends createjs.Container {
        public ground: objects.TestObject;
        public static sprite: createjs.SpriteSheet;
        public  image: createjs.Bitmap;

        constructor() {
            super();
            this.Main();
        }


        

        public Main() {
            console.log("inside play main");
            this.image = new createjs.Bitmap("./Assets/ocean.gif");
            this.addChild(this.image);
            this.y=-960;
            console.log("end play main");
        }

        private _checkBounds(): void {
            if (this.y >= 0) {
                this._reset();
            }
        }

        // reset the objects location to some value
        private _reset(): void {
            this.y = -960;
        }

        // move the object to some new location
        private _move(): void {
            this.y += 5;
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

       
    }




}