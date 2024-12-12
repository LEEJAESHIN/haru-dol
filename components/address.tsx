"use client";
import { CopyIcon } from '@radix-ui/react-icons';

const addressCopy = () => {
  navigator.clipboard.writeText('경기 성남시 분당구 하오개로351번길 18')
}
export default function address() {
  return (
    <div>
      <div className="mt-8 font-serif mx-8">
        <span className="text-sm">경기 성남시 분당구 하오개로351번길 18<br /></span>
        <span className="flex items-center text-sm">
          <span className="mr-1">판교 루나드블랑</span>
          <span className="cursor-pointer"><CopyIcon onClick={addressCopy} /></span>
        </span>
        <span className="text-xs text-gy-9">031-8016-0361</span>
      </div>
      {/* <div className="flex font-serif mt-8 mx-8">
        <div className="w-16">지하철</div>
        <div className="mr-3">|</div>
        <div className="w-full text-xs">
          [2호선 강남역] 1번 출구 도보 10분<br />
          셔틀버스 강남역 1번 출구 수시 운행
        </div>
      </div> */}
      <div className="flex font-serif mt-4 mx-8">
        <div className="w-16">버스</div>
        <div className="mr-3">|</div>
        <div className="w-full text-xs"> 
          [판교역] 103, 341<br />
          [야탑역] 341<br />
          [신논현역, 강남역] 9004<br />
          [서울역, 명동, 한남오거리] 9003<br />
          [해방촌, 남대문시장] 9007<br />
          <br />
          * 운중동 먹거리촌에서 하차 후 도보 3분 거리.
        </div>
      </div>
      <div className="flex font-serif mt-4 mx-8">
        <div className="w-16">주차</div>
        <div className="mr-3">|</div>
        <div className="w-full text-xs">
          건물 내 주차장 30~40대 가능 합니다.<br />
          {/* 주차장 이용이 혼잡하오니 불편하시더라도 대중교통 이용을 권장 드립니다.<br /> */}
          * 만차 시 가까운 외부주차장으로 안내해 드릴 수 있으니 여유롭게 도착하셔서 안내 받으시기를 바랍니다.
        </div>
      </div>
    </div>
  )
}