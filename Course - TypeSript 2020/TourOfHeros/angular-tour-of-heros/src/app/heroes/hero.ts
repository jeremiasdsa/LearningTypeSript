export interface Hero {
    id: number;
    name: string;
    strenght: number;
    abilities: string[];


    // public function isStrong(hero: Hero): boolean {
    //     let sName = this.name;
    //     if (this.id < hero.strenght) {
    //         sName = hero.name;
    //     }
    //     console.log("The strongest is: " + sName);
    //     return this.id > hero.strenght;
    // }
}