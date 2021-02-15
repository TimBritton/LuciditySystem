export default class FSItemSheet extends ItemSheet{
    get template(){
        return `systems/LuciditySystem/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}
