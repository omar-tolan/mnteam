import React from "react";
import PlanCard from "./Cards/PlanCard";

function Plans({ handleSub }) {
  return (
    <div className="bg-black flex flex-col space-y-6 mt-4 md:w-full md:flex-1 md:space-x-8 md:items-stretch">
      <p className="text-[35px] text-center mt-4 md:text-[50px]">
        اختار اشتراكك
      </p>
      <div className="flex flex-col space-y-6 px-[30px] pb-[50px] md:w-full md:flex-row md:flex-1 md:space-x-8 md:items-stretch md:justify-center">
        <PlanCard
          duration="٣ شهور"
          price="٣٠٠٠ جنيه"
          services={[
            ".خطة تغذية مصممة لهدفك وإختياراتك",
            ".خطة تدريب مناسب لهدفك ومستواك",
            ".فيديوهات الأداء السليم للتمارين",
            ".متابعة يومية عن طريق الواتساب",
          ]}
          handleSub={handleSub}
        />
        <PlanCard
          duration="٦ أشهر"
          price="٥٥٠٠ جنيه"
          services={[
            ".خطة تغذية مصممة لهدفك وإختياراتك",
            ".خطة تدريب مناسب لهدفك ومستواك",
            ".فيديوهات الأداء السليم للتمارين",
            ".متابعة يومية عن طريق الواتساب",
          ]}
          handleSub={handleSub}
        />
        <PlanCard
          duration="٩ أشهر"
          price="٧٥٠٠ جنيه"
          services={[
            ".خطة تغذية مصممة لهدفك وإختياراتك",
            ".خطة تدريب مناسب لهدفك ومستواك",
            ".فيديوهات الأداء السليم للتمارين",
            ".متابعة يومية عن طريق الواتساب",
          ]}
          handleSub={handleSub}
        />
        <PlanCard
          duration="١٢ شهر"
          price="١٠٠٠٠ جنيه"
          services={[
            ".خطة تغذية مصممة لهدفك وإختياراتك",
            ".خطة تدريب مناسب لهدفك ومستواك",
            ".فيديوهات الأداء السليم للتمارين",
            ".متابعة يومية عن طريق الواتساب",
          ]}
          handleSub={handleSub}
        />
      </div>
    </div>
  );
}

export default Plans;
