import { BASEURL } from "@/Constant";

export default async function getHotelAccessibility(props) {
    const result = await fetch(
        `${BASEURL}/user/accessability/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching hotel policy")
    }
    return result.json();
}