export class Recipe {

  public name : string;
  public description : string;
  public location : string;
  constructor(name : string , desc : string, location : string) {
    this.name = name;
    this.description = desc;
    this.location = location;
  }
}
