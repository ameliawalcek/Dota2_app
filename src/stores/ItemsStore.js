import { action, observable } from 'mobx'
import { itemInfo } from '../data/itemInfo'

export class ItemStore {
    @observable items = []
    @observable itemDetails = []

    @action async fetchItems(id_hero) {
        let response = await fetch(`https://api.opendota.com/api/heroes/${id_hero}/itemPopularity`)
        response = await response.json()
        this.completeItems(response)
    }

    @action async fetchItemDetails() {
        let response = await fetch(`http://www.dota2.com/jsfeed/itemdata?l=english`)
        response = await response.json()
        // console.log(response.itemdata)
        // this.itemDetails = this.itemDetails.push(response.itemdata)
        // for(let [key,value] of Object.entries(response.itemdata)){
        //     console.log(`${key}: ${value}`)
        // }
       this.itemDetails.push(Object.entries(response.itemdata))
       this.itemDetails = this.itemDetails[0] 
    }

    @action completeItems(items) {
        for (let key in items) {
            this.items[key] = {};
            for (let id in items[key]) {
                this.items[key][id] = { amount: items[key][id] };
            }
        }
        for (let id_key in itemInfo) {
            for (let key in items) {
                let _item;
                if (_item = this.items[key][id_key]) {
                    const { id, name, localized_name } = itemInfo[id_key];
                    _item.id = id
                    _item.name = localized_name
                    _item.img = `http://cdn.dota2.com/apps/dota2/images/items/${name}_lg.png`
                }
            }
        }
        console.log(this.items);
    }
}
