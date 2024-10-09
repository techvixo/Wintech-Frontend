import { BASEURL } from "@/Constant";

export default async function getExclusiveDeals() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/user/exclusive-deals`,
        {
            cache: "no-store"
            // next: {
            //     revalidate: 5,
            // }
        }
    )

    if (!result.ok) {
        throw new Error("Ther was an error fetching Exclusive Deals")
    }
    return result.json();
}