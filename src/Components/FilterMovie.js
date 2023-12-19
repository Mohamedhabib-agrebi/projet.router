import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const FilterMovie=({setSearch,setEtoil,search,etoil})=>{
    const handleReset=()=>{
        setSearch('')
        setEtoil(0)
    }
    return(
        <div>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating value={etoil} onChange={(e)=>setEtoil(e.target.value)}/>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovie