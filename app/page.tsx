
import Intersect from "@/components/cores/intersect"
import Instagram from "@/components/instagram";
import KaKaomap from "@/components/kakaomap";
import Calender from "@/components/calender";
import CommentDialog from "@/components/comment-dialog";
import CommentList from "@/components/comment-list"
import SnowEffect from '@/components/snow-effect';
import Address from "@/components/address";
import Footer from "@/components/footer";
import BankAdd from "@/components/bankadd";

export default function Home() {
  return (
    <main className="container">
      {/* <SnowEffect /> */}
      <section>
        <div className="font-serif_en text-center text-xl mt-20">1st birthday</div>
        <div className="font-serif text-center text-xl text-blue-500">하루의 첫번째 생일</div>
        <div className='mt-10'>
          <img
            className='w-full h-full pointer-events-none'
            src="/images/1.jpg"
            alt=''
          />
        </div>
        <Intersect>
          <div className="text-center">
            <div className='font-serif mt-4 text-sm text-gy-6 leading-7'>
              2025년 1월 11일 토요일 오후1시
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
            src="/images/2.jpg"
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

        <div className="font-serif text-center mt-20">오시는 길</div>
        <Intersect className="mt-20">
          <KaKaomap />
        </Intersect>



        <Intersect>
          <Address />
        </Intersect>

        <div className="font-serif text-center mt-20">방명록</div>
        <Intersect className="my-20">
          <CommentList />
        </Intersect>

        <div className="font-serif text-center mt-20">마음 전하실 곳</div>
        <Intersect className="mt-8">
          <BankAdd />
        </Intersect>

        <Intersect className="mt-8">
          <div className="text-center mb-4">
            <div className="font-serif text-xs leading-7 mt-20">
              <span>
                많은 관심과 사랑을 가져주신 덕분에<br />
                건강하게 자라고 있습니다.<br />
                생일 축하해 주신 모든 여러분께<br />
                감사의 말씀을 전합니다.
              </span>
            </div>
          </div>
          <Calender />
        </Intersect>

        <div className="w-full h-1 mt-12"></div>
        <Footer />
        <div className="w-full h-1 my-1"></div>
      </section>
    </main>
  );
}
