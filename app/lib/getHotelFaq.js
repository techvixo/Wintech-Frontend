import { BASEURL } from "@/Constant";

export default async function getHotelFaq(props) {
    const result = await fetch(
        `${BASEURL}/user/faqs/${props}`
        ,{  cache: 'no-store' }
        )
console.log(result.json())
    if (!result.ok) {
        throw new Error("There was an error fetching hotel Faq")
    }
    return result.json();
}