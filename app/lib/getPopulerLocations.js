import { BASEURL } from "@/Constant";

export default async function getPopulerLocations() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/user/popular-locations`
        , {
            next: {
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("Ther was an error fetching Populer locations")
    }
    return result.json();
}