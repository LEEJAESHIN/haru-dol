import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public', 'insta'); // public 폴더 내 images 폴더
  const filenames = fs.readdirSync(imagesDirectory); // images 폴더의 모든 파일 이름을 읽어옴
  const images = filenames.map((name) => `/insta/${name}`); // 파일 이름을 URL로 변환

  res.status(200).json(images); // 배열을 JSON 형태로 응답
}
