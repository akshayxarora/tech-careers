import Joblisting from "./Joblisting";


const Jobs = () => {
    return (
        <div className='job-listing grid justify-items-center grid-cols-1 md:grid-cols-3 xl:grid-cols-3 pt-8' >
            <Joblisting />
            <Joblisting />
            <Joblisting />
            <Joblisting />
            <Joblisting />
        </div>
    )
}

export default Jobs;