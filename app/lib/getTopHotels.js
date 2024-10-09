import { BASEURL } from "@/Constant";

export default async function getTopHotels() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/user/top-rated/hotels`, {
        next: {
            revalidate: 5,
        }
    }
    )
    if (!result.ok) {
        throw new Error("Ther was an error fetching Top Hotels")
    }
    return result.json();
}