import { BASEURL } from "../../Constant";

export default async function getCertificates() {
    const result = await fetch(
        `${BASEURL}/certificate/all`,
    )

    if (!result.ok) {
        throw new Error("There was an error fetching All teams members!")
    }
    return result.json();
}