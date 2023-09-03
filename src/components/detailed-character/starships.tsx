import { FC } from "react"

type StarshipsProps = {
    name: string
    model: string
    manufacturer: string
}

const Starships:FC<StarshipsProps> = ({name, model, manufacturer}) => {

    return(
        <div className="mt-12 w-10/12 mx-auto text-white">
            <h2 className="text-base font-bold mb-3">Starships</h2>
            <div className="flex justify-between mb-2 text-sm font-light">
                <p>Name</p>
                <p className="font-bold">{name}</p>
            </div>
            <div className="flex justify-between mb-2 text-sm font-light">
                <p>Model</p>
                <p className="font-bold">{model}</p>
            </div>
            <div className="flex justify-between text-sm font-light">
                <p>Manufacturer</p>
                <p className="font-bold">{manufacturer}</p>
            </div>
        </div>
    )
}

export default Starships