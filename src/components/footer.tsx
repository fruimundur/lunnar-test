import { HomeIcon } from "./icons"
import { CharactersIcon } from "./icons"
import { SettingsIcon } from "./icons"

export const Footer = () => {
    return(
        <footer className="h-24 bg-[#1D1B2B] flex justify-around fixed bottom-0 w-full">
            <div className="text-gray-500 text-center flex flex-col justify-center items-center"><HomeIcon/><p className="pt-3">Home</p></div>
            <div className="text-white text-center flex flex-col justify-center items-center"><CharactersIcon/><p className="pt-3 font-light">Characters</p></div>
            <div className="text-gray-500 text-center flex flex-col justify-center items-center"><SettingsIcon/><p className="pt-3">Settings</p></div>
        </footer>
    )
}