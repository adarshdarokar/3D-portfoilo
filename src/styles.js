const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-10 py-5", // ↓ height kam karne ke liye vertical padding reduce
  padding: "sm:px-14 px-6 sm:py-12 py-8", // ↓ same yaha bhi

  heroHeadText:
    "font-black text-white lg:text-[54px] sm:text-[46px] xs:text-[40px] text-[34px] lg:leading-[78px] mt-2", // ↓ thoda compact line height
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[15px] lg:leading-[34px]",

  sectionHeadText:
    "text-white font-black md:text-[48px] sm:text-[42px] xs:text-[36px] text-[28px]",
  sectionSubText:
    "sm:text-[16px] text-[13px] text-secondary uppercase tracking-wider",

  // 👇 new addition: for form container specifically
  formContainer: "max-w-[480px] mx-auto bg-[#0d0d0d] p-6 sm:p-8 rounded-2xl", // fixed width + compact padding
};

export { styles };
