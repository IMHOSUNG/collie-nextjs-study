import Link from "next/link";
import { withRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { DataType } from "@/common/type";

interface Props<ProfileType> {
    results?: ProfileType[];
    renderItem(item: ProfileType): JSX.Element
    onChange?: React.ChangeEventHandler
    onSelect?: (item: ProfileType) => void;
    value?: ProfileType
}

type changeHandler = React.ChangeEventHandler<HTMLInputElement>

const SearchBar = ({
    results = [],
    renderItem, value,
    onChange, onSelect, }: Props<DataType>) => {

    const router = useRouter()
    const SearchBarRef = useRef<HTMLDivElement>(null)
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const [showResults, setShowResults] = useState(false)
    const [defaultValue, setDefaultValue] = useState<DataType>({ id: "", name: "", url: "" })

    const handleChange: changeHandler = (e) => {

        setDefaultValue({
            id: "",
            name: e.target.value,
            url: ""
        })
        onChange && onChange(e)
    }

    const handleClickOutside = (event: any) => {
        if (SearchBarRef && !SearchBarRef.current?.contains(event.target)) {
            setShowResults(false)
        }
    }

    const handleSelection = (selectedIndex: number) => {
        const selectedItem = results[selectedIndex]
        if (!selectedItem) return resetSearchComplete()
        onSelect && onSelect(selectedItem)
        resetSearchComplete()
    }

    const resetSearchComplete = useCallback(() => {
        setFocusedIndex(-1)
        setDefaultValue({ id: "", name: "", url: "" })
        setShowResults(false)
    }, [])

    const resultContainer = useRef<HTMLDivElement>(null);
    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        const { key } = e;
        let nextIndexCount = 0;
        switch (key) {
            case "ArrowDown":
                nextIndexCount = (focusedIndex + 1) % results.length
                setFocusedIndex(nextIndexCount)
                break;
            case "ArrowUp":
                nextIndexCount = (focusedIndex + results.length - 1) % results.length
                setFocusedIndex(nextIndexCount)
                break;
            case "Escape":
                resetSearchComplete()
                break;
            case "Enter":
                e.preventDefault();
                handleSelection(focusedIndex)
                break;
        }
    }

    useEffect(() => {
        if (!resultContainer.current) return;

        resultContainer.current.scrollIntoView({
            block: "center",
        })
    }, [focusedIndex])



    useEffect(() => {
        if (results.length > 0 && !showResults) {
            setShowResults(true);
            document.addEventListener("click", handleClickOutside)
        }
        if (results.length <= 0) {
            setShowResults(false)
            document.removeEventListener("click", handleClickOutside)
        }
    }, [results])

    useEffect(() => {
        if (value) {
            setDefaultValue({
                id: value?.id,
                name: value?.name,
                url: value?.url
            })
        }
    }, [value])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        if (value != null) {
            router.push('/tags/' + value?.url)
        }
    }

    return (
        <>
            <form className="flex basis-10/12" onSubmit={(e) => handleSubmit(e)} >
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div tabIndex={1} onKeyDown={handleKeyDown} className="relative w-full m-4">
                    <div ref={SearchBarRef}>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input value={defaultValue?.name} onChange={handleChange} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        {/* <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}

                        {/* Search Result Container */}
                        {showResults && (
                            <div className='absolute w-full'>
                                <div className='relative mt-1 w-full p-2 bg-white max-h-56 overflow-y-auto'>
                                    {results.map((item, index) => {
                                        return (
                                            <div
                                                onClick={() => handleSelection(index)}
                                                key={index}
                                                ref={index === focusedIndex ? resultContainer : null}
                                                style={{
                                                    backgroundColor:
                                                        index === focusedIndex ? "rgba(0,0,0,0.1)" : ""
                                                }}

                                                className="hover:bg-black p-2 hover:bg-opacity-10 z-10">

                                                {renderItem(item)}

                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="relative bg-gray-300 w-full">
                                    <Link href="/post">
                                        <h3 onClick={resetSearchComplete}>Add Post</h3></Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </form>

        </>
    )
}

export default SearchBar