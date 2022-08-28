const Header = () => {
    return (
        <header className='text-white bg-black h-56 p-4'>
            <h1 className="text-center align-bottom text-5xl font-bold">One Stop Solution for your job search</h1>
            <div className="search-bar mt-4">
                <input type="search" className="rounded p-2 m-2 w-2/6 text-black" placeholder="Search Companies & Jobs" />
                <button type="submit" className="bg-indigo-500 p-2 rounded">Search</button>
            </div>
        </header>
    )
}

export default Header;