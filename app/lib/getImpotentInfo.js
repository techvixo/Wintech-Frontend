import { BASEURL } from "@/Constant";

export default async function getImpotentInfo(props) {
    const result = await fetch(
        `${BASEURL}/user/information-hotel/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching hotel policy")
    }
    return result.json();
}