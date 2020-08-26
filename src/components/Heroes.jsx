import React from 'react';
import { observer, inject } from 'mobx-react'
import Hero from './Hero'

const Heroes = inject("heroesStore")(observer((props) => {

    return (
        <div>
            {props.heroesStore.data.map(h => {
                return <Hero hero={h} display={false} key={h.id_hero}/>
            })}
        </div>
    )
}))

export default Heroes;