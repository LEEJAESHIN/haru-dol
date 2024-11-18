
import Intersect from "@/components/cores/intersect"
import Instagram from "@/components/instagram";
import KaKaomap from "@/components/kakaomap";
import Calender from "@/components/calender";
import CommentDialog from "@/components/comment-dialog";
import CommentList from "@/components/comment-list"
import SnowEffect from '@/components/snow-effect';

export default function Home() {
  return (
    <main className="container">
      <SnowEffect />
      <section>
        <div className="font-serif_en text-center text-xl mt-20">1st birthday</div>
        <div className="font-serif text-center text-xl text-blue-500">하루의 첫번째 생일</div>
        <div className='mt-10'>
          <img
            className='w-full h-full pointer-events-none'
            src="/images/2.jpg"
            alt=''
          />
        </div>
        <Intersect>
          <div className="text-center">
            <div className='font-serif mt-4 text-sm text-gy-6 leading-7'>
              2025년 1월 18일 토요일 오후1시
              <br />
              판교 루나드블랑
            </div>
            <div className="font-serif mt-20">초대합니다.</div>
            <div className="font-serif text-xs leading-7 mt-20">
              우리 하루가 벌써 첫 번째 생일을 맞이했습니다.<br />
              부모라는 이름을 선물해 준 하루와<br />
              그동안 사랑을 베풀어 주신 모든 분들께<br />
              감사의 뜻을 전하기 위해 자리를 마련했습니다.<br />
              정성껏 준비했으니 바쁘시더라도 참석해 주시면<br />
              큰 기쁨이 되겠습니다.
            </div>
          </div>
        </Intersect>

        <div className='mt-10'>
          <img
            className='w-full h-full pointer-events-none'
            src="/images/3.jpg"
            alt=''
          />
        </div>
        <div className="flex justify-center font-serif mt-10">
          <span className="mr-1">아빠</span>
          <span className="mr-1">이재은</span>
          <span className="mr-1">|</span>
          <span className="mr-1">엄마</span>
          <span className="mr-1">전하리</span>
        </div>

        <div className="font-serif text-center mt-20">갤러리</div>
        <Intersect className="mt-20">
          <Instagram></Instagram>
        </Intersect>

        <Intersect className="mt-20">
          <KaKaomap />
        </Intersect>

        <Intersect>
          <div className="mt-8 font-serif mx-8">
            <span className="text-sm">경기 성남시 분당구 하오개로351번길 18<br /></span>
            <span className="text-sm">판교 루나드블랑<br /></span>
            <span className="text-xs text-gy-9">031-8016-0361</span>
          </div>
          <div className="flex font-serif mt-8 mx-8">
            <div className="w-14">지하철</div>
            <div className="mr-3">|</div>
            <div className="text-xs">
              [2호선 강남역] 1번 출구 도보 10분<br />
              셔틀버스 강남역 1번 출구 수시 운행
            </div>
          </div>
          <div className="flex font-serif mt-4 mx-8">
            <div className="w-14">버스</div>
            <div className="mr-3">|</div>
            <div className="text-xs">
              [2호선 강남역] 1번 출구 도보 10분<br />
              셔틀버스 강남역 1번 출구 수시 운행
            </div>
          </div>
          <div className="flex font-serif mt-4 mx-8">
            <div className="w-14">주차</div>
            <div className="mr-3">|</div>
            <div className="text-xs">
              건물 내 주차장 600대 가능 (무료주차 1시간 30분)<br />
              주차장 이용이 혼잡하오니 불편하시더라도 대중교통 이용을 권장 드립니다.<br />
              만차 시 제2주차장으로 안내해 드릴 수 있으니 여유롭게 도착하셔서 안내 받으시기를 바랍니다.
            </div>
          </div>
        </Intersect>

        <Intersect className="my-20">
          <CommentList />
        </Intersect>
        <Intersect className="mt-8">
          <Calender />
        </Intersect>
        <div className="w-full h-5 my-20"></div>
      </section>
    </main>
  );
}
