import Image from "next/image";
import img from "@@/about-img/who-we-are.png";

const WhoWeAre = () => {
  return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="left_content_we">
          <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          Who We Are
          </h2>
          <p className="my-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dignissim lectus tortor, magna lobortis. Cursus at condimentum tincidunt parturient gravida suspendisse eu, ac arcu. Nunc molestie risus, quis et dolor placerat lacinia bibendum. Eu proin cursus amet, pharetra sollicitudin iaculis.</p>
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dignissim lectus tortor, magna lobortis. Cursus at condimentum tincidunt parturient gravida suspendisse eu, ac arcu. Nunc molestie risus, quis et dolor placerat lacinia bibendum. Eu proin cursus amet, pharetra sollicitudin iaculis.</p>
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dignissim lectus tortor, magna lobortis. Cursus at condimentum tincidunt parturient gravida suspendisse eu, ac arcu. Nunc molestie risus, quis et dolor placerat lacinia bibendum. Eu proin cursus amet, pharetra sollicitudin iaculis.</p>
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dignissim lectus tortor, magna lobortis. Cursus at condimentum tincidunt parturient gravida suspendisse eu, ac arcu. Nunc molestie risus, quis et dolor placerat lacinia bibendum. Eu proin cursus amet, pharetra sollicitudin iaculis.</p>
          </div>
          <div className="right_img_we">
            <Image
              width={800}
              src={img}
              alt={"Who-we-are-image"}
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
