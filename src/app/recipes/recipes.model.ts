import { ShoppingListModel } from "../shopping-list/shopping-list.model";

export class RecipeModel {
    public name: string;
    public description: string;
    public image: string;
    public ingredient: ShoppingListModel[];

    constructor(name: string, desc: string, img: string, ing: ShoppingListModel[]) {
        this.name = name;
        this.description = desc;
        this.image = img;
        this.ingredient = ing;
    }
}