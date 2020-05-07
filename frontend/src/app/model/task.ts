export class Task {

    constructor(_id= "", name="", description="", finish = "") {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.finish = finish;
        this.update = new Date();
    }

    _id: string;
    name:string;
    description: string;
    finish: string;
    update:Date;
}
