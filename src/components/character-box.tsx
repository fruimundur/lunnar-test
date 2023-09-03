import { FC } from "react";
import { CharacterPic } from "./images";
import { CharacterBoxArrow } from "./icons";

type CharacterBoxProps = {
    name: string
    gender: string
    birthyear: string
}

const CharacterBox:FC<CharacterBoxProps> = ({name, gender, birthyear}) => {

    return(
        <div className="flex bg-[#262638] rounded-lg w-11/12 mx-auto mb-4 shadow-lg">
            <div className="flex items-center w-full">
                <div>
                    <CharacterPic/>
                </div>
                <div className="ml-6 mb-1 w-full">
                    <p className="font-semibold text-base mb-3">{name}</p>
                    <div className="flex justify-between capitalize">
                        <div className="text-sm font-light">{gender} | {birthyear}</div>
                        <div className="mr-4"><CharacterBoxArrow/></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CharacterBox