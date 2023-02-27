import { complex } from "../interfaces/Itable"
const searchTerm = (data: complex[], search: string | null) => {

    if (search) {
        const filteredSearch = data.filter((item: any) => Object.values(item).toString().toLowerCase().trim().includes(search.toLowerCase().trim()))
        return filteredSearch

    } else {
        return data
    }


}
export default searchTerm;