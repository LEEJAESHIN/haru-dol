import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public', 'insta'); // public/insta 디렉토리 경로
  const filenames = fs.readdirSync(imagesDirectory); // 모든 파일 이름 읽기
  
  // 정렬 함수: 파일 이름에서 숫자를 추출하여 정렬
  const sortedFilenames = filenames.sort((a, b) => {
    const extractNumber = (filename) => {
      const match = filename.match(/insta_(\d+)\.jpg/);
      return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER; // 숫자가 없으면 가장 뒤로 정렬
    };
    return extractNumber(a) - extractNumber(b);
  });

  // URL로 변환
  const images = sortedFilenames.map((name) => `/insta/${name}`);
  
  // JSON 형태로 응답
  res.status(200).json(images);
}
