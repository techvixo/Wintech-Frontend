import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WeDo = () => {
  return (
    <div className="my-6 md:my-14 bg">
      <div className="main_container bg-[#E4E5DF] rounded md:rounded-md p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          What We Do?
        </h2>
        <div className="top_content">
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, egestas
            nibh cursus viverra dui. Orci, nulla pulvinar purus nisi. Nulla est
            consequat nibh morbi nisl orci. Semper enim gravida in nisl varius.
            Eget amet egestas ornare morbi viverra volutpat diam quis leo. Ut
            pellentesque pharetra nibh dui tristique tempor. Odio volutpat nulla
            ipsum sollicitudin nunc nec maecenas. Senectus amet, nulla nibh
            lobortis interdum sit. Scelerisque augue non habitant morbi velit
            nibh mus eget consequat. Id tempor elementum tincidunt vulputate
            est. Iaculis est velit, facilisis consequat cras egestas. Pulvinar
            arcu augue aliquam malesuada pharetra fusce pulvinar. At euismod
            aliquet nisl faucibus dui sagittis blandit eget. Risus volutpat
            praesent pretium a.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 pt-2 md:pt-5">
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lacus venenatis pretium fringilla nisi, duis eget. Ac mauris aliquam suscipit massa feugiat quis risus dictum. Ornare tellus sit enim fermentum vitae. Vel pellentesque pellentesque tristique metus. Quam faucibus ut eu et. Et massa faucibus risus imperdiet fermentum enim, proin ultrices sapien.</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lacus venenatis pretium fringilla nisi, duis eget. Ac mauris aliquam suscipit massa feugiat quis risus dictum. Ornare tellus sit enim fermentum vitae. Vel pellentesque pellentesque tristique metus. Quam faucibus ut eu et. Et massa faucibus risus imperdiet fermentum enim, proin ultrices sapien.</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lacus venenatis pretium fringilla nisi, duis eget. Ac mauris aliquam suscipit massa feugiat quis risus dictum. Ornare tellus sit enim fermentum vitae. Vel pellentesque pellentesque tristique metus. Quam faucibus ut eu et. Et massa faucibus risus imperdiet fermentum enim, proin ultrices sapien.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
