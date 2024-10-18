const MapLocation = () => {
  return (
    <div className="py-5 md:my-8">
      <div className="main_container">
      <div className="filter_map rounded-md  w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116860.66382348625!2d90.22930294335936!3d23.7510969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf37cd79fcd5%3A0xea299ee7c4fc595c!2sWintech%20development%202000%20ltd!5e0!3m2!1sen!2sbd!4v1729266766043!5m2!1sen!2sbd"
              width="100%"
              height={350}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default MapLocation;
