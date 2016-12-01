declare module KaleLand {
    export var a: number;
    export var topkek: true;

    export class Shoutings {
        constructor(param: string[], paramTwo: number[]);
    }
}

declare module "test-tsd" {
    export = KaleLand;
}
