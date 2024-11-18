import { useTranslations } from 'next-intl';
import React from 'react'
import ServiceBanner from "./ServiceBanner";
import bannerImg from "../../../../../public/assets/banner-img.png"

const ServiceBannerWrapper = () => {
    const t = useTranslations('ServicePage');
  return (
    <ServiceBanner bannerBg={bannerImg} title={t(`title`)} link={"services"}></ServiceBanner>
  )
}

export default ServiceBannerWrapper