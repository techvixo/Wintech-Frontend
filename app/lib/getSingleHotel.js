import { BASEURL } from "@/Constant";

export default async function getSingleHotel(props) {
    const result = await fetch(
        `${BASEURL}/user/hotel/rooms/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching Rooms search")
    }
    return result.json();
}