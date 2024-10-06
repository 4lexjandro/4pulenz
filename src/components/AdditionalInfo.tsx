const AdditionalInfo = () => {
  return (
    <div className='h-auto py-5 md:h-dvh px-10 md:px-0 max-w-[800px] mx-auto flex flex-col items-center justify-center'>
      <h1 className='text-lg font-semibold uppercase mb-20'>Core Values and Expertise</h1>
      <div className='flex flex-col gap-5'>
        <div>
          <h1 className='text-lg font-semibold uppercase text-[#D695D8]'>Certified</h1>
          <p className='text-base'>
            FAA Part 107 certified professional. This certification demonstrates compliance with federal regulations,
            ensuring that operations meet the highest standards of safety and legality.
          </p>
        </div>
        <div>
          <h1 className='text-lg font-semibold uppercase text-[#D695D8]'>Expert</h1>
          <p className='text-base'>
            Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality.
            Quality is produced through flight, editing, and capturing the perfect motions at the perfect time.
          </p>
        </div>
        <div>
          <h1 className='text-lg font-semibold uppercase text-[#D695D8]'>Safety</h1>
          <p className='text-base'>
            Safety is always prioritized. With comprehensive aviation insurance coverage, operations are efficient with
            safety measures emphasized to ensure a secure environment.
          </p>
        </div>
        <div>
          <h1 className='text-lg font-semibold uppercase text-[#D695D8]'>Understanding</h1>
          <p className='text-base'>
            Listening to prioritize your needs & desires that you would like to achieve with offered services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
