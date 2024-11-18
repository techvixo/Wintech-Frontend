import { BASEURL } from "@/Constant";

export default async function getBlogs() {
    // console.log(props)
    const result = await fetch(`${BASEURL}/user/blogs`,
        {
            next:{
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("Ther was an error fetching Blogs")
    }
    return result.json();
}