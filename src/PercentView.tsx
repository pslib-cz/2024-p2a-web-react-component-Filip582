import { FC } from "react";


type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string;
}

const PercentView: FC<PercentViewType> = ({max, value, makeColor}) => {
    return (
        <div >
            <p>{value / max * 100}</p>
            <p>{makeColor(100)}</p>
            <p>{makeColor(value / max * 100)}</p>
        </div>
    )
}

export default PercentView;