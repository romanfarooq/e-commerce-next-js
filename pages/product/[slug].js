import { useRouter } from 'next/router';

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
      <div>Slug: {slug}</div>
  );
}
