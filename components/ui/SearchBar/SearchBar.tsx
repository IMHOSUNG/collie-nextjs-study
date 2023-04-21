import { useCallback, useEffect, useRef, useState } from "react";

interface Props<T> {
    results?: T[];
    renderItem(item:T): JSX.Element
    onChange?: React.ChangeEventHandler
    onSelect?: (item:T) => void;
    value?:string
}

type changeHandler = React.ChangeEventHandler<HTMLInputElement>

const SearchBar = <T extends object>({
    results=[], 
    renderItem, value,
    onChange, onSelect }:Props<T>):JSX.Element => {

    const handleChange: changeHandler = (e) => {
        setDefaultValue(e.target.value)
        onChange && onChange(e)
    }

    const [focusedIndex, setFocusedIndex] = useState(-1)
    const [showResults, setShowResults] = useState(false) 
    const [defaultValue, setDefaultValue] = useState("")

    const handleSelection = (selectedIndex:number) => {
        const selectedItem = results[selectedIndex]
        if(!selectedItem) return resetSearchComplete()
        onSelect && onSelect(selectedItem)
        resetSearchComplete()
    }

    const resetSearchComplete = useCallback(()=>{
        setFocusedIndex(-1)
        setShowResults(false)
    },[])

    const resultContainer = useRef<HTMLDivElement>(null);
    const handleKeyDown:React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        const { key } = e;
        let nextIndexCount = 0;

        if (key === "ArrowDown") {
            nextIndexCount = (focusedIndex+1)%results.length
        }

        if (key === "ArrowUp") {
            nextIndexCount = (focusedIndex+results.length-1)%results.length
        }

        if (key === "Escape") {
            resetSearchComplete()
        }

        if (key === "Enter") {
            e.preventDefault();
            handleSelection(focusedIndex)
        }

        setFocusedIndex(nextIndexCount)
    }

    useEffect(()=>{
        if(!resultContainer.current) return;

        resultContainer.current.scrollIntoView({
            block: "center",
        })
    }, [focusedIndex])

    useEffect(()=>{
        if(results.length > 0 && !showResults) setShowResults(true);

        if(results.length <= 0) setShowResults(false)
    },[results])

    useEffect(()=>{
        if(value) setDefaultValue(value)
    },[value])

    return (
    <>
            <form className="flex basis-10/12">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div tabIndex={1} onBlur={resetSearchComplete} onKeyDown={handleKeyDown} className="relative w-full m-4">
            <div>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input value={defaultValue} onChange={handleChange} data-modal-target="defaultModal" data-modal-toggle="defaultModal" type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            
                {/* Search Result Container */}
               { showResults && (<div className='absolute mt-1 w-full p-2 bg-white max-h-56 overflow-y-auto'>
                    {results.map((item,index)=>{
                        return (
                        <div 
                            onMouseDown={()=>handleSelection(index) }
                            key={index}
                            ref={index === focusedIndex ? resultContainer : null } 
                            style={{
                                backgroundColor:
                                    index === focusedIndex ? "rgba(0,0,0,0.1)" : ""
                            }}
                            className="cursor-pointer p-2 hover:bg-black hover:bg-opacity-10">
                            {renderItem(item)}
                        </div>
                        );
                    })}
                </div>) }
            </div>
            </div>
        </form>
        
      </>
    )
}

export default SearchBar