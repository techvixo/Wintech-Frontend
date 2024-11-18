import { useTranslations } from 'next-intl';
import bannerImg from "../../../../../public/assets/banner-img.png"
import ShareBanner from '../../../Shared/ShareBanner/ShareBanner';
const BlogBanner = () => {
    const t = useTranslations('Blog');
  return (
    <ShareBanner bannerBg={bannerImg} title={t(`title`)} link={"blog"}></ShareBanner>
  )
}

export default BlogBanner