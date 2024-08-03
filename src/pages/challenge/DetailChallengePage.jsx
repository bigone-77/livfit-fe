import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { privateApi, publicApi } from "@api/axios";

import DetailSection from "@components/challenge/DetailSection";
import GroupButton from "@components/challenge/GroupButton";

const DetailChallengePage = () => {
  const challengeId = useParams().id;

  const { data } = useQuery({
    queryKey: ["challenge", challengeId],
    queryFn: () =>
      publicApi.get(`/challenge/detail/${challengeId}`).then((res) => res.data),
  });

  // 에러 나면 이제 참가중이므로 따로 표시 필요
  // onSuccess -> 마이페이지 profile/my-challenge 페이지로 이동
  const mutation = useMutation({
    mutationFn: (body) => privateApi.post("/challenge/participate", body),
  });

  return (
    <div className="px-6 py-6 bg-[#F6F6F6] h-full">
      {data && (
        <>
          <DetailSection
            title={data.title}
            desc={data.description}
            difficulty={data.difficulty}
            reward={data.reward}
            start={data.startDate}
            end={data.endDate}
            certificate={data.certificate}
          />
          <GroupButton
            handler={() =>
              mutation.mutate({ challengeId: Number(challengeId) })
            }
          />
        </>
      )}
    </div>
  );
};

export default DetailChallengePage;
