'use client'

import { useEffect } from "react";


export default function kakaomap() {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=52ed5edccacb0e0f62b2b96700a4539e&autoload=false`
    document.head.appendChild(kakaoMapScript)

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map')
        var options = {
          center: new window.kakao.maps.LatLng(37.392883654512694, 127.05736485375033),
          level: 3,
        }

        var map = new window.kakao.maps.Map(container, options)

        map.setDraggable(false); // 드래그 비활성화
        map.setZoomable(false); // 확대/축소 비활성화

        var markerPosition = new window.kakao.maps.LatLng(37.392883654512694, 127.05736485375033);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const iwContent = '<div style="padding: 20px; text-align:center; font-size:12px; min-width:220px;">' +
          ' 2025년 1월 11일 토요일 오후 12시<br> 판교 루나드블랑 하루 돌잔치❤</div>',
          iwRemoveable = true

        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable
        })
        infowindow.open(map, marker);

        window.kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(map, marker)
        })
      })
    }

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [])

  return (
    <div>
      <div id="map" className="w-100 h-400" />
    </div>
  )
}