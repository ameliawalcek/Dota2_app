import { action, observable } from 'mobx'
import "mobx-react-lite/batchingForReactDom"

export class HeroesStore {

    @observable data = []

    @action async fetchHeroes() {
        let tempHeroes = []
        const response = await fetch(`https://api.opendota.com/api/heroStats`)
        const data = await response.json()
        data.map(d => {
            let primary = d.primary_attr === 'int' ? 'Intelligence' :
                d.primary_attr === 'agi' ? 'Agility' : 'Strength'

            tempHeroes.push(
                {
                    id_hero: d.hero_id,
                    name: d.localized_name,
                    img: `http://cdn.dota2.com${d.img}`,
                    winRate: (d.pro_win / d.pro_pick * 100).toFixed(2),
                    attack: d.attack_type,
                    roles: d.roles,
                    primary_attr: primary,
                    base: {
                        health: d.base_health,
                        mana: d.base_mana,
                        int: d.base_int,
                        agi: d.base_agi,
                        str: d.base_str,
                        armor: d.base_armor,
                        attack: {
                            min: d.base_attack_min,
                            max: d.base_attack_max,
                            range: d.attack_range,
                            rate: d.attack_rate,
                        },
                        health_regen: d.base_health_regen,
                        mana_regen: d.base_mana_regen,
                        movement: d.move_speed,
                        turn: d.turn_rate
                    }
                }
            )
        })
        this.data = tempHeroes.sort(this.compare)
    }

    @action compare(hero1, hero2) {
        return hero1.winRate > hero2.winRate ? -1 : 1
    }
}