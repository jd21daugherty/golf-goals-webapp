import * as React from 'react';

interface Props {
    hole: number,
    par: number
}

const CurrentHoleHeaderComponent = (props: Props) => (
    <div>
        <div>Hole {props.hole}</div>
        <div>Par {props.par}</div>
    </div>
)

export default CurrentHoleHeaderComponent