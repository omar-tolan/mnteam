import React, { useState } from "react";
import VideoModal from "./Modals/VideoModal";
import ReviewCard from "./Cards/ReviewCard";

function Testimonials({ handleVid, isVidShown }) {
  const users = {
    youssef: { name: "يوسف احمد", plan: "دكتور يوسف احمد طالب في طب بشري ١٨ سنه بيتمرن معايا بقاله ٤ سنين", thumbnail: "youssefahmed" },
    mohamed: { name: "محمد هيبة", plan: "محمد هيبا ٢٢ سنه مهندس مدني بيتمرن معايا من ٥ سنين", thumbnail: "mohamedheba" },
    ahmed: { name: "احمد عامر", plan: "ده احمد رضوان  ال cfo للبنك الاهلي بقاله معايا ٤ سنين و خسر حوالي ٣٠ كيلو دهون و اكتسب كتله عضليه محترمه", thumbnail: "ahmedamer" },
    mahmoud: { name: "محمود رانى", plan: "ده محمود راني ١٥ سنه بيتمرن معايا و هو عنده ١٣ سنه عمل تحول رهييب", thumbnail: "mahmoudrany" },
  };
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUser = (user) => {
    setSelectedUser(user);
    handleVid();
  };
  return (
    <div className="flex flex-col justify-center w-full md:mt-2">
      {isVidShown && <VideoModal handleVid={handleVid} user={selectedUser} />}
      <p className="text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10">
        اسمع قصص النجاح
      </p>
      <div className="flex flex-row overflow-y-auto justify-start space-x-6 px-4 md:justify-start md:px-10">
        <ReviewCard
          user={users["youssef"]}
          txt="ده عمر وليد ١٥ سنه بيتمرن معايا بقاله ٣ سنين تحول رهيب"
          handleVid={() => handleUser(users["omar"])}
        />
        <ReviewCard
          user={users["mohamed"]}
          txt="محمد هيبا ٢٢ سنه مهندس مدني بيتمرن معايا من ٥ سنين"
          handleVid={() => handleUser(users["mohamed"])}
        />
        <ReviewCard
          user={users["ahmed"]}
          txt="ده احمد رضوان  ال cfo للبنك الاهلي بقاله معايا ٤ سنين و خسر حوالي ٣٠ كيلو دهون و اكتسب كتله عضليه محترمه"
          handleVid={() => handleUser(users["ahmed"])}
        />
        <ReviewCard
          user={users["mahmoud"]}
          txt="ده محمود راني ١٥ سنه بيتمرن معايا و هو عنده ١٣ سنه عمل تحول رهييب"
          handleVid={() => handleUser(users["mahmoud"])}
        />
      </div>
    </div>
  );
}

export default Testimonials;
