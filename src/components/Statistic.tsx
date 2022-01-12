import { type } from "os";
import React, { FC } from "react";

type StatisticProps = {
    done: number
    total: number
}
const Statistic: FC<StatisticProps> = ({ done, total }) => {
    return (

        <h1>Todo ({done}/{total})</h1>

    );
}

export default Statistic
