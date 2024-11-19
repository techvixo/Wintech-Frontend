import BlogShow from "../../components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import BlogBanner from "../../components/Pages/Blog/BlogBanner/BlogBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllBlogs from "../../lib/getAllBlogs"
import { getLocale } from "next-intl/server";

export default async function Page() {
  const blogsData = await getAllBlogs()
  const locale = await getLocale();
  // console.log("blogsData:", blogsData.data)
  return (
    <div className="">
      <TopGap></TopGap>
     <BlogBanner></BlogBanner>
      <BlogShow blogs={blogsData.data} locale={locale}></BlogShow>
      <Subscribe></Subscribe>
      <GetInTouch></GetInTouch>
    </div>
  );
}
