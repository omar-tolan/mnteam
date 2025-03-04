import React from "react";

function CardOne() {
  return (
    <div className="bg-[#DB2E10] flex flex-col items-center space-y-10 py-[40px] px-[45px] mx-4 rounded-3xl min-w-[90%] md:flex-1 md:min-w-0">
      <div className="flex flex-col items-center w-full">
        <p className="text-bold text-[30px] w-full text-right">
          برنامج تمارين المقاومة
        </p>
        <ul className="flex flex-col space-y-2 mt-4">
          <li className="text-light text-l text-right">
            خطة تمارين تفصيلية تناسب مستواك البدني، سواء كنت مبتدئ، متوسط، أو
            متقدم، لتحقيق أفضل النتائج
          </li>
          <li className="text-light text-l text-right">
            البرنامج يشمل كل تمارين المرونة والاسترتشات • تحسين نطاق الحركة
            وتقليل الإصابات من خلال تمارين إطالة واسترتشات مدمجة في البرنامج.
          </li>
        </ul>
      </div>
      <img className="w-[62%]" src="services/cardOne.svg" alt="exercise" />
    </div>
  );
}

export default CardOne;
