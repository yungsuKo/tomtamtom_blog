import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-32 border-t-2">
      <p>
        콘텐츠 혹은 기능이 마음에 드셨나요? <br />
      </p>
      <Button variant="outline" className="mt-4">
        <Link href="mailto:yungsu2391@gmail.com"> 이메일로 연락하기</Link>
      </Button>
    </div>
  );
}
