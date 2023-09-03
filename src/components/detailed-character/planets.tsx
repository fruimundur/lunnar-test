import { FC } from "react"

type PlanetsProps = {
    name: string
    rotation: string
    population: string
}

const Planets:FC<PlanetsProps> = ({name, rotation, population}) => {

    return(
        <div className="mt-12 w-10/12 mx-auto text-white">
            <h2 className="text-base font-bold mb-3">Planets</h2>
            <div className="flex justify-between mb-2 text-sm font-light">
                <p>Home planet</p>
                <p className="font-bold">{name}</p>
            </div>
            <div className="flex justify-between mb-2 text-sm font-light">
                <p>Rotation Period</p>
                <p className="font-bold">{rotation}</p>
            </div>
            <div className="flex justify-between text-sm font-light">
                <p>Population</p>
                <p className="font-bold">{population}</p>
            </div>
        </div>
    )
}

export default Planets