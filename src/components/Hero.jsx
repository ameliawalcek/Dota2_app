import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const Hero = inject("heroesStore", "itemStore")(observer((props) => {
    let { hero } = props

    const changeDisplay = () => {
        hero.display = !hero.display
    }

    const fetchItems = () => {
        console.log(props.hero.id_hero)
        props.itemStore.fetchItems(props.hero.id_hero)
    }

    const displayHero = () => {
        return (
            <div key={hero.id} onClick={changeDisplay} >
                <img src={hero.img} alt="" />
                <div>{hero.name}</div>
                <div>{hero.winRate}%</div>
            </div>
        )
    }

    const displayMore = () => {
        return (
            <div className='display-more' key={hero.id} onClick={changeDisplay} >
                <div>{hero.name}</div>
                <div>{hero.winRate}% win-rate</div>
                <div>{hero.primary_attr}</div>
                <div>{hero.roles.map(r => <span key={r}>| {r} |</span>)}</div>
                <div>{hero.attack}</div>
                <div>Health: {hero.base.health}</div>
                <div>Mana: {hero.base.mana}</div>
                <div>Int: {hero.base.int}</div>
                <div>Agi: {hero.base.agi}</div>
                <div>Str: {hero.base.str}</div>
                <div>Armor: {hero.base.armor}</div>
                <div>Attack damage: {hero.base.attack.min} - {hero.base.attack.max}</div>
                <div>Range: {hero.base.attack.range}</div>
                <div>Attack Rate: {hero.base.attack.rate}</div>
                <div>Health regen: {hero.base.health_regen}</div>
                <div>Mana regen: {hero.base.mana_regen}</div>
                <div>Movement speed: {hero.base.movement}</div>
                <div>Turn speed: {hero.base.turn}</div>
                <Link to={`/item/hero/${props.hero.id_hero}`}><button onClick={fetchItems}>Item Stats</button></Link>
            </div>
        )
    }

    return (
        <div>
            {hero.display ? displayMore() : displayHero()}
        </div>
    )
}))

export default Hero;