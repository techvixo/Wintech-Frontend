
import img1 from "../../../../../public/assets/services/machine/1.png";
import img2 from "../../../../../public/assets/services/machine/2.png";
import img3 from "../../../../../public/assets/services/machine/1.png";
import img4 from "../../../../../public/assets/services/machine/2.png";
import MachineCenterSlider from "./MachineCenterSlider";
import { useTranslations } from "next-intl";


const MachinesCenter = () => {
  const t = useTranslations('ServicePage');
  const images = [img1, img2, img3];

  return (
    <MachineCenterSlider
      images={images}
      title={t(`MachineCenter.title`)}
      shortTitle={t(`MachineCenter.shortTitle`)}
    ></MachineCenterSlider>
  );
};


export default MachinesCenter;
