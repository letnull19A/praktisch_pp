import { createContext, useState, useContext } from "react"

export const AppContext = createContext({ value: '', setValue: function() {}})

export const FirstComponent = () => {
    const [value, setValue] = useState(0)
    
    return (
        <AppContext.Provider value={{value, setValue}}>
            <input type="text" value={value}/>
            <SecondComponent/>
        </AppContext.Provider>
    )
}
export const SecondComponent = () => {
    return <ThridComponent />
}
export const ThridComponent = () => {

    const { value } = useContext(AppContext)

    return (
        <>
            <p>В третьем компоненте: {value}</p>
            <FourthComponent/>
        </>
    )
}
export const FourthComponent = () => {
    return <FifthComponent/>
}
export const FifthComponent = () => {

    const { value, setValue } = useContext(AppContext)

    return (
        <>
            <button onClick={() => setValue(prev => prev + 1)}>Click me</button>
            <input type="text" value={value} disabled/>
        </>
    )
}