import { BASEURL } from "@/Constant";

export default async function getSingleHotelRooms(props) {
    // console.log("hotelId:", props)
    // ?child=${child}&adult=${adult}&total_room=${total_rooms}&check_in_date=${checkin}&check_out_date=${checkout}
    const result = await fetch(
        `${BASEURL}/user/room/${props}`
        ,{ cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching hotel room data")
    }
    return result.json();
}