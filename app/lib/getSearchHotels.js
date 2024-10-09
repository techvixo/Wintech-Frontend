// import { BASEURL } from "@/Constant";

export default async function getSearchHotels(props) {
    const { checkin, checkout, location, adult, child, total_rooms } = props;
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/user/hotels?searchTerm=${location}&child=${child}&adult=${adult}&total_room=${total_rooms}&check_in_date=${checkin}&check_out_date=${checkout}`
        ,{ cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching hotel search")
    }
    return result.json();
}