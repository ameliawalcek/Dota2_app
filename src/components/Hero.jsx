import React from 'react';
import { observer, inject } from 'mobx-react'

const Hero = inject("heroesStore")(observer((props) => {
    let { hero } = props

    const changeDisplay = () => {
        hero.display = !hero.display
    }

    const displayHero = () => {
        return <div key={hero.id}>
            <img src={hero.img} onClick={changeDisplay} alt="" />
            <div>{hero.name}</div>
            <div>{hero.winRate}%</div>
            {hero.display
                ? <div>
                    <div>{hero.attack}</div>
                    <div>{hero.roles.map(r => <span key={r}>| {r} |</span>)}</div>
                    <div>{hero.primary_attr}</div>
                    <div>{hero.base.health}</div>
                    <div>{hero.base.mana}</div>
                    <div>{hero.base.int}</div>
                    <div>{hero.base.agi}</div>
                    <div>{hero.base.str}</div>
                    <div>{hero.base.armor}</div>
                    <div>{hero.base.attack.min}</div>
                    <div>{hero.base.attack.max}</div>
                    <div>{hero.base.attack.range}</div>
                    <div>{hero.base.attack.rate}</div>
                    <div>{hero.base.health_regen}</div>
                    <div>{hero.base.mana_regen}</div>
                    <div>{hero.base.mr}</div>
                    <div>{hero.base.movement}</div>
                    <div>{hero.base.turn}</div>
                </div>
                : null}
        </div>
    }

    return (
        <div>
            {displayHero()}
        </div>
    )
}))

export default Hero;