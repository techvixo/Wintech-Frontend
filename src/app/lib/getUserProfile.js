import { BASEURL } from "@/Constant";

export default async function getUserProfile(props) {

    console.log("userId:", props)
    const result = await fetch(
        `${BASEURL}/user/${props}`
        ,{ cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("Ther was an error fetching User profile data")
    }
    return result.json();
}