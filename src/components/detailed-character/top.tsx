import { FC } from "react";
import { CharacterPic } from "../images";

type TopProps = {
    name: string
    gender: string
    birthyear: string
}

const Top:FC<TopProps> = ({name, gender, birthyear}) => {

    return(
        <div className='flex flex-col items-center text-white'>
            <h1 className="text-base mt-4 mb-6 font-bold text-center">
             {name}
            </h1>
            <div><CharacterPic/></div>
            <div className="text-sm capitalize mt-6">{gender} | {birthyear}</div>
        </div>
    )
}

export default Top